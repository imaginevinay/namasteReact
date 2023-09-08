import React from "react";
import ReactDOM from "react-dom/client";
import About from "./About";
import Header from "./Header";
import Search from "./Search";
import Error from "./Error";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";

const RestCards = () => {
  return (
    <div>
      <div className="restCard-image">
        <img src="https://img.traveltriangle.com/blog/wp-content/uploads/2018/12/indian-restaurants-in-greece-cover.jpg" />
      </div>
      <div className="restCard-info">
        <div className="restCard-title">
          <h3>Name</h3>
        </div>
        <div className="restCard-description">
          <p>Description</p>
        </div>
      </div>
    </div>
  );
};

const RestCardContainer = () => {
  return (
    <div className="restCard">
      <div className="restCard-container">
        <RestCards />
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <Search />
      </div>
      <div className="restCardContainer">
        <RestCardContainer />
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Provider store={AppStore}>
      <div className="App">
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <About /> },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
