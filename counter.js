document.addEventListener('DOMContentLoaded', function() {

  let sugarEl = document.getElementById('sugar');
  let lemonEl = document.getElementById('lemon');
  let chocolateEl = document.getElementById('chocolate');

  let chocolate = Cookies.get('chocolate');
  chocolateEl.querySelector(".count").innerHTML = chocolate;

  let lemon = Cookies.get('lemon');
  lemonEl.querySelector(".count").innerHTML = lemon;

  let sugar = Cookies.get('sugar');
  sugarEl.querySelector('.count').innerHTML = sugar;

  sugarEl.addEventListener('click', function(e){
    if (e.target.classList == 'plus') {
      sugar++;
      sugarEl.querySelector(".count").innerHTML = sugar;
      Cookies.set('sugar', sugar);
    } else if (e.target.classList == 'minus') {
      sugar--;
      sugarEl.querySelector(".count").innerHTML = sugar;
      Cookies.set('sugar', sugar);
    }
  })

  lemonEl.addEventListener('click', function(e){
    if (e.target.classList == 'plus') {
      lemon++;
      lemonEl.querySelector(".count").innerHTML = lemon;
      Cookies.set('lemon', lemon);
    } else if (e.target.classList == 'minus') {
      lemon--;
      lemonEl.querySelector(".count").innerHTML = lemon;
      Cookies.set('lemon', lemon);
    }
  })

  chocolateEl.addEventListener('click', function(e){
    if (e.target.classList == 'plus') {
      chocolate++;
      chocolateEl.querySelector(".count").innerHTML = chocolate;
      Cookies.set('chocolate', chocolate);
    } else if (e.target.classList == 'minus') {
      chocolate--;
      chocolateEl.querySelector(".count").innerHTML = chocolate;
      Cookies.set('chocolate', chocolate);
    }
  })

});



//when we click on clear... get rid of all the coffee

 document.getElementById("clear").addEventListener("click",function(){
  Cookies.expire("lemon","sugar", "chocolate");
    document.getElementById("lemon","sugar", "chocolate").innerText = 0;
   });

//      // when we have a click, we want to increase the count
//      console.log(Cookies.get("cookie"));
//      let cookie_count = ~~Cookies.get("cookie") + 1;
//      Cookies.set("cookie",cookie_count);
//      // of our cookie's count...  and update the display
//      document.getElementById("cookie_count").innerText = cookie_count;
//   });

//   // when we click on clear... get rid of all the coffee
//   document.getElementById("clear").addEventListener("click",function(){
//     Cookies.expire("cookie");
//     document.getElementById("cookie_count").innerText = 0;
//   });

// });
