// Import necessary components and functions from react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import Planet from "./pages/Planet";
import Vehicle from "./pages/Vehicle";
import Character from "./pages/Character";

export const router = createBrowserRouter(
  createRoutesFromElements(
    // Root route: everything starts here
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      {/* Home page */}
      <Route index element={<Home />} />

      {/* Detail pages */}
      <Route path="planet/:id" element={<Planet />} />
      <Route path="vehicle/:id" element={<Vehicle />} />
      <Route path="character/:id" element={<Character />} />
    </Route>
  )
);

