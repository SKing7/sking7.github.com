<?php

class Loader
{
    public static function registerAutoload()
    {
        spl_autoload_register(array('Loader', 'load'));
    }

    /**
     * 自动载入$class类名对应的文件
     *
     * @param String $class
     * @return Boolean true为成功
     */
    public static function load($class)
    {
        if (class_exists($class, false) || interface_exists($class, false)) {
            return true;
        }
        if (substr($class, -6) == 'Helper') {
            $file = sprintf('%shelper/%s.php', ROOT, $class);
        }
        if (is_file($file)) {
            require_once($file);
        }
    }
}
