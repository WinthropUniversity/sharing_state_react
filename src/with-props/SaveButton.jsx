// Slide 8. SaveButton calls the function it was given. It does not know what
// that function does, only that pressing the button runs it.

export default function SaveButton({ onSave }) {
  return <button onClick={onSave}>Save</button>;
}
