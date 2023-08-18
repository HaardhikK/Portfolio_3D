import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    aftereffects,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    python,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    tshirts,
    jobit,
    tripguide,
    threejs,
    
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Fullstack Developer",
      icon: backend ,
    },
    {
      title: "Frontend Developer",
      icon: css,
    },
    {
      title: "React ThreeJs Developer",
      icon: reactjs,
    },
    {
      title: "Ui/Ux Designer",
      icon: figma,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "After Effect",
      icon: aftereffects,
    },
    
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
  ];
  
  const experiences = [
    {
      title: "Sri Ma Vidyalaya",
      company_name: "School",
      icon: starbucks,
      iconBg: "#ede1be",
      date: "March 2010 - April 2019",
      points: [
        "Maintained good grade year around ,was a district level TT player . ",
        "Developed interest for Computer science.",
        "90.2% Ssc Board.",
      ],
    },
    {
      title: "Pace Junior Science College",
      company_name: "Junior College",
      icon: shopify,
      iconBg: "#ede1be",
      date: "July 2019 - Aug 2021",
      points: [
        "Further developed skills and interest for computer science.",
        "96.36% Jee Mains.",
        "98.2% MhCet.",
        "89.5% Hsc Board.",
      ],
    },
    {
      title: "Dwarkadas J. Sanghvi",
      company_name: "College",
      icon: tesla,
      iconBg: "#ede1be",
      date: "Jan 2022 - Current",
      points: [
        "Pursuing computer Science , 3rd year Student.",
        "DJCSI Video editing and creatives mentee.",
        "8.33 CGPA -till date",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "3js Custom Tshirts",
      description:
        "3js based platform that allows users to change colors, add images as logos & backgrounds from the local device, and display them on top of a 3D model .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "3js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tshirts,
      source_code_link: "http://custom-tshirts.great-site.net/?i=2",
    },
    {
      name: "Movie-site framework",
      description:
        "A light Web application that enables users to search for a movie from a collection of 15,000 entries and display its release year, poster and name.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "http://moviezone1.great-site.net/?i=2",
    },
    {
      name: "Video meet App",
      description:
        "A react web-rtc application that allows user to generate unique id and Video call anyone using it. Accept calls from other users and displays displays their name .",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "web-rtc",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/HaardhikK",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };