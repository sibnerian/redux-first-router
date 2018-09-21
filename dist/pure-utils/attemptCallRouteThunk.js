'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _connectRoutes = require('../connectRoutes')

exports.default = function(dispatch, getState, route, selectLocationState) {
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
