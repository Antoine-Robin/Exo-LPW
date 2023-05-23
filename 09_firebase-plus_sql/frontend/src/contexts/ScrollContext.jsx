import React, { useContext, useEffect, useState } from "react";

const ScrollContext = React.createContext({});

export function useScroll() {
  return useContext(ScrollContext);
}

export function ScrollProvider({ children }) {
  const [isScrollReachEnd, setIsScrollReachEnd] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(document.documentElement.scrollHeight);
      console.log(window.innerHeight);
      console.log(document.documentElement.scrollTop);
      setIsScrollReachEnd(
        window.innerHeight + document.documentElement.scrollTop >=
          document.documentElement.scrollHeight
      );
    });
  }, []);

  const value = { isScrollReachEnd };

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
}
