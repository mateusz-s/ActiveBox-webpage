//Smooth scrolling
$(document).on('click', 'a[href^="#"]', function(event){
    event.preventDefault();
    $('body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 700);
});
    
//Hamburger menu icon
var navCheck = $('#navigation'),
    navLabel = $('label > i');

$('input').on('click', navIcon);

function navIcon() {
    if(navCheck.is(':checked')) {
        navLabel.removeClass('fa-bars').addClass('fa-times');
    } else {
        navLabel.removeClass('fa-times').addClass('fa-bars');
    }
}