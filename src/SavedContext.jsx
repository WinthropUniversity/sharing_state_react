// Slide 15. Step 1 of three: create the context.
//
// Two things leave this file. SavedContext is the context itself, which the
// components that read the count import. SavedProvider is the component that
// owns the count and hands it to everything inside it.

import { createContext, useState } from "react";

export const SavedContext = createContext(null);

export function SavedProvider({ children }) {
  const [count, setCount] = useState(0);
  return (
    <SavedContext value={{ count, setCount }}>
      {children}
    </SavedContext>
  );
}
