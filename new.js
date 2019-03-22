function onload(){
    var redButton = $('#red');
    // redButton.css('border', '2px solid white');
    // console.log(redButton);
    // debugger;
    redButton.click(function(e){
        var body = $('body');
        if(body.hasClass('theme1')) {
            body.removeClass('theme1')
            body.addClass('theme2')
            h2.removeClass('title-insetOne')
            h2.addClass('title-insetTwo')
        }
        else if(body.hasClass('theme2')) {
            body.removeClass('theme2')
            body.addClass('theme1')
            h2.removeClass('title-insetTwo')
            h2.addClass('title-insetOne')
        }
        console.log(e.target);
        return false;
    });
}
