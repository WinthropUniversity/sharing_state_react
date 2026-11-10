// Slide 7. The same screen, built with props instead of context.
//
// App owns the count here. It sends the value to Header and a function to
// Main. Nothing in this folder is used until you switch to it in main.jsx.

import { useState } from "react";
import Header from "./Header.jsx";
import Main from "./Main.jsx";

export default function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Header count={count} />
      <Main onSave={() => setCount(count + 1)} />
    </>
  );
}
