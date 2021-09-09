/*
 * @Description: 插入空格
 * @Author: dingxianzhi
 * @Email: dingxz@moofen.cn
 * @Date: 2021-07-19 15:52:18
 * @LastEditTime: 2021-08-20 15:28:56
 */
(function(){
    CKEDITOR.plugins.add("blankline", {
        init: function(e) {
            e.addCommand("insertBlankline", {
                exec: function(e) {
                    e.insertHtml("<u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>");
                }
            });
            e.ui.addButton("blankline", {
                label: "插入空格",
                command: "insertBlankline",
                icon: this.path + "icons/icon.png"
            });
        }
    });
})();