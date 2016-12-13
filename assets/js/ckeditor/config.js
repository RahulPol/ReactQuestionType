/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function (config) {

	// %REMOVE_START%
	// The configuration options below are needed when running CKEditor from source files.
	config.plugins = 'dialogui,dialog,about,a11yhelp,basicstyles,blockquote,clipboard,panel,floatpanel,menu,contextmenu,resize,button,toolbar,elementspath,enterkey,entities,popup,filebrowser,floatingspace,listblock,richcombo,format,horizontalrule,htmlwriter,wysiwygarea,image,indent,indentlist,fakeobjects,link,list,magicline,maximize,pastetext,pastefromword,removeformat,showborders,sourcearea,specialchar,menubutton,scayt,stylescombo,tab,table,tabletools,undo,wsc,imageuploader,lineutils,widgetselection,widget,mathjax,pbckcode';
	config.skin = 'icy_orange';
	// %REMOVE_END%

	// Define changes to default configuration here.
	// For complete reference see:
	// http://docs.ckeditor.com/#!/api/CKEDITOR.config

	// The toolbar groups arrangement, optimized for two toolbar rows.	
	config.toolbarGroups = [
		{ name: 'clipboard', groups: ['clipboard', 'undo'] },
		{ name: 'editing', groups: ['find', 'selection', 'spellchecker'] },
		{ name: 'links' },
		{ name: 'insert' },
		{ name: 'forms' },
		{ name: 'tools' },
		{ name: 'document', groups: ['mode', 'document', 'doctools'] },
		{ name: 'others' },
		{ name: 'pbckcode' },
		'/',
		{ name: 'basicstyles', groups: ['basicstyles', 'cleanup'] },
		{ name: 'paragraph', groups: ['list', 'indent', 'blocks', 'align', 'bidi'] },
		{ name: 'styles' },
		{ name: 'colors' },

	];

	// Remove some buttons provided by the standard plugins, which are
	// not needed in the Standard(s) toolbar.
	config.removeButtons = 'Underline,Source';

	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';

	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';

	config.mathJaxLib = 'http://cdn.mathjax.org/mathjax/2.2-latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML';

	// ADVANCED CONTENT FILTER (ACF)
	// ACF protects your CKEditor instance of adding unofficial tags
	// however it strips out the pre tag of pbckcode plugin
	// add this rule to enable it, useful when you want to re edit a post
	// Only needed on v1.1.x and v1.2.0
	//config.allowedContent = 'pre[*]{*}(*)'; // add other rules here

	// PBCKCODE CUSTOMIZATION
	config.pbckcode = {
		// An optional class to your pre tag.
		cls: '',

		// The syntax highlighter you will use in the output view
		highlighter: 'PRETTIFY',

		// An array of the available modes for you plugin.
		// The key corresponds to the string shown in the select tag.
		// The value correspond to the loaded file for ACE Editor.
		modes: [['HTML', 'html'], ['CSS', 'css'], ['PHP', 'php'], ['JS', 'javascript'], ['JAVA', 'java'], ['C', 'c'], ['C++', 'c++']],

		// The theme of the ACE Editor of the plugin.
		theme: 'tomorrow_night',

		// Tab indentation (in spaces)
		tab_size: '4',

		// the root path of ACE Editor. Useful if you want to use the plugin
		// without any Internet connection
		js: "https://cdnjs.cloudflare.com/ajax/libs/ace/1.2.0/"
	};
};
