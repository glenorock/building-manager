import React from "react";
import Sidebar from "../sidebar";

type Props = {
  children: JSX.Element | JSX.Element[] | string | string[];
};

export default function Layout({ children }: Props) {
  return (
    <div>
      Layout
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}
