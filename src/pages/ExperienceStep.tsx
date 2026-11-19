import { useNavigate, useParams, useOutletContext, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { experienceSchema, type ExperienceForm } from "../schemas/application";
import type { ApplyContext } from "./ApplyLayout";

const SKILLS = ["React", "TypeScript", "Node.js", "CSS", "SQL"];



function ExperienceStep() {
    const navigate = useNavigate();
    const { jobId } = useParams();
    const { data, setData } = useOutletContext<ApplyContext>();

const { register, handleSubmit, formState: { errors } } = useForm<ExperienceForm>({     
        resolver: zodResolver(experienceSchema),
        defaultValues: data.experience,
    });

    if (!data.personal) {
        return <Navigate to={`/apply/${jobId}/personal`} replace />;
    }

    const onSubmit = handleSubmit((values) => {
        setData(prev => ({ ...prev, experience: values }));
        navigate(`/apply/${jobId}/review`);   
    });

    return (
        <div>
            <h2>Experience</h2>
            <form onSubmit={onSubmit} noValidate>

                {/* 1. Skills: checkboxes */}
                <fieldset className="form-field">
                    <legend>Skills</legend>
                    {SKILLS.map(skill => (
                        <label key={skill} className="checkbox">
                            <input type="checkbox" value={skill} {...register("skills")} />
                            {skill}
                        </label>
                    ))}
                    {errors.skills && <p className="error" role="alert">{errors.skills.message}</p>}
                </fieldset>

                {/* 2. Years: number */}
                <div className="form-field">
                    <label htmlFor="years">Years of Experience</label>
                    <input
                        id="years"
                        type="number"
                        {...register("years", { valueAsNumber: true })}
                        aria-invalid={!!errors.years}
                    />
                    {errors.years && <p className="error" role="alert">{errors.years.message}</p>}
                </div>

                {/* 3. Resume URL */}
                <div className="form-field">
                    <label htmlFor="resumeUrl">Resume URL</label>
                    <input
                        id="resumeUrl"
                        type="url"
                        {...register("resumeUrl")}
                        aria-invalid={!!errors.resumeUrl}
                    />
                    {errors.resumeUrl && <p className="error" role="alert">{errors.resumeUrl.message}</p>}
                </div>

                <div className="form-actions">
                    <button type="button" className="btn-secondary" onClick={() => navigate(`/apply/${jobId}/personal`)}>Back</button>
                    <button type="submit" className="btn">Next</button>
                </div>
            </form>
        </div>
    );
}

export default ExperienceStep;