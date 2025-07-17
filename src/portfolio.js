/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Ashutosh's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Ashutosh Hathidara Portfolio",
    type: "website",
    url: "http://ashutoshhathidara.com/",
  },
};

//Home Page
const greeting = {
  title: "Vinod Katara",
  logo_name: "VinodKatara",
  nickname: "AI & Web Developer",
  subTitle:
    "I’m a recent graduate working across two core areas: AI (with Python) and Web Development. I’m skilled at building intelligent systems and full stack web apps and enjoy opportunities where I can bring both together to create smart, practical solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/ashutosh1919/masterPortfolio",
  githubProfile: "https://github.com/ashutosh1919",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/vinod-desktop",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/vinod-katara/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:katara28vinod@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Front End Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Crafting responsive and accessible web interfaces using HTML, CSS, and Tailwind CSS, ensuring clean layout and mobile-friendly design.",
        "⚡ Styling using Tailwind CSS and custom CSS modules",
        "⚡ Writing clean, component-based architecture",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            color: "#f7df1e",
            backgroundColor: "#000000",
          },
        },
        {
          skillName: "React JS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Tailwind CSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "Backend Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Built basic backend applications using Node.js and Express to handle APIs and data.",
        "⚡ Worked with Python and PHP for small scripts and simple server-side tasks.",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {},
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos:php",
          style: {},
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "AI & Machine Learning",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Worked with LangChain and vector databases like Chroma and FAISS for building RAG-based chatbots.",
        "⚡ Explored use of local LLMs through tools like Ollama for GenAI applications.",
        "⚡ Built simple pipelines to embed and retrieve data for chatbot responses.",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AI Tools",
          fontAwesomeClassname: "simple-icons:openai",
          style: {
            color: "#000",
          },
        },
        {
          skillName: "Hugging Face",
          fontAwesomeClassname: "logos:hugging-face",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Langchain",
          fontAwesomeClassname: "simple-icons:langchain",
          style: {
            color: "#1c3c3c",
            backgroundColor: "#00000",
          },
        },
      ],
    },
    {
      title: "Database Management",
      fileName: "DesignImg",
      skills: [
        "⚡ Connected and queried databases using SQL for storing and retrieving data.",
        "⚡ Worked with MySQL and SQLite for small-scale web projects.",
        "⚡ Explored MongoDB for basic NoSQL operations in a single project.",
      ],
      softwareSkills: [
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos:mysql",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "SQLite",
          fontAwesomeClassname: "logos:sqlite",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "logos:mongodb",
          style: {
            color: "#FF7C00",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
        display: "None",
      },
      profileLink: "https://leetcode.com/layman_brother/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
        display: "None",
      },
      profileLink: "https://www.hackerrank.com/layman_brother",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
        display: "None",
      },
      profileLink: "https://www.codechef.com/users/ashutosh_1919",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
        display: "None",
      },
      profileLink: "http://codeforces.com/profile/layman_brother",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
        display: "None",
      },
      profileLink: "https://www.hackerearth.com/@ashutosh391",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
        display: "None",
      },
      profileLink: "https://www.kaggle.com/laymanbrother",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Knowledge High School, Nadiad",
      subtitle: "12th Science – GSEB Board",
      logo_path: "knowledge_high_school_logo.png",
      alt_name: "KHS Nadiad",
      duration: "2019-2020",
      descriptions: [
        "⚡ Completed 12th Science with a focus on Physics, Chemistry, and Mathematics.",
        "⚡  Achieved 76.67% overall in final board examination.",
        "⚡ Participated in school-level science exhibitions and group projects and Quizzes.",
      ],
      website_link: "https://fgeducation.in/",
    },
    {
      title: "Government Engineering College, Modasa",
      subtitle: "B.E in Computer Engineering",
      logo_path: "gec_modasa_logo.png",
      alt_name: "GEC Modasa",
      duration: "2020-2024",
      descriptions: [
        "⚡ Completed Bachelor's in Computer Engineering with a CGPA of 8.17 (Distinction).",
        "⚡ Learned core subjects including C++, Data Structures & Algorithms, Java basics, Python, Computer Networks, DBMS, and Digital Logic.",
        "⚡ Gained hands-on experience in web development and AI fundamentals through projects and practical coursework.",
      ],
      website_link: "https://www.gecmodasa.ac.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Unstop Daily Quiz",
      subtitle: "Certificate of Excellence",
      logo_path: "unstop-logo.svg",
      certificate_link:
        "https://unstop.com/certificate-preview/aef21652-3d9c-47e1-81ff-84bd5578722c",
      alt_name: "Unstop",
      color_code: "",
    },
    {
      title: "Software Engineering Job Simulation",
      subtitle: "Certificate of Completion",
      logo_path: "Accenture.webp",
      certificate_link:
        "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/xhih9yFWsf6AYfngd/HNpZwZcuYwona2d8Y_xhih9yFWsf6AYfngd_mf3rYN4t6XMd6m86Y_1736396051872_completion_certificate.pdf",
      alt_name: "Accenture",
      color_code: "#FFFFFF",
    },
    {
      title: "Gen AI by Outskill",
      subtitle: "Upskill",
      logo_path: "outskill_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1Q5MXzbZqbLUvgYWC-Mml5d1TV0SygCRq/view?usp=drive_link",
      alt_name: "Upskill",
      color_code: "#031a01",
    },
    {
      title: "Problem Solving",
      subtitle: "Hackerank",
      logo_path: "hackerrank-logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1lUtLEI40_gR5F9ReziqOG6sk8I1tNNIF/view?usp=sharing",
      alt_name: "Hackerrank",
      color_code: "#fff",
    },
    {
      title: "Frontend Internship Certificate",
      subtitle: "BrainyBeams",
      logo_path: "frontend_certificate_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1lZ3wA8Yr7WZdgbxK1b-kJ4RdjNFRyH17/view?usp=sharing",
      alt_name: "React JS",
      color_code: "#fff",
    },
    {
      title: "AI Azure Certificate",
      subtitle: "Microsoft+Edunet",
      logo_path: "microsoft_text_logo.avif",
      certificate_link:
        "https://drive.google.com/file/d/1lY7Igzg3GfIoRTsDx_EsY0-Esbg6gkH0/view?usp=sharing",
      alt_name: "Microsoft",
      color_code: "#fff",
    },
    {
      title: "Fullstack with PHP",
      subtitle: "Integrantech",
      logo_path: "php_intern_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1lXeRH6OZzrqenxrTy0unYD3C81-UHQnu/view?usp=sharing",
      alt_name: "Integrantech",
      color_code: "#fff",
    },
    {
      title: "Coding Essentials",
      subtitle: "Certificate of Excellence",
      logo_path: "ScalerTopics_Logo.svg",
      certificate_link:
        "https://drive.google.com/file/d/1lSZPARtBsdG6H7yk8EJk-18sFsIjiomQ/view?usp=sharing",
      alt_name: "=Scaler",
      color_code: "#fff",
    },
    {
      title: "CSS",
      subtitle: "Hackerrank",
      logo_path: "hackerrank-logo.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1lmlNU_k6RyX4sglkeJig2sgt5Zd6c4C9/view?usp=sharing",
      alt_name: "Hackerrank",
      color_code: "#fff",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship",
  description:
    "I have gained hands-on experience through internships and an AI apprenticeship across web development and machine learning roles. My journey began with frontend technologies, then expanded into full-stack development using PHP and MySQL. Currently, I'm working as an Apprentice AI Engineer where I’m building real-world GenAI applications using Python, FastAPI, Ollama, LangChain, and Gradio. I've also explored RAG pipelines and Vector Databases in real projects.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "AI Engineer",
          company: "GMM Pfaudler",
          company_url: "https://www.gmmpfaudler.com/",
          logo_path: "gmm_logo.svg",
          duration: "March 2025 - Present",
          location: "Karmasad, Gujarat, India",
          description:
            "Working on building and integrating GenAI tools using Python, FastAPI, LangChain, and local LLMs (via Ollama) to automate manual tasks and reduce processing time. Built internal tools using Gradio for user interaction and created secure RAG-based chatbots for quick document-level answers without compromising data privacy. Developed a solution to compare technical drawings with offer documents, reducing human effort from 1 hour to just 10–15 minutes. Also worked with vector databases like Chroma and Hugging Face models to optimize retrieval and response accuracy.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Developer Intern",
          company: "IntegranTech IT Solutions",
          company_url: "https://integrantech.com/",
          logo_path: "php_intern_logo.png",
          duration: "Jan 2024 - Apr 2024",
          location: "Lunawada,Gujarat,India",
          description:
            "Worked as a Full Stack Intern focusing on PHP and MySQL-based web development. Gained practical experience in frontend development using HTML, CSS, Bootstrap, and JavaScript, and built responsive pages. Developed a complete dynamic website using PHP with an MVC structure and MySQL database integration. Also worked on a few modules using WordPress, gaining hands-on understanding of CMS platforms.",
          color: "#000000",
        },
        {
          title: "Frontend Developer Intern",
          company: "",
          company_url: "https://www.brainybeam.com/",
          logo_path: "frontend_certificate_logo.png",
          duration: "1 Month",
          location: "Remote, Ahmedabad",
          description:
            "I have worked on project of predicting freight rates based on previous data. There were two objectives: (1) To build a forecasting engine to predict daily freight rates. (2) To embed feature in the model which can explain the seasonal major changes in freight rate based on regions and locations. I have closely worked with deep learning models in combination with statistical methods to create solution for this. At the end of internship, I had created model deployed on AWS EC2 with the use of Kafka stream jobs, ElasticSearch and PostgreSQL.",
          color: "#ee3c26",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I've worked on a variety of academic and personal projects to apply what I've learned in real-world scenarios. These projects range from full-stack web apps built with PHP and MERN stack to intelligent tools using Python for natural language processing. Each project has helped me strengthen my understanding of frontend, backend, databases, and AI integration.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "ai_vinod.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I like to document some of my experiences in professional career journey as well as some technical knowledge sharing.",
    link: "https://blogs.ashutoshhathidara.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Saratoga Ave, San Jose, CA, USA 95129",
    locality: "San Jose",
    country: "USA",
    region: "California",
    postalCode: "95129",
    streetAddress: "Saratoga Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
