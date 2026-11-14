export type Job = {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: "Full-time" | "Internship";
  description: string;
};

export const jobs: Job[] = [
    {id: 1, title: "Software Engineer", company: "Tech Corp", location: "San Francisco, CA", salary: "$120,000", type: "Full-time", description: "Develop and maintain web applications."},
    {id: 2, title: "Data Analyst", company: "Data Solutions", location: "New York, NY", salary: "$90,000", type: "Full-time", description: "Analyze and interpret complex data sets."},
    {id: 3, title: "Product Manager", company: "Innovate Inc.", location: "Austin, TX", salary: "$110,000", type: "Full-time", description: "Lead product development and strategy."},
    {id: 4, title: "UX Designer", company: "Creative Minds", location: "Seattle, WA", salary: "$95,000", type: "Full-time", description: "Design user-friendly interfaces and experiences."},
    {id: 5, title: "DevOps Engineer", company: "Cloud Solutions", location: "Boston, MA", salary: "$115,000", type: "Internship", description: "Manage cloud infrastructure and deployment pipelines."},
    {id: 6, title: "Marketing Intern", company: "Brand Builders", location: "Los Angeles, CA", salary: "$20/hr", type: "Internship", description: "Assist in marketing campaigns and social media management."},
];