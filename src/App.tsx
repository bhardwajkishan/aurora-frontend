import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>

      <Route path="/" element={<MainLayout />}>

        <Route index element={<div>Dashboard Home</div>} />
        <Route path="tasks" element={<h1>Tasks Page</h1>} />
        <Route path="calendar" element={<h1>Calendar Page</h1>} />
        <Route path="analytics" element={<h1>Analytics Page</h1>} />
        <Route path="team" element={<h1>Team Page</h1>} />

      </Route>

      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
}

export default App;
