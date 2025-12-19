/***********************
 COMMON – AOS INIT
************************/
if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1200,
        offset: 100,
        once: true
    });
}

/***********************
 HERO SLIDER – HOME
************************/
const slides = document.querySelectorAll('.hero-bg');
if (slides.length > 0) {
    let currentSlide = 0;

    function changeSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }

    setInterval(changeSlide, 6000);
}

/***********************
 NAVBAR SHADOW
************************/
const navbar = document.querySelector('.navbar');
if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('shadow-sm');
            navbar.style.padding = "10px 0";
        } else {
            navbar.classList.remove('shadow-sm');
            navbar.style.padding = "15px 0";
        }
    });
}

/***********************
 DOM CONTENT LOADED
************************/
document.addEventListener('DOMContentLoaded', () => {

    /******** Scroll Reveal ********/
    const revealElements = document.querySelectorAll(
        '.reveal-text, .reveal-up, .reveal-left, .reveal-right'
    );

    if (revealElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active-anim');
                }
            });
        }, { threshold: 0.15 });

        revealElements.forEach(el => observer.observe(el));
    }

    /******** Horizontal Scroll – Services ********/
    const track = document.getElementById('scrollTrack');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (track && nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () =>
            track.scrollBy({ left: 300, behavior: 'smooth' })
        );
        prevBtn.addEventListener('click', () =>
            track.scrollBy({ left: -300, behavior: 'smooth' })
        );
    }

    /******** Back To Top ********/
    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', () => {
            backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
        });

        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    /******** Navbar Collapse – Mobile ********/
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navMenu && typeof bootstrap !== "undefined") {
        const bsCollapse = new bootstrap.Collapse(navMenu, { toggle: false });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('show')) {
                    bsCollapse.hide();
                }
            });
        });
    }
});

/***********************
 ABOUT US – SCROLL ANIMATION
************************/
const hiddenElements = document.querySelectorAll('.hidden-element');
if (hiddenElements.length > 0) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element');
            }
        });
    }, { threshold: 0.15 });

    hiddenElements.forEach(el => aboutObserver.observe(el));
}

/***********************
 CONTACT FORM
************************/
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert("Thank you for your message! We will contact you shortly.");
        this.reset();
    });
}

/***********************
 PRODUCTS – FILTER & LOAD MORE
************************/
const filterBtns = document.querySelectorAll('.filter-btn');
const productItems = document.querySelectorAll('.product-item');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const hiddenItems = document.querySelectorAll('.hidden-item');

if (filterBtns.length > 0 && productItems.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            productItems.forEach(item => {
                const category = item.dataset.category;
                if (filter === 'all' || filter === category) {
                    item.classList.remove('d-none');
                } else {
                    item.classList.add('d-none');
                }
            });

            if (loadMoreBtn) {
                loadMoreBtn.style.display = filter === 'all' ? 'inline-block' : 'none';
                hiddenItems.forEach(h => h.classList.add('d-none'));
            }
        });
    });
}

if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
        hiddenItems.forEach(item => item.classList.remove('d-none'));
        loadMoreBtn.style.display = 'none';
    });
}

/***********************
 SERVICES – SCROLL ANIMATION
************************/
const serviceElements = document.querySelectorAll('.dg-animate');
if (serviceElements.length > 0) {
    const serviceScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;
        serviceElements.forEach(el => {
            if (el.getBoundingClientRect().top < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', serviceScroll);
    serviceScroll();
}

/***********************
 SERVICES – ACTIVE SIDEBAR LINK
************************/
const menuItems = document.querySelectorAll('.dg-service-menu a');
if (menuItems.length > 0) {
    const currentLocation = location.href;
    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.parentElement.classList.add('active');
        }
    });
}

document.querySelector('.collage-wrapper').addEventListener('click', function () {
    this.classList.toggle('zoom-active');
});