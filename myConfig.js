/*
 * @Description: 
 * @Author: dingxianzhi
 * @Email: dingxz@moofen.cn
 * @Date: 2021-07-01 16:15:24
 * @LastEditTime: 2021-08-23 16:30:46
 */
/**
 * @license Copyright (c) 2003-2020, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see https://ckeditor.com/legal/ckeditor-oss-license
 */
CKEDITOR.editorConfig = function (config) {
	config.language = 'zh-cn';
	config.forcePasteAsPlainText = false;
	config.shiftEnterMode = CKEDITOR.ENTER_P;
	config.enterMode = CKEDITOR.ENTER_P; //enter实现换行
	config.pasteFromWordRemoveStyles = true;
	config.pasteFromWordRemoveFontStyles = true;
	// Set the most common block elements.
	config.format_tags = 'p;h1;h2;h3;pre';
	config.disableNativeTableHandles = false;
	config.toolbarStartupExpanded = true;
	config.toolbarGroups = [{
			name: 'clipboard', groups: ['clipboard', 'undo']
		},
		{
			name: 'basicstyles',
			groups: ['Bold', 'Italic', 'Underline', 'Subscript', 'Superscript', 'RemoveFormat']
		},
		{
			name: 'insert'
		},
		{
			name: 'forms'
		},
		{
			name: 'others'
		},
		{
			name: 'styles'
		}
	];
	config.extraPlugins = 'kityformula, blankline, dottedline, waveline, insertSport';
	// config.extraPlugins = 'ckeditor_wiris';
	config.removeButtons = 'style, editing,links, about';
	// Simplify the dialog windows.
	config.removeDialogTabs = 'image:advanced;link:advanced';
	config.allowedContent = true;
	// config.mathJaxClass = 'mf-math';
	config.mathJaxLib = 'http://code.moofen.net/assets/mathJax/2.7.8/MathJax.js?config=TeX-AMS_HTML';
	
	config.filebrowserImageUploadUrl= 'http://localhost:9090/'+mfc.getContextPath()+ '/qb/question/imageUpload';
	config.removeDialogTabs= 'image:advanced;image:Link';
	//隐藏超链接与高级选项
	config.image_previewText = '上传图片描述';
	config.placeholder  = '请输入内容...';

	
};