<?php
    class ScriptHelper { 
        public static function blkJsCore() {
            echo " 
            <script src=\"js/yui/yui-base/yui-base-min.js\"></script>
            <script>" .
                self::getYUIGroup() ."
                var Y = YUI();
                Y.use('web-base', function (Y) {
                    Y.mt.web.init();
                    
                });
            </script>\n";
        }
        public static function getYUIGroup() {
                return "
                YUI.GlobalConfig = {
                    combine: true,
                    groups: { 
                        web: {
                            base: '/sup/js/web/',
                            modules: { 
                                combine: false,
                                'web-base': {
                                    requires: ['node'],
                                    path: 'base.js'
                                }
                            }
                        }
                    }
                }";
        }
    }
?>
