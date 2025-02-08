import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    homepage,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Learner",
      icon: mobile,
    },
    {
      title: "App Developer",
      icon: backend,
    },
    {
      title: "Python Enthusiast",
      icon: creator,
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
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    // {
    //   name: "MongoDB",
    //   icon: mongodb,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "github",
      icon: github,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Sun Infotech",
      icon: starbucks,
      iconBg: "#C1C4D0",
      date: "July 2022 - August 2022",
      points: [
        "Gained hands on experience in web application development using Advance Java, focusing on technologies like Servlets and JDBC.",
        "Colloborated with the team to understand the project development lifecycle and implement key application features",
        "Developed skills in database management, application deployment, and debugging",
        "Demonstrated punctuality, dedication, and a proactive approach to learning throughout the internship.",
      ],
    },
    // {
    //   title: "",
    //   company_name: "",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "",
    //   points: [
    //     "",
    //   ],
    // },
    // {
    //   title: "",
    //   company_name: "",
    //   icon: shopify,
    //   iconBg: "#383E56",
    //   date: "",
    //   points: [
    //     "",
    //   ],
    // },
    // {
    //   title: "",
    //   company_name: "",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "",
    //   points: [
    //     "",
    //   ],
    // },
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
      name: "Pixel Prompt",
      description:
        "PixelPrompt is an AI-based Text-to-Image Generator that transforms words into stunning visuals.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "orange-text-gradient",
        },
      ],
      image: homepage,
      source_code_link: "https://github.com/atharva-aak/PixelPrompt",
      preview: "https://pixelprompt.vercel.app",
    },
    {
      name: "Cyber Sentinel",
      description:
      "Developed a web-based platform featuring simulations of phishing, SQL injection, XSS, and directory traversal attacks. Included dynamic charts, statistics, and live updates to educate users on cybersecurity threats.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript(Node.js & Express.js)",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Messaging App",
      description:
        "Developed a streamlined messaging app that allows users to send messages by entering a recipient's phone number and message content. Focused on creating a simple, user-friendly interface with smooth and reliable message delivery.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "xml",
          color: "green-text-gradient",
        },

      ],
      image: jobit,
      source_code_link: "https://github.com/atharva-aak/Message-SMS",
    },
    {
      name: "WhatsApp Clone(Under Development)",
      description:
        "Developing an Android app for real-time messaging with user authentication, contact management, and chat functionality.Working on features like group chats and media sharing.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "xml",
          color: "green-text-gradient",
        },
        {
          name: "firebase",
          color: "orange-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/atharva-aak/WhatsApp-Clone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };