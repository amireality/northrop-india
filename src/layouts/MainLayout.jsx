import MegaMenuNavbar from '../components/navigation/MegaMenuNavbar'

function MainLayout({ children }) {
  return (
    <div className="min-h-screen font-sans antialiased text-[#001f3f]">
      <MegaMenuNavbar />
      {children}
    </div>
  )
}

export default MainLayout
