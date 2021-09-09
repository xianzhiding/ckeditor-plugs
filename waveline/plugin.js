/*
 * @Description: 插入波浪线
 * @Author: dingxianzhi
 * @Email: dingxz@moofen.cn
 * @Date: 2021-07-19 15:52:18
 * @LastEditTime: 2021-08-20 15:25:24
 */
(function () {
    CKEDITOR.plugins.add("waveline", {
        init: function (c) {
            var self = this;
            var h = {
                waveline: ["bdi", ["span", function (a) {
                    return "underline" == a.styles["text-decoration"]
                }]],
            },
            b = c.config;
            function renderWaveline(g, a) {
                if (a) {
                    a = new CKEDITOR.style(a);
                    var f = h[g];

                    f.unshift(a);
                    c.attachStyleStateChange(a, function (a) {
                        !c.readOnly && c.getCommand(g).setState(a)
                    });
                    c.addCommand(g, new CKEDITOR.styleCommand(a, {
                        contentForms: f
                    }));
                    c.ui.addButton && c.ui.addButton(g, {
                        label: '插入波浪线',
                        command: g,
                        icon: self.path + "icons/icon.png"
                    });
                }
            }
            renderWaveline("waveline", b.styles_waveline);
        }
    });
    CKEDITOR.config.styles_waveline = {
        element: "bdi",
        styles: {
            'text-decoration': 'underline',
            'text-decoration-style': 'wavy !important'
        }
    };
})();