var det = new Image();
Object.defineProperty(det, 'id', {
    get: function() {
        devtoolsOpen();
    }
});
console.log('%cHi', det);
setInterval(function(){if (window.console && (window.console.firebug || window.console.exception)) {
  devtoolsOpen();
}},1000);
