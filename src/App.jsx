
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Jobs from "./pages/Jobs"
import Home from "./pages/Home"
import About from "./pages/About"
import Testimonial from "./pages/Testimonial"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { Provider } from "react-redux"
import  {store} from "./store/store"
import Tags from "./components/Tags"


function App() {
  return (
    <>
    <Provider store= {store} >
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Jobs" element={
          <>
          <Jobs /> 
          </>
        } />
          <Route path="/JobDes" element={<Tags />}/>
          <Route path="/Testimonial" element={<Testimonial />} />
        </Routes>

        <Footer />
      </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
