import Navbar from "@/components/Navbar";
import "./globals.css";

import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";

export const metadata = {
  title: "Mobile item App",
  description: "Next.js + Express App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <Navbar />
        {children}
        <Footer />

        <ToastContainer></ToastContainer>
      </body>
    </html>
  );
}
