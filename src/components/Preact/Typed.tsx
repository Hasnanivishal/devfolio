import { useRef, useEffect } from "preact/hooks";
import * as TypingJs from "typed.js";

const Typed = () => {
  const el = useRef(null);

  useEffect(() => {
    const typedItems = [
      "A ^200 <i>Full Stack Developer</i>",
      "A ^400 <i>Freelancer</i>",
      "A ^600 <i>Designer</i>",
      "A ^800 <i>Learner</i>",
    ];

    const typed = new TypingJs.default(el.current, {
      strings: typedItems,
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
      cursorChar: '_',
    });

    return () => {
      typed.destroy();
    };
  });

  return <span ref={el} />;
};

export default Typed;
