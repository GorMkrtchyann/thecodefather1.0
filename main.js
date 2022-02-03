
             AOS.init();

             function myFunction() {
              var x = document.getElementById("hiden-menu");
              if (x.style.display === "block") {
                x.style.display = "none";
              } else {
                x.style.display = "block";
              }
            }
            //  -----------------
            const menu = document.querySelector(".menu");
            window.onscroll = ()=>{
            this.scrollY > 20 ? menu.classList.add("sticky") : menu.classList.remove("sticky");
            }


            const li=document.querySelectorAll(".links");
            const sec=document.querySelectorAll("section");

            function activeMenu(){
                let len=sec.length;
                while(--len && window.scrollY + 97 < sec[len].offsetTop){}
                li.forEach(ltx => ltx.classList.remove("active"));
                li[len].classList.add("active");
            }
            activeMenu();
            window.addEventListener("scroll", activeMenu);


            var slideIndex = 1;
            showSlides(slideIndex);

            function plusSlides(n) {
              showSlides(slideIndex += n);
            }

            function currentSlide(n) {
              showSlides(slideIndex = n);
            }

            function showSlides(n) {
              var i;
              var slides = document.getElementsByClassName("mySlides");
              if (n > slides.length) {slideIndex = 1}
                if (n < 1) {slideIndex = slides.length}
                for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";
                }
              slides[slideIndex-1].style.display = "block";
            }
