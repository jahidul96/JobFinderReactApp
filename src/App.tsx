import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import { Nav } from "./components/nav/Nav";
import Footer from "./components/Footer";
import FindJob from "./pages/find_job/FindJob";

function App() {
    return (
        <BrowserRouter>
            {/* topNav */}
            <Nav />

            {/* routes/pages comp */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/findjob" element={<FindJob />} />
            </Routes>

            {/* Footer */}
            <Footer />
        </BrowserRouter>
    );
}

export default App;
