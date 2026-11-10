// Slide 18. App holds no state and passes no props.
//
// Compare this with src/with-props/App.jsx, which is the same screen built
// the other way.

import Header from "./Header.jsx";
import Main from "./Main.jsx";

export default function App() {
  return (
    <>
      <Header />
      <Main />
    </>
  );
}
