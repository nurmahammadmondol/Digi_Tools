import './App.css'
import Banner from './Components/Banner'
import Features from './Components/Features'
import Navbar from './Components/Navbar'
import Stutes from './Components/Stutes'

function App() {

  return (
    <>

      <section>
        <Navbar></Navbar>
      </section>

      <section>
        <Banner></Banner>
      </section>

      <section>
        <Stutes></Stutes>
      </section>
      
      <section>
        <Features></Features>
      </section>

    </>
  )
}

export default App
