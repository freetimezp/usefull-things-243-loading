const timeline = gsap.timeline();

timeline
    .to(".img", {
        y: -350,
        delay: 1,
        stagger: {
            amount: 1.8,
            from: "end",
        },
        ease: "sine.inOut",
    })
    .to(".imgHomeDiv", {
        scale: 2,
        ease: "sine.inOut",
        duration: 1,
    });

timeline.from(
    ".logo, .footer",
    {
        scale: 0,
        stagger: {
            amount: 0.5,
        },
        duration: 0.5,
        ease: "power3.inOut",
    },
    "-=1"
);
