import { useParams, Link } from "react-router-dom";
import { jobs } from "../data/job";



function JobDetails() {

  const { jobId } = useParams();
  const job = jobs.find(j => j.id === Number(jobId));

  if (!job) {
    return (
      <div>
        <h2>Job not found</h2>
        <Link to="/" className="btn">Back to List</Link>
      </div>
    );
  }

  const { title, description, company, location, salary, type } = job;

  return (
    <div>
     <p>
       <Link to="/">← Back to jobs</Link>
    </p>

      <span className={type === "Internship" ? "badge internship" : "badge"}>
        {type}
      </span>
      <h1>{title}</h1>
      <p>{company} · {location}</p>
      <p>{salary}</p>
      <p>{description}</p>
      <Link to={`/apply/${jobId}/personal`} className="btn"> Apply now </Link>
    </div>
  )
}

export default JobDetails;