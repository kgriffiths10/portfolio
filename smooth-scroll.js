// Initialize Lenis smooth scroll
const lenis = new Lenis({
    duration: 1.5,
    smoothWheel: true,
    smoothTouch: true
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// GSAP initialization function
let gsapInitialized = false;

function initializeGSAP() {
    if (window.matchMedia("(min-width: 1024px)").matches && !gsapInitialized) {
        gsap.registerPlugin(ScrollTrigger);

        // Initialize GSAP ScrollTrigger animations
        ScrollTrigger.defaults({
            scroller: lenis.scrollContainer // Set Lenis as the scroller
        });

        ScrollTrigger.create({
            trigger: "#about-section",
            start: "top top",
            endTrigger: "#about-section .section-heading",
            end: "bottom center",
            pin: "#about-section .section-heading",
            pinSpacing: false,
            markers: false,
        });

        ScrollTrigger.create({
            trigger: "#education-section",
            start: "top top",
            endTrigger: "#dev-projects-section",
            end: "top center",
            pin: "#education-section .section-heading",
            pinSpacing: false,
        });

        ScrollTrigger.create({
            trigger: "#contact-section",
            start: "top top",
            end: "bottom bottom",
            pin: "#contact-section .section-heading",
            pinSpacing: false,
        });

        gsapInitialized = true;
    } else if (window.matchMedia("(max-width: 1024px)").matches && gsapInitialized) {
        // Clean up GSAP ScrollTriggers when switching to smaller screens
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        gsapInitialized = false;
    }
}

document.addEventListener("DOMContentLoaded", initializeGSAP);
window.addEventListener("resize", initializeGSAP);