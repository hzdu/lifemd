if (document.querySelector('.achieve-slider.first') != null) {
    new Splide('.achieve-slider.first', {
        type: 'loop',
        perPage: 4,
        gap: 26,
        arrows: false,
        pagination: false,
        breakpoints: {
            1600: {
                gap: 20
            },
            1200: {
                perPage: 3
            },
            767: {
                type: 'loop',
                perPage: 1,
                padding: {right: '250px'},
            },
            600: {
                gap: 18,
                padding: {right: '30px'},
            },
            413: {
                gap: 15,
                padding: {right: '10px'}
            }
        }
    }).mount();
}

if (document.querySelector('.achieve-slider.second') != null) {
    const splider = new Splide('.achieve-slider.second', {
        perPage: 3,
        gap: 26,
        arrows: false,
        pagination: false,
        padding: {right: '125px'},
        breakpoints: {
            1600: {
                gap: 20,
                padding: {right: '35px'},
            },
            1200: {
                perPage: 2,
                padding: {right: '63px'}
            },
            991: {
                padding: {right: '27px'}
            },
            767: {
                type: 'loop',
                perPage: 1,
                padding: {right: '250px'},
            },
            600: {
                gap: 18,
                padding: {right: '30px'},
            },
            413: {
                gap: 15,
                padding: {right: '10px'}
            }
        }
    }).mount();

    splider.on('move', function () {
        popupImportant();
    });
}

