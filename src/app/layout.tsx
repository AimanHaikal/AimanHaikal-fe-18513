// app/layout.tsx
"use client";

import "./styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import MoviesPage from "./pages/movies";

const RootLayout = ({ }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Header />

        <MoviesPage />

        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
