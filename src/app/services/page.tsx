import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Rajesh Murmu | rajeshsonmurmu | Web - Developer | Services",
  description:
    "Experienced web developer specializing in creating responsive, user-friendly websites and web applications. Expertise in HTML, CSS, JavaScript, and modern frameworks to deliver high-quality, SEO-optimized digital solutions tailored to your business needs.",
  // <!-- fontawesome script -->
  // <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
  // <script src="https://kit.fontawesome.com/ef4e39c21a.js" crossorigin="anonymous"></script>
  // <title></title>
};

export default function page() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      Services Page
    </div>
  );
}
