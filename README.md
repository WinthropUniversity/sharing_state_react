# Sharing State in React

The header, main and save button example from class.

One header that shows a count. One main area with a save button that adds to
it. The header and the button are not parent and child, so the count has to be
shared. The same screen is built twice: with props, and with context.

## Run it

```
npm install
npm run dev
```

Open the address it prints. Press Save three times. The header reads
`Saved: 3`.

Press Ctrl and C to stop.

## The files

The context version runs by default.

| File | Step | What it does |
| --- | --- | --- |
| `src/SavedContext.jsx` | 1. Create | Makes the context and holds the count |
| `src/entry.jsx` | 2. Provide | Wraps the app in the provider |
| `src/Header.jsx` | 3. Use | Reads the count |
| `src/SaveButton.jsx` | 3. Use | Reads it and changes it |
| `src/App.jsx` | | No state, no props |
| `src/Main.jsx` | | No state, no props |

The props version is in `src/with-props/`. It is the code from slides 7 and 8.
It is not running. Read `src/with-props/Main.jsx` next to `src/Main.jsx` to see
what context removed.

## Experiment 1: run the props version

In `src/entry.jsx`:

1. Change the App import to `./with-props/App.jsx`.
2. Delete the two `SavedProvider` tags, leaving `<App />` inside `<StrictMode>`.

Save. The screen behaves identically. Only the wiring changed.

Undo both changes before moving on. Use `git diff` to check.

## Experiment 2: a reader outside the provider

In `src/entry.jsx`, import Header and add a `<Header />` above
`<SavedProvider>`.

The page goes blank. Open the Console and read the error. It names the value
`createContext` was given in `src/SavedContext.jsx`.

Undo the change.

## Experiment 3: who re-renders

Put a `console.log` at the top of `App`, `Header`, `Main` and `SaveButton`,
each printing its own name.

Reload, then press Save once. Two of the four names appear in the Console.
Those two are the readers. Ignore the doubled lines, which are StrictMode.

Undo the logs.

## Activity: add a second shared value

Add a note to the app, using the same three steps.

**Create.** In `src/SavedContext.jsx`, add a second piece of state for the
note. Put it in the provider's value alongside the count.

**Provide.** Nothing to do. The provider already wraps the app.

**Use.** Add a text box to the main area that writes to the note. Show the
note in `src/Header.jsx` next to the count.

Rules:

1. The note travels through the context, not through props.
2. The component that changes it and the component that shows it do not import
   each other.
3. App and Main gain nothing. No props, no state.
4. The count still works.

Run Experiment 3 again when you are done and see whether the list of readers
changed.


## Submit on Blackboard

1. Zip your file without the node modules