if (document.querySelector('.patients .main-slider') != null) {
    const main = new Splide('.main-slider', {
        type: 'loop',
        arrows: true,
        pagination: false,
        perPage: 1,
        autoScroll: {
            speed: 10,
        },
        breakpoints: {
            767: {
                arrows: false,
                pagination: true,
                gap: 15,
            }
        }
    });

    const thumbnails = new Splide('.thumbnail-slider', {
        type: 'loop',
        arrows: false,
        pagination: false,
        autoWidth: true,
        gap: 23,
        perPage: 7,
        rewind: true,
        isNavigation: true,
        focus: 'center',
        autoScroll: {
            speed: 10,
        },
        breakpoints: {
            1200: { gap: 18 },
            550: {
                gap: 15,
                padding: '10%',
            }
        }
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();
}

if (document.querySelector('.real-patients .splide') != null) {
    new Splide('.real-patients .splide', {
        type: 'loop',
        perPage: 4,
        arrows: false,
        gap: 30,
        pagination: false,
        breakpoints: {
            1800: {
                gap: 19,
            },
            1500: {
                gap: 10,
            },
            767: {
                perPage: 2,
                gap: 20,
                padding: {right: '50px'},
            },
            600: {
                perPage: 1,
            },
            413: {
                padding: {right: '15px'},
            }
        }
    }).mount();
}

if (document.querySelector('.movement-splide') != null) {
    new Splide('.movement-splide', {
        type: 'loop',
        drag: 'free',
        arrows: false,
        pagination: false,
        gap: 20,
        perPage: 4,
        autoScroll: {
            speed: 0.5,
        },
        breakpoints: {
            991: {perPage: 3},
            767: {perPage: 2},
            500: {
                perPage: 1,
                padding: '80px'
            },
            390: {
                padding: '50px'
            }
        }
    }).mount(window.splide.Extensions);
}

if (document.querySelector('.join-splide') != null) {
    new Splide('.join-splide', {
        perPage: 3,
        gap: 27,
        arrows: false,
        pagination: false,
        padding: {right: '50px'},
        breakpoints: {
            1600: {
                gap: 20,
                padding: {right: '50px'},
            },
            1200: {
                perPage: 2,
                padding: {right: '140px'},
            },
            991: {
                padding: {right: '100px'},
            },
            767: {
                perPage: 1,
                padding: {right: '150px'},
            },
            500: {
                gap: 15,
                padding: {right: '30px'},
            },
            413: {
                padding: {right: '15px'},
            }
        }
    }).mount();
}

if (document.querySelector('.reviews-splide') != null) {
    new Splide('.reviews-splide', {
        perPage: 3,
        arrows: false,
        pagination: true,
        autoplay: true,
        breakpoints: {
            991: {
                type: 'loop',
                perPage: 2,
                padding: '50px'
            },
            767: {
                perPage: 1,
                padding: '70px'
            },
            500: {
                padding: {right: '50px'},
                pagination: false,
            },
            413: {
                padding: {right: '25px'},
            }
        }
    }).mount();
}

function popupImportant() {
    const body = document.querySelector('.universal_popup .inner .body')
    const head = document.querySelector('.universal_popup .head')
    const button = document.querySelectorAll('.btn-universal_popup');
    
    button.forEach(link => {

        link.onclick = (event) => {
            event.preventDefault();

            setTimeout(() => {
                body.scrollTo({top: 0});
            }, 50);
            
            setTimeout(() => {
                let anhor = document.getElementById(event.target.closest('.btn').dataset.anchor);
                let pos = anhor.getBoundingClientRect();
                let styleBody = window.getComputedStyle(body);
                let paddingBody = parseFloat(styleBody.getPropertyValue('padding-top'));
                let positionScroll = 0;

                if (window.innerWidth < 600) {
                    positionScroll = (pos.top - paddingBody) - head.offsetHeight - 30;
                } else {
                    positionScroll = (pos.top - paddingBody) - head.offsetHeight - (anhor.offsetHeight + 50);
                }
                
                body.scrollTo({
                    top: positionScroll,
                    behavior: 'smooth'
                });
            }, 100);
        }
    });
}

popupImportant();

/* STICKY
----------------------------------- */
let coordsStart = 0;
let coordsStartTwo = 0;

function sticky(startSelector, endSelector, coordsStart, offsetTop) {
    const header = document.querySelector('.head-main');
    const start = document.querySelector(startSelector);
    const end = document.querySelector(endSelector);
    
    setSticky();

    window.addEventListener("scroll", function() {
        if (window.innerWidth >= 991) {
            setSticky();
        }
    });

    function setSticky() {
        let coordsEnd = getCoords(end);
        const headerHeight = header.offsetHeight + 20;
        const cordsTop = Math.floor(coordsStart.top - headerHeight); 
        const cordsBottom = Math.floor((coordsEnd.top - start.offsetHeight - headerHeight));
        const debug = `scrollY: ${window.scrollY}; top: ${cordsTop}; end: ${cordsBottom}; header: ${headerHeight}`;

        // console.log(debug);

        if (window.innerWidth >= 991) {
            if (window.scrollY >= cordsTop && window.scrollY < cordsBottom) {
                start.removeAttribute('style');
                start.style.position = `fixed`;
                start.style.top = `${headerHeight}px`;
            } else if (window.scrollY >= cordsBottom) {
                start.removeAttribute('style');
                start.style.position = `absolute`;
                start.style.bottom = `0`;
                start.style.top = `initial`;
            } else {
                start.removeAttribute('style');
            }
        }
    }
}


function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset,
        width: box.width,
        height: box.height
    };
}

/*window.onload = function() {
    if (document.querySelector('.sticky-start') != null) {
        coordsStart = getCoords(document.querySelector('.faq-title'));
        sticky('.sticky-start', '.sticky-end', coordsStart, 0);
    }
};*/


/* HEADER 
---------------------------------------------------- */
function btnFix() {
    const btnFix = document.querySelector('.btn-fix');
    const bar = header.querySelector('.head-sidebar');
    const home = document.querySelector('.home');
    
    window.addEventListener('scroll', e => {
        if (window.scrollY >= bar.clientHeight) {
            document.body.classList.add('fixd-header');

            const headMain = document.querySelector('.head-main');

            home.style.marginTop = `${headMain.clientHeight}px`;
        } else {
            document.body.classList.remove('fixd-header');
            home.removeAttribute('style');
        }

        if (window.scrollY >= 200 && window.innerWidth < 550) {
            btnFix.classList.add('active');
        } else {
            btnFix.classList.remove('active');
        }
    });
}

