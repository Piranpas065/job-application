import { useNavigate, useParams } from "react-router-dom";

function ReviewStep () {
  const navigate = useNavigate();
  const { jobId } = useParams();

    return (
        <div>
            <h1>Review Step</h1>
            <button className="btn" onClick={() => navigate(`/apply/${jobId}/experience`)}>Back</button>
            <button className="btn" onClick={() => navigate("/success")}>Submit</button>
        </div>
    )
}   

export default ReviewStep;