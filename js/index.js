
let contain = $('.contin').outerWidth();    
$('.contin').animate({'width': `0px`}, 1);
$('.hideDetalis').fadeOut(1);
$('#openNav').animate({'left': `0`},1);

$('#closeBtn').click(function(){
    
    $('.contin').animate({'width': `0px`}, 500);
    $('.hideDetalis').fadeOut(500);
    $('#openNav').animate({'left': `0`},500);
})

$('#openNav').click(function(){
    if($('#openNav').css('left') == '0px')
    {
        $('.contin').animate({'width': `250px`}, 500);
        $('.hideDetalis').fadeIn(500);
        $('#openNav').animate({'left': `250px`},500);
    }
    else
    {
        $('.contin').animate({'width': `0px`}, 500);
        $('.hideDetalis').fadeOut(500);
        $('#openNav').animate({'left': `0`},500); 
    }
    
})

$('.head-event').click(function(){
        $(this).next().slideToggle(1000);  
        $('.head-event').parent().parent().siblings().children().children().not(this).next().slideUp(1000);

})  
// section count time


function displayTime(){
    const date = new Date('May 28, 2022 00:00:00').getTime()
    const now = new Date().getTime();
    const gap = now - date;

    const second = 1000;
    const minutes = second *60 ;
    const hours = minutes * 60 ;
    const days = hours * 24 ;
    
    const textday = Math.floor(gap / days);
    const texthours = Math.floor((gap % days) / hours);
    const textmint = Math.floor((gap % hours) / minutes);
    const textsecond = Math.floor((gap % minutes) / second);

    // alert(textsecond)

    $('#hou').text(`${texthours} h`);
    $('#min').text(`${textmint} m`);
    $('#se').text(`${textsecond} s`);
    $('#days').text(`- ${textday} D`)
   
    setTimeout(displayTime,1000)

}
displayTime();




$('#charEnter').keyup(function(){
    let textInput = document.getElementById('charEnter');
    let textLength = textInput.value.length;
    console.log(textLength);
    if(textLength > 99)
    {
        $('#char').text('your available character finished');
        
    }
    else
    {
        $('#char').text(`${100 - textLength}`);
    }
})

