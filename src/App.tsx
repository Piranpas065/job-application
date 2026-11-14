import { Routes, Route } from "react-router-dom";
import JobList from "./pages/JobList";
import JobDetails from "./pages/JobDetails";
import PersonalStep from "./pages/PersonalStep";
import ExperienceStep from "./pages/ExperienceStep";
import ReviewStep from "./pages/ReviewStep";
import Success from "./pages/Success";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import "./index.css";

function App() {
  return (
    <>
      {/* Day 1 navbar inga varum, Routes-kku veliya */}
      <header>
        <Navbar/>
      </header>
      <main className="container">

        <Routes>
          <Route path="/" element={<JobList />} />
          <Route path="/jobs/:id" element={<JobDetails />} />
          <Route path="/apply/:id/personal" element={<PersonalStep />} />
          <Route path="/apply/:id/experience" element={<ExperienceStep />} />
          <Route path="/apply/:id/review" element={<ReviewStep />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

      </main>
    </>
  );
}

export default App;