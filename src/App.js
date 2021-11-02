import "./App.css";
import {
  // BikeCarousels,
  CustomerReviews,
  Details,
  Footer,
  LandingPage,
  // Nav,
} from "./components";

function App() {
  return (
    <div className="App">
      {/* <Nav /> */}
      <LandingPage />
      {/* <BikeCarousels /> */}
      <Details />
      <CustomerReviews />
      <Footer />
    </div>
  );
}

export default App;
