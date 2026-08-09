import sugarbloom from "../assets/images/sugarbloom.png";
import cafe from "../assets/images/cafe.png";
import boutique from "../assets/images/boutique.png";
import salon from "../assets/images/salon.png";
import gym from "../assets/images/gym.png";

const projects = [
  {
    id: 1,
    title: "Sugar Bloom",
    category: "Full Stack",
    image: sugarbloom,

    description:
      "A complete bakery website with product browsing, cart and checkout functionality, order management, and an admin dashboard.",

    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
    ],

    demo: "https://sugar-bloom-topaz.vercel.app/",
    github: "https://github.com/aribacodes/Sugar-Bloom",
  },

  {
    id: 2,
    title: "Cafe Website",
    category: "Restaurant",
    image: cafe,

    description:
      "An elegant digital experience for a modern café, featuring a menu, reservations, gallery, testimonials, and contact information.",

    tech: ["HTML", "CSS", "JavaScript"],

    demo: "https://veloura-cafe-demo.netlify.app/",
    github: "#",
  },

  {
    id: 3,
    title: "Boutique Website",
    category: "Fashion",
    image: boutique,

    description:
      "A refined boutique website designed to showcase collections, offers, and products through a modern visual experience.",

    tech: ["HTML", "CSS", "JavaScript"],

    demo: "https://meher-boutique-demo.netlify.app/",
    github: "#",
  },

  {
    id: 4,
    title: "Salon Website",
    category: "Beauty",
    image: salon,

    description:
      "A polished salon website concept featuring service showcases, gallery, testimonials and appointment booking.",

    tech: ["HTML", "CSS", "JavaScript"],

    demo: "https://lushe-salon-demo.netlify.app/",
    github: "#",
  },

  {
    id: 5,
    title: "Gym Website",
    category: "Fitness",
    image: gym,

    description:
      "A modern fitness website showcasing trainers, workout plans, membership options, and pricing.",

    tech: ["HTML", "CSS", "JavaScript"],

    demo: "https://forge-gym-demo0.netlify.app/",
    github: "#",
  },
];

export default projects;