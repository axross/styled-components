

Object.defineProperty(exports, '__esModule', {
  value: true,
})

const _css = require('./css')

const _css2 = _interopRequireDefault(_css)

const _domElements = require('../utils/domElements')

const _domElements2 = _interopRequireDefault(_domElements)

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj } }

const babelPluginFlowReactPropTypes_proptype_Target = require('../types').babelPluginFlowReactPropTypes_proptype_Target || require('react').PropTypes.any

const babelPluginFlowReactPropTypes_proptype_Interpolation = require('../types').babelPluginFlowReactPropTypes_proptype_Interpolation || require('react').PropTypes.any

exports.default = function (styledComponent) {
  const styled = function styled(tag) {
    return function (strings) {
      for (var _len = arguments.length, interpolations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        interpolations[_key - 1] = arguments[_key]
      }

      return styledComponent(tag, _css2.default.apply(undefined, [strings].concat(interpolations)))
    }
  }

  // Shorthands for all valid HTML Elements
  _domElements2.default.forEach((domElement) => {
    styled[domElement] = styled(domElement)
  })

  return styled
}

module.exports = exports.default
