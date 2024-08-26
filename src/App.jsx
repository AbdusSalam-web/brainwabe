import "./App.css";
import Featurs from "./Components/Featurs";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Services from "./Components/Services";
import Story from "./Components/Story";
import Testimonial from "./Components/Testimonial";
import Works from "./Components/Works";


function App() {
  return (
    <>
      <div>
        <div >
          <Header />
          <Services />
          <Story />
          <Featurs />
          <Works />
          <Testimonial />
          <Footer/>
        </div>
      </div>
    </>
  );
}

export default App;