btnFix();    

/* HOVER LOTTIE 
---------------------------------------------------- */
function hoverLottie() {
    const hoverLotties = document.querySelectorAll('.hover-lottie');
    let flag = true;

    hoverLotties.forEach(hover => {
        const icon = hover.querySelector('.icon');
        let animationInstance = lottie.loadAnimation({
            container: icon,
            path: 'lottie/' + icon.dataset.src + '.json',
            renderer: icon.dataset.render,
            loop: (icon.dataset.loop) ? true : false,
            autoplay: true
        });

        hover.addEventListener('mouseover', (e) => {
            if (flag) {
                const parent = e.target.closest('.hover-lottie');

                animationInstance.goToAndStop(0, true);
                animationInstance.play();
            }
            
            flag = false;
        });

        hover.addEventListener('mouseout', (e) => {
            flag = true;
        });
    });

}

hoverLottie();

/* POPUP 
-------------------------------- */
function popup() {
    let btn = document.querySelectorAll('.btn-popup');
    let overlay = document.querySelector('.popup-overlay');
    let popup = null;
    let close = null;
    let _this = this;

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click', function(e) {
            e.preventDefault();

            popup = document.querySelector('.popup-' + this.getAttribute('data-popup'));
            console.log(this.getAttribute('data-popup'));
            close = popup.querySelectorAll('.popup-close');

            let top  = window.pageYOffset || document.documentElement.scrollTop,
            left = window.pageXOffset || document.documentElement.scrollLeft;
            
            overlay.classList.add('active');
            popup.classList.add('active');
            popup.style.top = (top + 100) + 'px';
            _this = this;

            close.forEach(close => {
                close.addEventListener('click', closePopup);
            });
            
            overlay.addEventListener('click', closePopup);

            if (this.getAttribute('data-popup') == 'video') {
                popup.querySelector('video').src = this.dataset.video;
                popup.querySelector('video').play();
                popupPlayer(popup, false);
            }
        });
    }

    document.addEventListener('keydown', function(e) {
        if (e.keyCode == 27) closePopup(e);
    });

    function closePopup(e) {
        e.preventDefault();
        overlay.classList.remove('active');
        popup.classList.remove('active');

        if (_this.getAttribute('data-popup') == 'video') {
            popup.querySelector('video').pause();
            popup.querySelector('video').currentTime = 0;
            popupPlayer(popup, true);
            popup.classList.remove('pause-video');
            popup.classList.add('play-video');
        }
    }
}

popup();

/* BURGER
----------------------------------- */
function burgerMenu() {
    const btnNav = document.querySelector('.btn-nav');

    btnNav.onclick = (e) => {
        e.preventDefault();
        document.body.classList.toggle('nav-open');
    }

    let nav = document.querySelectorAll('nav#nav li a');
    nav.forEach(a => {
        a.onclick = (event) => {
            document.body.classList.remove('nav-open');
        }  
    })
}

burgerMenu();

const anchor = () => {
    let anchors = document.querySelectorAll('a[href*="#"]')
    anchors.forEach(anchor => {

        if(anchor.attributes[0].nodeValue.indexOf('?') === -1){
            anchor.addEventListener('click', (e) => {
                e.preventDefault()

                let blockID = anchor.getAttribute('href').substr(1)
                let element = document.getElementById(blockID);

                if (element != null) {
                    let pos = (element.getBoundingClientRect().top + window.pageYOffset)
                    pos = pos + 5;

                    if (blockID == 'main-slider') {
                        pos -= document.querySelector('.head-main').offsetHeight + 20;
                    }

                    window.scrollTo({top: pos, behavior: 'smooth'})
                }           
            })
        }
    })
}

anchor();
