import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import React from "react";

const Layout = () => {
  return (
    <div>
      <Header />

      <main className="container mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
