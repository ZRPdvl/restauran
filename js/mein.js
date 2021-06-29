$(document).ready(function(){

  $('.header_banner_item').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows : false,
    });

  $('.feature_item').slick({
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1324,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 956,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 680,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
   });

    $('.staff_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 650,
      settings: {
        slidesToShow: 1,
      }
    }
    ]
   });


  $('.feedback_slider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
   });

    $('.blog_slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
   responsive: [
    {
      breakpoint: 1030,
      settings: {
       arrows : false
      }
    },
     {
      breakpoint: 900,
      settings: {
       slidesToShow: 2
      }
    },
     {
      breakpoint: 650,
      settings: {
       slidesToShow: 1
      }
    }
    ]
   });



   $(".burger_line").click(function(event){
   $(".header_burger, .burger_line, .header_menu_links").toggleClass("active");
  });

    $(document).mousedown(function(e) {
      if (!$('.burger_line, .header_menu_link').is(e.target) && $('header_menu').has(e.target).length === 0) {
    $('.header_burger, .burger_line, .header_menu_links').removeClass('active');
  }
  });

    $(".header_menu_link").click(function(event){
   $(".header_burger, .burger_line, .header_menu_links").toggleClass("active");
  });

  $(window).scroll(function() {
      $('.header_burger, .burger_line, .header_menu_links').removeClass('active');
    });


$(document).ready(function() {
  $("a.batton_top_item").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 2000);
    return false;
  });
});

$(document).ready(function() {
  $("a.header_menu_link , a.footer_link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 2000);
    return false;
  });
});




});


var details = document.querySelectorAll("details");
for(i=0;i<details.length;i++) {
  details[i].addEventListener("toggle", accordion);
}
function accordion(event) {
  if (!event.target.open) return;
    var details = event.target.parentNode.children;
    for(i=0;i<details.length;i++) {
      if (details[i].tagName != "DETAILS" || 
         !details[i].hasAttribute('open') || 
         event.target == details[i]) {
         continue;
      }
      details[i].removeAttribute("open");
    }
};

const reservBatton = document.querySelector(".nav_reservation_batton");
const closeModalReserv = document.querySelector(".modal__reserv--close");
const modalReserv = document.querySelector(".modal__reserv");


reservBatton.addEventListener("click",()=>{
  modalReserv.classList.add("modal__active");
  document.body.style.overflow = "hidden";
});
closeModalReserv.addEventListener("click",()=>{
  modalReserv.classList.remove("modal__active")
  document.body.style.overflow = "";
});


const btnFilter = document.querySelectorAll(".menu_content_link");
const itemFilter = document.querySelectorAll(".menu_tabel_item");

function filter(categori, items) {
    items.forEach(element => {
        filterItems = !element.classList.contains(categori)
        istShow = categori.toLowerCase() === "all"
        if (filterItems && !istShow) {
            element.classList.add("menu__tabel--hiden");
        } else {
            element.classList.remove("menu__tabel--hiden")

        }
    });
};

for (const index of btnFilter) {
    index.addEventListener("click", function (e) {
        e.preventDefault();
        for (const date of btnFilter) {
            date.classList.remove("active")
        };
        index.classList.add("active");
        const btnFilterData = index.dataset.id;
        filter(btnFilterData, itemFilter);
    })
};


window.addEventListener("scroll" , ()=>{
  if (scrollY > 500) {
    document.querySelector(".batton_top").style.display ="flex";
  } else {
    document.querySelector(".batton_top").style.display ="none";
  }
})

