import { useEffect, useRef, useState } from "react";

export function useNearScreen({ distance = "100px" } = {}) {
  const [isNearScreen, setIsNearScreen] = useState(false);
  const ref = useRef();

  console.log(distance, "distance");
  useEffect(() => {
    let observer;
    const onChange = (entries, observer) => {
      const el = entries[0];
      console.log(el.isIntersecting);
      if (el.isIntersecting) {
        setIsNearScreen(true);
        observer.disconnect();
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

      observer.observe(ref.current);
    });

    return () => observer && observer.disconnect();
  });

  return { isNearScreen, ref };
}
