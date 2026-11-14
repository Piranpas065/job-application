import { useParams, Link, Outlet, NavLink } from "react-router-dom";
import { jobs } from "../data/job";


function ApplyLayout() {
  // 1. URL-la irundhu jobId edunga (JobDetails maadhiri)
  const { jobId } = useParams();

  // 2. Job kandupidinga (JobDetails maadhiri)
  const job = jobs.find(j => j.id === Number(jobId));

  // 3. Job illa-na early return (JobDetails maadhiri)
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
        <NavLink to="personal" className={({ isActive }) => isActive ? "active" : ""}>
          1. Personal
        </NavLink>
        <NavLink to="experience" className={({ isActive }) => isActive ? "active" : ""}>
          2. Experience
        </NavLink>
        <NavLink to="review" className={({ isActive }) => isActive ? "active" : ""}>
          3. Review
        </NavLink>
      </nav>

    <div className="step-content">
       <Outlet />
    </div>
     
     
    </div>
  );
}

export default ApplyLayout;