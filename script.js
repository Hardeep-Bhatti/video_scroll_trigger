gsap.registerPlugin(ScrollTrigger);

let video = document.querySelector('video');

video.addEventListener('loadedmetadata', () =>
{
    gsap.to(video,
    {
        scrollTrigger: {
        trigger: video,
        start: "top 10%",
        end: "bottom 90%",
        scrub: 1,
        markers: true,
        },

        ease: "linear",
        currentTime: video.duration,
    });
});