
$( document ).ready(function() {


    function getTextAreaSelection(textarea) {
        var start = textarea.selectionStart, end = textarea.selectionEnd;
        return {
            start: start,
            end: end,
            length: end - start,
            text: textarea.value.slice(start, end)
        };
    }

    function detectPaste(textarea, callback) {
        textarea.onpaste = function() {
            var sel = getTextAreaSelection(textarea);
            var initialLength = textarea.value.length;
            window.setTimeout(function() {
                var val = textarea.value;
                var pastedTextLength = val.length - (initialLength - sel.length);
                var end = sel.start + pastedTextLength;
                callback({
                    start: sel.start,
                    end: end,
                    length: pastedTextLength,
                    text: val.slice(sel.start, end)
                });
            }, 1);
        };
    }

    var textarea = document.getElementById("pastezone");
    detectPaste(textarea, function(svg) {
        // alert(pasteInfo.text);
        txt = svg.text
            .replace(/"/g,'\'')
            .replace(/</g,'%3C')
            .replace(/>/g,'%3E')
            .replace(/&/g,'%26')
            .replace(/#/g,'%23')
            .replace(/\s+/g,' ')    
               

        textarea.value = 'background-image: url("data:image/svg+xml;charset=utf8,'+txt+'");';
        textarea.select();
    });

});


