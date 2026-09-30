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
  timeZone: "Asia/Kolkata",
  languages: ["English", "Hindi"],
};

const social = [
  { name: "Leetcode", icon: "leetcode", link: "https://leetcode.com/u/tarunngusain08/" },
  { name: "Scaler", icon: "scaler", link: "https://www.scaler.com/academy/profile/71f6d4b77d73/" },
  { name: "GitHub", icon: "github", link: site.github },
  { name: "LinkedIn", icon: "linkedin", link: site.linkedin },
  { name: "X", icon: "x", link: "https://x.com/tarunngusain08" },
  { name: "Email", icon: "email", link: `mailto:${site.email}` },
];

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}&apos;s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const home = {
  label: "Home",
  title: `${site.name} | Forward Deployed Engineer & Senior Backend Engineer`,
  description: site.description,
  headline: <>Forward Deployed Engineer · Senior Backend Engineer</>,
  subline: (
    <>
      I’m Tarunn, a Go-first engineer who works from customer discovery through production operations.
      I build distributed systems, cloud and GPU platforms, and production AI with the engineering
      depth to make enterprise solutions reliable after launch.
    </>
  ),
};

const about = {
  label: "About",
  title: "About",
  description: "A Go-first backend and platform engineer working across production AI, distributed systems and customer-facing delivery.",
  avatar: { display: true },
};

const blog = {
  label: "Blog",
  title: "Writing about engineering and technology",
  description: "Earlier writing on software engineering and the work behind shipped systems.",
};

const work = {
  label: "Work",
  title: "Selected work",
  description: "Professional impact and public engineering projects across backend systems, AI infrastructure and applied AI.",
};

const gallery = {
  label: "Certificates",
  title: "Certificates and learning archive",
  description: "Certificates and personal archive.",
  images: Array.from({ length: 25 }, (_, index) => ({
    src: `/images/certificate/certificate-${String(index + 1).padStart(2, "0")}.png`,
    alt: `Certificate ${index + 1}`,
    orientation: "horizontal",
  })),
};

export { person, social, newsletter, home, about, blog, work, gallery };
