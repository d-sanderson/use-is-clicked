# use-is-clicked

a simple React hook that tracks whether an element or its descendant is clicked. This is useful for tracking a modal/dropdown state and enabling it to close if clicked away.

To install:
- `npm i use-is-clicked`
  
or

- `yarn add use-is-clicked`

To use, pass the:

- create a ref for the element you would like to track with useRef()
- add `ref=[refName]` to the target element.

  
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
