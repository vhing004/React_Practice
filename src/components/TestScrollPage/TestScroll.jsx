import { useEffect, useRef } from "react";
import "./test.css";

function TestScroll() {
  //   const box1 = ref1.current;
  // console.log(ref1.current);
  //   const handleScroll = () => {
  //     const box1 = ref1.current.getBoundingClientRect();
  //     if (box1.bottom <= window.innerHeight) {
  //       ref1.current.classList.add("active");
  //     } else {
  //       ref1.current.classList.remove("active");
  //     }
  //   };

  //   useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);

  //     // return () => window.removeEventListener("scroll", handleScroll)
  //   });

  const refArr = useRef([]);

  const handleScroll = () => {
    refArr.current.forEach((refElement) => {
      const { bottom } = refElement.getBoundingClientRect();
      if (bottom <= window.innerHeight) {
        refElement.classList.add("active");
      } else {
        refElement.classList.remove("active");
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="body">
      {[...Array(12)].map((_, index) => (
        <div
          ref={(el) => (refArr.current[index] = el)}
          key={index}
          className={`box box-${index + 1}`}
        >
          Content box + {index + 1}
        </div>
      ))}
    </div>
  );
}

export default TestScroll;
