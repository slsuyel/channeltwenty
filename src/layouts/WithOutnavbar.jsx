
import { Outlet } from 'react-router-dom'
import Header from '../pages/Shared/Header'
import Footer from '../pages/Shared/Footer'
import NavbarMenu from '../pages/Shared/NavbarMenu'
import FooterMenu from '../pages/Home/FooterMenu/FooterMenu'


export default function WithOutnavbar() {
  return (
    <>
      <Header />
      <NavbarMenu />
      <Outlet />
      <FooterMenu />
      <Footer />
    </>
  )
}
