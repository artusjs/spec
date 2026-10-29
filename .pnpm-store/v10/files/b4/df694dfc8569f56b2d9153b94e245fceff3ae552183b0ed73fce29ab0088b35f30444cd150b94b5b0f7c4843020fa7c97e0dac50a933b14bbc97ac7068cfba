const RefreshUtils = require('./refreshUtils');
const RefreshRuntime = require('react-refresh/runtime');

function refresh(moduleId, webpackHot) {
  const currentExports = RefreshUtils.getModuleExports(moduleId);
  const fn = (exports) => {
    var errorOverlay;
    if (typeof __react_refresh_error_overlay__ !== 'undefined') {
      errorOverlay = __react_refresh_error_overlay__;
    }
    var testMode;
    if (typeof __react_refresh_test__ !== 'undefined') {
      testMode = __react_refresh_test__;
    }
    RefreshUtils.executeRuntime(
      exports,
      moduleId,
      webpackHot,
      errorOverlay,
      testMode,
    );
  };
  if (typeof Promise !== 'undefined' && currentExports instanceof Promise) {
    currentExports.then(fn);
  } else {
    fn(currentExports);
  }
}

module.exports = {
  refresh,
  register: RefreshRuntime.register,
  createSignatureFunctionForTransform:
    RefreshRuntime.createSignatureFunctionForTransform,
};
