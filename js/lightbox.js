var LIGHTBOX = (function(){
    var galleryImg = document.querySelectorAll('.js-gallery-img'),
    overlayImg = document.querySelectorAll('.js-overlay-img'),
    galleryOverlay = document.querySelectorAll('.js-overlay'),
    galleryImagePositioner = document.querySelectorAll('.js-image-positioner'),
    closeImg = document.querySelectorAll('.js-gallery-close'),
    parentEl = document.querySelectorAll('.js-article-reader'),
    visibleClassName = 'is-active',
    noScrollClassName = 'no-scroll',
    dataSrc;

    return {
        open: function () {
            for (var i = 0, x = galleryImg.length; i < x; i++) {
                galleryImg[i].addEventListener('click', function(e) {
                    dataSrc = this.dataset.src;
                    overlayImg[0].src = dataSrc;
                    $B.addClass(galleryOverlay[0], visibleClassName);
                    $B.addClass(galleryImagePositioner[0], visibleClassName);
                    $B.addClass(parentEl[0], noScrollClassName);
                    e.preventDefault();
                });
            }
        },

        close: function () {
            galleryOverlay[0].addEventListener('click', function(e) {
                e.preventDefault();
                $B.removeClass(galleryOverlay[0], visibleClassName);
                $B.removeClass(galleryImagePositioner[0], visibleClassName);
                $B.removeClass(parentEl[0], noScrollClassName);
                e.preventDefault();
            });
        }
    }
})();

LIGHTBOX.open();
LIGHTBOX.close();
