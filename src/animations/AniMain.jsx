import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default function AniMain() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.fromTo(
    ".main_title",
    1.3,
    {
      opacity: 0,
      transform: "translateY(100px)",
    },
    { opacity: 1, delay: 1, transform: "translateY(0px)" }
  );
  gsap.fromTo(
    ".sub_title",
    1.3,
    {
      opacity: 0,
      transform: "translateY(100px)",
    },
    { opacity: 1, delay: 1.3, transform: "translateY(0px)" }
  );
  gsap.fromTo(
    ".btn_gray_white",
    1.3,
    {
      opacity: 0,
    },
    { opacity: 1, delay: 1.8 }
  );
  gsap.fromTo(
    ".right_mention",
    1.3,
    {
      opacity: 0,
    },
    { opacity: 1, delay: 1.8 }
  );
}
