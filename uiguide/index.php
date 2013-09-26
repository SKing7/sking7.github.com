<?php include_once('config.php'); ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>美团样式规范</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <!-- Use new way for google web fonts 
        http://www.smashingmagazine.com/2012/07/11/avoiding-faux-weights-styles-google-web-fonts -->
        <link id="bootstrap" href="css/bootstrap/bootstrap.min.css" rel="stylesheet" type="text/css" />
        <link href="css/icons.css" rel="stylesheet" type="text/css" />
        <link href="css/main.css" rel="stylesheet" type="text/css" /> 
        <link rel="shortcut icon" href="images/favicon.ico" />
    </head>
    <body>
        <div id="header">
            <div class="navbar">
                <div class="navbar-inner">
                  <div class="container-fluid">
                    <a class="brand" href="dashboard.html">UIGuide   <span class="slogan">Fe.web</span></a>
                    <div class="nav-no-collapse">
                        <ul class="nav pull-right usernav">
                            <li><a href="http://fe.sankuai.com/" target="_blank">FE Develop Platform</a></li>
                        </ul>
                    </div><!-- /.nav-collapse -->
                  </div>
                </div><!-- /navbar-inner -->
              </div><!-- /navbar --> 
        </div><!-- End #header -->
        <div id="wrapper">
            <!--Sidebar background-->
            <div id="sidebarbg"></div>
            <!--Sidebar content-->
            <div id="sidebar">
                <div class="shortcuts">
                    <ul>
                        <li><a href="support.html" title="Support section" class="tip"><span class="icon24 icomoon-icon-support"></span></a></li>
                        <li><a href="#" title="Database backup" class="tip"><span class="icon24 icomoon-icon-database"></span></a></li>
                        <li><a href="charts.html" title="Sales statistics" class="tip"><span class="icon24 icomoon-icon-pie-2"></span></a></li>
                        <li><a href="#" title="Write post" class="tip"><span class="icon24 icomoon-icon-pencil"></span></a></li>
                    </ul>
                </div><!-- End search -->            
                <div class="sidenav">
                    <div class="mainnav">
                        <ul class="J-main-nav">
                            <li><a href="charts.html"><span class="icon16 icomoon-icon-stats-up"></span>Charts</a></li>
                            <li>
                                <a href="#"><span class="icon16 icomoon-icon-list"></span>Forms</a>
                            </li>
                            <li>
                                <a href="#"><span class="icon16 icomoon-icon-table-2"></span>Tables</a>
                            </li>
                            <li>
                                <a href="#"><span class="icon16 icomoon-icon-equalizer-2"></span>UI Elements</a>
                                <ul class="sub J-sub-nav">
                                    <li><a href="icons.html"><span class="icon16 icomoon-icon-rocket"></span>Icons</a></li>
                                    <li><a href="buttons.html"><span class="icon16 icomoon-icon-file"></span>Buttons</a></li>
                                    <li><a href="elements.html"><span class="icon16 icomoon-icon-cogs"></span>Elements</a></li>
                                </ul>
                            </li>
                            <li><a href="typo.html"><span class="icon16 icomoon-icon-font"></span>Typography</a></li>
                            <li><a href="grid.html"><span class="icon16 icomoon-icon-grid"></span>Grid</a></li>
                            <li><a href="calendar.html"><span class="icon16 icomoon-icon-calendar"></span>Calendar</a></li>
                            <li><a href="file.html"><span class="icon16 icomoon-icon-upload"></span>File Manager</a></li>
                        </ul>
                    </div>
                </div><!-- End sidenav -->
            </div><!-- End #sidebar -->
            <div id="content" class="clearfix">
                <div class="contentwrapper"><!--Content wrapper-->
                    <div class="heading">
                        <h3>Forms</h3>                    
                    </div><!-- End .heading-->
                    <div class="row-fluid">
                        <div class="page-header"><h4>Normal buttons<h4></div>
                    </div>
                </div><!-- End contentwrapper -->
            </div><!-- End #content -->
        </div><!-- End #wrapper -->
        <?php include_once( ROOT . 'common/footer.php');?>
    </body>
</html>
