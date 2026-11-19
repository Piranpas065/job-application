import type { Job } from "../data/job";

type Props = {
  type: Job["type"];  
};

function TypeBadge({ type }: Props) {
  return (
    <span className={type === "Full-time" ? "badge" : "badge internship"}>{type}</span>
  );
}

export default TypeBadge;