 jQuery.event.special.touchstart = {
      setup: function (_, ns, handle) {
        'use strict';
        this.addEventListener('touchstart', handle, {
          passive: !ns.includes('noPreventDefault')
        });
      }
    };
    jQuery.event.special.touchmove = {
      setup: function (_, ns, handle) {
        'use strict';
        this.addEventListener('touchmove', handle, {
          passive: !ns.includes('noPreventDefault')
        });
      }
    };

    // Preloader js
    $(window).on('load', function () {
      'use strict';
      $('.preloader').fadeOut(0);
    });

    $(document).ready(function () {
      'use strict';

      // Shuffle js filter and masonry
      const containerEl = document.querySelector('.shuffle-wrapper');
      if (containerEl) {
        const Shuffle = window.Shuffle;
        const myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
          itemSelector: '.shuffle-item',
          buffer: 1
        });

        jQuery('input[name="shuffle-filter"]').on('change', function (evt) {
          const input = evt.currentTarget;
          if (input.checked) {
            myShuffle.filter(input.value);
          }
        });
      }

      // Sliders
      $('.portfolio-single-slider').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      });

      $('.clients-logo').slick({
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      });

      $('.testimonial-slider').slick({
        slidesToShow: 1,
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000
      });

      // Count Up
      function counter() {
        let oTop;
        if ($('.count').length !== 0) {
          oTop = $('.count').offset().top - window.innerHeight;
        }
        if ($(window).scrollTop() > oTop) {
          $('.count').each(function () {
            const $this = $(this);
            const countTo = $this.attr('data-count');
            $({
              countNum: $this.text()
            }).animate({
              countNum: countTo
            }, {
              duration: 1000,
              easing: 'swing',
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              }
            });
          });
        }
      }
      $(window).on('scroll', function () {
        counter();
      });

      // Turn cloaked e-mail addresses into clickable mailto links
      const emailSpans = document.getElementsByClassName("cloaked-e-mail");

      for (const emailSpan of emailSpans) {
        const emailLink = document.createElement("a");
        const emailAddress = emailSpan.attributes.getNamedItem("data-user").value.split('').reverse().join('') + "@" + emailSpan.attributes.getNamedItem("data-domain").value.split('').reverse().join('');
        emailLink.href = "mailto:" + emailAddress;
        emailLink.innerText = emailAddress;
        emailSpan.parentElement.insertBefore(emailLink, emailSpan);
        emailSpan.parentElement.removeChild(emailSpan)
      }

      // New Feature: Light/Dark Mode Toggle
      const themeToggleBtn = document.getElementById('theme-toggle');
      themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
      });

      // New Feature: Smooth Scroll
      $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
      });

      // Map initialize
      $(map);
    });
