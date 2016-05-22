//
// $Blendle Library
//

var $B = (function() {
    'use strict';

    return {
        toggleClass: function (element, cls) {
            var classString = element.className,
            nameIndex = classString.indexOf(className);

            if (!element || !className){
                return;
            }

            if (nameIndex == -1) {
                classString += ' ' + className;
                classString = classString.replace(/ +/g, ' ');
            } else {
                classString = classString.substr(0, nameIndex) + classString.substr(nameIndex+cls.length).replace(/ +/g, ' ');
            }

            element.className = classString;
        },

        hasClass: function (element, cls) {
            return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
        },

        addClass: function (element, cls) {
            if (!this.hasClass(element, cls)) {
                element.className += ' ' + cls;
            }
        },

        removeClass: function (element, cls) {
            if (this.hasClass(element, cls)) {
                var reg = new RegExp('(\\s|^)'+ cls +'(\\s|$)');
                element.className = element.className.replace(reg,' ');
            }
        }
    }
})();
