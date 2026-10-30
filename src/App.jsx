import "./App.css";
import { Suspense, useState } from "react";
import Banner from "./Components/Banner";
import Features from "./Components/Features";
import Navbar from "./Components/Navbar";
import Stutes from "./Components/Stutes";
import Loading from "./Components/Loading";
import { ToastContainer } from "react-toastify";
import Steps3 from "./Components/Steps3";

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

      <section>
        <Suspense fallback={<Loading></Loading>}>
          <Features cartItem={cartItem} setCartItem={setCartItem} promissedData={fetchData}></Features>
        </Suspense>
      </section>

      <section>
        <Steps3></Steps3>
      </section>

       <ToastContainer />
    </>
  );
}

export default App;
