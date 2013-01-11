<?php
     //声明生成PNG图片
     Header("Content-type: image/PNG");
     //打印的文字
     $str = "Welcome to China!! 完成!!"; 
     //显示的字体样式, 必须为中文样式, 否则乱码, 控制面板"字体"里拷贝一个汉字字体即可
     $fnt = "black.ttf";
     //设置图片大小
     $image_x = 600; //长度
     $image_y = 200; //宽度
     //创建图片
     $im = imagecreate($image_x,$image_y); 
     //设置背景颜色
     $bkg   = imagecolorallocate($im,255,255,255);  
     //设置相关颜色
     $noise_color = imagecolorallocate($im,0x00,0x00,0x00);
     $font_color  = imagecolorallocate($im,0x00,0x00,0x00);
     $line_color  = imagecolorallocate($im,0x00,0x00,0x00);
     $str2 = iconv("GB2312", "UTF-8", $str);
     ImageTTFText($im, 10, 0, rand(25,27), rand(70,100), $font_color, $fnt, $str2);
     //生成图片
     ImagePNG($im);
     ImageDestroy($im);
    ?>
