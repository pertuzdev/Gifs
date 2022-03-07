import { useEffect, useRef, useState } from "react";

export function useNearScreen({
  distance = "100px",
  externalRef,
  once = true,
} = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const ref = useRef();

  useEffect(() => {
    let observer;

    const element = externalRef ? externalRef.current : ref.current;
    if (!element) return;

    //console.log(element, "element");

    const onChange = (entries, observer) => {
      const el = entries[0];
      //console.log(el.isIntersecting);
      if (el.isIntersecting) {
        setIsNearScreen(true);
        once && observer.disconnect();
      } else {
        !once && setIsNearScreen(false);
      }
    };

    Promise.resolve(
      typeof IntersectionObserver !== "undefined"
        ? IntersectionObserver
        : import("intersection-observer")
    ).then(() => {
      observer = new IntersectionObserver(onChange, {
        rootMargin: distance,
      });

      observer.observe(element);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, ref };
}
