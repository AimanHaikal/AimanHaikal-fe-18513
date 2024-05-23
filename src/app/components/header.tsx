// components/Header.tsx
import Link from 'next/link'

const Header = () => (
  <header className="header">
    <nav>
      <Link href="/">Home</Link> | <Link href="/results">Results</Link>
    </nav>
  </header>
)

export default Header
