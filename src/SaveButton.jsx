// Slide 17. Step 3 of three: use the context.
//
// SaveButton takes both the value and the setter out of the context, so it can
// read the count and change it. Header is nowhere in its imports, yet pressing
// this button is what makes the header change.

import { useContext } from "react";
import { SavedContext } from "./SavedContext.jsx";

export default function SaveButton() {
  const { count, setCount } = useContext(SavedContext);
  return <button onClick={() => setCount(count + 1)}>Save</button>;
}
