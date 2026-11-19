import { useNavigate, useParams, useOutletContext } from "react-router-dom";   
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { personalSchema, type PersonalForm } from "../schemas/application";
import type { ApplyContext } from "./ApplyLayout";                              

function PersonalStep() {
  const navigate = useNavigate();
  const { jobId } = useParams();
  const { data, setData } = useOutletContext<ApplyContext>();                  

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalForm>({
    resolver: zodResolver(personalSchema),
    defaultValues: data.personal,                                               
  });

  const onSubmit = handleSubmit((values) => {
    setData(prev => ({ ...prev, personal: values }));                        
    navigate(`/apply/${jobId}/experience`);
  });

  return (
    <div>
      <h2>Personal Step</h2>

      <form onSubmit={onSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="fullName">Full Name</label>
          <input id="fullName" {...register("fullName")} aria-invalid={!!errors.fullName} />
          {errors.fullName && <p className="error" role="alert">{errors.fullName.message}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" {...register("email")} aria-invalid={!!errors.email} />
          {errors.email && <p className="error" role="alert">{errors.email.message}</p>}
        </div>

        <div className="form-field">
          <label htmlFor="phone">Phone</label>
          <input id="phone" type="tel" {...register("phone")} aria-invalid={!!errors.phone} />
          {errors.phone && <p className="error" role="alert">{errors.phone.message}</p>}
        </div>

        <div className="form-actions">
          <button className="btn" type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default PersonalStep;