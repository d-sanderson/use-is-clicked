# use-is-clicked

🎯 a simple React hook that tracks whether a DOM element or its descendant is clicked. This is useful for tracking a modal/dropdown state and enabling it to close if clicked away.

To install:
- `npm i use-is-clicked`
  
or

- `yarn add use-is-clicked`

To use:

- create a ref using the `useRef()` hook
- add the ref to the target element using the `ref` attribute.
- pass the ref to the `useIsClicked` hook.
  
```js/** @jsx jsx */
import React, { useRef } from "react";
import { useIsClicked } from "use-is-clicked";
import { Navbar } from "react-bootstrap";


const Example = () => {
  const navRef = useRef();
  const isClicked = useIsClicked(navRef);

  return (
 <Navbar ref={navRef} expanded={isClicked} expand="lg" bg="dark" variant="dark">
...
 </Navbar>
  )
}

export default Example
```

The hook returns a boolean which tracks whether the element(or one of its descendants) has been clicked on or away from.
