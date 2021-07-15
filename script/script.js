$(document).ready(function() {
    $('.carousel__inner-catalog').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToScroll: 1,
        speed: 1500,
        prevArrow: '<button type="button" class="slick-prev">  </button>',
        nextArrow: '<button type="button" class="slick-next">  </button>'

    });
    $('.carousel__inner-review').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500

    });
    document.querySelectorAll('button[data-modal=consultation]').forEach(el=>el.addEventListener('click',() =>{
        document.querySelectorAll('.overlay, #consultation').forEach(el=>el.style.display='block')
    }));
    Array.from(document.querySelectorAll('.modal_close')).forEach(el=>el.addEventListener('click', () =>{
        const modal = ['.overlay', '#thanks', '#consultation'];
        modal.forEach(el => document.querySelector(el).style.display='none')
    }));
    document.querySelectorAll('button[data-modal=form]').forEach(el=>el.addEventListener('click',() =>{
        document.querySelectorAll('.overlay, #thanks').forEach(el=>el.style.display='block')
    }));
    document.querySelectorAll('.modal_btn').forEach(el=>el.addEventListener( 'click', () =>{
        document.querySelectorAll('.overlay, #thanks').forEach(el=>el.style.display='block');
        document.querySelectorAll('#consultation').forEach(el=>el.style.display='none')
    }));
    $(window) .scroll(function () {
        if ($(this).scrollTop() > 650){
            $('.header-light').fadeIn()
        }else{
            $('.header-light').fadeOut()
        }

    });
    $("#search-icon").click(function() {
        $(".nav").toggleClass("search");
        $(".nav").toggleClass("no-search");
        $(".search-input").toggleClass("search-active");
    });
});

$('.carousel__inner').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
        {
            breakpoint: 1280,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 375,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }

    ]
});

window.addEventListener( "DOMContentLoaded", () =>  {
    const menu = document.querySelector(".menu");
    let menuItem = document.querySelector(".menuItem");
    let burger = document.querySelector(".burger");

    burger.addEventListener("click", () => {
        burger.classList.toggle("burger_active");
        menu.classList.toggle("menu_active")
    });
    menuItem.forEach(item => {
        item.addEventListener("click" , () => {
            burger.classList.toggle("burger_active");
            menu.classList.toggle("menu_active")
        })
    })
});


