import { applyMiddleware, createStore, combineReducers } from 'redux'
import { createRouter } from '../src'

export default async (...allArgs) => {
  const args = allArgs.filter(arg => typeof arg !== 'function')
  const callbacks = allArgs.filter(arg => typeof arg === 'function')
  const hasCallbacks = callbacks.length > 0

  const [testName, routesMap] = args
  let [,, options = {}, actions] = args

  if (Array.isArray(options)) {
    actions = options
    options = {}
  }

  if (!actions) {
    actions = Object.keys(routesMap).filter(type => !/FIRST|REDIRECTED/.test(type))
  }

  const initialPath = typeof actions[0] === 'string' && actions[0].charAt(0) === '/'
    ? actions.shift()
    : '/first'

  const hasMultipleTests = actions.length > 1
  let num = 1

  if (hasMultipleTests) {
    describe(testName, () => {
      for (const action of actions) {
        const name = JSON.stringify(action)
        createTest(name, routesMap, initialPath, action, options, num++)
      }

      if (hasCallbacks) {
        callbacks.forEach((cb, index) => {
          const name = callbacks.length === 1 ? 'snipes' : 'snipes ' + (++index)
          createSnipes(name, routesMap, initialPath, options, cb)
        })
      }
    })
  }
  else {
    const isSnipesOnly = initialPath === '/first' && actions.length === 0

    if (hasCallbacks && isSnipesOnly) {
      callbacks.forEach((cb, index) => {
        const name = callbacks.length === 1 ? testName : 'snipes ' + (++index)
        createSnipes(name, routesMap, initialPath, options, cb)
      })
    }
    else if (hasCallbacks) {
      describe(testName, () => {
        const name = actions[0] ? JSON.stringify(actions[0]) : 'firstRoute - ' + initialPath

        createTest(name, routesMap, initialPath, actions[0], options, num)

        callbacks.forEach((cb, index) => {
          const name = callbacks.length === 1 ? 'snipes' : 'snipes ' + (++index)
          createSnipes(name, routesMap, initialPath, options, cb)
        })
      })
    }
    else {
      createTest(testName, routesMap, initialPath, actions[0], options, num)
    }
  }
}

const createTest = (testName, routesMap, initialPath, item, opts, num) => {
  test(testName, async () => {
    const {
      store,
      history,
      routes,
      options,
      firstRoute,
      initialState
    } = setupStore(routesMap, initialPath, opts)

    const firstAction = firstRoute()
    const res = await store.dispatch(firstAction)

    if (routesMap.FIRST || initialPath !== '/first') {
      const prefix = 'firstRoute - ' + initialPath + ' - ' + num
      snapChange(prefix, res, store, history, initialState)
    }

    if (typeof item === 'string' && item.charAt(0) === '/') {
      const url = item
      const res = await history.push(url)

      snapChange(num, res, store, history)
    }
    else if (item) {
      const action = typeof item === 'object' ? item : { type: item }
      const res = await store.dispatch(action)

      snapChange(num, res, store, history)
    }

    snapRoutes(num, routes)
    snapOptions(num, options)
  })
}

const createSnipes = (testName, routesMap, initialPath, opts, callback) => {
  test(testName, async () => {
    const {
      store,
      history,
      routes,
      options,
      firstRoute
    } = setupStore(routesMap, initialPath, opts)

    await store.dispatch(firstRoute())

    await callback({
      history,
      routes,
      options,
      dispatch: store.dispatch,
      getState: store.getState,
      location: () => store.getState().location,
      snap: async (action, prefix = '') => {
        const res = typeof action === 'function'
          ? await action() // used if user wants to do custom things like: `await history.replace()`
          : await store.dispatch(action)

        prefix = prefix || JSON.stringify(action) || 'function'

        snapChange(prefix, res, store, history)
        snapRoutes(prefix, routes)
        snapOptions(prefix, options)
        return res
      }
    })
  })
}

