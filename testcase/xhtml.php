<!DOCTYPE HTML>
<html>
    <head>
    <meta charset="utf-8">
    <script src="sking7/yui/build/yui/yui-min.js"></script>
    <link type="text/css" rel="stylesheet" href="../css/main.css" media="all" />
    <style src="sking7/yui/build/yui/yui-min.js"></script>
    <title></title>
    <style>
        body { color:#333;  font: 14px 'Helvetica Neue', Helvetica, Tahoma, Arial, sans-serif; }
        .mainbox { width:400px; margin:150px auto; border:10px solid #E4F7F5; border-radius:4px;  padding:25px 30px 30px; background:#FFF; } 
        * { padding:0; margin:0; }
    </style>
    </head>
    <body>
        <script>var sd = new Date();</script>
        <?php 
            for ($i =1; $i<10000; $i++)
            {
                echo '<input type="text" value="1"/>';
            }
        ?>
        <script>
            var ed = new Date();
            document.write(ed - sd);
        </script>
    </body>
</html>
