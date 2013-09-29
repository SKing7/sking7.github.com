<!DOCTYPE HTML>
<?php
    $url = 'http://task.sankuai.com/issues/?jql=assignee%20%3D%20currentUser()%20AND%20resolution%20%3D%20Fixed%20AND%20resolutiondate%20%3E%20-7d%20ORDER%20BY%20resolutiondate%20DESC';
    $ch = curl_init();
    $timeout = 5;
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
    //在需要用户检测的网页里需要增加下面两行
    curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
    curl_setopt($ch, CURLOPT_USERPWD, "liuzhe02@meituan.com:1994219liu");
    $content = curl_exec($ch);
    curl_close($ch);
?>
<html>
    <head>
    <meta charset="utf-8">
    <title></title>
    <style>
        body { color:#333;  font: 14px 'Helvetica Neue', Helvetica, Tahoma, Arial, sans-serif; }
        .mainbox { width:400px; margin:150px auto; border:10px solid #E4F7F5; border-radius:4px;  padding:25px 30px 30px; background:#FFF; } 
        * { padding:0; margin:0; }
    </style>
    </head>
    <body>
        <div class="mainbox">
            <form action="taskinfo.php" method="POST">
                <div><label>用户名：</label><input name='name'/></div>
                <div><label>密码：</label><input name='pwd'/></div>
               <input name='submit' type='submit' value='提交' /> 
           </form>
        </div>
    </body>
</html>
