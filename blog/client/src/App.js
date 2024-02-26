
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register"
import Layout from "./components/Layout";
import Home from "./pages/Home";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={
          <Home />
        } />

        <Route path="/login" element={
          <Login />
        } />

        <Route path="/register" element={
          <Register />
        } />

        <Route path="/create" element={
          <div>
            <h2>Create Post</h2>
          </div>
        } />
      </Route>
    </Routes>

  );
}

export default App;
