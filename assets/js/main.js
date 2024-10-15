



document.addEventListener('DOMContentLoaded', () => {

  // YouTube Video Gallery
  const videoGallery = {
    videoIds: [
      "dkEz1dnxL7M", "W0tRW4h8k0A", "NWRES6WKX90", 
      "GxIOvbP_g2E", "z4GWtRh4bz8", "HDH4n1SQY5k", 
      "0xgXPwRGaMY", "AQflAOGUb80", "2GSKtUa_OMg", 
      "zDRmxp8eA8s", "CqqYE00vkOc", "TlFRA6lBhXk",
      "mQ0yl1sZvX4", "xYonRoxgtUU", "pk3Lbl4W5aM", 
      "RMo92Uj_N1o", "ApBI_XmURl8", "tAx6XMD5Es8"
    ],
    videosPerPage: 12,
    currentPage: 1,

    createVideoIframe(videoId) {
      const videoContainer = document.createElement('div');
      videoContainer.className = 'col-md-4';
      videoContainer.innerHTML = `
        <iframe 
          src="https://www.youtube.com/embed/${videoId}" 
          frameborder="0" 
          allowfullscreen>
        </iframe>`;
      return videoContainer;
    },

    renderVideos(page) {
      const gallery = document.getElementById('videoGallery');
      if (!gallery) {
        console.error('Video gallery element not found!');
        return;
      }

      gallery.innerHTML = ''; // Clear the current videos

      const startIndex = (page - 1) * this.videosPerPage;
      const endIndex = Math.min(startIndex + this.videosPerPage, this.videoIds.length);

      for (let i = startIndex; i < endIndex; i++) {
        const videoIframe = this.createVideoIframe(this.videoIds[i]);
        gallery.appendChild(videoIframe);
      }
    },

    createPagination() {
      const pagination = document.getElementById('videoPagination');
      if (!pagination) {
        console.error('Video pagination element not found!');
        return;
      }

      pagination.innerHTML = ''; // Clear existing pagination
      const totalPages = Math.ceil(this.videoIds.length / this.videosPerPage);

      for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('li');
        pageItem.className = `page-item ${i === this.currentPage ? 'active' : ''}`;
        pageItem.innerHTML = `<a class="page-link" href="#">${i}</a>`;
        pageItem.addEventListener('click', (e) => {
          e.preventDefault();
          this.currentPage = i;
          this.updateGallery();
        });
        pagination.appendChild(pageItem);
      }
    },

    updateGallery() {
      this.renderVideos(this.currentPage);
      this.createPagination();
    }
  };

  // Initial load for video gallery
  videoGallery.updateGallery();
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

document.addEventListener('DOMContentLoaded', () => {

  // Photo Gallery
  const photoGallery = {
    images: [
      "assets1/Gallery/landscape/rr31.jpg",
    "assets1/Gallery/landscape/rr70.jpg",
    "assets1/Gallery/landscape/rr4.jpg",
    "assets1/Gallery/potrait/rr29.jpg",
    "assets1/Gallery/potrait/rr33.jpg",
    "assets1/Gallery/potrait/rr30.jpg",
    "assets1/Gallery/landscape/rr3.jpg",
    "assets1/Gallery/landscape/rr17.jpg",
    "assets1/Gallery/landscape/rr18.jpg",
    "assets1/Gallery/potrait/rr21.jpg",
    "assets1/Gallery/potrait/rr15.jpg",
    "assets1/Gallery/potrait/rr22.jpg",
    "assets1/Gallery/landscape/rr19.jpg",
    "assets1/Gallery/landscape/rr35.jpg",
    "assets1/Gallery/landscape/rr49.jpg",
    "assets1/Gallery/potrait/rr67.jpg",
    "assets1/Gallery/potrait/rr51.jpg",
    "assets1/Gallery/potrait/rr69.jpg",
    "assets1/Gallery/landscape/rr48.jpg",
    "assets1/Gallery/landscape/rr72.jpg",
    "assets1/Gallery/landscape/rr53.jpg",
    "assets1/Gallery/potrait/rr66.jpg",
    "assets1/Gallery/potrait/rr47.jpg",
    "assets1/Gallery/potrait/rr68.jpg",
    "assets1/Gallery/landscape/rr54.jpg",
    "assets1/Gallery/landscape/rr59.jpg",
    "assets1/Gallery/landscape/rr23.jpg",
    "assets1/Gallery/longland/rr63.jpg",
    "assets1/Gallery/longland/rr55.jpg",
    "assets1/Gallery/longland/rr6.jpg",
    "assets1/Gallery/longpot/rr26.jpg",
    "assets1/Gallery/longpot/rr57.jpg",
    "assets1/Gallery/longpot/rr56.jpg",
    "assets1/Gallery/longland/rr44.jpg",
    "assets1/Gallery/longland/rr52.jpg",
    "assets1/Gallery/longland/rr11.jpg" 
    ],
    itemsPerPage: 12,
    currentPage: 1,

    displayPage(page) {
      const container = document.getElementById('portfolio-container');
      if (!container) {
        console.error('Portfolio container element not found!');
        return;
      }
      
      container.innerHTML = ''; // Clear previous items

      const start = (page - 1) * this.itemsPerPage;
      const end = Math.min(start + this.itemsPerPage, this.images.length);
      const pageItems = this.images.slice(start, end);

      pageItems.forEach(src => {
        const item = document.createElement('div');
        item.className = 'col-lg-4 col-md-6 portfolio-item clearfix';
        item.innerHTML = `
          <a href="${src}" data-gallery="portfolioGallery" class="portfolio-lightbox preview-link">
            <img src="${src}" class="img-fluid" alt="">
          </a>
        `;
        container.appendChild(item);
      });

      this.updatePagination();
    },

    updatePagination() {
      const pagination = document.getElementById('photoPagination');
      if (!pagination) {
        console.error('Photo pagination element not found!');
        return;
      }
      
      pagination.innerHTML = ''; // Clear previous buttons

      const totalPages = Math.ceil(this.images.length / this.itemsPerPage);

      for (let i = 1; i <= totalPages; i++) {
        const button = document.createElement('button');
        button.className = 'btn btn-primary';
        button.textContent = i;
        button.onclick = () => {
          this.currentPage = i;
          this.displayPage(this.currentPage);
        };

        if (i === this.currentPage) {
          button.classList.add('active'); // Highlight current page
        }

        pagination.appendChild(button);
      }
    }
  };

  // Initial load for photo gallery
  photoGallery.displayPage(photoGallery.currentPage);
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//Whatsapp
function redirectToWhatsApp() {
  const phoneNumber = "9841204362"; // Replace with the desired phone number
  const whatsappURL = `https://wa.me/${phoneNumber}`;
  window.location.href = whatsappURL;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // Initialize Swiper
  function initializeSwiper() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      }
    });
  
    // Adjust slides per view based on window width
    function updateSlidesPerView() {
      const windowWidth = window.innerWidth;
      if (windowWidth <= 640) {
        swiper.params.slidesPerView = 1; // Show 1 slide
      } else {
        swiper.params.slidesPerView = 3; // Show 3 slides
      }
      swiper.update(); // Update Swiper instance
    }
  
    // Call the function on initial load
    updateSlidesPerView();
  
    // Update on window resize
    window.addEventListener('resize', updateSlidesPerView);
  }
  
  // Call the initialize function on DOMContentLoaded
  document.addEventListener('DOMContentLoaded', initializeSwiper);
  

 // Vimeo Popup Logic
