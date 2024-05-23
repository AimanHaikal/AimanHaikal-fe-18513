// components/Layout.tsx
import Header from './header'
import Footer from './footer'

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header />
    <div className="container">
      {children}
    </div>
    <Footer />
  </>
)

export default Layout
