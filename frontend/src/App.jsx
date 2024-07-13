import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Login from "./pages/Login";

function Layout() {
  const user = "";
  const location = useLocation();

  console.log(user);

  return user ? (
    <div>okkkkkkkk</div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6] ">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Navigate to="/dashboard" />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