document.addEventListener("DOMContentLoaded", function () {
  const popup = document.getElementById('videoPopup');
  const vimeoPlayer = document.getElementById('vimeoPlayer');
  const closePopup = document.getElementById('closePopup');

  // Keep iframe src empty initially
  vimeoPlayer.src = '';

  // Hide popup by default
  popup.style.display = 'none';

  // Select all images with data-video attribute
  const videoImages = document.querySelectorAll('.swiper-slide img');

  // Add click event listeners to all images
  videoImages.forEach(image => {
    image.addEventListener('click', function () {
      const videoId = this.getAttribute('data-video'); // Get the video ID from data attribute
      vimeoPlayer.src = `https://player.vimeo.com/video/${videoId}?autoplay=1`; // Set video source with autoplay
      popup.style.display = 'flex'; // Show popup
      document.body.classList.add('popup-open'); // Disable scrolling and interaction on the background page
    });
  });

  // Hide popup and stop video when the close button is clicked
  closePopup.addEventListener('click', function () {
    popup.style.display = 'none'; // Hide popup
    vimeoPlayer.src = ''; // Stop the video by clearing the iframe src
    document.body.classList.remove('popup-open'); // Re-enable scrolling and interaction on the background page
  });

  // Hide the popup if clicking outside the content
  window.addEventListener('click', function (event) {
    if (event.target == popup) {
      popup.style.display = 'none'; // Hide popup
      vimeoPlayer.src = ''; // Stop the video by clearing the iframe src
      document.body.classList.remove('popup-open'); // Re-enable scrolling and interaction on the background page
    }
  });

  // Prevent background from responding to touch when popup is open
  popup.addEventListener('touchmove', function(event) {
    event.stopPropagation(); // Stop touch events from propagating to the background
  }, { passive: false });

  // Add event listener for touchstart to ensure X button works on mobile
  closePopup.addEventListener('touchstart', function (event) {
    event.preventDefault(); // Prevent default touch behavior
    popup.style.display = 'none'; // Hide popup
    vimeoPlayer.src = ''; // Stop the video by clearing the iframe src
    document.body.classList.remove('popup-open'); // Re-enable scrolling on background
  });
});

