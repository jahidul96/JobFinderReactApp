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
import { AllCategory } from "./pages/all_category/AllCategory";
import AllReview from "./pages/all_review/AllReview";
import SingleJobDetails from "./pages/find_job/single_job_details/SingleJobDetails";
import SingleCompanyDetails from "./pages/company/single_company_details/SingleCompanyDetails";
import CandidateDetails from "./pages/candidate/candidate_details/CandidateDetails";
import BlogDetails from "./pages/blog/blog_details/BlogDetails";

function App() {
    return (
        <BrowserRouter>
            {/* topNav */}
            <Nav />

            {/* routes/pages comp */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/findjob" element={<FindJob />} />
                <Route
                    path="/singlejobdetails"
                    element={<SingleJobDetails />}
                />
                <Route path="/companypage" element={<CompanyPage />} />
                <Route
                    path="/singlecompanydetails"
                    element={<SingleCompanyDetails />}
                />
                <Route path="/candidatepage" element={<CandidatePage />} />
                <Route path="/candidetailpage" element={<CandidateDetails />} />
                <Route path="/blogpage" element={<BlogPage />} />
                <Route path="/blogdetailpage" element={<BlogDetails />} />
                <Route path="/contactpage" element={<ContactPage />} />
                <Route path="/auth" element={<AuthPage />} />
                <Route path="/allcategory" element={<AllCategory />} />
                <Route path="/allreview" element={<AllReview />} />
            </Routes>

            {/* Footer */}
            <Footer />
        </BrowserRouter>
    );
}

export default App;
