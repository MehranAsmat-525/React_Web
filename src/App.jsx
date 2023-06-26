import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Services from "./components/Service/Services";
import Blog from "./components/Blog/Blog";
import Footer from "./components/Footer/Footer";

const App = () => {
    return (
        <>
            <div className="App">
                <Navbar />
                <Home />
                <About />
                <Services />
                <Blog />
                <Contact />
                <Footer />
            </div>
        </>
    );
};

export default App;
