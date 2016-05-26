var ARTICLES = (function(){
    'use strict';

    var articleSnippet = document.getElementsByClassName('js-article-snippet'),
        articleReader = document.getElementsByClassName('js-article-reader'),
        moreButton = document.getElementsByClassName('js-article-snippet-more'),
        closeButton = document.getElementsByClassName('js-close-button'),
        image = document.getElementsByClassName('js-image-gallery'),
        body = document.body,
        articleReaderClassName = articleReader.className,
        visibleClassName = 'is-visible',
        noScrollClassName = 'no-scroll';

    return {
        openArticle: function () {
            for (var i = 0, x = articleSnippet.length; i < x; i++) {
                articleSnippet[i].addEventListener('click', function() {
                    $B.addClass(articleReader[0], visibleClassName);
                    $B.addClass(body, noScrollClassName);
                });
            }
        },

        closeArticle: function () {
            closeButton[0].addEventListener('click', function() {
                if ($B.hasClass(articleReader[0], visibleClassName)) {
                    $B.removeClass(articleReader[0], visibleClassName);
                    $B.removeClass(body, noScrollClassName);
                }
            });
        },

        openMore: function () {
            moreButton[0].addEventListener('click', function(event) {
                event.stopPropagation();
            });
        }
    };
})();

ARTICLES.openArticle();
ARTICLES.closeArticle();
ARTICLES.openMore();
