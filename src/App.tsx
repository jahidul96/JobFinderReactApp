import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import { Nav } from "./components/nav/Nav";
import Footer from "./components/Footer";
import FindJob from "./pages/find_job/FindJob";
import CompanyPage from "./pages/company/CompanyPage";
import CandidatePage from "./pages/candidate/CandidatePage";
import BlogPage from "./pages/blog/BlogPage";
import ContactPage from "./pages/contact/ContactPage";
import AuthPage from "./pages/auth/AuthPage";

function App() {
    return (
        <BrowserRouter>
            {/* topNav */}
            <Nav />

            {/* routes/pages comp */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/findjob" element={<FindJob />} />
                <Route path="/companypage" element={<CompanyPage />} />
                <Route path="/candidatepage" element={<CandidatePage />} />
                <Route path="/blogpage" element={<BlogPage />} />
                <Route path="/contactpage" element={<ContactPage />} />
                <Route path="/auth" element={<AuthPage />} />
            </Routes>

            {/* Footer */}
            <Footer />
        </BrowserRouter>
    );
}

export default App;
