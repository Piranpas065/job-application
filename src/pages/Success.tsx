import { Link } from "react-router-dom";

function Success() {
  return (
    <div className="success">
      <h2>✅ Application submitted!</h2>
      <p>Thanks for applying. We'll get back to you soon.</p>
      <Link to="/" className="btn">Browse more jobs</Link>
    </div>
  );
}

export default Success;