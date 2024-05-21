import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full bg-transparent">
      <nav className="bg-fuchsia-700 w-full ">
        <ul className="flex justify-center items-center gap-2">
          <li>All Blogs</li>
          <li>Add Blog</li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
