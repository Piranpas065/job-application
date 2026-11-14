import { useNavigate, useParams } from "react-router-dom";

function ExperienceStep() {
    const navigate = useNavigate();
    const { jobId } = useParams();

    return (
        <div>
            <h1>Experience Step</h1>
            <button className="btn" onClick={() => navigate(`/apply/${jobId}/review`)}>Next</button>
            <button className="btn" onClick={() => navigate(`/apply/${jobId}/personal`)}>Back</button>
        </div>
    )
}

export default ExperienceStep;