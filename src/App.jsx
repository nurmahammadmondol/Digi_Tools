import "./App.css";
import { Suspense } from "react";
import Banner from "./Components/Banner";
import Features from "./Components/Features";
import Navbar from "./Components/Navbar";
import Stutes from "./Components/Stutes";
import Loading from "./Components/Loading";

const fetchData = fetch("/Products.json").then((res) => res.json());

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
        <Suspense fallback={<Loading></Loading>}>
          <Features  promissedData={fetchData}></Features>
        </Suspense>
      </section>
     
    </>
  );
}

export default App;
