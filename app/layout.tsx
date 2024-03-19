import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";
import Headnav from "../components/Headnav";
import Footer from "../components/Footer";
import Sidenav from "../components/Sidenav";

// Css files
// import "../assets/vendor/simple-datatables/style.css";
// import "../assets/vendor/remixicon/remixicon.css";
// import "../assets/vendor/quill/quill.bubble.css";
// import "../assets/vendor/quill/quill.snow.css";
// import "../assets/vendor/boxicons/css/boxicons.min.css";
import "../assets/vendor/bootstrap-icons/bootstrap-icons.css";
import "../assets/vendor/bootstrap/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/dashboard.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecogreen",
  description:
    "The EcoReGen Alliance is a group of companies and organizations that have come together to build a better future, naturally. You are part of a community committed to net zero and beyond",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Headnav />
        <Sidenav />
        <main id="main" className="main">
          <section className="section dashboard">
            <div className="row">{children}</div>
          </section>
        </main>
        <Footer />
      </body>
    </html>
  );
}
