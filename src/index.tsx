// Use with regular html
// import fetchUser from "./githubAPI";
// (async () => {
//   const user = await fetchUser("btkdevkh");
//   document.querySelector("div")!.innerHTML = JSON.stringify(user);
// })();

// Use with react & jsx
import React from "react";
import { createRoot } from "react-dom";
const root = createRoot(document.getElementById("root"));

const App = () => {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>Hello Bun!</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+count</button>
    </div>
  );
};
root.render(<App />);
