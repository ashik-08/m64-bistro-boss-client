import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./Routes/Routes";
import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./Provider/AuthProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <RouterProvider router={routes} />
      <Toaster />
    </HelmetProvider>
  </AuthProvider>
);
