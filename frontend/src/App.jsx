import { Navigate, Outlet, Route, Routes, useLocation } from "react-router-dom";
import clsx from "clsx";
import Login from "./pages/Login";
import { IoClose } from "react-icons/io5";

import Dashboard from "./pages/Dashboard";
import { useDispatch, useSelector } from "react-redux";
import Sidebar from "./pages/Sidebar";
import Navbar from "./components/Navbar";
import { Fragment, useRef } from "react";
import { setOpenSidebar } from "./redux/slices/authSlice";
import { Transition } from "@headlessui/react";

function Layout() {
  const { user } = useSelector((state) => state.auth);
  const location = useLocation();

  return user ? (
    <div className="flex flex-col w-full h-screen md:flex-row">
      <div className="sticky top-0 hidden w-1/5 h-screen bg-white md:block">
        <Sidebar />
      </div>

      <MobileSidebar />

      <div className="flex-1 overflow-y-auto">
        <Navbar />

        <div className="p-4 2xl:px-10">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
}

const MobileSidebar = () => {
  const { isSidebarOpen } = useSelector((state) => state.auth);
  const mobileMenuRef = useRef(null);
  const dispatch = useDispatch();

  const closeSidebar = () => {
    dispatch(setOpenSidebar(false));
  };

  return (
    <>
      <Transition
        show={isSidebarOpen}
        as={Fragment}
        enter="transition-opacity duration-700"
        enterFrom="opacity-x-10"
        enterTo="opacity-x-100"
        leave="transition-opacity duration-700"
        leaveFrom="opacity-x-100"
        leaveTo="opacity-x-0"
      >
        {(ref) => (
          <div
            ref={(node) => (mobileMenuRef.current = node)}
            className={clsx(
              "md:hidden w-full h-full bg-black/40 transition-all duration-700 transform ",
              isSidebarOpen ? "translate-x-0" : "translate-x-full"
            )}
            onClick={() => closeSidebar()}
          >
            <div className="w-3/4 h-full bg-white">
              <div className="flex justify-end w-full px-5 mt-5">
                <button
                  onClick={() => closeSidebar()}
                  className="flex items-end justify-end"
                >
                  <IoClose size={25} />
                </button>
              </div>

              <div className="-mt-10">
                <Sidebar />
              </div>
            </div>
          </div>
        )}
      </Transition>
    </>
  );
};

function App() {
  return (
    <main className="w-full min-h-screen bg-[#f3f4f6] ">
      <Routes>
        <Route element={<Layout />}>
          <Route index path="/" element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
}

export default App;
