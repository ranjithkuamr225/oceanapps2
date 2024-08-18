


// document.addEventListener('DOMContentLoaded', () => {
//     const burger = document.querySelector('.burger');
//     const navLinks = document.querySelector('.nav-links');

//     // Function to hide the navbar
//     const hideNavbar = () => {
//         navLinks.classList.remove('active');
//         burger.classList.remove('toggle');
//     };

//     // Toggle navbar on burger click
//     burger.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//         burger.classList.toggle('toggle');
//     });

//     // Hide navbar on scroll
//     window.addEventListener('scroll', hideNavbar);

//     // Hide navbar on page load
//     window.addEventListener('load', hideNavbar);
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const burger = document.querySelector('.burger');
//     const navLinks = document.querySelector('.nav-links');
//     const header = document.querySelector('header');
//     let lastScrollTop = 0;

//     // Function to hide the navbar
//     const hideNavbar = () => {
//         navLinks.classList.remove('active');
//         burger.classList.remove('toggle');
//     };

//     // Toggle navbar on burger click
//     burger.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//         burger.classList.toggle('toggle');
//     });

//     // Function to handle scroll behavior
//     const handleScroll = () => {
//         let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//         if (scrollTop > lastScrollTop) {
//             // User is scrolling down, show header
//             header.classList.add('show');
//         } else if (scrollTop < lastScrollTop) {
//             // User is scrolling up, hide header
//             header.classList.remove('show');
//         }
//         lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
//     };

//     // Ensure header is shown on page load
//     header.classList.add('show');

//     // Hide navbar on page load
//     window.addEventListener('load', hideNavbar);

//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);
// });


// document.addEventListener('DOMContentLoaded', () => {
//     const burger = document.querySelector('.burger');
//     const navLinks = document.querySelector('.nav-links');
//     const header = document.querySelector('header');
//     let lastScrollTop = 0;
//     let isScrolling;

//     // Function to hide the navbar
//     const hideNavbar = () => {
//         navLinks.classList.remove('active');
//         burger.classList.remove('toggle');
//     };

//     // Toggle navbar on burger click
//     burger.addEventListener('click', () => {
//         navLinks.classList.toggle('active');
//         burger.classList.toggle('toggle');
//     });

//     // Function to handle scroll behavior
//     const handleScroll = () => {
//         let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

//         if (scrollTop > lastScrollTop) {
//             // User is scrolling down, hide header
//             header.classList.remove('show');
//         } else {
//             // User is scrolling up or static, show header
//             header.classList.add('show');
//         }
//         lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

//         // Clear our timeout throughout the scroll
//         window.clearTimeout(isScrolling);

//         // Set a timeout to run after scrolling ends
//         isScrolling = setTimeout(() => {
//             // If user stops scrolling, show header
//             header.classList.add('show');
//         }, 200); // Adjust timeout duration as needed
//     };

//     // Hide navbar on page load
//     window.addEventListener('load', hideNavbar);

//     // Add scroll event listener
//     window.addEventListener('scroll', handleScroll);
// });


// 


document.addEventListener("contextmenu", function(event){
   alert("This Functionality is Disabled By Default... Please Contact Admin")
   event.preventDefault();
});

// target images for right-click prevention:

document.addEventListener('contextmenu', function(e) {
    if (e.target.tagName === 'IMG') {
        e.preventDefault();
    }
}, false);

// prevent certain combinations like "Ctrl+U"
document.addEventListener('keydown', function(event) {
    // Disable F12
    if (event.key === "F12") {
        event.preventDefault();
    }

    // Disable Ctrl+Shift+I
    if (event.ctrlKey && event.shiftKey && event.key === 'I') {
        event.preventDefault();
    }

    // Disable Ctrl+Shift+J
    if (event.ctrlKey && event.shiftKey && event.key === 'J') {
        event.preventDefault();
    }

    // Disable Ctrl+U
    if (event.ctrlKey && event.key === 'U') {
        event.preventDefault();
    }

    // Disable Ctrl+Shift+C
    if (event.ctrlKey && event.shiftKey && event.key === 'C') {
        event.preventDefault();
    }
}, false);


document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');
    const header = document.querySelector('header');
    let lastScrollTop = 0;
    let isScrolling;
    let hasScrolled = false;
    let navbarActive = false;

    // Function to hide the navbar
    const hideNavbar = () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
        navbarActive = false;
    };

    // Toggle navbar on burger click
    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
        navbarActive = navLinks.classList.contains('active');
    });

    // Function to handle scroll behavior
    const handleScroll = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (navbarActive) {
            hideNavbar(); // Hide the navbar if it's active
        }

        if (scrollTop > lastScrollTop) {
            // User is scrolling down, hide header
            header.classList.remove('show');
        } else {
            // User is scrolling up or static, show header
            header.classList.add('show');
        }
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

        // Clear our timeout throughout the scroll
        window.clearTimeout(isScrolling);

        // Set a timeout to run after scrolling ends
        isScrolling = setTimeout(() => {
            // If user stops scrolling, show header
            header.classList.add('show');
        }, 200); // Adjust timeout duration as needed
    };

    // Function to handle initial static state
    const handleInitialScroll = () => {
        if (!hasScrolled) {
            header.classList.add('show');
        }
    };

    // Detect first scroll and remove initial scroll listener
    const onFirstScroll = () => {
        hasScrolled = true;
        window.removeEventListener('scroll', handleInitialScroll);
    };

    // Hide navbar on page load
    window.addEventListener('load', hideNavbar);

    // Add scroll event listener for hiding/showing header
    window.addEventListener('scroll', handleScroll);

    // Add initial scroll event listener to keep header visible
    window.addEventListener('scroll', onFirstScroll);

    // Check initial static state
    handleInitialScroll();
});

// to detect when Developer Tools are open and then take some action, such as redirecting the user or displaying a warning.
// (function() {
//     const devtools = { open: false, orientation: null };
//     const threshold = 160;

//     const emitEvent = (isOpen, orientation) => {
//         window.dispatchEvent(new CustomEvent('devtoolschange', {
//             detail: {
//                 open: isOpen,
//                 orientation: orientation
//             }
//         }));
//     };

//     const main = ({ emitEvents = true } = {}) => {
//         const widthThreshold = window.outerWidth - window.innerWidth > threshold;
//         const heightThreshold = window.outerHeight - window.innerHeight > threshold;
//         const orientation = widthThreshold ? 'vertical' : 'horizontal';

//         if (
//             !(heightThreshold && widthThreshold) &&
//             ((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
//         ) {
//             if ((!devtools.open || devtools.orientation !== orientation) && emitEvents) {
//                 emitEvent(true, orientation);
//             }

//             devtools.open = true;
//             devtools.orientation = orientation;
//         } else {
//             if (devtools.open && emitEvents) {
//                 emitEvent(false, null);
//             }

//             devtools.open = false;
//             devtools.orientation = null;
//         }
//     };

//     main({ emitEvents: false });
//     setInterval(main, 500);

//     if (typeof module !== 'undefined' && module.exports) {
//         module.exports = devtools;
//     } else {
//         window.devtools = devtools;
//     }
// })();

// window.addEventListener('devtoolschange', function(event) {
//     if (event.detail.open) {
//         alert('Developer Tools are open. Please close them to continue.');
//         // Optionally, redirect or take other actions
//         window.location.href = 'https://www.example.com'; // Example: Redirect to another page
//     }
// });