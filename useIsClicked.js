import { useState, useEffect } from "react";
export const useIsClicked = ( ref ) => {
  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    document.addEventListener("click", (e) => {
            setIsClicked(ref.current === e.target || ref.current.contains(e.target));
    });
  }, [isClicked]);
  return isClicked;
};