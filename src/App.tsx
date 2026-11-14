import { Routes, Route } from "react-router-dom";
import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetails";
import PersonalStep from "./pages/PersonalStep";
import ExperienceStep from "./pages/ExperienceStep";
import ReviewStep from "./pages/ReviewStep";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import ApplyLayout from "./pages/ApplyLayout";
import "./index.css";

function App() {
  return (
    <>
     
      <header>
        <Navbar/>
      </header>
      <main className="container">

        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/jobs/:jobId" element={<JobDetails />} />

          <Route path="/apply/:jobId" element={<ApplyLayout />}>
              <Route path="personal" element={<PersonalStep />} />
              <Route path="experience" element={<ExperienceStep />} />
              <Route path="review" element={<ReviewStep />} />
          </Route>
         
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </main>
    </>
  );
}

export default App;