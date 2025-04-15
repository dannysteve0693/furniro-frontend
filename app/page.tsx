import Header from './components/Header'
import HeroSection from './components/HeroSection'
import BrowseRange from './components/BrowseRange'
import Products from './components/Products'
import RoomInspiration from './components/RoomInspiration'
import SocialSection from './components/SocialSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <BrowseRange />
      <Products />
      <RoomInspiration />
      <SocialSection />
      <Footer />
    </main>
  )
}
