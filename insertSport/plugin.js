/*
 * @Description: 插入着重号
 * @Author: dingxianzhi
 * @Email: dingxz@moofen.cn
 * @Date: 2021-08-20 12:33:47
 * @LastEditTime: 2021-08-20 15:56:26
 */
CKEDITOR.plugins.add("insertSport", {
  init: function (editor) {
    var self = this;
    editor.addCommand("isport", {
      selectSportHtmlList: [] = [],
      exec: function (editor) {
        var selectHtml = editor.getSelectedHtml(true);
        // var selectText = editor.getSelection().getSelectedText();
        if (!selectHtml) {
          return;
        }
        //判断是添加还是取消
        if (selectHtml.indexOf("point.png") > -1) {
          this.selectSportHtmlList = [];
          this.updateSelectHtml(selectHtml);
          var selectSportHtmlUpdate = '';
          window.document.execCommand("delete");
          this.selectSportHtmlList.forEach(str => {
            if (str.indexOf('<bdo') > -1) {
              var regStart = new RegExp('<bdo>', "g");
              var regEnd = new RegExp('</bdo>', "g");
              var regOther = new RegExp('<bdo', "g");
              var regStyle = /style="[^=]*?"([(\s+\w+=)|>])/g;
              var updateText = str.replace(regStyle, '');
              updateText = updateText.replace(regStart, '').replace(regEnd, '').replace(regOther, '').replace(/\s+/g, "");
              selectSportHtmlUpdate += updateText;
            } else {
              selectSportHtmlUpdate += str;
            }
          });
          editor.insertHtml(selectSportHtmlUpdate);
        } else {
          //添加-取文本
          var selectHtmlListUpdate = '';
          for (var i = 0; i < selectHtml.length; i++) {
            if (/^[\u4E00-\u9FA5]*$/.test(selectHtml.charAt(i))) {
              var document = new CKEDITOR.dom.element('bdo');
              document.setStyles({
                background: 'url(' + self.path + 'icons/point.png) center bottom no-repeat',
                paddingBottom: '4px'
              });
              document.appendText(selectHtml.charAt(i));
              selectHtmlListUpdate += document.getOuterHtml();
            } else {
              selectHtmlListUpdate += selectHtml.charAt(i);
            }
          }
          editor.insertHtml(selectHtmlListUpdate);
        }
      },
      updateSelectHtml: function (selectHtml) {
        var indexOfBdo = selectHtml.indexOf("<bdo");
        var indexOfBdoEnd = selectHtml.indexOf("</bdo>");
        this.selectSportHtmlList.push(selectHtml.substring(0, indexOfBdo));
        this.selectSportHtmlList.push(selectHtml.substring(indexOfBdo, indexOfBdoEnd + 6));
        var endHtml = selectHtml.substring(indexOfBdoEnd + 6, selectHtml.length);
        if (endHtml.indexOf("point.png") > -1) {
          if (endHtml) {
            this.updateSelectHtml(endHtml);
          }
        } else {
          if (endHtml) {
            this.selectSportHtmlList.push(selectHtml.substring(indexOfBdoEnd + 6, selectHtml.length));
          }
        }
      }
    });
    var style = new CKEDITOR.style('span');
    editor.attachStyleStateChange(style, function (state) {
      !editor.readOnly && editor.getCommand('isport').setState(state);
    });

    var customCommand4Delete = "dsport";
    if (editor.addCommand("dsport", {
        exec: function () {
          window.document.execCommand("delete")
        }
      }),
      editor.ui.addButton("iSpotBtn", {
        label: "插入着重号",
        command: "isport",
        icon: this.path + "icons/icon.png"
      }),
      editor.contextMenu) {
      editor.addMenuItem("dWavyItem", {
        label: "删除所选",
        command: "dsport",
        group: "sportGroup"
      })
    }
    editor.contextMenu.addListener(function (element) {
      return {
        iBlankItem: CKEDITOR.TRISTATE_OFF
      }
    })
  }
});