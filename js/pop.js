(function() {
    var popbox = '<div class="pop-lixt">' +
        '<div class="pop-header clearfix"><span class="pop-close close fr" onclick="popClose()">X</span></div>' +
        ' <div class="pop-inner"><span class="pop-center" id="popinner" ></span></div>' +
        '<div class="pop-btn"> <span class="btn-ensure" onclick ="PopEnsure()" > 确定 </span></div>' +
        '</div>';
    var pop = document.getElementById('popbox');
    pop.innerHTML = popbox;
})()
//关闭弹框
function popClose() {
    document.getElementById('popbox').style.display = 'none';
}
//PopEnsure
function PopEnsure() {
    document.getElementById('popbox').style.display = 'none';
}
// (function(window) {
//     //使用构造函数 声明一个 Modal
//     var Modal = function(ele) {
//             this.$el = ele;
//             this.init();
//         }
//         // 在Modal的原型上实现close，open,init方法，实现方法的复用
//     Modal.prototype.close = function() {
//         this.$el.style.display = 'none';
//     }
//     Modal.prototype.open = function() {
//         this.$el.style.display = 'block';
//     }
//     Modal.prototype.init = function() {
//         var self = this;
//         // 绑定关闭按钮点击事件处理函数，检索所有 带 .close类名 的按钮
//         if (this.$el.addEventListener) {
//             this.$el.addEventListener('click', function(e) {
//                 e.preventDefault();
//                 var target = e.target;
//                 var classNames = target.className.split(' ');
//                 if (classNames.indexOf('close') !== -1) {
//                     self.close();
//                 }
//             }, false);
//         } else if (this.$el.attachEvent) {
//             this.$el.attachEvent('onclick', function(e) {
//                 e = e || window.event;
//                 if (e.preventDefault) {
//                     e.preventDefault();
//                 } else {
//                     e.returnValue = false;
//                 }
//                 var target = e.target || e.srcElement;
//                 var classNames = target.className.split(' ');
//                 if (classNames.indexOf('close') !== -1) {
//                     self.close();
//                 }
//             });
//         }
//     }
//     window.Modal = Modal;
// })()