import { site } from "@/app/resources/portfolio";

const person = {
  firstName: "Tarunn",
  lastName: "Gusain",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: site.role,
  avatar: "/images/avatar.jpg",
  location: "India",
  languages: ["English", "Hindi"],
};

const social = [
  { name: "GitHub", icon: "github", link: site.github },
  { name: "LinkedIn", icon: "linkedin", link: site.linkedin },
  { name: "Email", icon: "email", link: `mailto:${site.email}` },
];

const newsletter = { display: false };

const home = {
  label: "Home",
  title: `${site.name} | Forward Deployed Engineer & Senior Backend Engineer`,
  description: site.description,
  headline: site.headline,
  subline: site.description,
};

const about = {
  label: "About",
  title: "About",
  description: "A Go-first backend and platform engineer working across production AI, distributed systems and customer-facing delivery.",
  avatar: { display: true },
};

const blog = {
  label: "Notes",
  title: "Notes",
  description: "Earlier writing on software engineering and the work behind shipped systems.",
};

const work = {
  label: "Work",
  title: "Selected work",
  description: "Professional impact and public engineering projects across backend systems, AI infrastructure and applied AI.",
};

const gallery = {
  label: "Gallery",
  title: "Certificates",
  description: "Certificates and personal archive.",
  images: Array.from({ length: 25 }, (_, index) => ({
    src: `/images/certificate/certificate-${String(index + 1).padStart(2, "0")}.png`,
    alt: `Certificate ${index + 1}`,
    orientation: "horizontal",
  })),
};

export { person, social, newsletter, home, about, blog, work, gallery };
