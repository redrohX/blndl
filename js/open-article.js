var ARTICLES = (function(){
    'use strict';

    var articleSnippet = document.getElementsByClassName('js-article-snippet'),
    articleReader = document.getElementsByClassName('js-article-reader'),
    articleReaderClassName = articleReader.className,
    visibleClassName = 'is-visible',
    moreButton = document.getElementsByClassName('js-article-snippet-more');

    return {
        openArticle: function () {
            for (var i = 0, x = articleSnippet.length; i < x; i++) {
                articleSnippet[i].onclick = function() {
                    $B.toggleClass(articleReader[0], visibleClassName);
                }
            }
        },

        closeArticle: function () {
            articleReader[0].onclick = function() {
                if ($B.hasClass(articleReader[0], visibleClassName)) {
                    $B.removeClass(articleReader[0], visibleClassName);
                }
            }
        },

        openMore: function () {
            moreButton[0].onclick = function(event) {
                event.stopPropagation();
            }
        }
    };
})();

ARTICLES.openArticle();
ARTICLES.closeArticle();
ARTICLES.openMore();
