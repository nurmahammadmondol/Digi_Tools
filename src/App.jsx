import "./App.css";
import { Suspense, useState } from "react";
import Banner from "./Components/Banner";
import Features from "./Components/Features";
import Navbar from "./Components/Navbar";
import Stutes from "./Components/Stutes";
import Loading from "./Components/Loading";
import { ToastContainer } from "react-toastify";
import Steps3 from "./Components/Steps3";
import Pricing from "./Components/PricingDaisy";
import CTA from "./Components/CTA";
import Footer from './Components/Footer';

const fetchData = fetch("/Products.json").then((res) => res.json());

function App() {

  const [cartItem, setCartItem]=useState([])


  return (
    <>
      <section>
        <Navbar cartItem={cartItem}></Navbar>
      </section>

      <section>
        <Banner></Banner>
      </section>

      <section>
        <Stutes></Stutes>
      </section>

      <section id="Features">
        <Suspense fallback={<Loading></Loading>}>
          <Features cartItem={cartItem} setCartItem={setCartItem} promissedData={fetchData}></Features>
        </Suspense>
      </section>

      <section id="Steps3">
        <Steps3></Steps3>
      </section>

      <section id="Pricing">
        <Pricing></Pricing>
      </section>

      <section id="CTA">
        <CTA></CTA>
      </section>

      <section>
        <Footer></Footer>
      </section>

       <ToastContainer />
    </>
  );
}

export default App;
