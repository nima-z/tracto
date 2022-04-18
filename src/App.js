// import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import "./App.css";
import Banner from "./components/banner/Banner";
import Subscription from "./components/ui/Subscription/Subscription";

function App() {
  return (
    <div className="App">
      <section className="banner">
        <Banner
          header="Helping digital products"
          text="Tracto is a remote contract facilitator that aims to secure, manage and ensure quality delivery for freelancers"
        >
          The workplace for remote contracts gigs.
        </Banner>
        <Subscription />
      </section>
      <HomePage/>
    </div>
  );
}

export default App;
