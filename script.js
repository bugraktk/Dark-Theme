
$('.check').change(function(){

    if($(this).is(":checked"))
    {
        $('body').toggleClass('dark');
        $('.bl').toggleClass('white');
    }
    else
    {
        $('body').toggleClass('dark');
        $('.bl').toggleClass('white');
    }

});