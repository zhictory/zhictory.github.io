---
layout: single
title: 关于表单的实践
comments: true
---

* **表单检测：**  
    表单提交前总是要检测**表单字段**填写是否有误，有误时是不允许提交的。可以为这些字段定义对应的 flag，这些 flag 放在一个 JSON 里， JSON 的 key 值为表单字段，value 值为 boolean 值，value 值默认为 false，填写无误时置为 true：

        var submitFlag = {
            'username': false,
            'phone': false,
            'phonecode': false
        };

* **重复提交：**  
    表单提交的时候，无论是同步还是异步，如果用户着急多点几次，可能会造成表单重复提交。为了防止重复提交，可以定义一个表示正在提交的 flag，当 flag 为 false 时才能提交，而提交的时候要将 flag 置为 true：

        $(document).on('click', '#J_submitBtn', function() {
            if (isSubmitting) {
                return;
            }
            isSubmitting = true;
        }

* **表单提示：**  
    表单检测时总是伴随着正确或错误的提示，这些提示最好用一个函数处理。函数的形参包括提示信息（msg）、提示信息对应的字段（obj）、提示类型（type）：

        function showTips(msg, obj, type) {
            // 先将无关的提示信息隐藏，再显示当前字段的提示信息
            obj.siblings('.ok').hide();
            obj.siblings('.error').hide();
            type ? obj.siblings('.ok').html(msg).show() : obj.siblings('.error').html(msg).show();
        }

* **表单输入：**  
    表单输入有时也需要交互，考虑到兼容性，不使用 input，使用 keydown。因为 jQuery 的 inupt 事件是基于 DOM3 实现的，IE8 不支持这个事件。
    对字段的检测也可以在 blur 时进行，但是 blur 有时会与 click 冲突，所以视情况而决定使用与否。具体方案我还没想出来。

        $(document).on('keydown', '.form-item', function() {
            var self = $(this);
            self.siblings('.tips').html('').hide();
        }).on('blur', '.form-item', function() {
            var self = $(this);
            validateForm(self);
        });
