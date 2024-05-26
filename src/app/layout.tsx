// app/layout.tsx
"use client";

import "./styles/globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import MoviesPage from "./pages/movies";
import { AppProvider } from "./context/appContext";

const RootLayout = ({}: { children: React.ReactNode }) => {
  return (
    <AppProvider>
      <html lang="en">
        <body>
          <Header />

          <MoviesPage />

          <Footer />
        </body>
      </html>
    </AppProvider>
  );
};

export default RootLayout;
