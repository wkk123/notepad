(function(window) {
    var Modal = function(ele) {
        this.$el = ele;
        this.init();
    }
    Modal.prototype.close = function() {
        this.$el.style.display = 'none';
    }
    Modal.prototype.open = function() {
        this.$el.style.display = 'block';
    }
    Modal.prototype.init = function() {
        var self = this;
        if (this.$el.addEventListener) {
            this.$el.addEventListener('click', function(e) {
                e.preventDefault();
                var target = e.target;
                var classNames = target.className.split(' ');
                if (classNames.indexOf('close') !== -1) {
                    self.close();
                }
            }, false);
        } else if (this.$el.attachEvent) {
            this.$el.attachEvent('onclick', function(e) {
                e = e || window.event;
                if (e.preventDefault) {
                    e.preventDefault();
                } else {
                    e.returnValue = false;
                }
                var target = e.target || e.srcElement;
                var classNames = target.className.split(' ');
                if (classNames.indexOf('close') !== -1) {
                    self.close();
                }
            });
        }
    }
    window.Modal = Modal;
})(window);
var modal = new Modal(document.getElementById('modal'));

function openModal() {
    modal.open();
}