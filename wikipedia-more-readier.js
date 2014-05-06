
if (window.makePageReadable === undefined) {
    makePageReadable = function() {
        var $content = $('#content');
        var $mw_navigation = $('#mw-navigation');
        var $mw_content_text = $('#mw-content-text');
        console.log($content.css('margin-left'));
        if ($content.css('margin-left') !== '0px') {
            // either never been clicked, or has been clicked twice
            $content.css('font-size', '2.3em')
                .css('margin-left', '0px')
                .css('background-color', '#edeeef')
                .css('color', 'rgba(0,0,0,0.85)');
            $mw_content_text.css('width', '60%')
                .css('text-align', 'justify')
                .css('margin', '0 auto');
            $mw_navigation.css('display', 'none');
        } else {
            // already readable, so make unreadable again :(
            $content.removeAttr('style');
            $mw_navigation.removeAttr('style');
            $mw_content_text.removeAttr('style');
        }
    };
}

makePageReadable();