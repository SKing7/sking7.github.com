Y.add('web-base', function (Y) {
    Y.namespace('mt.web');
    Y.mt.web = {
        init: function () {
            this.initSlide();
        },
        initSlide: function () {
            var ndNav = Y.one('.J-main-nav'),
                nlNavItems = ndNav.all('>li');

            console.log(nlNavItems);
        }
    };
}, '0.0.1', { requires: ['node', 'dom', 'oop']});  
