import useLocalStorage from "../hooks/useLocalStorage";
import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import { jobs } from "../data/job";
import type { PersonalForm, ExperienceForm } from "../schemas/application";

type ApplicationData = {
  personal?: PersonalForm;
  experience?: ExperienceForm;
};

export type ApplyContext = {
  data: ApplicationData;
  setData: React.Dispatch<React.SetStateAction<ApplicationData>>;
};

function ApplyLayout() {
  const { jobId } = useParams();
  const [data, setData] = useLocalStorage<ApplicationData>(`application-${jobId}`, {});
  const job = jobs.find(j => j.id === Number(jobId));
  
  if (!job) {
    return (
      <div>
        <h2>Job not found</h2>
        <Link to="/">← Back to jobs</Link>
      </div>
    );
  }

  return (
    <div className="apply-layout">
      <p>Applying for</p>
      <h2>{job.title}</h2>

      <nav className="steps">
        <NavLink to="personal">1. Personal</NavLink>
        <NavLink to="experience">2. Experience</NavLink>
        <NavLink to="review">3. Review</NavLink>
      </nav>

      <div className="step-content">
        <Outlet context={{ data, setData }} />
      </div>
    </div>
  );
}

export default ApplyLayout;