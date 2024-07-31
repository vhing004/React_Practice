import { useEffect, useState } from "react";

function useDebounce(value, delay) {
  const [debounce, setDebounce] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounce(value), delay);

    return () => clearTimeout(handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return debounce;
}

export default useDebounce;

// import { useState, useEffect } from "react";

// function useDebounce(val, delay) {
//   const [debounce, setDebounce] = useState(val);

//   useEffect(() => {
//     const handler = setTimeout(() => setDebounce(val), delay);

//     return () => clearTimeout(handler);
//   }, [val]);

//   return debounce;
// }

// export default useDebounce;
