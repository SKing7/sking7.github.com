Y.add('web-base', function (Y) {
    Y.namespace('mt.web');
    Y.mt.web = {
        init: function () {
            this.initSlide();
        },
        initSlide: function () {
            var ndNav = Y.one('.J-main-nav'),
                ndLink,
                ndTmpSubNav,
                nlNavItems = ndNav.all('>li');

            ndNav.delegate('click', function (e) {
                e.halt();
                ndTmpSubNav = e.target.next('.J-sub-nav');
                if (ndTmpSubNav) {
                    if (!ndTmpSubNav.getData('status')) {
                        ndTmpSubNav.setStyle('display', 'block');
                        ndTmpSubNav.setData('status', true);
                    } else {
                        ndTmpSubNav.setStyle('display', 'none');
                        ndTmpSubNav.setData('status', false);
                    }
                }
            }, 'a');
            nlNavItems.each(function (nd) {
                if (nd.one('>ul')) {
                    ndLink = nd.one('a');
                    ndLink.appendChild('<span class="hasDrop icon16 icomoon-icon-arrow-down-2"></span>');
                }
            });
        }
    };
}, '0.0.1', { requires: ['node']});  
