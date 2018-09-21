;(function webpackUniversalModuleDefinition(root, factory) {
  if (typeof exports === 'object' && typeof module === 'object')
    module.exports = factory()
  else if (typeof define === 'function' && define.amd) define([], factory)
  else if (typeof exports === 'object') exports['ReduxFirstRouter'] = factory()
  else root['ReduxFirstRouter'] = factory()
})(this, function() {
  return /******/ (function(modules) {
    // webpackBootstrap
    /******/ // The module cache
    /******/ var installedModules = {} // The require function
    /******/
    /******/ /******/ function __webpack_require__(moduleId) {
      /******/
      /******/ // Check if module is in cache
      /******/ if (installedModules[moduleId]) {
        /******/ return installedModules[moduleId].exports
        /******/
      } // Create a new module (and put it into the cache)
      /******/ /******/ var module = (installedModules[moduleId] = {
        /******/ i: moduleId,
        /******/ l: false,
        /******/ exports: {}
        /******/
      }) // Execute the module function
      /******/
      /******/ /******/ modules[moduleId].call(
        module.exports,
        module,
        module.exports,
        __webpack_require__
      ) // Flag the module as loaded
      /******/
      /******/ /******/ module.l = true // Return the exports of the module
      /******/
      /******/ /******/ return module.exports
      /******/
    } // expose the modules object (__webpack_modules__)
    /******/
    /******/
    /******/ /******/ __webpack_require__.m = modules // expose the module cache
    /******/
    /******/ /******/ __webpack_require__.c = installedModules // identity function for calling harmony imports with the correct context
    /******/
    /******/ /******/ __webpack_require__.i = function(value) {
      return value
    } // define getter function for harmony exports
    /******/
    /******/ /******/ __webpack_require__.d = function(exports, name, getter) {
      /******/ if (!__webpack_require__.o(exports, name)) {
        /******/ Object.defineProperty(exports, name, {
          /******/ configurable: false,
          /******/ enumerable: true,
          /******/ get: getter
          /******/
        })
        /******/
      }
      /******/
    } // getDefaultExport function for compatibility with non-harmony modules
    /******/
    /******/ /******/ __webpack_require__.n = function(module) {
      /******/ var getter = module && module.__esModule
        ? /******/ function getDefault() {
            return module['default']
          }
        : /******/ function getModuleExports() {
            return module
          }
      /******/ __webpack_require__.d(getter, 'a', getter)
      /******/ return getter
      /******/
    } // Object.prototype.hasOwnProperty.call
    /******/
    /******/ /******/ __webpack_require__.o = function(object, property) {
      return Object.prototype.hasOwnProperty.call(object, property)
    } // __webpack_public_path__
    /******/
    /******/ /******/ __webpack_require__.p = '' // Load entry module and return exports
    /******/
    /******/ /******/ return __webpack_require__((__webpack_require__.s = 0))
    /******/
  })(
    /************************************************************************/
    /******/ [
      /* 0 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        var _connectRoutes = __webpack_require__(3)

        Object.defineProperty(exports, 'connectRoutes', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_connectRoutes).default
          }
        })
        Object.defineProperty(exports, 'push', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.push
          }
        })
        Object.defineProperty(exports, 'replace', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.replace
          }
        })
        Object.defineProperty(exports, 'back', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.back
          }
        })
        Object.defineProperty(exports, 'next', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.next
          }
        })
        Object.defineProperty(exports, 'go', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.go
          }
        })
        Object.defineProperty(exports, 'canGo', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.canGo
          }
        })
        Object.defineProperty(exports, 'canGoBack', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.canGoBack
          }
        })
        Object.defineProperty(exports, 'canGoForward', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.canGoForward
          }
        })
        Object.defineProperty(exports, 'prevPath', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.prevPath
          }
        })
        Object.defineProperty(exports, 'nextPath', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.nextPath
          }
        })
        Object.defineProperty(exports, 'history', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.history
          }
        })
        Object.defineProperty(exports, 'scrollBehavior', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.scrollBehavior
          }
        })
        Object.defineProperty(exports, 'updateScroll', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.updateScroll
          }
        })
        Object.defineProperty(exports, 'selectLocationState', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.selectLocationState
          }
        })
        Object.defineProperty(exports, 'getOptions', {
          enumerable: true,
          get: function get() {
            return _connectRoutes.getOptions
          }
        })

        var _redirect = __webpack_require__(9)

        Object.defineProperty(exports, 'redirect', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_redirect).default
          }
        })

        var _actionToPath = __webpack_require__(4)

        Object.defineProperty(exports, 'actionToPath', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_actionToPath).default
          }
        })

        var _pathToAction = __webpack_require__(2)

        Object.defineProperty(exports, 'pathToAction', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_pathToAction).default
          }
        })

        var _isLocationAction = __webpack_require__(5)

        Object.defineProperty(exports, 'isLocationAction', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_isLocationAction).default
          }
        })

        var _setKind = __webpack_require__(6)

        Object.defineProperty(exports, 'setKind', {
          enumerable: true,
          get: function get() {
            return _interopRequireDefault(_setKind).default
          }
        })

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        var NOT_FOUND = (exports.NOT_FOUND = '@@redux-first-router/NOT_FOUND')

        /***/
      },
      /* 1 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i]
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key]
                }
              }
            }
            return target
          }

        exports.default = function(pathname, action, prev, history, kind) {
          var type = action.type,
            _action$payload = action.payload,
            payload = _action$payload === undefined ? {} : _action$payload,
            _action$meta = action.meta,
            meta = _action$meta === undefined ? {} : _action$meta

          var query = action.query || meta.query || payload.query
          var parts = pathname.split('?')
          var search = parts[1]

          return _extends({}, action, action.query && { query: query }, {
            type: type,
            payload: payload,
            meta: _extends({}, meta, meta.query && { query: query }, {
              location: {
                current: _extends(
                  {
                    pathname: parts[0],
                    type: type,
                    payload: payload
                  },
                  query && { query: query, search: search }
                ),
                prev: prev,
                kind: kind,
                history: undefined
              }
            })
          })
        }

        var nestHistory = (exports.nestHistory = function nestHistory(history) {
          return history.entries
            ? {
                index: history.index,
                length: history.entries.length,
                entries: history.entries.slice(0) // history.entries.map(entry => entry.pathname)
              }
            : undefined
        })

        /***/
      },
      /* 2 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i]
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key]
                }
              }
            }
            return target
          }

        var _typeof = typeof Symbol === 'function' &&
          typeof Symbol.iterator === 'symbol'
          ? function(obj) {
              return typeof obj
            }
          : function(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }

        var _pathToRegexp = __webpack_require__(8)

        var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp)

        var _index = __webpack_require__(0)

        var _objectValues = __webpack_require__(17)

        var _objectValues2 = _interopRequireDefault(_objectValues)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        exports.default = function(pathname, routesMap, serializer) {
          var parts = pathname.split('?')
          var search = parts[1]
          var query = search && serializer && serializer.parse(search)
          var routes = (0, _objectValues2.default)(routesMap)
          var routeTypes = Object.keys(routesMap)

          pathname = parts[0]

          var i = 0
          var match = void 0
          var keys = []

          while (!match && i < routes.length) {
            keys.length = 0 // empty the array and start over
            var routePath = routes[i].path || routes[i] // route may be an object containing a route or a route string itself
            var reg = (0, _pathToRegexp2.default)(routePath, keys)
            match = reg.exec(pathname)
            i++
          }

          if (match) {
            i--

            var capitalizedWords =
              _typeof(routes[i]) === 'object' && routes[i].capitalizedWords
            var fromPath =
              routes[i] &&
              typeof routes[i].fromPath === 'function' &&
              routes[i].fromPath
            var type = routeTypes[i]

            var payload = keys.reduce(function(payload, key, index) {
              var value = match && match[index + 1] // item at index 0 is the overall match, whereas those after correspond to the key's index

              value = typeof value === 'string' &&
                !value.match(/^\s*$/) &&
                !isNaN(value) // check that value is not a blank string, and is numeric
                ? parseFloat(value) // make sure pure numbers aren't passed to reducers as strings
                : value

              value = capitalizedWords && typeof value === 'string'
                ? value.replace(/-/g, ' ').replace(/\b\w/g, function(l) {
                    return l.toUpperCase()
                  }) // 'my-category' -> 'My Category'
                : value

              value = fromPath && typeof value === 'string'
                ? fromPath(value, key.name)
                : value

              payload[key.name] = value

              return payload
            }, {})

            return {
              type: type,
              payload: payload,
              meta: query ? { query: query } : {}
            }
          }

          // This will basically will only end up being called if the developer is manually calling history.push().
          // Or, if visitors visit an invalid URL, the developer can use the NOT_FOUND type to show a not-found page to
          var meta = _extends(
            { notFoundPath: pathname },
            query ? { query: query } : {}
          )
          return { type: _index.NOT_FOUND, payload: {}, meta: meta }
        }

        /***/
      },
      /* 3 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.getOptions = exports.selectLocationState = exports.updateScroll = exports.scrollBehavior = exports.history = exports.nextPath = exports.prevPath = exports.canGoForward = exports.canGoBack = exports.canGo = exports.go = exports.next = exports.back = exports.replace = exports.push = undefined

        var _typeof = typeof Symbol === 'function' &&
          typeof Symbol.iterator === 'symbol'
          ? function(obj) {
              return typeof obj
            }
          : function(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }

        var _pathToAction2 = __webpack_require__(2)

        var _pathToAction3 = _interopRequireDefault(_pathToAction2)

        var _nestAction = __webpack_require__(1)

        var _isLocationAction = __webpack_require__(5)

        var _isLocationAction2 = _interopRequireDefault(_isLocationAction)

        var _isServer = __webpack_require__(7)

        var _isServer2 = _interopRequireDefault(_isServer)

        var _isReactNative = __webpack_require__(16)

        var _isReactNative2 = _interopRequireDefault(_isReactNative)

        var _changePageTitle = __webpack_require__(14)

        var _changePageTitle2 = _interopRequireDefault(_changePageTitle)

        var _attemptCallRouteThunk = __webpack_require__(13)

        var _attemptCallRouteThunk2 = _interopRequireDefault(
          _attemptCallRouteThunk
        )

        var _createThunk = __webpack_require__(15)

        var _createThunk2 = _interopRequireDefault(_createThunk)

        var _pathnamePlusSearch = __webpack_require__(18)

        var _pathnamePlusSearch2 = _interopRequireDefault(_pathnamePlusSearch)

        var _historyCreateAction = __webpack_require__(10)

        var _historyCreateAction2 = _interopRequireDefault(_historyCreateAction)

        var _middlewareCreateAction = __webpack_require__(11)

        var _middlewareCreateAction2 = _interopRequireDefault(
          _middlewareCreateAction
        )

        var _middlewareCreateNotFoundAction = __webpack_require__(12)

        var _middlewareCreateNotFoundAction2 = _interopRequireDefault(
          _middlewareCreateNotFoundAction
        )

        var _createLocationReducer = __webpack_require__(19)

        var _createLocationReducer2 = _interopRequireDefault(
          _createLocationReducer
        )

        var _index = __webpack_require__(0)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        var __DEV__ = 'development' !== 'production'

        /** PRIMARY EXPORT - `connectRoutes(history, routeMap, options)`:
 *
 *  PURPOSE: to provide set-it-forget-it syncing of actions to the address bar and vice
 *  versa, using the pairing of action types to express-style routePaths bi-directionally.
 *
 *  EXAMPLE:
 *  with routeMap `{ FOO: '/foo/:paramName' }`,
 *
 *  pathname '/foo/bar' would become:
 *  `{ type: 'FOO', payload: { paramName: 'bar' } }`
 *
 *  AND
 *
 *  action `{ type: 'FOO', payload: { paramName: 'bar' } }`
 *  becomes: pathname '/foo/bar'
 *
 *
 *  HOW: Firstly, the middleware listens to received actions and then converts them to the
 *  pathnames it applies to the address bar (via `history.push({ pathname })`. It also formats
 *  the action to be location-aware, primarily by including a matching pathname, which the
 *  location reducer listens to, and which user reducers can also make use of.
 *
 *  However, user reducers typically only need to  be concerned with the type
 *  and payload like they are accustomed to. That's the whole purpose of this package.
 *  The idea is by matching action types to routePaths, it's set it and forget it!
 *
 *  Secondly, a history listener listens to URL changes and dispatches actions with
 *  types and payloads that match the pathname. Hurray! Browse back/next buttons now work!
 *
 *  Both the history listener and middleware are made to not get into each other's way, i.e.
 *  avoiding double dispatching and double address bar changes.
 *
 *
 *  VERY IMPORTANT NOTE ON SSR: if you're wondering, `connectRoutes()` when called returns
 *  functions in a closure that provide access to variables in a private
 *  "per instance" fashion in order to be used in SSR without leaking
 *  state between SSR requests :).
 *
 *  As much as possible has been refactored out of this file into pure or
 *  near-pure utility functions.
*/

        exports.default = function(history) {
          var routesMap = arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {}
          var options = arguments.length > 2 && arguments[2] !== undefined
            ? arguments[2]
            : {}

          if (__DEV__) {
            if (!history) {
              throw new Error(
                "[redux-first-router] invalid `history` agument. Using the 'history' package on NPM,\n        please provide a `history` object as a second parameter. The object will be the\n        return of createBrowserHistory() (or in React Native or Node: createMemoryHistory()).\n        See: https://github.com/mjackson/history"
              )
            }

            if (
              options.restoreScroll &&
              typeof options.restoreScroll !== 'function'
            ) {
              throw new Error(
                '[redux-first-router] invalid `restoreScroll` option. Using\n        https://github.com/faceyspacey/redux-first-router-restore-scroll\n        please call `restoreScroll` and assign it the option key\n        of the same name.'
              )
            }
          }

          /** INTERNAL ENCLOSED STATE (PER INSTANCE FOR SSR!) */

          // very important: used for comparison to determine address bar changes
          var currentPath = (0, _pathnamePlusSearch2.default)(history.location)

          var prevLocation = {
            // maintains previous location state in location reducer
            pathname: '',
            type: '',
            payload: {}
          }

          var _options$notFoundPath = options.notFoundPath,
            notFoundPath = _options$notFoundPath === undefined
              ? '/not-found'
              : _options$notFoundPath,
            _options$scrollTop = options.scrollTop,
            scrollTop = _options$scrollTop === undefined
              ? false
              : _options$scrollTop,
            location = options.location,
            title = options.title,
            onBeforeChange = options.onBeforeChange,
            onAfterChange = options.onAfterChange,
            onBackNext = options.onBackNext,
            restoreScroll = options.restoreScroll,
            _options$initialDispa = options.initialDispatch,
            shouldPerformInitialDispatch = _options$initialDispa === undefined
              ? true
              : _options$initialDispa,
            querySerializer = options.querySerializer

          var selectLocationState = typeof location === 'function'
            ? location
            : location
                ? function(state) {
                    return state[location]
                  }
                : function(state) {
                    return state.location
                  }

          var selectTitleState = typeof title === 'function'
            ? title
            : title
                ? function(state) {
                    return state[title]
                  }
                : function(state) {
                    return state.title
                  }

          var scrollBehavior = restoreScroll && restoreScroll(history)

          var _pathToAction = (0, _pathToAction3.default)(
            currentPath,
            routesMap
          ),
            type = _pathToAction.type,
            payload = _pathToAction.payload,
            meta = _pathToAction.meta

          var INITIAL_LOCATION_STATE = (0, _createLocationReducer.getInitialState)(
            currentPath,
            meta,
            type,
            payload,
            routesMap,
            history
          )

          var prevState = INITIAL_LOCATION_STATE // used only to pass  as 1st arg to `scrollBehavior.updateScroll` if used
          var nextState = {} // used as 2nd arg to `scrollBehavior.updateScroll` and to change `document.title`
          var prevLength = 1 // used by `historyCreateAction` to calculate if moving along history.entries track

          var reducer = (0, _createLocationReducer2.default)(
            INITIAL_LOCATION_STATE,
            routesMap
          )
          var thunk = (0, _createThunk2.default)(routesMap, selectLocationState)
          var initialDispatch = function initialDispatch() {
            return _initialDispatch && _initialDispatch()
          }

          var windowDocument = (0, _changePageTitle.getDocument)() // get plain object for window.document if server side

          var navigators = void 0
          var patchNavigators = void 0
          var actionToNavigation = void 0
          var navigationToAction = void 0

          if (options.navigators) {
            // redux-first-router-navigation reformats the `navigators` option
            // to have the navigators nested one depth deeper, so as to include
            // the various helper functions from its package
            if (__DEV__ && !options.navigators.navigators) {
              throw new Error(
                "[redux-first-router] invalid `navigators` option. Pass your map\n        of navigators to the default import from 'redux-first-router-navigation'.\n        Don't forget: the keys are your redux state keys."
              )
            }

            navigators = options.navigators.navigators
            patchNavigators = options.navigators.patchNavigators
            actionToNavigation = options.navigators.actionToNavigation
            navigationToAction = options.navigators.navigationToAction

            patchNavigators(navigators)
          }

          /** MIDDLEWARE
   *  1)  dispatches actions with location info in the `meta` key by matching the received action
   *      type + payload to express style routePaths (which also results in location reducer state updating)
   *  2)  changes the address bar url and page title if the currentPathName changes, while
   *      avoiding collisions with simultaneous browser history changes
  */

          var middleware = function middleware(store) {
            return function(next) {
              return function(action) {
                var navigationAction = void 0

                if (navigators && action.type.indexOf('Navigation/') === 0) {
                  var _navigationToAction = navigationToAction(
                    navigators,
                    store,
                    routesMap,
                    action
                  )

                  navigationAction = _navigationToAction.navigationAction
                  action = _navigationToAction.action
                }

                var route = routesMap[action.type]

                if (action.error && (0, _isLocationAction2.default)(action)) {
                  if (__DEV__) {
                    console.warn(
                      'redux-first-router: location update did not dispatch as your action has an error.'
                    )
                  }
                } else if (
                  action.type === _index.NOT_FOUND &&
                  !(0, _isLocationAction2.default)(action)
                ) {
                  // user decided to dispatch `NOT_FOUND`, so we fill in the missing location info
                  action = (0, _middlewareCreateNotFoundAction2.default)(
                    action,
                    selectLocationState(store.getState()),
                    prevLocation,
                    history,
                    notFoundPath
                  )
                } else if (route && !(0, _isLocationAction2.default)(action)) {
                  // THE MAGIC: dispatched action matches a connected type, so we generate a
                  // location-aware action and also as a result update location reducer state.
                  action = (0, _middlewareCreateAction2.default)(
                    action,
                    routesMap,
                    prevLocation,
                    history,
                    notFoundPath,
                    querySerializer
                  )
                }

                if (navigators) {
                  action = actionToNavigation(
                    navigators,
                    action,
                    navigationAction,
                    route
                  )
                }

                // DISPATCH LIFECYLE:
                var skip = void 0
                if (
                  (route || action.type === _index.NOT_FOUND) &&
                  action.meta
                ) {
                  // satisify flow with `action.meta` check
                  skip = _beforeRouteChange(_store, history, action)
                }

                if (skip) return
                var nextAction = next(action) // DISPATCH

                if (route || action.type === _index.NOT_FOUND) {
                  _afterRouteChange(_store, route)
                }

                return nextAction
              }
            }
          }

          var _beforeRouteChange = function _beforeRouteChange(
            store,
            history,
            action
          ) {
            var location = action.meta.location

            if (onBeforeChange) {
              var skip = void 0

              var dispatch = function dispatch(action) {
                if (
                  action &&
                  action.meta &&
                  action.meta.location &&
                  action.meta.location.kind === 'redirect'
                ) {
                  skip = true
                  prevLocation = location.current
                  var _nextPath = (0, _pathnamePlusSearch2.default)(
                    location.current
                  )
                  var isHistoryChange = _nextPath === currentPath

                  // In this unique scenario, the action won't in fact be treated as a
                  // redirect since the initial action is never dispatched. If it is
                  // an action resulting from pressing the browser buttons, it will
                  // do a replace just like a redirect is meant to, since the location
                  // change is unavoidable and happens before the middleware. On the
                  // server, a redirect is always dispatched since its needed to detect
                  // whether to call `res.redirect`. In that case history is irrelevant.
                  if (!isHistoryChange && !(0, _isServer2.default)()) {
                    history.push(_nextPath) // this will be replaced since it's a redirect
                  }
                }

                store.dispatch(action)
              }

              onBeforeChange(dispatch, store.getState, action)
              if (skip) return true
            }

            prevState = selectLocationState(store.getState())
            prevLocation = location.current
            prevLength = history.length

            // addressbar updated before action dispatched like in history.listener
            _middlewareAttemptChangeUrl(location, history)

            // now we can finally set the history on the action since we get its
            // value from the `history` whose value only changes after `push()`
            if ((0, _isReactNative2.default)()) {
              location.history = (0, _nestAction.nestHistory)(history)
            }
          }

          var _afterRouteChange = function _afterRouteChange(store, route) {
            var dispatch = store.dispatch
            var state = store.getState()
            var kind = selectLocationState(state).kind
            var title = selectTitleState(state)
            nextState = selectLocationState(state)

            if (
              (typeof route === 'undefined' ? 'undefined' : _typeof(route)) ===
              'object'
            ) {
              ;(0, _attemptCallRouteThunk2.default)(
                dispatch,
                store.getState,
                route,
                selectLocationState
              )
            }

            if (onAfterChange) {
              onAfterChange(dispatch, store.getState)
            }

            if (typeof window !== 'undefined' && kind) {
              if (
                typeof onBackNext === 'function' &&
                /back|next|pop/.test(kind)
              ) {
                onBackNext(dispatch, store.getState)
              }

              setTimeout(function() {
                ;(0, _changePageTitle2.default)(windowDocument, title)

                if (scrollTop) {
                  return window.scrollTo(0, 0)
                }

                _updateScroll(false)
              })
            }
          }

          var _middlewareAttemptChangeUrl = function _middlewareAttemptChangeUrl(
            location,
            history
          ) {
            // IMPORTANT: insure history hasn't already handled location change
            var nextPath = (0, _pathnamePlusSearch2.default)(location.current)
            if (nextPath !== currentPath) {
              // keep currentPath up to date for comparison to prevent double dispatches
              // between BROWSER back/forward button usage vs middleware-generated actions
              currentPath = nextPath // IMPORTANT: must happen before history.push() (to prevent double handling)

              // for React Native, in the case `back` or `next` is
              // not called directly, `middlewareCreateAction` may emulate
              // `history` backNext actions to support features such
              // as scroll restoration. In those cases, we need to prevent
              // pushing new routes on to the entries array. `stealth` is
              // a React Navigation feature for changing StackNavigators
              // without triggering other navigators (such as a TabNavigator)
              // to change as well. It allows you to reset hidden StackNavigators.
              var kind = location.kind
              var manuallyInvoked = kind && /back|next|pop|stealth/.test(kind)

              if (!manuallyInvoked) {
                var method = kind === 'redirect' ? 'replace' : 'push'
                history[method](currentPath) // change address bar corresponding to matched actions from middleware
              }
            }
          }

          /** ENHANCER
   *  1)  dispatches actions with types and payload extracted from the URL pattern
   *      when the browser history changes
   *  2)  on load of the app dispatches an action corresponding to the initial url
   */

          var enhancer = function enhancer(createStore) {
            return function(reducer, preloadedState, enhancer) {
              // routesMap stored in location reducer will be stringified as it goes from the server to client
              // and as a result functions in route objects will be removed--here's how we insure we bring them back
              if (
                typeof window !== 'undefined' &&
                preloadedState &&
                selectLocationState(preloadedState)
              ) {
                selectLocationState(preloadedState).routesMap = routesMap
              }

              var store = createStore(reducer, preloadedState, enhancer)
              var state = store.getState()
              var location = state && selectLocationState(state)

              // assign to outer closure so middleware can access full middleware
              // pipeline when dispatching additional actions in onBefore/AfterChange
              _store = store

              if (!location || !location.pathname) {
                throw new Error(
                  '[redux-first-router] you must provide the key of the location\n        reducer state and properly assigned the location reducer to that key.'
                )
              }

              history.listen(_historyAttemptDispatchAction.bind(null, store))

              // dispatch the first location-aware action so initial app state is based on the url on load
              if (!location.hasSSR || (0, _isServer2.default)()) {
                // only dispatch on client before SSR is setup, which passes state on to the client
                _initialDispatch = function _initialDispatch() {
                  var action = (0, _historyCreateAction2.default)(
                    currentPath,
                    routesMap,
                    prevLocation,
                    history,
                    'load',
                    querySerializer
                  )

                  store.dispatch(action)
                }

                if (shouldPerformInitialDispatch !== false) {
                  _initialDispatch()
                }
              } else {
                // set correct prevLocation on client that has SSR so that it will be
                // assigned to `action.meta.location.prev` and the corresponding state
                prevLocation = location
              }

              // update the scroll position after initial rendering of page
              if (typeof window !== 'undefined')
                setTimeout(function() {
                  return _updateScroll(false)
                })

              return store
            }
          }

          var _historyAttemptDispatchAction = function _historyAttemptDispatchAction(
            store,
            location,
            historyAction
          ) {
            // IMPORTANT: insure middleware hasn't already handled location change:
            var nextPath = (0, _pathnamePlusSearch2.default)(location)

            if (nextPath !== currentPath) {
              // THE MAGIC: parse the address bar path into a matched action
              var kind = historyAction === 'REPLACE'
                ? 'redirect'
                : historyAction

              var action = (0, _historyCreateAction2.default)(
                nextPath,
                routesMap,
                prevLocation,
                history,
                kind.toLowerCase(),
                querySerializer,
                currentPath,
                prevLength
              )

              currentPath = nextPath // IMPORTANT: must happen before dispatch (to prevent double handling)

              store.dispatch(action) // dispatch route type + payload corresponding to browser back/forward usage
            }
          }

          /* SIDE_EFFECTS - client-only state that must escape closure */

          _history = history
          _scrollBehavior = scrollBehavior
          _selectLocationState = selectLocationState
          _options = options
          var _initialDispatch = void 0

          _updateScroll = function _updateScroll() {
            var performedByUser = arguments.length > 0 &&
              arguments[0] !== undefined
              ? arguments[0]
              : true

            if (scrollBehavior) {
              if (!scrollBehavior.manual) {
                scrollBehavior.updateScroll(prevState, nextState)
              }
            } else if (__DEV__ && performedByUser) {
              throw new Error(
                '[redux-first-router] you must set the `restoreScroll` option before\n        you can call `updateScroll`'
              )
            }
          }

          /* RETURN  */

          return {
            reducer: reducer,
            middleware: middleware,
            enhancer: enhancer,
            thunk: thunk,
            initialDispatch: initialDispatch,

            // returned only for tests (not for use in application code)
            _middlewareAttemptChangeUrl: _middlewareAttemptChangeUrl,
            _afterRouteChange: _afterRouteChange,
            _historyAttemptDispatchAction: _historyAttemptDispatchAction,
            windowDocument: windowDocument,
            history: history
          }
        }

        /** SIDE EFFECTS:
 *  Client code needs a simple `push`,`back` + `next` functions because it's convenient for
 *  prototyping. It will not harm SSR, so long as you don't use it server side. So if you use it, that means DO NOT
 *  simulate clicking links server side--and dont do that, dispatch actions to setup state instead.
 *
 *  THE IDIOMATIC WAY: instead use https://github.com/faceyspacey/redux-first-router-link 's `<Link />`
 *  component to generate SEO friendly urls. As its `href` prop, you pass it a path, array of path
 *  segments or action, and internally it will use `connectRoutes` to change the address bar and
 *  dispatch the correct final action from middleware.
 *
 *  NOTE ON BACK FUNCTIONALITY: The better way to accomplish a back button is to use your redux state to determine
 *  the previous URL. The location reducer will also contain relevant info. But if you must,
 *  this is here for convenience and it basically simulates the user pressing the browser
 *  back button, which of course the system picks up and parses into an action.
 */

        var _history = void 0
        var _scrollBehavior = void 0
        var _updateScroll = void 0
        var _selectLocationState = void 0
        var _options = void 0
        var _store = void 0

        var push = (exports.push = function push(pathname) {
          return _history.push(pathname)
        })
        var replace = (exports.replace = function replace(pathname) {
          return _history.replace(pathname)
        })
        var back = (exports.back = function back() {
          return _history.goBack()
        })
        var next = (exports.next = function next() {
          return _history.goForward()
        })
        var go = (exports.go = function go(n) {
          return _history.go(n)
        })
        var canGo = (exports.canGo = function canGo(n) {
          return _history.canGo(n)
        })
        var canGoBack = (exports.canGoBack = function canGoBack() {
          return !!_history.entries[_history.index - 1]
        })
        var canGoForward = (exports.canGoForward = function canGoForward() {
          return !!_history.entries[_history.index + 1]
        })
        var prevPath = (exports.prevPath = function prevPath() {
          var entry = _history.entries[_history.index - 1]
          return entry && entry.pathname
        })
        var nextPath = (exports.nextPath = function nextPath() {
          var entry = _history.entries[_history.index + 1]
          return entry && entry.pathname
        })
        var history = (exports.history = function history() {
          return _history
        })
        var scrollBehavior = (exports.scrollBehavior = function scrollBehavior() {
          return _scrollBehavior
        })
        var updateScroll = (exports.updateScroll = function updateScroll() {
          return _updateScroll && _updateScroll()
        })
        var selectLocationState = (exports.selectLocationState = function selectLocationState(
          state
        ) {
          return _selectLocationState(state)
        })
        var getOptions = (exports.getOptions = function getOptions() {
          return _options
        })

        /***/
      },
      /* 4 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        var _typeof = typeof Symbol === 'function' &&
          typeof Symbol.iterator === 'symbol'
          ? function(obj) {
              return typeof obj
            }
          : function(obj) {
              return obj &&
                typeof Symbol === 'function' &&
                obj.constructor === Symbol &&
                obj !== Symbol.prototype
                ? 'symbol'
                : typeof obj
            }

        var _pathToRegexp = __webpack_require__(8)

        var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        exports.default = function(action, routesMap, serializer) {
          var route = routesMap[action.type]
          var routePath = (typeof route === 'undefined'
            ? 'undefined'
            : _typeof(route)) === 'object'
            ? route.path
            : route
          var params = (typeof route === 'undefined'
            ? 'undefined'
            : _typeof(route)) === 'object'
            ? _payloadToParams(route, action.payload)
            : action.payload

          var path =
            _pathToRegexp2.default.compile(routePath)(params || {}) || '/'

          var query =
            action.query ||
            (action.meta && action.meta.query) ||
            (action.payload && action.payload.query)

          var search = query && serializer && serializer.stringify(query)

          return search ? path + '?' + search : path
        }

        var _payloadToParams = function _payloadToParams(route) {
          var params = arguments.length > 1 && arguments[1] !== undefined
            ? arguments[1]
            : {}
          return Object.keys(params).reduce(function(sluggifedParams, key) {
            if (typeof params[key] !== 'undefined') {
              if (typeof params[key] === 'number') {
                sluggifedParams[key] = params[key]
              } else if (route.capitalizedWords === true) {
                sluggifedParams[key] = params[key]
                  .replace(/ /g, '-')
                  .toLowerCase()
              } else if (typeof route.toPath === 'function') {
                sluggifedParams[key] = route.toPath(params[key], key)
              } else if (typeof params[key] === 'string') {
                sluggifedParams[key] = params[key]
              }
            }

            return sluggifedParams
          }, {})
        }

        /***/
      },
      /* 5 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        exports.default = function(action) {
          return !!(action.meta &&
            action.meta.location &&
            action.meta.location.current)
        }

        /***/
      },
      /* 6 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        exports.default = function(action, kind) {
          action.meta = action.meta || {}
          action.meta.location = action.meta.location || {}
          action.meta.location.kind = kind

          return action
        }

        /***/
      },
      /* 7 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        exports.default = function() {
          return typeof window === 'undefined' || !!window.SSRtest
        }

        /***/
      },
      /* 8 */
      /***/ function(module, exports, __webpack_require__) {
        var isarray = __webpack_require__(20)

        /**
 * Expose `pathToRegexp`.
 */
        module.exports = pathToRegexp
        module.exports.parse = parse
        module.exports.compile = compile
        module.exports.tokensToFunction = tokensToFunction
        module.exports.tokensToRegExp = tokensToRegExp

        /**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */
        var PATH_REGEXP = new RegExp(
          [
            // Match escaped characters that would otherwise appear in future matches.
            // This allows the user to escape special characters that won't transform.
            '(\\\\.)',
            // Match Express-style parameters and un-named parameters with a prefix
            // and optional suffixes. Matches appear as:
            //
            // "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
            // "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
            // "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
            '([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'
          ].join('|'),
          'g'
        )

        /**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */
        function parse(str, options) {
          var tokens = []
          var key = 0
          var index = 0
          var path = ''
          var defaultDelimiter = (options && options.delimiter) || '/'
          var res

          while ((res = PATH_REGEXP.exec(str)) != null) {
            var m = res[0]
            var escaped = res[1]
            var offset = res.index
            path += str.slice(index, offset)
            index = offset + m.length

            // Ignore already escaped sequences.
            if (escaped) {
              path += escaped[1]
              continue
            }

            var next = str[index]
            var prefix = res[2]
            var name = res[3]
            var capture = res[4]
            var group = res[5]
            var modifier = res[6]
            var asterisk = res[7]

            // Push the current path onto the tokens.
            if (path) {
              tokens.push(path)
              path = ''
            }

            var partial = prefix != null && next != null && next !== prefix
            var repeat = modifier === '+' || modifier === '*'
            var optional = modifier === '?' || modifier === '*'
            var delimiter = res[2] || defaultDelimiter
            var pattern = capture || group

            tokens.push({
              name: name || key++,
              prefix: prefix || '',
              delimiter: delimiter,
              optional: optional,
              repeat: repeat,
              partial: partial,
              asterisk: !!asterisk,
              pattern: pattern
                ? escapeGroup(pattern)
                : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
            })
          }

          // Match any characters still remaining.
          if (index < str.length) {
            path += str.substr(index)
          }

          // If the path exists, push it onto the end.
          if (path) {
            tokens.push(path)
          }

          return tokens
        }

        /**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */
        function compile(str, options) {
          return tokensToFunction(parse(str, options))
        }

        /**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */
        function encodeURIComponentPretty(str) {
          return encodeURI(str).replace(/[\/?#]/g, function(c) {
            return '%' + c.charCodeAt(0).toString(16).toUpperCase()
          })
        }

        /**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */
        function encodeAsterisk(str) {
          return encodeURI(str).replace(/[?#]/g, function(c) {
            return '%' + c.charCodeAt(0).toString(16).toUpperCase()
          })
        }

        /**
 * Expose a method for transforming tokens into the path function.
 */
        function tokensToFunction(tokens) {
          // Compile all the tokens into regexps.
          var matches = new Array(tokens.length)

          // Compile all the patterns before compilation.
          for (var i = 0; i < tokens.length; i++) {
            if (typeof tokens[i] === 'object') {
              matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$')
            }
          }

          return function(obj, opts) {
            var path = ''
            var data = obj || {}
            var options = opts || {}
            var encode = options.pretty
              ? encodeURIComponentPretty
              : encodeURIComponent

            for (var i = 0; i < tokens.length; i++) {
              var token = tokens[i]

              if (typeof token === 'string') {
                path += token

                continue
              }

              var value = data[token.name]
              var segment

              if (value == null) {
                if (token.optional) {
                  // Prepend partial segment prefixes.
                  if (token.partial) {
                    path += token.prefix
                  }

                  continue
                } else {
                  throw new TypeError(
                    'Expected "' + token.name + '" to be defined'
                  )
                }
              }

              if (isarray(value)) {
                if (!token.repeat) {
                  throw new TypeError(
                    'Expected "' +
                      token.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(value) +
                      '`'
                  )
                }

                if (value.length === 0) {
                  if (token.optional) {
                    continue
                  } else {
                    throw new TypeError(
                      'Expected "' + token.name + '" to not be empty'
                    )
                  }
                }

                for (var j = 0; j < value.length; j++) {
                  segment = encode(value[j])

                  if (!matches[i].test(segment)) {
                    throw new TypeError(
                      'Expected all "' +
                        token.name +
                        '" to match "' +
                        token.pattern +
                        '", but received `' +
                        JSON.stringify(segment) +
                        '`'
                    )
                  }

                  path += (j === 0 ? token.prefix : token.delimiter) + segment
                }

                continue
              }

              segment = token.asterisk ? encodeAsterisk(value) : encode(value)

              if (!matches[i].test(segment)) {
                throw new TypeError(
                  'Expected "' +
                    token.name +
                    '" to match "' +
                    token.pattern +
                    '", but received "' +
                    segment +
                    '"'
                )
              }

              path += token.prefix + segment
            }

            return path
          }
        }

        /**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */
        function escapeString(str) {
          return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1')
        }

        /**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */
        function escapeGroup(group) {
          return group.replace(/([=!:$\/()])/g, '\\$1')
        }

        /**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */
        function attachKeys(re, keys) {
          re.keys = keys
          return re
        }

        /**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */
        function flags(options) {
          return options.sensitive ? '' : 'i'
        }

        /**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */
        function regexpToRegexp(path, keys) {
          // Use a negative lookahead to match only capturing groups.
          var groups = path.source.match(/\((?!\?)/g)

          if (groups) {
            for (var i = 0; i < groups.length; i++) {
              keys.push({
                name: i,
                prefix: null,
                delimiter: null,
                optional: false,
                repeat: false,
                partial: false,
                asterisk: false,
                pattern: null
              })
            }
          }

          return attachKeys(path, keys)
        }

        /**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
        function arrayToRegexp(path, keys, options) {
          var parts = []

          for (var i = 0; i < path.length; i++) {
            parts.push(pathToRegexp(path[i], keys, options).source)
          }

          var regexp = new RegExp('(?:' + parts.join('|') + ')', flags(options))

          return attachKeys(regexp, keys)
        }

        /**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */
        function stringToRegexp(path, keys, options) {
          return tokensToRegExp(parse(path, options), keys, options)
        }

        /**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */
        function tokensToRegExp(tokens, keys, options) {
          if (!isarray(keys)) {
            options /** @type {!Object} */ = keys || options
            keys = []
          }

          options = options || {}

          var strict = options.strict
          var end = options.end !== false
          var route = ''

          // Iterate over the tokens and create our regexp string.
          for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i]

            if (typeof token === 'string') {
              route += escapeString(token)
            } else {
              var prefix = escapeString(token.prefix)
              var capture = '(?:' + token.pattern + ')'

              keys.push(token)

              if (token.repeat) {
                capture += '(?:' + prefix + capture + ')*'
              }

              if (token.optional) {
                if (!token.partial) {
                  capture = '(?:' + prefix + '(' + capture + '))?'
                } else {
                  capture = prefix + '(' + capture + ')?'
                }
              } else {
                capture = prefix + '(' + capture + ')'
              }

              route += capture
            }
          }

          var delimiter = escapeString(options.delimiter || '/')
          var endsWithDelimiter = route.slice(-delimiter.length) === delimiter

          // In non-strict mode we allow a slash at the end of match. If the path to
          // match already ends with a slash, we remove it for consistency. The slash
          // is valid at the end of a path match, not in the middle. This is important
          // in non-ending mode, where "/test/" shouldn't match "/test//route".
          if (!strict) {
            route =
              (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) +
              '(?:' +
              delimiter +
              '(?=$))?'
          }

          if (end) {
            route += '$'
          } else {
            // In non-ending mode, we need the capturing groups to match as much as
            // possible by using a positive lookahead to the end or next path segment.
            route += strict && endsWithDelimiter
              ? ''
              : '(?=' + delimiter + '|$)'
          }

          return attachKeys(new RegExp('^' + route, flags(options)), keys)
        }

        /**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */
        function pathToRegexp(path, keys, options) {
          if (!isarray(keys)) {
            options /** @type {!Object} */ = keys || options
            keys = []
          }

          options = options || {}

          if (path instanceof RegExp) {
            return regexpToRegexp(path /** @type {!Array} */, keys)
          }

          if (isarray(path)) {
            return arrayToRegexp /** @type {!Array} */(
              path /** @type {!Array} */,
              keys,
              options
            )
          }

          return stringToRegexp /** @type {string} */(
            path /** @type {!Array} */,
            keys,
            options
          )
        }

        /***/
      },
      /* 9 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        var _setKind = __webpack_require__(6)

        var _setKind2 = _interopRequireDefault(_setKind)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        exports.default = function(action, type, payload) {
          action = (0, _setKind2.default)(action, 'redirect')

          if (type) {
            action.type = type
          }

          if (payload) {
            action.payload = payload
          }

          return action
        }

        /***/
      },
      /* 10 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        var _pathToAction = __webpack_require__(2)

        var _pathToAction2 = _interopRequireDefault(_pathToAction)

        var _nestAction = __webpack_require__(1)

        var _nestAction2 = _interopRequireDefault(_nestAction)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        exports.default = function(
          pathname,
          routesMap,
          prevLocation,
          history,
          kind,
          serializer,
          prevPath,
          prevLength
        ) {
          var action = (0, _pathToAction2.default)(
            pathname,
            routesMap,
            serializer
          )
          kind = getKind(!!history.entries, history, kind, prevPath, prevLength)
          return (0, _nestAction2.default)(
            pathname,
            action,
            prevLocation,
            history,
            kind
          )
        }

        var getKind = function getKind(
          isMemoryHistory,
          history,
          kind,
          prevPath,
          prevLength
        ) {
          if (!isMemoryHistory || !prevPath || kind !== 'pop') {
            return kind
          }

          if (isBack(history, prevPath)) {
            return 'back'
          } else if (isNext(history, prevPath, prevLength)) {
            return 'next'
          }

          return kind
        }

        var isBack = function isBack(hist, path) {
          var next = hist.entries[hist.index + 1]
          return next && next.pathname === path
        }

        var isNext = function isNext(hist, path, length) {
          var prev = hist.entries[hist.index - 1]
          var notPushed = length === hist.length

          return prev && prev.pathname === path && notPushed
        }

        /***/
      },
      /* 11 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i]
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key]
                }
              }
            }
            return target
          }

        var _actionToPath = __webpack_require__(4)

        var _actionToPath2 = _interopRequireDefault(_actionToPath)

        var _nestAction = __webpack_require__(1)

        var _nestAction2 = _interopRequireDefault(_nestAction)

        var _index = __webpack_require__(0)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        exports.default = function(
          action,
          routesMap,
          prevLocation,
          history,
          notFoundPath,
          serializer
        ) {
          try {
            var pathname = (0, _actionToPath2.default)(
              action,
              routesMap,
              serializer
            )
            var kind = getKind(!!history.entries, pathname, history, action)
            return (0, _nestAction2.default)(
              pathname,
              action,
              prevLocation,
              history,
              kind
            )
          } catch (e) {
            var payload = _extends({}, action.payload)

            return (0, _nestAction2.default)(
              notFoundPath || prevLocation.pathname || '/',
              _extends({}, action, {
                type: _index.NOT_FOUND,
                payload: payload
              }),
              prevLocation,
              history
            )
          }
        }

        // REACT NATIVE FEATURE:
        // emulate npm `history` package and `historyCreateAction`  so that actions
        // and state indicate the user went back or forward. The idea is if you are
        // going back or forward to a route you were just at, apps can determine
        // from `state.location.kind === 'back|next'` and `action.kind` that things like
        // scroll position should be restored.
        // NOTE: for testability, history is also returned to make this a pure function

        var getKind = function getKind(
          isMemoryHistory,
          pathname,
          history,
          action
        ) {
          var kind =
            action.meta && action.meta.location && action.meta.location.kind

          if (kind) {
            return kind
          } else if (!isMemoryHistory) {
            return 'push'
          }

          if (goingBack(history, pathname)) {
            history.index--
            return 'back'
          } else if (goingForward(history, pathname)) {
            history.index++
            return 'next'
          }

          return 'push'
        }

        var goingBack = function goingBack(hist, path) {
          var prev = hist.entries[hist.index - 1]
          return prev && prev.pathname === path
        }

        var goingForward = function goingForward(hist, path) {
          var next = hist.entries[hist.index + 1]
          return next && next.pathname === path
        }

        /***/
      },
      /* 12 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        var _nestAction = __webpack_require__(1)

        var _nestAction2 = _interopRequireDefault(_nestAction)

        var _index = __webpack_require__(0)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        exports.default = function(
          action,
          location,
          prevLocation,
          history,
          notFoundPath
        ) {
          var payload = action.payload

          var meta = action.meta
          var prevPath = location.pathname

          var kind =
            (meta && meta.location && meta.location.kind) || // use case: kind === 'redirect'
            (location.kind === 'load' && 'load') ||
            'push'

          var pathname =
            (meta && meta.notFoundPath) ||
            (kind === 'redirect' && notFoundPath) ||
            prevPath ||
            '/'

          return (0, _nestAction2.default)(
            pathname,
            { type: _index.NOT_FOUND, payload: payload },
            prevLocation,
            history,
            kind
          )
        }

        /***/
      },
      /* 13 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        var _connectRoutes = __webpack_require__(3)

        exports.default = function(
          dispatch,
          getState,
          route,
          selectLocationState
        ) {
          if (typeof window !== 'undefined') {
            var thunk = route.thunk

            if (typeof thunk === 'function') {
              var _selectLocationState = selectLocationState(getState()),
                kind = _selectLocationState.kind,
                hasSSR = _selectLocationState.hasSSR

              // call thunks always if it's not initial load of the app or only if it's load
              // without SSR setup yet, so app state is setup on client when prototyping,
              // such as with with webpack-dev-server before server infrastructure is built

              if (kind !== 'load' || (kind === 'load' && !hasSSR)) {
                var prom = thunk(dispatch, getState)

                if (prom && typeof prom.next === 'function') {
                  prom.next(_connectRoutes.updateScroll)
                }
              }
            }
          }
        }

        /***/
      },
      /* 14 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        exports.default = function(doc, title) {
          if (typeof title === 'string' && doc.title !== title) {
            return (doc.title = title)
          }

          return null
        }

        var getDocument = (exports.getDocument = function getDocument() {
          var isSSRTest = 'development' === 'test' && window.isSSR

          return typeof document !== 'undefined' && !isSSRTest ? document : {}
        })

        /***/
      },
      /* 15 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        exports.default = function(routesMap, selectLocationState) {
          return function(_ref) {
            var dispatch = _ref.dispatch, getState = _ref.getState

            var _selectLocationState = selectLocationState(getState()),
              type = _selectLocationState.type

            var route = routesMap[type]

            if (route && typeof route.thunk === 'function') {
              return Promise.resolve(route.thunk(dispatch, getState))
            }

            return Promise.resolve()
          }
        }

        /***/
      },
      /* 16 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        exports.default = function() {
          return (
            typeof window !== 'undefined' &&
            typeof window.navigator !== 'undefined' &&
            window.navigator.product === 'ReactNative'
          )
        }

        /***/
      },
      /* 17 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        exports.default = function(routes) {
          return Object.keys(routes).map(function(key) {
            return routes[key]
          })
        }

        /***/
      },
      /* 18 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })

        exports.default = function(_ref) {
          var pathname = _ref.pathname, search = _ref.search

          if (search) {
            if (search.indexOf('?') !== 0) {
              search = '?' + search
            }

            return '' + pathname + search
          }

          return pathname
        }

        /***/
      },
      /* 19 */
      /***/ function(module, exports, __webpack_require__) {
        'use strict'

        Object.defineProperty(exports, '__esModule', {
          value: true
        })
        exports.getInitialState = undefined

        var _extends =
          Object.assign ||
          function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i]
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key]
                }
              }
            }
            return target
          }

        var _index = __webpack_require__(0)

        var _isServer = __webpack_require__(7)

        var _isServer2 = _interopRequireDefault(_isServer)

        var _nestAction = __webpack_require__(1)

        function _interopRequireDefault(obj) {
          return obj && obj.__esModule ? obj : { default: obj }
        }

        exports.default = function(initialState, routesMap) {
          return function() {
            var state = arguments.length > 0 && arguments[0] !== undefined
              ? arguments[0]
              : initialState
            var action = arguments[1]

            if (
              action.type === _index.NOT_FOUND ||
              (routesMap[action.type] &&
                (action.meta.location.current.pathname !== state.pathname ||
                  action.meta.location.current.search !== state.search ||
                  action.meta.location.kind === 'load'))
            ) {
              var _query = action.meta.location.current.query
              var _search = action.meta.location.current.search

              return _extends(
                {
                  pathname: action.meta.location.current.pathname,
                  type: action.type,
                  payload: _extends({}, action.payload)
                },
                _query && { query: _query, search: _search },
                {
                  prev: action.meta.location.prev,
                  kind: action.meta.location.kind,
                  history: action.meta.location.history,
                  hasSSR: state.hasSSR,
                  routesMap: routesMap
                }
              )
            }

            return state
          }
        }

        var getInitialState = (exports.getInitialState = function getInitialState(
          currentPathname,
          meta,
          type,
          payload,
          routesMap,
          history
        ) {
          return _extends(
            {
              pathname: currentPathname.split('?')[0],
              type: type,
              payload: payload
            },
            meta,
            {
              prev: {
                pathname: '',
                type: '',
                payload: {}
              },
              kind: undefined,
              history: (0, _nestAction.nestHistory)(history),
              hasSSR: (0, _isServer2.default)() ? true : undefined, // client uses initial server `hasSSR` state setup here
              routesMap: routesMap
            }
          )
        })

        /***/
      },
      /* 20 */
      /***/ function(module, exports) {
        module.exports =
          Array.isArray ||
          function(arr) {
            return Object.prototype.toString.call(arr) == '[object Array]'
          }

        /***/
      }
      /******/
    ]
  )
})
