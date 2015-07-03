function noty(e) {
    var t = 0,
        n = {
            animateOpen: "animation.open",
            animateClose: "animation.close",
            easing: "animation.easing",
            speed: "animation.speed",
            onShow: "callback.onShow",
            onShown: "callback.afterShow",
            onClose: "callback.onClose",
            onClosed: "callback.afterClose"
        };
    jQuery.each(e, function (r, i) {
        if (n[r]) {
            t++;
            var s = n[r].split(".");
            if (!e[s[0]]) e[s[0]] = {};
            e[s[0]][s[1]] = i ? i : function () {};
            delete e[r]
        }
    });



    if (!e.closeWith) {
        e.closeWith = jQuery.noty.defaults.closeWith
    }
    if (e.hasOwnProperty("closeButton")) {
        t++;
        if (e.closeButton) e.closeWith.push("button");
        delete e.closeButton
    }
    if (e.hasOwnProperty("closeOnSelfClick")) {
        t++;
        if (e.closeOnSelfClick) e.closeWith.push("click");
        delete e.closeOnSelfClick
    }
    if (e.hasOwnProperty("closeOnSelfOver")) {
        t++;
        if (e.closeOnSelfOver) e.closeWith.push("hover");
        delete e.closeOnSelfOver
    }
    if (e.hasOwnProperty("custom")) {
        t++;
        if (e.custom.container != "null") e.custom = e.custom.container
    }
    if (e.hasOwnProperty("cssPrefix")) {
        t++;
        delete e.cssPrefix
    }
    if (e.theme == "noty_theme_default") {
        t++;
        e.theme = "default"
    }
    if (!e.hasOwnProperty("dismissQueue")) {
        if (e.layout == "topLeft" || e.layout == "topRight" || e.layout == "bottomLeft" || e.layout == "bottomRight") {
            e.dismissQueue = true
        } else {
            e.dismissQueue = false
        }
    }
    if (e.buttons) {
        jQuery.each(e.buttons, function (e, n) {
            if (n.click) {
                t++;
                n.onClick = n.click;
                delete n.click
            }
            if (n.type) {
                t++;
                n.addClass = n.type;
                delete n.type
            }
        })
    }
    if (t) console.warn("You are using noty v2 with v1.x.x options. @deprecated until v2.2.0 - Please update your options.");
    return jQuery.notyRenderer.init(e)
}
if (typeof Object.create !== "function") {
    Object.create = function (e) {
        function t() {}
        t.prototype = e;
        return new t
    }
}(function (e) {
    var t = {
        init: function (t) {
            this.options = e.extend({}, e.noty.defaults, t);
            this.options.layout = this.options.custom ? e.noty.layouts["inline"] : e.noty.layouts[this.options.layout];
            this.options.theme = e.noty.themes[this.options.theme];
            delete t.layout, delete t.theme;
            this.options = e.extend({}, this.options, this.options.layout.options);
            this.options.id = "noty_" + (new Date).getTime() * Math.floor(Math.random() * 1e6);
            this.options = e.extend({}, this.options, t);
            this._build();
            return this
        },
        _build: function () {
            var t = e('<div class="noty_bar"/>').attr("id", this.options.id);
            t.append(this.options.template).find(".noty_text").html(this.options.text);             
            this.jQuerybar = this.options.layout.parent.object !== null ? e(this.options.layout.parent.object).css(this.options.layout.parent.css).append(t) : t;
            if (this.options.buttons) {
                this.options.closeWith = [], this.options.timeout = false;
                var n = e("<div/>").addClass("noty_buttons");
                this.options.layout.parent.object !== null ? this.jQuerybar.find(".noty_bar").append(n) : this.jQuerybar.append(n);
                var r = this;
                e.each(this.options.buttons, function (t, n) {
                    var i = e("<button/>").addClass(n.addClass ? n.addClass : "gray").html(n.text).appendTo(r.jQuerybar.find(".noty_buttons")).bind("click", function (t) {
                        if (e.isFunction(n.onClick)) {
                            n.onClick.call(i, r)
                        }
                    })
                })
            }
            this.jQuerymessage = this.jQuerybar.find(".noty_message");
            this.jQuerycloseButton = this.jQuerybar.find(".noty_close");
            this.jQuerybuttons = this.jQuerybar.find(".noty_buttons");
            e.noty.store[this.options.id] = this
        },

        test : function(){
            alert('hi');
        },



        show: function () {
            var t = this;
            e(t.options.layout.container.selector).append(t.jQuerybar);
            t.options.theme.style.apply(t);
            e.type(t.options.layout.css) === "function" ? this.options.layout.css.apply(t.jQuerybar) : t.jQuerybar.css(this.options.layout.css || {});
            t.jQuerybar.addClass(t.options.layout.addClass);
            t.options.layout.container.style.apply(e(t.options.layout.container.selector));
            t.options.theme.callback.onShow.apply(this);
 
            /*if(t.options.type != "error"){*/
               /* if (e.inArray("click", t.options.closeWith) > -1) t.jQuerybar.css("cursor", "pointer").one("click", function () {
                    t.close()
                });*/
           /* }*/
            if (e.inArray("hover", t.options.closeWith) > -1) t.jQuerybar.one("mouseenter", function () {
                t.close()
            });
            if (e.inArray("button", t.options.closeWith) > -1) t.jQuerycloseButton.one("click", function () {
                t.close()
            });
            if (e.inArray("button", t.options.closeWith) == -1) t.jQuerycloseButton.remove();
            if (t.options.callback.onShow) t.options.callback.onShow.apply(t);
            t.jQuerybar.animate(t.options.animation.open, t.options.animation.speed, t.options.animation.easing, function () {
                if (t.options.callback.afterShow) t.options.callback.afterShow.apply(t);
                t.shown = true
            });
            if(t.options.type != "error"){
                if (t.options.timeout) t.jQuerybar.delay(t.options.timeout).promise().done(function () {
                    t.close()
                });
            }
            jQuery("#notyCloseButton").click(function(){
                t.close();
            });
            return this
        },
        close: function () {
            if (this.closed) return;
            var t = this;
            if (!this.shown) {
                e.each(e.noty.queue, function (n, r) {
                    if (r.options.id == t.options.id) {
                        e.noty.queue.splice(n, 1)
                    }
                });
                return
            }
            t.jQuerybar.addClass("i-am-closing-now");
            if (t.options.callback.onClose) {
                t.options.callback.onClose.apply(t)
            }
            t.jQuerybar.clearQueue().stop().animate(t.options.animation.close, t.options.animation.speed, t.options.animation.easing, function () {
                if (t.options.callback.afterClose) t.options.callback.afterClose.apply(t)
            }).promise().done(function () {
                if (t.options.modal) {
                    e.notyRenderer.setModalCount(-1);
                    if (e.notyRenderer.getModalCount() == 0) e(".noty_modal").fadeOut("fast", function () {
                        e(this).remove()
                    })
                }
                e.notyRenderer.setLayoutCountFor(t, -1);
                if (e.notyRenderer.getLayoutCountFor(t) == 0) e(t.options.layout.container.selector).remove();
                t.jQuerybar.remove();
                t.jQuerybar = null;
                t.closed = true;
                delete e.noty.store[t.options.id];
                t.options.theme.callback.onClose.apply(t);
                if (!t.options.dismissQueue) {
                    e.noty.ontap = true;
                    e.notyRenderer.render()
                }
            })
        },
        setText: function (e) {
            if (!this.closed) {
                this.options.text = e;
                this.jQuerybar.find(".noty_text").html(e)
            }
            return this
        },
        setType: function (e) {
            if (!this.closed) {
                this.options.type = e;
                this.options.theme.style.apply(this);
                this.options.theme.callback.onShow.apply(this)
            }
            return this
        },
        closed: false,
        shown: false
    };
    e.notyRenderer = {};
    e.notyRenderer.init = function (n) {
        var r = Object.create(t).init(n);
        r.options.force ? e.noty.queue.unshift(r) : e.noty.queue.push(r);
        e.notyRenderer.render();        
        return e.noty.returns == "object" ? r : r.options.id
    };
    e.notyRenderer.render = function () {
        var t = e.noty.queue[0];
        if (e.type(t) === "object") {
            if (t.options.dismissQueue) {
                e.notyRenderer.show(e.noty.queue.shift())
            } else {
                if (e.noty.ontap) {
                    e.notyRenderer.show(e.noty.queue.shift());
                    e.noty.ontap = false
                }
            }
        } else {
            e.noty.ontap = true
        }
    };
    e.notyRenderer.show = function (t) {
        if (t.options.modal) {
            e.notyRenderer.createModalFor(t);
            e.notyRenderer.setModalCount(+1)
        }
        if (e(t.options.layout.container.selector).length == 0) {
            if (t.options.custom) {
                t.options.custom.append(e(t.options.layout.container.object).addClass("i-am-new"))
            } else {
                e("body").append(e(t.options.layout.container.object).addClass("i-am-new"))
            }
        } else {
            e(t.options.layout.container.selector).removeClass("i-am-new")
        }
        e.notyRenderer.setLayoutCountFor(t, +1);
        t.show()

    };
    e.notyRenderer.createModalFor = function (t) {
        if (e(".noty_modal").length == 0) e("<div/>").addClass("noty_modal").data("noty_modal_count", 0).css(t.options.theme.modal.css).prependTo(e("body")).fadeIn("fast")
    };
    e.notyRenderer.getLayoutCountFor = function (t) {
        return e(t.options.layout.container.selector).data("noty_layout_count") || 0
    };
    e.notyRenderer.setLayoutCountFor = function (t, n) {
        return e(t.options.layout.container.selector).data("noty_layout_count", e.notyRenderer.getLayoutCountFor(t) + n)
    };
    e.notyRenderer.getModalCount = function () {
        return e(".noty_modal").data("noty_modal_count") || 0
    };
    e.notyRenderer.setModalCount = function (t) {
        return e(".noty_modal").data("noty_modal_count", e.notyRenderer.getModalCount() + t)
    };
    e.fn.noty = function (t) {
        return this.each(function () {
            t.custom = e(this);
            return e.notyRenderer.init(t)
        })
    };
    e.noty = {};
    e.noty.queue = [];
    e.noty.ontap = true;
    e.noty.layouts = {};
    e.noty.themes = {};
    e.noty.returns = "object";
    e.noty.store = {};
    e.noty.get = function (t) {
        return e.noty.store.hasOwnProperty(t) ? e.noty.store[t] : false
    };
    e.noty.close = function (t) {
        return e.noty.get(t) ? e.noty.get(t).close() : false
    };
    e.noty.setText = function (t, n) {
         return e.noty.get(t) ? e.noty.get(t).setText(n) : false
    };
    e.noty.setType = function (t, n) {
        return e.noty.get(t) ? e.noty.get(t).setType(n) : false
    };
    e.noty.clearQueue = function () {
        e.noty.queue = []
    };
    e.noty.closeAll = function () {
        e.noty.clearQueue();
        e.each(e.noty.store, function (e, t) {
            t.close()
        })
    };
    var n = window.alert;
    e.noty.consumeAlert = function (t) {
        window.alert = function (n) {
            if (t) t.text = n;
            else t = {
                text: n
            };
            e.notyRenderer.init(t)
        }
    };
    e.noty.stopConsumeAlert = function () {
        window.alert = n
    };
    e.noty.defaults = {
        layout: "top",
        theme: "default",
        type: "alert",
        text: "",
        dismissQueue: true,
        template: '<div class="noty_message"><span class="noty_text"></span><div class="noty_close"></div></div>',
        animation: {
            open: {
                height: "toggle"
            },
            close: {
                height: "toggle"
            },
            easing: "swing",
            speed: 500
        },
        timeout: false,
        force: false,
        modal: false,
        closeWith: ["click"],
        callback: {
            onShow: function () {},
            afterShow: function () {},
            onClose: function () {},
            afterClose: function () {}
        },
        buttons: false
    };
    e(window).resize(function () {
        e.each(e.noty.layouts, function (t, n) {
            n.container.style.apply(e(n.container.selector))
        })
    })
})(jQuery);
(function (e) {
    e.noty.layouts.top = {
        name: "top",
        options: {},
        container: {
            object: '<ul id="noty_top_layout_container" />',
            selector: "ul#noty_top_layout_container",
            style: function () {
                e(this).css({
                    top: 0,
                    left: 0,
                    position: "fixed",
                    width: "100%",
                    height: "auto",
                    margin: 0,
                    padding: 0,
                    listStyleType: "none",
                    zIndex: 9999999
                })
            }
        },
        parent: {
            object: "<li />",
            selector: "li",
            css: {}
        },
        css: {
            display: "none"
        },
        addClass: ""
    }
})(jQuery);
(function (e) {
    e.noty.themes["default"] = {
        name: "default",
        helpers: {
            borderFix: function () {
                if (this.options.dismissQueue) {
                    var t = this.options.layout.container.selector + " " + this.options.layout.parent.selector;
                    switch (this.options.layout.name) {
                    case "top":
                        e(t).css({
                            borderRadius: "0px 0px 0px 0px"
                        });
                        e(t).last().css({
                            borderRadius: "0px 0px 0px 0px"
                        });
                        break;
                    case "topCenter":
                    case "topLeft":
                    case "topRight":
                    case "bottomCenter":
                    case "bottomLeft":
                    case "bottomRight":
                    case "center":
                    case "centerLeft":
                    case "centerRight":
                    case "inline":
                        e(t).css({
                            borderRadius: "0px 0px 0px 0px"
                        });
                        e(t).first().css({
                            "border-top-left-radius": "0px",
                            "border-top-right-radius": "0px"
                        });
                        e(t).last().css({
                            "border-bottom-left-radius": "0px",
                            "border-bottom-right-radius": "0px"
                        });
                        break;
                    case "bottom":
                        e(t).css({
                            borderRadius: "0px 0px 0px 0px"
                        });
                        e(t).first().css({
                            borderRadius: "0px 0px 0px 0px"
                        });
                        break;
                    default:
                        break
                    }
                }
            }
        },
        modal: {
            css: {
                position: "fixed",
                width: "100%",
                height: "100%",
                backgroundColor: "#000",
                zIndex: 1e4,
                opacity: .6,
                display: "none",
                left: 0,
                top: 0
            }
        },
        style: function () {
            this.jQuerybar.css({
                overflow: "hidden"
            });
            this.jQuerymessage.css({
                fontSize: "13px",
                lineHeight: "16px",
                textAlign: "center",
                padding: "8px 10px 9px",
                width: "auto",
                position: "relative"
            });
            this.jQuerycloseButton.css({
                position: "absolute",
                top: 4,
                right: 4,
                width: 10,
                height: 10,
                background: "url(data:image/png;base64,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)",
                display: "none",
                cursor: "pointer"
            });
            this.jQuerybuttons.css({
                padding: 5,
                textAlign: "right",
                borderTop: "1px solid #ccc",
                backgroundColor: "#fff"
            });
            this.jQuerybuttons.find("button").css({
                marginLeft: 5
            });
            this.jQuerybuttons.find("button:first").css({
                marginLeft: 0
            });
            this.jQuerybar.bind({
                mouseenter: function () {
                    e(this).find(".noty_close").fadeIn()
                },
                mouseleave: function () {
                    e(this).find(".noty_close").fadeOut()
                }
            });
            switch (this.options.layout.name) {
            case "top":
                this.jQuerybar.css({
                    borderRadius: "0px 0px 0px 0px",
                    borderBottom: "1px solid #eee",
                    borderLeft: "1px solid #eee",
                    borderRight: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
            case "topCenter":
            case "center":
            case "bottomCenter":
            case "inline":
                this.jQuerybar.css({
                    borderRadius: "0px",
                    border: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                this.jQuerymessage.css({
                    fontSize: "13px",
                    textAlign: "center"
                });
                break;
            case "topLeft":
            case "topRight":
            case "bottomLeft":
            case "bottomRight":
            case "centerLeft":
            case "centerRight":
                this.jQuerybar.css({
                    borderRadius: "0px",
                    border: "1px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                this.jQuerymessage.css({
                    fontSize: "13px",
                    textAlign: "left"
                });
                break;
            case "bottom":
                this.jQuerybar.css({
                    borderRadius: "0px 0px 0px 0px",
                    borderTop: "2px solid #eee",
                    borderLeft: "2px solid #eee",
                    borderRight: "2px solid #eee",
                    boxShadow: "0 -2px 4px rgba(0, 0, 0, 0.1)"
                });
                break;
            default:
                this.jQuerybar.css({
                    border: "2px solid #eee",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                });
                break
            }
            switch (this.options.type) {
            case "alert":
            case "notification":
                this.jQuerybar.css({
                    backgroundColor: "#F8F8F8",
                    borderColor: "#CCC",
                    color: "#444"
                });
                break;
            case "warning":
                this.jQuerybar.css({
                    backgroundColor: "#FFE9AD",
                    borderColor: "#EAC572",
                    color: "#826200"
                });
                this.jQuerybuttons.css({
                    borderTop: "1px solid #FFC237"
                });
                break;
            case "error":
                this.jQuerybar.css({
                    backgroundColor: "#FCCAC1",
                    borderColor: "#E18B7C",
                    color: "#AC260F"
                });
                this.jQuerymessage.css({
                    fontWeight: "bold"
                });
                this.jQuerybuttons.css({
                    borderTop: "1px solid darkred"
                });
                break;
            case "information":
                this.jQuerybar.css({
                    backgroundColor: '#DEEEFA',
                    borderColor: '#AFD3F2',
                    color: '#235685'
                });
                this.jQuerybuttons.css({
                    borderTop: '1px solid #AFD3F2'
                });
                break;
            case "success":
                this.jQuerybar.css({
                    backgroundColor: '#EFFEB9',
                    borderColor: '#C1D779',
                    color: '#3C5A01'
                });
                this.jQuerybuttons.css({
                    borderTop: '1px solid #C1D779'
                });
                break;
            default:
                this.jQuerybar.css({
                    backgroundColor: "#FFF",
                    borderColor: "#CCC",
                    color: "#444"
                });
                break
            }
        },
        callback: {
            onShow: function () {
                e.noty.themes["default"].helpers.borderFix.apply(this)
            },
            onClose: function () {
                e.noty.themes["default"].helpers.borderFix.apply(this)
            }
        }
    }
})(jQuery);
(function (jQuery) {
    jQuery.noty.layouts.inline = {
        name: 'inline',
        options: {},
        container: {
            object: '<ul id="noty_inline_layout_container" />',
            selector: 'ul#noty_inline_layout_container',
            style: function () {
                jQuery(this).css({
                    width: '100%',
                    height: 'auto',
                    margin: 0,
                    padding: 0,
                    listStyleType: 'none',
                    zIndex: 9999999
                });
            }
        },
        parent: {
            object: '<li />',
            selector: 'li',
            css: {}
        },
        css: {
            display: 'none'
        },
        addClass: ''
    };

})(jQuery);

var eventManagement = {
    alert: function (m, t) {
        this.Show(m, "alert", t);
    },
    success: function (m, t) {
        this.Show(m, "success", t);
    },
    info: function (m, t) {
        this.Show(m, "information", (t == undefined ? 5000 : t));
    },
    warning: function (m, t) {
        this.Show(m, "warning", t);
    },
    error: function (m, t) {
        this.Show(m, "error", t);
    },
    Show: function (m, o, t) {
        var message;
        if(o === "error"){
            message = '<div>'+m+'<img id="notyCloseButton" style="cursor:pointer;max-width:20px;" class="notyCloseButton pull-right" src="public/images/img/close_new.png" alt="Close"  /></div>';
        }
        else{
            message = m;
        }

        noty({
            text: message,
            type: o,
            dismissQueue: true,
            layout: "top",
            timeout: t == undefined ? 3000 : t,
            closeWith: ['click']
        });
    }
};


function elShow(el, m, o, t) {
    el.noty({
        text: m,
        type: o,
        dismissQueue: true,
        layout: "inline",
        timeout: t == undefined ? 3000 : t,
        closeWith: ['click']
    });
}
(function (jQuery) {
    jQuery.fn.alert = function (m, t) {
        elShow(this, m, "alert", t);
    };
    jQuery.fn.success = function (m, t) {
        elShow(this, m, "success", t);
    };
    jQuery.fn.info = function (m, t) {
        elShow(this, m, "information", (t == undefined ? 5000 : t));
    };
    jQuery.fn.warning = function (m, t) {
        elShow(this, m, "warning", t);
    };
    jQuery.fn.error = function (m, t) {
        elShow(this, m, "error", t);
    };
})(jQuery);