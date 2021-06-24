const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Jatin Kaushik | Portfolio",
  description:
    "I am an enthusiastic, Passionate, Highly motivated and Self-driven Engineering student with Interest in Data Science, Analytics and Programming with Strong background in Python and knowledge of various types of machine learning and deep learning techniques.",
  og: {
    title: "Jatin Portfolio",
    type: "website",
    url: "http://jatinkaushik.ml/",
  },
};

//Home Page
const greeting = {
  title: "Namaste!",
  sub: "Jatin Kaushik",
  logo_name: "Jatin Kaushik",
  resumeLink: "",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/Jatin-kaushik",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/jatinkaushik_",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/jatinkaushikjk",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#24E7EE",
      },
      profileLink: "https://www.hackerearth.com/@Jatinkaushik",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/jatin-kaushik/",
    },
    {
      siteName: "HashNode",
      iconifyClassname: "simple-icons:hashnode",
      style: {
        color: "#2962ff",
      },
      profileLink: "",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Data Science & Analysis",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production-ready models for various deep learning and statistical use cases",
        "⚡ Experience in working with Computer Vision using OpenCV and NLP projects(Chatterbot)",
        "⚡ Having good hands-on with Data Cleaning, processing & Analysing using Numpy, Pandas, Tableau & PowerBI",
        "⚡ Experience with Text-to-speech encoders/decoders (speech synthesis)",
        "⚡ Experienced in Flask Rest-API for deployment of ML Model",
        "⚡ Having good knowledge of Python Development",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "NumPy",
          fontAwesomeClassname: "logos-numpy",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos-tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Web Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive websites using HTML5, CSS3 & BootStrap",
        "⚡ Creating application backend in Flask, Streamlit & Dash",
        "⚡ Having experience in Domain & Hosting using Netlify, Heroku, Github, Gitlab & Hostinger",
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
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "FLask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Streamlit",
          fontAwesomeClassname: "simple-icons:streamlit",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Gitlab",
          fontAwesomeClassname: "simple-icons:gitlab",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Visualization Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Dashboard designing highly attractive user interfaces for mobile and web applications using python and Visualization tool",
        "⚡ Tableau Developer with highly skills interactive Dashboard developer",
        "⚡ Creating the flow of charts functionalities to optimize user experience",
        "⚡ Applying latest Design principles and experienced in product wireframing",
      ],
      softwareSkills: [
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Python-Dash",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Plotly",
          fontAwesomeClassname: "simple-icons:plotly",
          style: {
            color: "#2fa3f7",
          },
        },
        {
          skillName: "Python-Matplotlib",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#81FBBB",
          },
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "OCR Streamlit",
      img_path: "project-06.png",
      description:
        "A WebApp for Extracting Text from Images and applying various thresholding methods with sentiment analysis using TextBlob",
      tags: [
        {
          lang: "python",
          color: "#004782",
        },
        {
          lang: "TextBlob",
          color: "#820032",
        },
        {
          lang: "OpenCV",
          color: "#00a100",
        },
        {
          lang: "Streamlit",
          color: "#ff4b4b",
        },
        {
          lang: "Heroku",
          color: "#3c0095",
        },
      ],
      link: "",
      code: "",
      linkcolor: "white",
    },

    // {
    //   title: "Signature Verification Recognition",
    //   img_path: "voice.gif",
    //   description:
    //     "A streamlit webapp which detects user's gender and emotion based on realtime audio input.",
    //   tags: [
    //     {
    //       lang: "ongoing",
    //       color: "red",
    //     },
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "tensorflow",
    //       color: "#4257f5",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },
    // {
    //   title: "NeuralViz",
    //   img_path: "neural.gif",
    //   description:
    //     "A webapp to visualize Neural Networks based on no. of layers and neurons, calculate Loss and understand math behind Back Propagation algo.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "numpy",
    //       color: "#8700b0",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://neuralviz.herokuapp.com/",
    //   code: "https://github.com/rohankokkula/neuralviz",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Semantic Search APP",
    //   img_path: "project-03.png",
    //   description:
    //     "Demo of OpenAI's GPT-3 model on Semantic search using streamlit.",
    //   tags: [
    //     {
    //       lang: "ongoing",
    //       color: "red",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },
    // {
    //   title: "Youtube Thumbnail Generator & AutoUploader",
    //   img_path: "project-02.png",
    //   description:
    //     "A python streamlit webapp to automate generating & uploading youtube thumbnails using Youtube v3 API",
    //   tags: [
    //     {
    //       lang: "internal project",
    //       color: "red",
    //     },
    //     {
    //       lang: "youtube v3 api",
    //       color: "red",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },

    // {
    //   title: "Newsearcher",
    //   img_path: "news.gif",
    //   description:
    //     "Enter your search keyword and get a summary of news weblinks with images without actually opening the links.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "newspaper3k",
    //       color: "#303030",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "nltk",
    //       color: "#051c61",
    //     },
    //   ],
    //   link: "https://newsearcher.herokuapp.com/",
    //   code: "https://github.com/rohankokkula/Newsearcher",
    //   linkcolor: "white",
    // },
    // {
    //   title: "ActiWeight",
    //   img_path: "acti.gif",
    //   description:
    //     "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
    //   code: "https://github.com/rohankokkula/Actiweight",
    //   linkcolor: "white",
    // },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Data Science Intern",
        subtitle: "ByteBlanket Software and Solutions",
        date: "June 2020 - present",
        content: [
          "Face Expression Detector : As an intern, I was assigned to Data Science team and assigned project to create a fast and scalable solution for Expression Detection using facial recognition.",
          "Face Recognition System : As an intern, I was assigned to Data Science team and assigned project to create a fast and scalable solution for authentication using facial recognition.",
          "Tableau Dashboards for Work Efficiency : Designed and created Tableau Dashboard to track and manage queries assigned, closed and pending and helps improve the work efficiency.",
          "Merchant Web Dashboard : Created client facing web dashboard application using python, plotly and Dash to track and monitor inventory for merchants.",
          "Chatbot Web App : Created Chatbot to provide order related answers to common customer queries.",
          "Signature Verification for Fintech Client : Currently working on building a signature verification app using deep learning and CV techniques.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title:
            "Bachelor of Engineering in Electronics and Communication Engineering",
          subtitle: "HMR Institute of Technology and Management, New Delhi",
          date: "2018 - 2022",
          content: ["Overall CGPA: 8.3/10"],
        },
        {
          title: "Higher Secondary School Certificate [HSSC]",
          subtitle: "Indraprastha Convent Sr. Secondary School, New Delhi",
          date: "2016 - 2018",
          content: ["CGPA: 7.6/10"],
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          content: [
            "#3 in E-sports Championship Emblazon 2019",
            "#1 Rank Holder in NEO Olympiad 3.0",
          ],
        },
        {
          title: "Achievements",
          content: [
            "LinkedIn Python Assessmment Certified",
            "4⭐ Badges for Python, Python and RestAPI Certified at HackerRank ",
            "Cleared Infosys Certification for Certified Software Engineer",
          ],
        },
      ],
    },
    {
      title: ["Freelance Work"],
      data: [
        {
          title: "Data Analysis",
          subtitle: "fiverr.com",
          content: [
            "Created programm for Client for Big Data processing using DASK",
          ],
        },
        {
          title: "Data Visualization",
          subtitle: "fiverr.com",
          content: [
            "Created Graphs and chart and prepare a Web dashboard for Client for visualtization using DASH",
          ],
        },
        {
          title: "Portfolio Website",
          subtitle: "Jatinkaushik.tk",
          content: [
            "Built a personal Portfolio Website with the help or @rohanKokkula and @mohitnegi",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Python 101 for Data Science",
      subtitle: "Data Science",
      logo_path: "cc.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/45a95ca65436444e85e4485807d7b67f",
      alt_name: "Cognitive",
      color_code: "#000000",
    },
    {
      title: "SQL and Relational Databases 101",
      subtitle: "SQL",
      logo_path: "cc.png",
      certificate_link:
        "https://courses.cognitiveclass.ai/certificates/08a88c387dc44d2a88a6592cf83689cd",
      alt_name: "Cognitive",
      color_code: "#000000",
    },
    {
      title: "Access Denied'21",
      subtitle: "IETE-VIT Vellore",
      logo_path: "vitlogo.png",
      certificate_link:
        "https://verify.givemycertificate.com/verify/YC74-G7DR-CKQS-QJ7K",
      alt_name: "VIT",
      color_code: "#000000",
    },
    {
      title: "Data Science for Everyone",
      subtitle: "DataCamp",
      logo_path: "datacamp-01.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/course/3bb303e6599e4cc83068f6b2e06347fba7e3b567",
      alt_name: "DataCamp",
      color_code: "#000000",
    },
    {
      title: "Python ",
      subtitle: "HackerRank",
      logo_path: "python-01.png",
      certificate_link: "https://www.hackerrank.com/jatinkaushik_?hr_r=1",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Python Basic",
      subtitle: "HackerRank",
      logo_path: "hck.png",
      certificate_link: "https://www.hackerrank.com/certificates/c2e799452876",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Rest API(Intermediate)",
      subtitle: "HackerRank",
      logo_path: "hck.png",
      certificate_link: "https://www.hackerrank.com/certificates/28339364775b",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Python for Data Science",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/PY000156.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Machine Learning Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/ML005036.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "PowerBI Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/PB012042.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Tableau Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/TB003355.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, Python, Flask, visualization Libraries, Tools and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Rohini Sector-37, New Delhi-110086",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 8826599252",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Jatin-kaushik",
    iconifyClassname: "simple-icons:hackerrank",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#ffffff", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/jatin-kaushik/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:JatinchandKaushik@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/Jatinchandkaushik/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
