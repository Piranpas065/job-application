import { useNavigate, useOutletContext, useParams, Navigate, Link } from "react-router-dom";
import { useState } from "react";
import type { ApplyContext } from "./ApplyLayout";


function ReviewStep() {
    const navigate = useNavigate();
    const { jobId } = useParams();
    const { data } = useOutletContext<ApplyContext>();
    const [isSubmitting, setIsSubmitting] = useState(false);

    if (!data.personal) {
        return <Navigate to={`/apply/${jobId}/personal`} replace />;
    }
    if (!data.experience) {
        return <Navigate to={`/apply/${jobId}/experience`} replace />;
    }

    async function handleSubmit() {
        if (isSubmitting) return;

        setIsSubmitting(true);

        await new Promise(resolve => setTimeout(resolve, 1000));

        console.log("Submitted:", data);

        localStorage.removeItem(`application-${jobId}`);
        navigate("/success", { replace: true });
    }

    return (
        <div>
            <h2>Review Step</h2>
            <section className="review-section">
                <header>
                    <h3>Personal details</h3>
                    <Link to={`/apply/${jobId}/personal`}>Edit</Link>
                </header>
                <dl>
                    <dt>Full name</dt>
                    <dd>{data.personal.fullName}</dd>

                    <dt>Email</dt>
                    <dd>{data.personal.email}</dd>

                    <dt>Phone</dt>
                    <dd>{data.personal.phone}</dd>
                </dl>
            </section>

            <section className="review-section">
                <header>
                    <h3>Experience</h3>
                    <Link to={`/apply/${jobId}/experience`}>Edit</Link>
                </header>
                <dl>
                    <dt>Skills</dt>
                    <dd>{data.experience.skills.join(", ")}</dd>

                    <dt>Years of Experience</dt>
                    <dd>{data.experience.years}</dd>

                    <dt>Resume URL</dt>
                    <dd><a href={data.experience.resumeUrl} target="_blank" rel="noopener noreferrer">{data.experience.resumeUrl}</a></dd>
                </dl>
            </section>

            <div className="form-actions">
                <button
                    type="button"
                    className="btn-secondary"
                    onClick={() => navigate(`/apply/${jobId}/experience`)}
                    disabled={isSubmitting}
                >
                    Back
                </button>
                <button 
                    className="btn-secondary" 
                    type="button" 
                    onClick={handleSubmit} 
                    disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Submit"}</button>
            </div>

        </div>
    )
}
export default ReviewStep;