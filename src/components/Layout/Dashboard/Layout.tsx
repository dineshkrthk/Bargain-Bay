import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <Header />
      <div className="flex justify-between">
        <div className="w-[14%] ">
          <Sidebar />
        </div>
        <div className="w-[86%]   pt-10">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
