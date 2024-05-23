// app/layout.tsx
import './styles/globals.css';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/results">Results</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>© 2024 Web Assessment</footer>
      </body>
    </html>
  );
};

export default RootLayout;
