'use strict';

var ARTICLES = (function(){
  var articleSnippet = document.getElementsByClassName('js-article-snippet'),
      articleReader = document.getElementsByClassName('js-article-reader'),
      articleReaderClassName = articleReader.className,
      visibleClassName = 'is-visible';

  return {
    openArticle: function () {
      for (var i = 0, x = articleSnippet.length; i < x; i++) {
        articleSnippet[i].onclick = function() {
          BLENDLE.toggleClass(articleReader[0], visibleClassName);
        }
      }
    },

    closeArticle: function () {
        articleReader[0].onclick = function() {
          if (BLENDLE.hasClass(articleReader[0], visibleClassName)) {
            BLENDLE.removeClass(articleReader[0], visibleClassName);
          } else {
            console.log('2: ' + 'nope');
          }
        }
    }
  };
})();

ARTICLES.openArticle();
ARTICLES.closeArticle();
