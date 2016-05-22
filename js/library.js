'use strict';

var BLENDLE = (function() {
  return {
    toggleClass: function (element, className) {
      var classString = element.className,
          nameIndex = classString.indexOf(className);

      if (!element || !className){
        return;
      }

      if (nameIndex == -1) {
        classString += ' ' + className;
        classString = classString.replace(/ +/g, ' ');
      } else {
        classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+className.length).replace(/ +/g, ' ');
      }

      element.className = classString;
    },

    hasClass: function (element, cls) {
      return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
    },

    removeClass: function (element, cls) {
      if (this.hasClass(element, cls)) {
          var reg = new RegExp('(\\s|^)'+ cls +'(\\s|$)');
          console.log(element);
          element.className = element.className.replace(reg,' ');
      }
    }
  }
})();