// Stats /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function to handle the counter animation
document.addEventListener('DOMContentLoaded', () => {
  const counters = document.querySelectorAll('.counter');
  const duration = 3000; // Animation duration in milliseconds (e.g., 2000ms = 2 seconds)
  const frameDuration = 30; // Frame duration in milliseconds (30ms per frame)

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target'); // Target number
    const totalFrames = Math.round(duration / frameDuration); // Total number of animation frames
    const increment = target / totalFrames; // Increment per frame based on target value

    let current = 0;
    const updateCounter = () => {
      current += increment; // Increase the counter by the calculated increment
      counter.innerText = current.toFixed(0); // Update the displayed number, rounding to nearest integer

      if (current < target) {
        setTimeout(updateCounter, frameDuration); // Schedule the next update
      } else {
        counter.innerText = target; // Ensure the final value matches the target
      }
    };

    updateCounter(); // Start the counter animation
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }

  /**
   * Header fixed top on scroll
   */
  let selectHeader = select('#header')
  if (selectHeader) {
    let headerOffset = selectHeader.offsetTop
    let nextElement = selectHeader.nextElementSibling
    const headerFixed = () => {
      if ((headerOffset - window.scrollY) <= 0) {
        selectHeader.classList.add('fixed-top')
        nextElement.classList.add('scrolled-offset')
      } else {
        selectHeader.classList.remove('fixed-top')
        nextElement.classList.remove('scrolled-offset')
      }
    }
    window.addEventListener('load', headerFixed)
    onscroll(document, headerFixed)
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.hero-slider', {
    speed: 1000,
    loop: true,
    effect: 'fade',
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  });

  /**
   * Clients Slider
   */
  new Swiper('.clients-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      480: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 4,
        spaceBetween: 20
      },
      992: {
        slidesPerView: 6,
        spaceBetween: 20
      }
    }
  });


  /**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });

  /**
   * Portfolio details slider
   */
  new Swiper('.portfolio-details-slider', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },

      1200: {
        slidesPerView: 3,
        spaceBetween: 20
      }
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()

// Function to open the popup
function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