const setupStore = (routesMap, initialPath, opts) => {
  const routes = createRoutes(routesMap)
  const options = createOptions(opts)

  options.initialEntries = [initialPath]
  options.extra = { arg: 'extra-arg' }

  const title = (state, action = {}) => {
    return action.payload
      ? action.type + '_' + JSON.stringify(action.payload)
      : action.type
  }

  const { middleware, reducer, firstRoute, rudy } = createRouter(
    routes,
    options
  )

  const rootReducer = combineReducers({ title, location: reducer })
  const enhancer = applyMiddleware(middleware)
  const store = createStore(rootReducer, enhancer)

  const initialState = store.getState()

  return {
    store,
    firstRoute,
    initialState,
    routes,
    options,
    history: rudy.history
  }
}

const callbacks = [
  'beforeLeave',
  'beforeEnter',
  'onLeave',
  'onLeave',
  'onEnter',
  'thunk',
  'onComplete',
  'onError'
]

const createRoutes = (routesMap) => {
  const routes = {}

  for (const type in routesMap) {
    routes[type] = { ...routesMap[type] }
    const route = routes[type]

    for (const cb of callbacks) {
      if (route[cb]) {
        route[cb] = jest.fn(route[cb])
      }
    }
  }

  return {
    FIRST: '/first',
    NEVER_USED_PATHLESS: { // insures pathless routes can co-exist with regular routes
      thunk: jest.fn()
    },
    REDIRECTED: {
      path: '/redirected',
      onComplete: jest.fn(() => 'redirect_complete')
    },
    ...routes
  }
}

const createOptions = (opts) => {
  const options = { ...opts }

  for (const cb of callbacks) {
    if (opts[cb]) {
      options[cb] = jest.fn(opts[cb])
    }
  }

  return options
}

const snapRoutes = (prefix, routes) => {
  for (const type in routes) {
    const route = routes[type]
    snapCallbacks(prefix + ' - routes - ' + type, route)
  }
}

const snapOptions = (prefix, options) => {
  snapCallbacks(prefix + ' - options', options)
}

const snapCallbacks = (prefix, obj) => {
  if (obj.beforeLeave) {
    expect(obj.beforeLeave.mock.calls.length).toMatchSnapshot(prefix + ' - beforeLeave')
  }

  if (obj.beforeEnter && obj.beforeEnter.mock) { // allow redirect shortcut route options to work
    expect(obj.beforeEnter.mock.calls.length).toMatchSnapshot(prefix + ' - beforeEnter')
  }

  if (obj.onLeave) {
    expect(obj.onLeave.mock.calls.length).toMatchSnapshot(prefix + ' - onLeave')
  }

  if (obj.onEnter) {
    expect(obj.onEnter.mock.calls.length).toMatchSnapshot(prefix + ' - onEnter')
  }

  if (obj.thunk) {
    expect(obj.thunk.mock.calls.length).toMatchSnapshot(prefix + ' - thunk')
  }

  if (obj.onComplete) {
    expect(obj.onComplete.mock.calls.length).toMatchSnapshot(prefix + ' - onComplete')
  }

  if (obj.onError) {
    expect(obj.onError.mock.calls.length).toMatchSnapshot(prefix + ' - onError')
  }
}

const snapChange = (prefix, res, store, history, initialState) => {
  if (initialState) expectInitialState(initialState, prefix)

  expectResponse(res, prefix)
  expectState(store, prefix)
  expectEntries(history, prefix)
  expectIndex(history, prefix)
  expectTitle(prefix)
}

const expectInitialState = (initialState, prefix) => {
  expect(initialState).toMatchSnapshot(prefix + ' - initial_state')
}

const expectResponse = (res, prefix) => {
  expect(res).toMatchSnapshot(prefix + ' - response')
}

const expectState = (store, prefix) => {
  expect(store.getState()).toMatchSnapshot(prefix + ' - state')
}

const expectEntries = (history, prefix) => {
  expect(history.entries).toMatchSnapshot(prefix + ' - history_entries')
}

const expectIndex = (history, prefix) => {
  expect(history.index).toMatchSnapshot(prefix + ' - history_index')
}

const expectTitle = (prefix) => {
  expect(document.title).toMatchSnapshot(prefix + ' - title')
}