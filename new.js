var redButton = $('#red');
// redButton.css('border', '2px solid white');
// console.log(redButton);
// debugger;
redButton.click(function(e){
    var body = $('body');
    if(body.hasClass('theme1')) {
        body.removeClass('theme1')
        body.addClass('theme2')
    }
    else if(body.hasClass('theme2')) {
        body.removeClass('theme2')
        body.addClass('theme1')
    }
    console.log(e.target);
    return false;
});
