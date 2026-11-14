import { useNavigate , useParams} from "react-router-dom";

function PersonalStep() {
  const navigate = useNavigate();
  const { jobId } = useParams();

  return (
    <div>
      <h2>Personal Step</h2>
      <button className="btn" onClick={() => navigate(`/apply/${jobId}/experience`)}>Next</button>
    </div>
  );
}

export default PersonalStep;