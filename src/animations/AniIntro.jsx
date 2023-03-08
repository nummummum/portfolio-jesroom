import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function AniIntro() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    ".Intro",
    1.3,
    {
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: ".header_sheld",
      },
      opacity: 1,
      delay: 0.5,
    }
  );
  gsap.fromTo(
    ".blender",
    1.3,
    {
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: ".Intro",
        start: "30% top",
      },
      opacity: 1,
      delay: 0.5,
    }
  );
  gsap.fromTo(
    ".option",
    1.3,
    {
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: ".blender",
        start: "30% top",
      },
      opacity: 1,
      delay: 0.5,
    }
  );
  gsap.fromTo(
    ".database",
    1.3,
    {
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: ".option",
        start: "30% top",
      },
      opacity: 1,
      delay: 0.5,
    }
  );
  gsap.fromTo(
    ".interactive",
    1.3,
    {
      opacity: 0,
    },
    {
      scrollTrigger: {
        trigger: ".database",
        start: "30% top",
      },
      opacity: 1,
      delay: 0.5,
    }
  );
}
