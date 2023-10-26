import React from "react";
import "./App.css";
import Header from "./component/header";
import Body from "./component/Body";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./component/MainContainer";
import WatchPage from "./component/WatchPage";
import { useSelector } from "react-redux";
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
  const dark = useSelector((state) => state.moods.moods);
  return (
    <div className={`${dark ? "darkness" : "bg-white"}`}>
      {/* <Header /> */}
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
