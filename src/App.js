import React from "react";
import "./App.css";
import Header from "./component/header";
import Body from "./component/Body";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import WatchPage from "./component/WatchPage";
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "watch",
        element: <WatchPage />,
      },
    ],
  },
]);
const App = () => {
  return (
    <div>
      {/* <Header /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
