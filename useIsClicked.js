import { useState, useEffect } from "react";
export const useIsClicked = (ref) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    const handleSetIsClicked = (e) => {
      setIsClicked(ref.current === e.target || ref.current.contains(e.target));
    };
    document.addEventListener("click", handleSetIsClicked);
    return () => {
      document.removeEventListener("click", handleSetIsClicked);
    };
  }, [isClicked]);

  return isClicked;
};
