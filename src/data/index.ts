export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Recent Computer Engineering graduate from Kwame Nkrumah University of Science and Technology, passionate about full stack development.",
    description: " Successfully completed my final semester exams, ready to contribute technical expertise to innovative projects.",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I learnt web development and application during my 4 year journey",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently looking for a role as full stack developer + AWS",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you a role for me to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "NetView",
    des: "A netflix clone web app fully built with Javascript. NodeJS & Express for backend and Vite & ReactJS for frontend",
    img: "/p1.png",
    iconLists: ["/re.svg", "/tail.svg", "/vite.jpeg", "/node.png", "/mon.png"],
    link: "https://netview-t16p.onrender.com",
  },
  {
    id: 4,
    title: "Inventory Management",
    des: "Currently the backend and the database are deployed on AWS",
    img: "/p4.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/node.png", "/aws.png"],
    link: "http://52.211.87.198/dashboard",
  },
  {
    id: 2,
    title: "Evently",
    des: "An Event booking web app fully built with NextJS and TypeScript for both backend and frontend.",
    img: "/p3.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.svg", "/c.svg"],
    link: "https://evently-app-ivory.vercel.app",
  },
  {
    id: 3,
    title: "Admin dashboard",
    des: "Develop admin dashboard using refine and ",
    img: "/p2.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg"],
    link: "https://react-admin-dashboard-rust-delta.vercel.app",
  },
];

export const testimonials = [
  {
    quote:
      "https://www.credly.com/badges/feb232eb-3807-49e4-8a6a-efe6ecf1e889/public_url",
    title: "AWS Academy Cloud Developing",
  },
  {
    quote:
      "",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "",
    title: "Director of AlphaStream Technologies",
  },
];


export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Alle-AI",
    desc: "Assisted a start-up generative ai company in testing model api.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2", // change to md:col-span-2
  //   thumbnail: "/exp3.svg",
  // },
  // {
  //   id: 4,
  //   title: "Lead Frontend Developer",
  //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp4.svg",
  // },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/HerbertNtim"
  },
  {
    id: 2,
    img: "/wha.svg",
    link: 'https://wa.link/6f77ab'
  },
  {
    id: 3,
    img: "/link.svg",
    link: 'https://www.linkedin.com/in/herbertntim'
  },
];
