<?php
    $ch = curl_init(); 
    curl_setopt($ch, CURLOPT_POST, 1); 
    curl_setopt($ch, CURLOPT_POSTFIELDS, "access_token=2.00_gO8oBFwkQnB6d802efdb1mUbOtD&status=test_test"); 
    curl_setopt($ch, CURLOPT_RETURNTRANSFER,1); 
    curl_setopt($ch, CURLOPT_COOKIEFILE, "/Library/WebServer/Documents/tmp/cookieFileName"); 
    curl_setopt($ch, CURLOPT_URL,"https://api.weibo.com/2/statuses/update.json"); 
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); 
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true); 
    $result = curl_exec ($ch); 
    echo $result;
    curl_close ($ch);
?>
