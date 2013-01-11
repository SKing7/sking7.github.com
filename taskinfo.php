<?php
    $name =  $_POST["name"];;
    $pwd =  $_POST["pwd"];;

    /**   
    * Curl 模拟登录 discuz 程序   
    */   
    function send() {
       
        $discuz_url = 'http://www.lxvoip.com';//论坛地址    
        $login_url = $discuz_url .'/logging.php?action=login';//登录页地址    
        $get_url = $discuz_url .'/my.php?item=threads'; //我的帖子    

        $post_fields = array();    
        //以下两项不需要修改    
        $post_fields['loginfield'] = 'username';    
        $post_fields['loginsubmit'] = 'true';    
        //用户名和密码，必须填写    
        $post_fields['username'] = 'lxvoip';    
        $post_fields['password'] = '88888888';    

        //POST数据，获取COOKIE    
        $ch = curl_init($login_url);    
        curl_setopt($ch, CURLOPT_HEADER, 0);    
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);    
        curl_setopt($ch, CURLOPT_POST, 1);    
        curl_setopt($ch, CURLOPT_POSTFIELDS, $post_fields);    
        curl_setopt($ch, CURLOPT_COOKIEJAR, $cookie_file);    
        curl_exec($ch);    
        curl_close($ch);    

        //带着上面得到的COOKIE获取需要登录后才能查看的页面内容    
        $ch = curl_init($get_url);    
        curl_setopt($ch, CURLOPT_HEADER, 0);    
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 0);    
        curl_setopt($ch, CURLOPT_COOKIEFILE, $cookie_file);    
        $contents = curl_exec($ch);    
        curl_close($ch);    

        var_dump($contents);    
    }
?>
