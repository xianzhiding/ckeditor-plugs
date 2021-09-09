/*
 * @Description: 
 * @Author: dingxianzhi
 * @Email: dingxz@moofen.cn
 * @Date: 2021-08-09 10:41:00
 * @LastEditTime: 2021-08-20 10:21:26
 */
/**
 * 自定义虚线实线切换。
 * 插件增加icon，
 * 点击进行当前编辑框内灰色虚线和黑色实线的切换
 * 目前只针对 语文和英语 作文题。
 */
CKEDITOR.plugins.add('underlineSwitch', {
    // icons: 'icon', // 按钮的图标名
    init : function(editor) {
        editor.ui.addButton("underlineSwitch", {
            label : '点击切换虚实线',
            icon : this.path + "icon.png",
            click : function(e) {
                var id = e.tabIndex;
                domCtrl4Other.switchLineType(id);
            }
        });
    }
});