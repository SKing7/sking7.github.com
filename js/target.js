    window.$readable = {};
	//	launch function
	//	===============
		function __readable_launch ($R)
		{
            $R.win = window;
            $R.document = window.document;
            $R.version = '3374.689.453';
            $R.paths = 
            {
                'main':		'',
                'evernote':	'https://www.evernote.com/'
            };

            $R.versioning =
            {
                'file_name_bulk_js': 		        'bulk.js',
                'file_name_bulk_css':		        'bulk.css',
                'file_name_jQuery_js':		        'jQuery.js',
                'file_name_miniColors_js':	        'jquery.miniColors.js',
                'file_name_miniColors_css':	        'jquery.miniColors.css',
                'file_name_flexSelect_js':	        'jquery.flexSelect.js',
                'file_name_liquidMetal_js':	        'liquidMetal.js',
                'file_name_flexSelect_css':	        'flexSelect.css',
                'file_name_audio_js':	            'audio.js',
                
                'file_name_base--theme-1_css':	    'base--theme-1.css',
                'file_name_base--theme-2_css':	    'base--theme-2.css',
                'file_name_base--theme-3_css':	    'base--theme-3.css',
                'file_name_base--blueprint_css':    'base--theme-blueprint.css',

                'file_name_defined--theme-1_css':	'defined--theme-1.css',
                'file_name_defined--theme-2_css':	'defined--theme-2.css',
                'file_name_defined--theme-3_css':	'defined--theme-3.css'
            };

			
        $R.customScript = false;
		var resourceHTML = ''
            +        '<!DOCTYPE html>'
            +        '<html>'
            +        '  <head>'
            +        '    <meta charset="utf-8" />'
            +        '    <meta http-equiv="X-UA-Compatible" content="chrome=1" />'
            +        '    <title></title>'
			+		'<link rel="stylesheet" href="'+$R.paths['main']+'css/'+$R.versioning['file_name_bulk_css']+'" type="text/css" />'
			+		'<script type="text/javascript" src="'+$R.paths['main']+'js/'+$R.versioning['file_name_jQuery_js']+'"></script>'
                    
			+		'<script type="text/javascript" src="'+$R.paths['main']+'js/'+$R.versioning['file_name_audio_js']+'"></script>'
                    
			+		(($R.customScript > '') ? '<script type="text/javascript" src="'+$R.customScript+'"></script>' : '')
			+		'<script type="text/javascript" src="'+$R.paths['main']+'js/'+$R.versioning['file_name_bulk_js']+'"></script>'
            +          '</head>' 
            +          '<body>'
            +          '  <div id="bodyContent"></div>'
            +          '</body>'
            +          '</html>';

		var _body = document.getElementsByTagName('body')[0];
		var _doc = document;
			_doc.open();
			_doc.write(resourceHTML);
			_doc.close();

		}
        switch (true)
        {
            case ((window.$readable) && !(window.$clearly)):
                window.$clearly = window.$readable;
                break;
                
            case ((window.$clearly) && !(window.$readable)):
                window.$readable = window.$clearly;
                break;
        }
        
		
		if (document.readyState); else { __readable_launch(window.$readable); } 
		
		function __readable_launch_ready(delayedNrTimes)
		{
			//if (window.console && window.console.log) { window.console.log('launch ready '+delayedNrTimes);}
			
			if (document.readyState != 'complete' && delayedNrTimes < 30)
				{ setTimeout(function () { __readable_launch_ready(delayedNrTimes + 1); }, 100); return; }
			
			__readable_launch(window.$readable);
		}

		__readable_launch_ready(0);
