// Slide 18. Main is the layer in the middle.
//
// This is the file to look at when you want to see what context changed. In
// the props version it has a prop it never uses. Here it has none.

import SaveButton from "./SaveButton.jsx";

export default function Main() {
  return (
    <main>
      <SaveButton />
    </main>
  );
}
