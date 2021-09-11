$(document).ready(function(){

    let btn = $('.scroll-to-top');

    $(window).scroll(function () {
        // Если отступ сверху больше 80px то показываем кнопку "Наверх"
        if ($(this).scrollTop() > 80) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.click(function(e){
        e.preventDefault();
        $('html').animate({
            scrollTop: 0
        }, 800);
    });

//Button to About
    $('.hr_about').on('click', function(e){
        e.preventDefault();
      $('html').animate({ scrollTop: $('#about').offset().top }, 1000);
      $('.menu').removeClass('show');
    });

//Button to Works
    $('.hr_works').on('click', function(e){
        e.preventDefault();
      $('html').animate({ scrollTop: $('#works').offset().top }, 1000);
      $('.menu').removeClass('show');
    });

//Button to subworks
    $('.hr__works__item').on('click', function(e){
        e.preventDefault();
      $('html').animate({ scrollTop: $('#works__item').offset().top }, 1000);
      $('.menu').removeClass('show');
    });

//Button to Contact
    $('.hr_contact').on('click', function(e){
        e.preventDefault();
      $('html').animate({ scrollTop: $('#contact').offset().top }, 1000);
      $('.menu').removeClass('show');
    });

    $('.bgr').click(function(e){
        e.preventDefault();
        $('.menu').toggleClass('show');
    });

//Burger
    let bgr = $('.bgr');
    $(window).on('load resize', function() {
        if( $(window).width() < 665 ) {
            bgr.addClass('show');
        } else {
            bgr.removeClass('show');
        }
    });
});



let nameValue = document.querySelector('#form__name');    // var for name
let emailValue = document.querySelector('#form__email');  // var email

let btnForm = document.querySelector('#btnForm');


btnForm.onclick = function btnFormClick() {
    let msgName = document.querySelector('.popup__error-name-msg');
    let msgEmail = document.querySelector('.popup__error-msg');

    if( nameValue.value == '' ){
        msgName.classList.toggle('popup__error-msg-show');
    }

    if( emailValue.value == '' && nameValue.value != ''){
        msgEmail.classList.toggle('popup__error-msg-show');
    }

    msgName.onclick = function msgNameClick(){
        this.classList.remove('popup__error-msg-show');
    }

    msgEmail.onclick = function msgNameClick(){
        this.classList.remove('popup__error-msg-show');
    }

    if( emailValue.value != '' && nameValue.value != '' ) {
        alert("Sanding!");
    }
}