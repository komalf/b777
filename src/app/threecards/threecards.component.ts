import { Component, OnInit } from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-threecards',
  templateUrl: './threecards.component.html',
  styleUrls: ['./threecards.component.css']
})
export class ThreecardsComponent implements OnInit {
  customOptions: any = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    margin: 10,
    
    navSpeed: 700,
    navText: [
      "<i class='fa fa-caret-left'></i>",
      "<i class='fa fa-caret-right'></i>"
    ],
    responsive: {
      0: {
        items: 5
      },
      600: {
        items: 5
      },
      1000: {
        items: 5
      }
    },
    nav: true
  }

  constructor() { }
  

  ngOnInit() {

    $(document).ready(function () {
      $(document).on("click", "#patti_img img", function () {
        $(this).css("border", "3px solid green");

        $("#patti_img img").not($(this)).css("border", "none");
      });
    });
    


    
    var currentIndex = 0,
  items = $('.container div'),
  itemAmt = items.length;

function cycleItems() {
  var item = $('.container div').eq(currentIndex);
  items.hide();
  item.css('display','inline-block');
}

var autoSlide = setInterval(function() {
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
}, 3000);

$('.next').click(function() {
  clearInterval(autoSlide);
  currentIndex += 1;
  if (currentIndex > itemAmt - 1) {
    currentIndex = 0;
  }
  cycleItems();
});

$('.prev').click(function() {
  clearInterval(autoSlide);
  currentIndex -= 1;
  if (currentIndex < 0) {
    currentIndex = itemAmt - 1;
  }
  cycleItems();
});
    

   
    

    // $('.owl-carousel').owlCarousel({
    //   loop: true,
    //   margin: 10,
    //   nav: true,
    //   navText: [
    //     "<i class='fa fa-caret-left'></i>",
    //     "<i class='fa fa-caret-right'></i>"
    //   ],
    //   autoplay: true,
    //   autoplayHoverPause: true,
    //   responsive: {
    //     0: {
    //       items: 1
    //     },
    //     600: {
    //       items: 3
    //     },
    //     1000: {
    //       items: 5
    //     }
    //   }
    // })
    
    // $('.carousel[data-type="multi"] .item').each(function () {
    //   // var next = $(this).next();
    //   // if (!next.length) {
    //   //   next = $(this).siblings(':first');
    //   // }
    //   // next.children(':first-child').clone().appendTo($(this));

    //   // for (var i = 0; i < 2; i++) {
    //   //   next = next.next();
    //   //   if (!next.length) {
    //   //     next = $(this).siblings(':first');
    //   //   }

    //   //   next.children(':first-child').clone().appendTo($(this));
    //   // }
    // });

  }
  

  myFunction() {
    var x = (<HTMLButtonElement>document.getElementById("myBtn")).value;
    // console.log(x)
    (<HTMLInputElement>document.getElementById("demo")).value = x;
  }


  

}












