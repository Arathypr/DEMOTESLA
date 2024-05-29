import { useState, useEffect } from "react";

function useInView(refs, options) {
  const [inView, setInView] = useState(() => refs.map(() => false));

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        setInView((prevInView) => {
          const newInView = [...prevInView];
          newInView[index] = entry.isIntersecting;
          return newInView;
        });
      });
    }, options);

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, [refs, options]);

  return inView;
}

export default useInView;
