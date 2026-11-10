// Slide 17. Step 3 of three: use the context.
//
// Header takes no props at all. It reaches the count by asking the context.

import { useContext } from "react";
import { SavedContext } from "./SavedContext.jsx";

export default function Header() {
  const { count } = useContext(SavedContext);
  return <header>Saved: {count}</header>;
}
