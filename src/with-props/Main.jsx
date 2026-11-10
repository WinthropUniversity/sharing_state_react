// Slide 8. This is the prop drilling on slide 10.
//
// Main receives onSave and does nothing with it except hand it to SaveButton.
// It is a component in the middle, carrying a prop it never uses.

import SaveButton from "./SaveButton.jsx";

export default function Main({ onSave }) {
  return <main><SaveButton onSave={onSave} /></main>;
}
