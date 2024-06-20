import {
  require_react
} from "./chunk-URNRBCZE.js";
import {
  __commonJS
} from "./chunk-LNEMQRCO.js";

// node_modules/react-video-thumbnail/dist/bundle.js
var require_bundle = __commonJS({
  "node_modules/react-video-thumbnail/dist/bundle.js"(exports, module) {
    function _interopDefault(ex) {
      return ex && typeof ex === "object" && "default" in ex ? ex["default"] : ex;
    }
    var React = _interopDefault(require_react());
    function createCommonjsModule(fn, module2) {
      return module2 = { exports: {} }, fn(module2, module2.exports), module2.exports;
    }
    function makeEmptyFunction(arg) {
      return function() {
        return arg;
      };
    }
    var emptyFunction = function emptyFunction2() {
    };
    emptyFunction.thatReturns = makeEmptyFunction;
    emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
    emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
    emptyFunction.thatReturnsNull = makeEmptyFunction(null);
    emptyFunction.thatReturnsThis = function() {
      return this;
    };
    emptyFunction.thatReturnsArgument = function(arg) {
      return arg;
    };
    var emptyFunction_1 = emptyFunction;
    var emptyFunction$1 = Object.freeze({
      default: emptyFunction_1,
      __moduleExports: emptyFunction_1
    });
    var validateFormat = function validateFormat2(format) {
    };
    if (true) {
      validateFormat = function validateFormat2(format) {
        if (format === void 0) {
          throw new Error("invariant requires an error message argument");
        }
      };
    }
    function invariant(condition, format, a, b, c, d, e, f) {
      validateFormat(format);
      if (!condition) {
        var error;
        if (format === void 0) {
          error = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        } else {
          var args = [a, b, c, d, e, f];
          var argIndex = 0;
          error = new Error(format.replace(/%s/g, function() {
            return args[argIndex++];
          }));
          error.name = "Invariant Violation";
        }
        error.framesToPop = 1;
        throw error;
      }
    }
    var invariant_1 = invariant;
    var invariant$1 = Object.freeze({
      default: invariant_1,
      __moduleExports: invariant_1
    });
    var emptyFunction$2 = emptyFunction$1 && emptyFunction_1 || emptyFunction$1;
    var warning = emptyFunction$2;
    if (true) {
      printWarning = function printWarning2(format) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }
        var argIndex = 0;
        var message = "Warning: " + format.replace(/%s/g, function() {
          return args[argIndex++];
        });
        if (typeof console !== "undefined") {
          console.error(message);
        }
        try {
          throw new Error(message);
        } catch (x) {
        }
      };
      warning = function warning2(condition, format) {
        if (format === void 0) {
          throw new Error("`warning(condition, format, ...args)` requires a warning message argument");
        }
        if (format.indexOf("Failed Composite propType: ") === 0) {
          return;
        }
        if (!condition) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }
          printWarning.apply(void 0, [format].concat(args));
        }
      };
    }
    var printWarning;
    var warning_1 = warning;
    var warning$1 = Object.freeze({
      default: warning_1,
      __moduleExports: warning_1
    });
    var getOwnPropertySymbols = Object.getOwnPropertySymbols;
    var hasOwnProperty = Object.prototype.hasOwnProperty;
    var propIsEnumerable = Object.prototype.propertyIsEnumerable;
    function toObject(val) {
      if (val === null || val === void 0) {
        throw new TypeError("Object.assign cannot be called with null or undefined");
      }
      return Object(val);
    }
    function shouldUseNative() {
      try {
        if (!Object.assign) {
          return false;
        }
        var test1 = new String("abc");
        test1[5] = "de";
        if (Object.getOwnPropertyNames(test1)[0] === "5") {
          return false;
        }
        var test2 = {};
        for (var i = 0; i < 10; i++) {
          test2["_" + String.fromCharCode(i)] = i;
        }
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
          return test2[n];
        });
        if (order2.join("") !== "0123456789") {
          return false;
        }
        var test3 = {};
        "abcdefghijklmnopqrst".split("").forEach(function(letter) {
          test3[letter] = letter;
        });
        if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
          return false;
        }
        return true;
      } catch (err) {
        return false;
      }
    }
    var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
      var from;
      var to = toObject(target);
      var symbols;
      for (var s = 1; s < arguments.length; s++) {
        from = Object(arguments[s]);
        for (var key in from) {
          if (hasOwnProperty.call(from, key)) {
            to[key] = from[key];
          }
        }
        if (getOwnPropertySymbols) {
          symbols = getOwnPropertySymbols(from);
          for (var i = 0; i < symbols.length; i++) {
            if (propIsEnumerable.call(from, symbols[i])) {
              to[symbols[i]] = from[symbols[i]];
            }
          }
        }
      }
      return to;
    };
    var objectAssign$1 = Object.freeze({
      default: objectAssign,
      __moduleExports: objectAssign
    });
    var ReactPropTypesSecret = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    var ReactPropTypesSecret_1 = ReactPropTypesSecret;
    var ReactPropTypesSecret$1 = Object.freeze({
      default: ReactPropTypesSecret_1,
      __moduleExports: ReactPropTypesSecret_1
    });
    var require$$0 = invariant$1 && invariant_1 || invariant$1;
    var require$$1 = warning$1 && warning_1 || warning$1;
    var require$$2 = ReactPropTypesSecret$1 && ReactPropTypesSecret_1 || ReactPropTypesSecret$1;
    if (true) {
      invariant$2 = require$$0;
      warning$2 = require$$1;
      ReactPropTypesSecret$2 = require$$2;
      loggedTypeFailures = {};
    }
    var invariant$2;
    var warning$2;
    var ReactPropTypesSecret$2;
    var loggedTypeFailures;
    function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
      if (true) {
        for (var typeSpecName in typeSpecs) {
          if (typeSpecs.hasOwnProperty(typeSpecName)) {
            var error;
            try {
              invariant$2(typeof typeSpecs[typeSpecName] === "function", "%s: %s type `%s` is invalid; it must be a function, usually from the `prop-types` package, but received `%s`.", componentName || "React class", location, typeSpecName, typeof typeSpecs[typeSpecName]);
              error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
            } catch (ex) {
              error = ex;
            }
            warning$2(!error || error instanceof Error, "%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error);
            if (error instanceof Error && !(error.message in loggedTypeFailures)) {
              loggedTypeFailures[error.message] = true;
              var stack = getStack ? getStack() : "";
              warning$2(false, "Failed %s type: %s%s", location, error.message, stack != null ? stack : "");
            }
          }
        }
      }
    }
    var checkPropTypes_1 = checkPropTypes;
    var checkPropTypes$1 = Object.freeze({
      default: checkPropTypes_1,
      __moduleExports: checkPropTypes_1
    });
    var assign = objectAssign$1 && objectAssign || objectAssign$1;
    var checkPropTypes$2 = checkPropTypes$1 && checkPropTypes_1 || checkPropTypes$1;
    var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
      var ITERATOR_SYMBOL = typeof Symbol === "function" && Symbol.iterator;
      var FAUX_ITERATOR_SYMBOL = "@@iterator";
      function getIteratorFn(maybeIterable) {
        var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
        if (typeof iteratorFn === "function") {
          return iteratorFn;
        }
      }
      var ANONYMOUS = "<<anonymous>>";
      var ReactPropTypes = {
        array: createPrimitiveTypeChecker("array"),
        bool: createPrimitiveTypeChecker("boolean"),
        func: createPrimitiveTypeChecker("function"),
        number: createPrimitiveTypeChecker("number"),
        object: createPrimitiveTypeChecker("object"),
        string: createPrimitiveTypeChecker("string"),
        symbol: createPrimitiveTypeChecker("symbol"),
        any: createAnyTypeChecker(),
        arrayOf: createArrayOfTypeChecker,
        element: createElementTypeChecker(),
        instanceOf: createInstanceTypeChecker,
        node: createNodeChecker(),
        objectOf: createObjectOfTypeChecker,
        oneOf: createEnumTypeChecker,
        oneOfType: createUnionTypeChecker,
        shape: createShapeTypeChecker,
        exact: createStrictShapeTypeChecker
      };
      function is(x, y) {
        if (x === y) {
          return x !== 0 || 1 / x === 1 / y;
        } else {
          return x !== x && y !== y;
        }
      }
      function PropTypeError(message) {
        this.message = message;
        this.stack = "";
      }
      PropTypeError.prototype = Error.prototype;
      function createChainableTypeChecker(validate) {
        if (true) {
          var manualPropTypeCallCache = {};
          var manualPropTypeWarningCount = 0;
        }
        function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
          componentName = componentName || ANONYMOUS;
          propFullName = propFullName || propName;
          if (secret !== require$$2) {
            if (throwOnDirectAccess) {
              require$$0(
                false,
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
              );
            } else if (typeof console !== "undefined") {
              var cacheKey = componentName + ":" + propName;
              if (!manualPropTypeCallCache[cacheKey] && // Avoid spamming the console because they are often not actionable except for lib authors
              manualPropTypeWarningCount < 3) {
                require$$1(
                  false,
                  "You are manually calling a React.PropTypes validation function for the `%s` prop on `%s`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details.",
                  propFullName,
                  componentName
                );
                manualPropTypeCallCache[cacheKey] = true;
                manualPropTypeWarningCount++;
              }
            }
          }
          if (props[propName] == null) {
            if (isRequired) {
              if (props[propName] === null) {
                return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required " + ("in `" + componentName + "`, but its value is `null`."));
              }
              return new PropTypeError("The " + location + " `" + propFullName + "` is marked as required in " + ("`" + componentName + "`, but its value is `undefined`."));
            }
            return null;
          } else {
            return validate(props, propName, componentName, location, propFullName);
          }
        }
        var chainedCheckType = checkType.bind(null, false);
        chainedCheckType.isRequired = checkType.bind(null, true);
        return chainedCheckType;
      }
      function createPrimitiveTypeChecker(expectedType) {
        function validate(props, propName, componentName, location, propFullName, secret) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== expectedType) {
            var preciseType = getPreciseType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + preciseType + "` supplied to `" + componentName + "`, expected ") + ("`" + expectedType + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createAnyTypeChecker() {
        return createChainableTypeChecker(emptyFunction$2.thatReturnsNull);
      }
      function createArrayOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside arrayOf.");
          }
          var propValue = props[propName];
          if (!Array.isArray(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an array."));
          }
          for (var i = 0; i < propValue.length; i++) {
            var error = typeChecker(propValue, i, componentName, location, propFullName + "[" + i + "]", require$$2);
            if (error instanceof Error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createElementTypeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          if (!isValidElement(propValue)) {
            var propType = getPropType(propValue);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected a single ReactElement."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createInstanceTypeChecker(expectedClass) {
        function validate(props, propName, componentName, location, propFullName) {
          if (!(props[propName] instanceof expectedClass)) {
            var expectedClassName = expectedClass.name || ANONYMOUS;
            var actualClassName = getClassName(props[propName]);
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + actualClassName + "` supplied to `" + componentName + "`, expected ") + ("instance of `" + expectedClassName + "`."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createEnumTypeChecker(expectedValues) {
        if (!Array.isArray(expectedValues)) {
          true ? require$$1(false, "Invalid argument supplied to oneOf, expected an instance of array.") : void 0;
          return emptyFunction$2.thatReturnsNull;
        }
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          for (var i = 0; i < expectedValues.length; i++) {
            if (is(propValue, expectedValues[i])) {
              return null;
            }
          }
          var valuesString = JSON.stringify(expectedValues);
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` of value `" + propValue + "` " + ("supplied to `" + componentName + "`, expected one of " + valuesString + "."));
        }
        return createChainableTypeChecker(validate);
      }
      function createObjectOfTypeChecker(typeChecker) {
        function validate(props, propName, componentName, location, propFullName) {
          if (typeof typeChecker !== "function") {
            return new PropTypeError("Property `" + propFullName + "` of component `" + componentName + "` has invalid PropType notation inside objectOf.");
          }
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type " + ("`" + propType + "` supplied to `" + componentName + "`, expected an object."));
          }
          for (var key in propValue) {
            if (propValue.hasOwnProperty(key)) {
              var error = typeChecker(propValue, key, componentName, location, propFullName + "." + key, require$$2);
              if (error instanceof Error) {
                return error;
              }
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createUnionTypeChecker(arrayOfTypeCheckers) {
        if (!Array.isArray(arrayOfTypeCheckers)) {
          true ? require$$1(false, "Invalid argument supplied to oneOfType, expected an instance of array.") : void 0;
          return emptyFunction$2.thatReturnsNull;
        }
        for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
          var checker = arrayOfTypeCheckers[i];
          if (typeof checker !== "function") {
            require$$1(
              false,
              "Invalid argument supplied to oneOfType. Expected an array of check functions, but received %s at index %s.",
              getPostfixForTypeWarning(checker),
              i
            );
            return emptyFunction$2.thatReturnsNull;
          }
        }
        function validate(props, propName, componentName, location, propFullName) {
          for (var i2 = 0; i2 < arrayOfTypeCheckers.length; i2++) {
            var checker2 = arrayOfTypeCheckers[i2];
            if (checker2(props, propName, componentName, location, propFullName, require$$2) == null) {
              return null;
            }
          }
          return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`."));
        }
        return createChainableTypeChecker(validate);
      }
      function createNodeChecker() {
        function validate(props, propName, componentName, location, propFullName) {
          if (!isNode(props[propName])) {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` supplied to " + ("`" + componentName + "`, expected a ReactNode."));
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          for (var key in shapeTypes) {
            var checker = shapeTypes[key];
            if (!checker) {
              continue;
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, require$$2);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function createStrictShapeTypeChecker(shapeTypes) {
        function validate(props, propName, componentName, location, propFullName) {
          var propValue = props[propName];
          var propType = getPropType(propValue);
          if (propType !== "object") {
            return new PropTypeError("Invalid " + location + " `" + propFullName + "` of type `" + propType + "` " + ("supplied to `" + componentName + "`, expected `object`."));
          }
          var allKeys = assign({}, props[propName], shapeTypes);
          for (var key in allKeys) {
            var checker = shapeTypes[key];
            if (!checker) {
              return new PropTypeError(
                "Invalid " + location + " `" + propFullName + "` key `" + key + "` supplied to `" + componentName + "`.\nBad object: " + JSON.stringify(props[propName], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(shapeTypes), null, "  ")
              );
            }
            var error = checker(propValue, key, componentName, location, propFullName + "." + key, require$$2);
            if (error) {
              return error;
            }
          }
          return null;
        }
        return createChainableTypeChecker(validate);
      }
      function isNode(propValue) {
        switch (typeof propValue) {
          case "number":
          case "string":
          case "undefined":
            return true;
          case "boolean":
            return !propValue;
          case "object":
            if (Array.isArray(propValue)) {
              return propValue.every(isNode);
            }
            if (propValue === null || isValidElement(propValue)) {
              return true;
            }
            var iteratorFn = getIteratorFn(propValue);
            if (iteratorFn) {
              var iterator = iteratorFn.call(propValue);
              var step;
              if (iteratorFn !== propValue.entries) {
                while (!(step = iterator.next()).done) {
                  if (!isNode(step.value)) {
                    return false;
                  }
                }
              } else {
                while (!(step = iterator.next()).done) {
                  var entry = step.value;
                  if (entry) {
                    if (!isNode(entry[1])) {
                      return false;
                    }
                  }
                }
              }
            } else {
              return false;
            }
            return true;
          default:
            return false;
        }
      }
      function isSymbol(propType, propValue) {
        if (propType === "symbol") {
          return true;
        }
        if (propValue["@@toStringTag"] === "Symbol") {
          return true;
        }
        if (typeof Symbol === "function" && propValue instanceof Symbol) {
          return true;
        }
        return false;
      }
      function getPropType(propValue) {
        var propType = typeof propValue;
        if (Array.isArray(propValue)) {
          return "array";
        }
        if (propValue instanceof RegExp) {
          return "object";
        }
        if (isSymbol(propType, propValue)) {
          return "symbol";
        }
        return propType;
      }
      function getPreciseType(propValue) {
        if (typeof propValue === "undefined" || propValue === null) {
          return "" + propValue;
        }
        var propType = getPropType(propValue);
        if (propType === "object") {
          if (propValue instanceof Date) {
            return "date";
          } else if (propValue instanceof RegExp) {
            return "regexp";
          }
        }
        return propType;
      }
      function getPostfixForTypeWarning(value) {
        var type = getPreciseType(value);
        switch (type) {
          case "array":
          case "object":
            return "an " + type;
          case "boolean":
          case "date":
          case "regexp":
            return "a " + type;
          default:
            return type;
        }
      }
      function getClassName(propValue) {
        if (!propValue.constructor || !propValue.constructor.name) {
          return ANONYMOUS;
        }
        return propValue.constructor.name;
      }
      ReactPropTypes.checkPropTypes = checkPropTypes$2;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
    var factoryWithTypeCheckers$1 = Object.freeze({
      default: factoryWithTypeCheckers,
      __moduleExports: factoryWithTypeCheckers
    });
    var factoryWithThrowingShims = function() {
      function shim(props, propName, componentName, location, propFullName, secret) {
        if (secret === require$$2) {
          return;
        }
        require$$0(
          false,
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
      }
      shim.isRequired = shim;
      function getShim() {
        return shim;
      }
      var ReactPropTypes = {
        array: shim,
        bool: shim,
        func: shim,
        number: shim,
        object: shim,
        string: shim,
        symbol: shim,
        any: shim,
        arrayOf: getShim,
        element: shim,
        instanceOf: getShim,
        node: shim,
        objectOf: getShim,
        oneOf: getShim,
        oneOfType: getShim,
        shape: getShim,
        exact: getShim
      };
      ReactPropTypes.checkPropTypes = emptyFunction$2;
      ReactPropTypes.PropTypes = ReactPropTypes;
      return ReactPropTypes;
    };
    var factoryWithThrowingShims$1 = Object.freeze({
      default: factoryWithThrowingShims,
      __moduleExports: factoryWithThrowingShims
    });
    var require$$0$1 = factoryWithTypeCheckers$1 && factoryWithTypeCheckers || factoryWithTypeCheckers$1;
    var propTypes = createCommonjsModule(function(module2) {
      if (true) {
        var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 60103;
        var isValidElement = function(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        };
        var throwOnDirectAccess = true;
        module2.exports = require$$0$1(isValidElement, throwOnDirectAccess);
      } else {
        module2.exports = require$$1$1();
      }
    });
    var classCallCheck = function(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    };
    var createClass = /* @__PURE__ */ function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor)
            descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps)
          defineProperties(Constructor.prototype, protoProps);
        if (staticProps)
          defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();
    var inherits = function(subClass, superClass) {
      if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
      }
      subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
          value: subClass,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      if (superClass)
        Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    };
    var possibleConstructorReturn = function(self, call) {
      if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      return call && (typeof call === "object" || typeof call === "function") ? call : self;
    };
    var ThumbnailImage = function ThumbnailImage2(_ref) {
      var snapshot = _ref.snapshot;
      return React.createElement(
        "div",
        { className: "react-thumbnail-generator" },
        React.createElement("img", { src: snapshot, alt: "my video thumbnail" })
      );
    };
    var VideoThumbnail = function(_React$Component) {
      inherits(VideoThumbnail2, _React$Component);
      function VideoThumbnail2(props) {
        classCallCheck(this, VideoThumbnail2);
        var _this = possibleConstructorReturn(this, (VideoThumbnail2.__proto__ || Object.getPrototypeOf(VideoThumbnail2)).call(this, props));
        _this.getSnapShot = function() {
          try {
            var _this$props = _this.props, width = _this$props.width, height = _this$props.height;
            var video = _this.refs.videoEl;
            var canvas = _this.refs.canvas;
            canvas.height = video.videoHeight;
            canvas.width = video.videoWidth;
            if (!width || !height) {
              canvas.getContext("2d").drawImage(video, 0, 0);
            } else {
              canvas.getContext("2d").drawImage(video, 0, 0, width, height);
            }
            var thumbnail = canvas.toDataURL("image/png");
            video.src = "";
            video.remove();
            canvas.remove();
            _this.setState({
              snapshot: thumbnail
            });
            if (_this.state.thumbnailHandler) {
              _this.state.thumbnailHandler(thumbnail);
            }
          } catch (e) {
            console.error(e);
          }
        };
        _this.state = {
          dataLoaded: false,
          // boolean
          metadataLoaded: false,
          // boolean
          seeked: false,
          // boolean
          snapshot: false,
          // string thumbnail url || false
          suspended: false,
          // boolean
          // props
          cors: props.cors,
          // boolean
          width: props.width,
          // number
          height: props.height,
          // number
          renderThumbnail: props.renderThumbnail,
          // boolean
          snapshotAtTime: props.snapshotAtTime,
          // number
          thumbnailHandler: props.thumbnailHandler,
          // callback function
          videoUrl: props.videoUrl
          // string
        };
        return _this;
      }
      createClass(VideoThumbnail2, [{
        key: "render",
        value: function render() {
          var _this2 = this;
          var _state = this.state, renderThumbnail = _state.renderThumbnail, snapshot = _state.snapshot, videoUrl = _state.videoUrl;
          if (!snapshot) {
            return React.createElement(
              "div",
              { className: "react-thumbnail-generator" },
              React.createElement("canvas", { className: "snapshot-generator", ref: "canvas" }),
              React.createElement("video", {
                muted: true,
                className: "snapshot-generator",
                ref: "videoEl",
                src: videoUrl,
                onLoadedMetadata: function onLoadedMetadata() {
                  return _this2.setState({ metadataLoaded: true });
                },
                onLoadedData: function onLoadedData() {
                  return _this2.setState({ dataLoaded: true });
                },
                onSuspend: function onSuspend() {
                  return _this2.setState({ suspended: true });
                },
                onSeeked: function onSeeked() {
                  return _this2.setState({ seeked: true });
                }
              })
            );
          } else {
            if (renderThumbnail) {
              return React.createElement(ThumbnailImage, { snapshot });
            } else {
              return null;
            }
          }
        }
        /**
        * Update any props that may have changed
        */
      }, {
        key: "componentWillReceiveProps",
        value: function componentWillReceiveProps(nextProps) {
          var stateChanged = false;
          var data = {};
          for (var prop in nextProps) {
            if (nextProps[prop] !== this.props[prop]) {
              data[prop] = nextProps[prop];
              if (!stateChanged) {
                stateChanged = true;
              }
            }
          }
          if (stateChanged) {
            this.setState(data);
          }
        }
      }, {
        key: "componentDidMount",
        value: function componentDidMount() {
          if (!this.state.cors)
            this.refs.videoEl.setAttribute("crossOrigin", "Anonymous");
        }
        /**
         * (fires every time setState() gets called)
         */
      }, {
        key: "componentDidUpdate",
        value: function componentDidUpdate(prevProps, prevState) {
          if (!this.state.snapshot) {
            var _state2 = this.state, metadataLoaded = _state2.metadataLoaded, dataLoaded = _state2.dataLoaded, suspended = _state2.suspended, seeked = _state2.seeked, snapshot = _state2.snapshot, snapshotAtTime = _state2.snapshotAtTime;
            if (metadataLoaded && dataLoaded && suspended) {
              if (!this.refs.videoEl.currentTime || this.refs.videoEl.currentTime < this.state.snapshotAtTime) {
                this.refs.videoEl.currentTime = snapshotAtTime;
              }
              if (seeked && !snapshot) {
                this.getSnapShot();
              }
            }
          }
        }
        /**
         * Create a canvas and video element to "draw" the
         * image, then convert it to a data url
         */
      }]);
      return VideoThumbnail2;
    }(React.Component);
    VideoThumbnail.propTypes = {
      cors: propTypes.bool,
      width: propTypes.number,
      height: propTypes.number,
      renderThumbnail: propTypes.bool,
      snapshotAtTime: propTypes.number,
      thumbnailHandler: propTypes.func,
      videoUrl: propTypes.string.isRequired
      /**
       * Default Properties
       */
    };
    VideoThumbnail.defaultProps = {
      cors: false,
      renderThumbnail: true,
      snapshotAtTime: 2
    };
    module.exports = VideoThumbnail;
  }
});
export default require_bundle();
/*! Bundled license information:

react-video-thumbnail/dist/bundle.js:
  (*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  *)
*/
//# sourceMappingURL=react-video-thumbnail.js.map
