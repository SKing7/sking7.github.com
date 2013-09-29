<?php
    //伪造头部
    function getHeader($url) {
        // 分解url 
        $temp = parse_url($url); 
        $query = isset($temp['query']) ? $temp['query'] : ''; 
        // 随机ip 
        $path = isset($temp['path']) ? $temp['path'] : '/'; 

        $header = array ( 
            "GET {$path}?{$query} HTTP/1.1", 
            "Host: {$temp['host']}",  
            'Accept: */*',  
            "Referer: http://{$temp['host']}", 
            'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10_7_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.116 Safari/537.36',  
            "cookie: SUE=es%3D4cad00081d47991c5f44f8c7759e1450%26ev%3Dv1%26es2%3Daadd5d3e478ee925137bbffb9af5a86b%26rs0%3DKn9wHCHkpRHMtsFluoXNk7KWXi1umBNQQGgyUrhCcqyoTdzePEbKMAi%252BH2Yie3iz4iIN9CHyV56Njt3SmGMRQEip80%252BgeVt%252F63xrYHmM4C%252Bx7fen7tnzT%252BT5993Q6Ni5QrSSVPSinnwA5uzPuv25Nvh4p092zj2vOKoWOOt4%252BLU%253D%26rv%3D0; SUP=cv%3D1%26bt%3D1372817738%26et%3D1372904138%26d%3Dc909%26i%3Dffc4%26us%3D1%26vf%3D0%26vt%3D0%26ac%3D41%26st%3D0%26uid%3D1661440927%26name%3Dlz12366%2540126.com%26nick%3D%25E5%25A2%25A8%25E5%25B0%2594%25E6%259C%25AC%25E6%2599%25B4007%26fmp%3D%26lcp%3D2013-04-07%252020%253A46%253A21; SUS=SID-1661440927-1372817738-JA-vt7ws-eb81b4c6c105597db36520a3b200994d;",
            "Connection: keep-alive" 
        ); 
        return $header; 
    }
    function getWeiboContent() {
        $key_array = array (
            'One Day',
            'Walk Away',
            '我在欧洲，打电话给你',
            'How to Fight Loneliness',
        );
        $today = $key_array[count($key_array) - 1]; 
        $ch = curl_init(); 
        curl_setopt($ch, CURLOPT_POST, 1); 
        curl_setopt($ch, CURLOPT_POSTFIELDS, "key=".$today); 
        curl_setopt($ch, CURLOPT_RETURNTRANSFER,1); 
        curl_setopt($ch, CURLOPT_URL,"http://www.xiami.com/ajax/search-index"); 
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 
        $data = curl_exec ($ch); 
        preg_match("!<li\s+class=\"result\"><a(.*?)\s+href=\"(http:\/\/www.xiami.com\/song\/\d*)\"!", $data, $matches);
        curl_close ($ch);
        $name = 'https://www.google.com.hk/search?q=' . $today;
        if (isset($matches[2])) {
            $name = $matches[2];
        }
        var_dump($name);
        return $today. ' :' . $name . '         【  From @gotonextday. One Day One Song  】';
    }
   // getWeiboContent();
    //return;
    $url = 'https://api.weibo.com/oauth2/authorize?client_id=1644166969&redirect_uri=http%3A%2F%2Fweibo.com%2Fsking7';
    #$url = 'meituan.com';

    $ch = curl_init(); 

    //设置头部
    curl_setopt($ch, CURLOPT_COOKIESESSION, true);
    curl_setopt($ch, CURLOPT_URL, $url); //specify your URL
    curl_setopt($ch, CURLOPT_HEADER, true); //include headers in http data
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); //don't follow redirects
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
    curl_setopt($ch, CURLOPT_NOBODY, true);
    $header = getHeader($url); 
    curl_setopt($ch, CURLOPT_HTTPHEADER, $header);

    $http_data = curl_exec($ch); //hit the $url
    curl_close ($ch);
    preg_match("!\s+Location\s*:\s*(.*?)\s+!", $http_data, $matches);
    $url = $matches[1];
    $temp = parse_url($url); 
    $code = $temp['query'];
    $codeValue = explode("=", $code, 2);
    $code = $codeValue[1];

    //以上获得code

    $ch = curl_init(); 
    curl_setopt($ch, CURLOPT_POST, 1); 
    curl_setopt($ch, CURLOPT_POSTFIELDS, "client_id=1644166969&redirect_uri=http%3A%2F%2Fweibo.com%2Fsking7&client_secret=9a7357143994055667ab56a158cf0da6&code=" . $code); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1); 
    curl_setopt($ch, CURLOPT_URL,"https://api.weibo.com/oauth2/access_token"); 
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); 
    $token = curl_exec ($ch); 
    curl_close ($ch);

    //以上获得token

    $ch = curl_init(); 
    curl_setopt($ch, CURLOPT_POST, 1); 
    curl_setopt($ch, CURLOPT_POSTFIELDS, "access_token=2.00_gO8oBFwkQnB6d802efdb1mUbOtD&status=". getWeiboContent()); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1); 
    curl_setopt($ch, CURLOPT_URL,"https://api.weibo.com/2/statuses/update.json"); 
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); 
    $result = curl_exec ($ch); 
    curl_close ($ch);
    
?>
