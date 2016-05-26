var LOADED = (function () {
    var loadedClass = ' is-loaded';
    window.onload = function() {
        document.body.className += loadedClass;
    };
})();
