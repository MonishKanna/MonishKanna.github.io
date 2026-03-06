/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Monish Kanna's Portfolio",
  description:
    "A passionate data scientist who thrives on building end-to-end solutions, leveraging data to develop scalable and sustainable systems that drive impactful insights and decision-making.",
  og: {
    title: "Monish Kanna Suresh Portfolio",
    type: "website",
    url: "http://monishkannasuresh.com/",
  },
};

//Home Page
const greeting = {
  title: "Monish Kanna Suresh",
  logo_name: "MonishKannaSuresh",
  subTitle:
    "A passionate data scientist who thrives on building end-to-end solutions, leveraging data to develop scalable and sustainable systems that drive impactful insights and decision-making.",
  resumeLink:
    "https://drive.google.com/file/d/1MMWC6IXMi0UWr0upmW5TXhghSu0k3rrZ/view?usp=share_link",
  portfolio_repository: "https://github.com/MonishKanna/masterPortfolio",
  githubProfile: "https://github.com/MonishKanna",
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
    link: "https://github.com/MonishKanna",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/monish-kanna-suresh/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:monishkanna67@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/__m_o_n_i_s_h__67__/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
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
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
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
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "logos:tableau",
          style: {
            backgroundColor: "transparent",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
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
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
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
      },
      profileLink: "https://leetcode.com/u/monishkanna67/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/monishkanna67",
    },
    {
      siteName: "Kaggle",
      iconifyClassname: "simple-icons:kaggle",
      style: {
        color: "#20BEFF",
      },
      profileLink: "https://www.kaggle.com/monishkanna",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Stevens Institute of Technology, Hoboken",
      subtitle: "M.S. in Applied Artificial Intelligence",
      logo_path: "stevens_logo.png",
      alt_name: "Stevens Tech Hoboken",
      duration: "2022 - 2024",
      descriptions: [
        "⚡ I have taken varity of courses related to Artificial Intelligence which correspond to Explainable AI, Graph Machine Learning, Computer Vision etc.",
        "⚡ Apart from this, I have also done teaching and course assistantship.",
        "⚡ During my time at university, I secured a CGPA of 3.93/4.0, demonstrating my strong academic performance and dedication to excellence in my coursework.",
      ],
      website_link: "https://www.stevens.edu/",
    },
    {
      title: "Sri Sivasubramaniya Nadar College of Engineering, Chennai",
      subtitle: "B.Tech. in Information Technology",
      logo_path: "ssn.webp",
      alt_name: "SSN Kalavakkam",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I was selected for Merit cum Means Scholarship which is given to 10 students in college.",
      ],
      website_link: "https://www.ssn.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Machine Learning",
      subtitle: "- Lawrence Carin, David Carlson",
      logo_path: "Duke_logo.png",
      certificate_link:
        "https://coursera.org/share/7a78d905a198a666e02cfa1953880ab9",
      alt_name: "Duke University",
      color_code: "#8C151599",
    },
    {
      title: "A-Z Machine Learning",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/14AG88n3L4a8VlbhrRq7yhSwdPhiF26jw/view?usp=drive_link",
      alt_name: "a-zmachinelearning.ai",
      color_code: "#00000099",
    },
    {
      title: "A-Z Artificial Intelligence",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1UNDAJ8kFD90yZCRH5Br0S0ED0K9cT0MW/view?usp=share_link",
      alt_name: "a-zartificialintelligence",
      color_code: "#0C9D5899",
    },
    {
      title: "Data Science and AI",
      subtitle: "- Joseph Santarcangelo",
      logo_path: "ibm_logo.png",
      certificate_link:
        "https://coursera.org/share/b69629593019eece8f04536ac552a678",
      alt_name: "IBM",
      color_code: "#1F70C199",
    },
    {
      title: "Data Structures",
      subtitle: "- Charles Russell Severance",
      logo_path: "uofmichigan.png",
      certificate_link:
        "https://coursera.org/share/81d32d8ddd0f2ea2e753299c5d1c896b",
      alt_name: "michigan",
      color_code: "#D83B0199",
    },
    {
      title: "Object Oriented Programming: Advanced Python",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1zO4ek4A5_7-Yy4fl5h0KEGw1jTaFiP86/view?usp=share_link",
      alt_name: "advancedpython",
      color_code: "#1F70C199",
    },
    {
      title: "Python Programming",
      subtitle: "- Udemy",
      logo_path: "udemy.png",
      certificate_link:
        "https://drive.google.com/file/d/1RsSJJnaqN2oH9KvB-YA_JHHQEcOwgRaV/view?usp=share_link",
      alt_name: "python",
      color_code: "#0C9D5899",
    },
    {
      title: "Advanced Data Analysis",
      subtitle: "- Datacamp",
      logo_path: "datacamp.png",
      certificate_link:
        "https://drive.google.com/file/d/1Zw9_PaUX4LOmp6Kt_qQ2BCaF1426kbWf/view?usp=share_link",
      alt_name: "datacamp",
      color_code: "#2A73CC",
    },
    {
      title: "Angular8 Development",
      subtitle: "- VSkills",
      logo_path: "vkills.png",
      certificate_link:
        "https://drive.google.com/file/d/1iG5mNChOYkG7nW5J2UixbssX52je8ju_/view?usp=share_link",
      alt_name: "angular",
      color_code: "#00000099",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internship ",
  description:
    "I have worked with many evolving startups as Software Engineer and Intern.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Data Scientist",
          company: "Digital Terrain Inc",
          company_url: "http://www.digitalterrain.com/?pg=company",
          logo_path: "digital_terrain.png",
          duration: "September 2024 - Present",
          location: "Jersey City, New Jersey, United States",
          description:
            "⚡ Spearheaded development of real-time risk assessment models for credit scoring and loan approvals using gradient boosting, improving risk prediction accuracy by 28% and reducing default rates across 500K+ transactions annually. \n⚡ Designed automated anomaly detection systems using unsupervised learning (autoencoders, isolation forests) to detect fraudulent activities, identifying $2M+ in potential fraud quarterly. \n⚡ Developed ML-powered portfolio optimization tools leveraging Markowitz optimization and deep reinforcement learning, increasing client portfolio performance by 12% and reducing risk exposure. \n⚡ Built distributed data pipelines using AWS services (S3, Redshift, Lambda, Glue), reducing ETL processing times by 55% for high-frequency financial data. \n⚡ Created interactive real-time analytics dashboards using Tableau, Power BI, and Google Looker, reducing manual reporting efforts by 35%. \n⚡ Implemented MLOps workflows with CI/CD pipelines using Docker, Kubernetes, and MLflow, reducing model deployment time by 45%. \n⚡ Orchestrated AI-driven chatbot using NLP (Transformers, BERT, GPT models), automating 80% of customer inquiries and saving $1.2M annually. \n⚡ Enhanced financial forecasting accuracy using Bayesian modeling and deep neural networks, increasing precision by 22%. \n⚡ Optimized big data infrastructure with Apache Spark and Dask, reducing batch processing times by 50% for multi-terabyte datasets.",
          color: "#000000",
        },
        {
          title: "Software Engineer - Data Science",
          company: "Magzter Digital Private Limited",
          company_url:
            "https://www.magzter.com/?utm_source=google&utm_medium=cpc&gad_source=1&gclid=Cj0KCQjw4cS-BhDGARIsABg4_J0BrCiaa8We3VMLZUd6R2EEp7gbE3olWTGHj9aZoR9G74B4QUUUB-MaAt94EALw_wcB",
          logo_path: "magzter.png",
          duration: "December 2021 - April 2022",
          location: "Chennai, Tamil Nadu, India",
          description:
            "⚡ Engineered and deployed end-to-end machine learning models for fraud detection in financial transactions, leveraging random forest and deep learning algorithms to identify suspicious patterns, improving fraud detection accuracy by 35%, and preventing $1M+ in annual financial losses for enterprise clients. \n⚡ Built predictive analytics models for customer retention by implementing churn prediction algorithms and deep learning techniques such as LSTMs and XGBoost, increasing customer retention rates by 18%, leading to a $500K increase in revenue for subscription-based services.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Software Engineer Intern",
          company: "BonBloc Technologies Private Limited",
          company_url: "https://www.bonbloc.com/",
          logo_path: "bonbloc.png",
          duration: "June 2021 - September 2021",
          location: "Chennai, Tamil Nadu, India",
          description:
            "⚡ Led A/B testing initiatives for marketing and customer engagement campaigns, designing controlled experiments using Bayesian inference and multivariate testing, delivering insights that improved conversion rates by 22% and enhanced user segmentation strategies.",
          color: "#000000",
        },
        {
          title: "Software Engineer Intern",
          company: "Genome International Private Limited",
          company_url: "http://www.genomels.com/",
          logo_path: "genome.png",
          duration: "February 2021 - May 2021",
          location: "Chennai, Tamil Nadu, India",
          description:
            "Worked on Python programming, focusing on web scraping. Webscraped genomic data, parsed gene information, and published it on an AWS EC2 instance for scalable access. Deployed python program to store API-derived data in MySQL using nested data structures.",
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
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Monish_Kanna_Suresh_Photo.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Logan Ave, Jersey City, NJ, USA 07306",
    locality: "Jersey City",
    country: "USA",
    region: "New Jersey",
    postalCode: "07306",
    streetAddress: "Logan Avenue",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/X8hQccZ9Ytw2uC997",
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
  contactPageData,
};
