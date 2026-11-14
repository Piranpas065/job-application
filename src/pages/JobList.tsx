import { Link } from "react-router-dom";
import { jobs } from "../data/job";                          

function JobList() {
  return (
    <div>
      <h2>Open positions</h2>
      <div className="job-grid">                              
        {jobs.map(job => (
          <Link
            key={job.id}                                      
            to={`/jobs/${job.id}`}                             
            className="job-card"
          >
            <span className={job.type === "Internship" ? "badge internship" : "badge"}>
              {job.type}
            </span>                                           
            <h3>{job.title}</h3>
            <p>{job.company} · {job.location}</p>             
            <p>{job.salary}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default JobList;