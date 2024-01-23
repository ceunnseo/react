import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

const App = createBrowserRouter([
  {
    path : "/",
    element : <Home />,
  },
  {
    path : "/movie/:id",
    element : <Detail />,
  },
  {
    path : "/hi",
    element : <h1>hello page</h1>,
  },
]);

export default App;
