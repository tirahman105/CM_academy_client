import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux'; // Import the Provider from Redux
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProvider from "./providers/AuthProvider.jsx";
import store from "./Store/store"; // Import your Redux store

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}> {/* Wrap your App with Provider and provide the store */}
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
