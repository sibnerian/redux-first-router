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

var _pathToRegexp = require('path-to-regexp')

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp)

var _index = require('../index')

var _objectValues = require('./objectValues')

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

    var coerceNumbers = !(_typeof(routes[i]) === 'object' &&
      routes[i].coerceNumbers === false)
    var fromPath =
      routes[i] &&
      typeof routes[i].fromPath === 'function' &&
      routes[i].fromPath
    var type = routeTypes[i]

    var payload = keys.reduce(function(payload, key, index) {
      var value = match && match[index + 1] // item at index 0 is the overall match, whereas those after correspond to the key's index

      value = typeof value === 'string' &&
        coerceNumbers &&
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

    return { type: type, payload: payload, meta: query ? { query: query } : {} }
  }

  // This will basically will only end up being called if the developer is manually calling history.push().
  // Or, if visitors visit an invalid URL, the developer can use the NOT_FOUND type to show a not-found page to
  var meta = _extends({ notFoundPath: pathname }, query ? { query: query } : {})
  return { type: _index.NOT_FOUND, payload: {}, meta: meta }
}
