/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Dania Zein",
  title: "Hi, I'm Dania!",
  subTitle:
    "I'm a senior Math and Computer Science major at the historic Tougaloo College interested in applying data science and machine learning methods to medicine, biology, and public health",
  resumeLink:
    "https://docs.google.com/document/d/1YpqHnRgFHclxMck_vlKIMNVTuzhtJFKy/edit?usp=sharing&ouid=106300112739482199124&rtpof=true&sd=true", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/dmz4484",
  linkedin: "https://www.linkedin.com/in/dania-zein/",
  gmail: "daniazein20@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Current Skillset",
  skills: [
    emoji("➛ Build C++ programs to implement foundational CS skills "),
    emoji("➛ Learn scRNA-sequencing data analysis in R"),
    emoji("➛ Used PyTorch to train Deep Neural Networks"),
    emoji("➛ Present findings at regional and national conferences")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "C++",
      fontAwesomeClassname: "fas fa-laptop-code"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fas fa-r"
    },
    {
      skillName: "MATLAB",
      fontAwesomeClassname: "fa-file-plus-minus"
    },
    {
      skillName: "Wolfram Language",
      fontAwesomeClassname: "fa-abacus"
    },
    {
      skillName: "XCode",
      fontAwesomeClassname: "fa-gear-code"
    },
    {
      skillName: "Git/Github",
      fontAwesomeClassname: "fa-code-pull-request"
    },
    {
      skillName: "Linux",
      fontAwesomeClassname: "fa-square-terminal"
    },
    {
      skillName: "SQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Microsoft Office",
      fontAwesomeClassname: "fas fa-file-word"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Tougaloo College",
      logo: require("./assets/images/tc_logo.jpg"),
      subHeader:
        "Bachelor of Science: Computer Science and Mathematics, Minor: Data Science",
      duration: "Expected May 2026",
      desc: "Presidential Academic Scholar",
      descBullets: [
        "Relevant Coursework: Biostatistics, Calculus IV, Numerical Analysis, Introduction to Machine Learning",
        "Alpha Lambda Delta Scholar, Tougaloo Cybersecurity Clinic Intern, Tougaloo STEM-X Club Member"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Undergraduate Scholar",
      company: "Jackson Heart Study",
      companylogo: require("./assets/images/jhs_logo.png"),
      date: "Jan 2023 – Present",
      desc: "Exploring cardiovascular health disparities through public health studies",
      descBullets: [
        "Tutored 40+ high schoolers during 2023 (S.L.A.M.) summer program"
      ]
    },
    {
      role: "Undergraduate Research Fellow",
      company: "Tougaloo College",
      companylogo: require("./assets/images/tc_logo.jpg"),
      date: "Aug 2023 – Present",
      desc: "Using machine learning to analyze biomedical data on cloud-based platforms",
      descBullets: [
        "Predicting COVID-19 cases from survey data",
        "Qualtiy Control on scRNA-seq data"
      ]
    },
    {
      role: "AHA SURE Scholar",
      company: "Boston University",
      companylogo: require("./assets/images/boston_logo.png"),
      date: "June 2025 – Aug 2025",
      desc: "10-week mentored research project with VA Boston Healthcare System",
      descBullets: [
        "Experience in data analysis, biostatistics, and scientific communication",
        "Presented results at virtual symposium"
      ]
    },
    {
      role: "Teaching Assistant",
      company: "Tougaloo College",
      companylogo: require("./assets/images/tc_logo.jpg"),
      date: "Sep 2024 – May 2025",
      desc: "Served as a weekly Calculus I tutor across 2 classes, assisting students with coursework and exam preparation",
      descBullets: ["Graded 6 Calculus I quizzes for a class of 20 students"]
    },
    {
      role: "Summer Undergraduate Research Fellow",
      company: "Purdue University",
      companylogo: require("./assets/images/purdue_logo.jpg"),
      date: "May 2024 – Jul 2024",
      desc: "10-week mentored research project with SCALE HBCU Radiation Hardening cohort",
      descBullets: [
        "Investigated electron emission mechanisms in semiconductors",
        "Authored a technical paper and poster and presented at symposium"
      ]
    },
    {
      role: "Computer Science Summer Institute Participant",
      company: "Google",
      companylogo: require("./assets/images/google_logo.png"),
      date: "July 2022 – Aug 2022",
      desc: "4-week intensive summer program on HTML/CSS and JavaScript",
      descBullets: [
        "Configured 15 coding projects in JavaScript",
        "Applied concepts such as variables, data types, and functions",
        "Presented collaborative final project with live demo to Google engineers"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: false, // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "Some of my projects:",
  projects: [
    {
      projectName: "Patient Directory System",
      projectDesc: "C++ program of over 400 lines implementing basic CRUD operations displaying a menu interface storing patient records as a vector of patients Structs",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/dmz4484/Patient-Directory-System"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      projectName: "Research Lab Network Design",
      projectDesc: "Network design using Cisco Packet Tracer supporting research PCs, student devices, and IoT equipment using 3 VLANs for traffic separation, wired and wireless connectivity, and basic security",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/dmz4484/Research-Lab-Network-Design"
        }
      ]
    },
        {
      projectName: "DDR Fitness",
      projectDesc: "Website developed using HTML, CSS, and JavaScript with over 1,080 lines of code providing 60+ randomized workouts to users and an unlimited number of healthy recipes with Spoonacular API",
      footerLink: [
        {
          name: "Visit Repo",
          url: "https://github.com/dmz4484/CSSI_22_Project_DDRfitness"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements"),
  subtitle:
    "My conference presentations and achievements: ",

  achievementsCards: [
    {
      title: "2025 Emerging Researchers National (ERN) Conference in STEM",
      subtitle:
        "Poster presentation in Computer and Data Sciences (1st Place): Uncovering Transcriptional Dynamics in COVID-19: Integrating PBMC scRNA-Seq and RNA Velocity",
      image: require("./assets/images/ern.jpg"),
      imageAlt: "ern",
      footerLink: [
        {
          name: "View Abstract",
          url: "https://emerging-researchers.org/projects/411-3/"
        }
      ]
    },
    {
      title: "88th & 89th Annual Mississippi Academy of Sciences (MAS) Meeting",
      subtitle:
        "Top 10% of undergraduate student abstracts submitted in the Mathematics, Computer Science, and Statistics Division, Poster presentations (Honorable Mention and Best Undergraduate Poster in Division): Exploring COVID-19's Impact: Analyzing Trends in CTIS and Preprocessing COPE for Future Insights, Uncovering Transcriptional and Immune Dynamics in COVID-19 Using PBMC scRNA-Seq",
      image: require("./assets/images/mas.jpg"),
      imageAlt: "mas",
      footerLink: [
        {
          name: "View 2024 Journal",
          url: "https://msacad.org/wp-content/uploads/2024/06/vol_69_no_1-MAS-2024.pdf"
        },
         {
          name: "View 2025 Journal",
          url: "https://msacad.org/wp-content/uploads/2025/03/Vol-70_January_-No-1-2025final-7-3-10-2025-updated.pdf"
        }
      ]
    },
    {
      title: "21st & 22nd Annual Kincheloe Research Symposium",
      subtitle: " Oral presentation (1st Place): Quality Control and Cellular Profiling of PBMCs from COVID-19 Patients and Healthy Controls Using scRNA-seq, Poster presentations (3rd Place): Transitions Between Electron Emission Mechanisms in Semiconductors, Predicting COVID-19 Cases Using Deep Neural Networks Based on Trends and Impact Survey Data.",
      image: require("./assets/images/kinch.jpeg"),
      imageAlt: "kinch",
      footerLink: [
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "My Inbox is open!",
  email_address: "daniazein20@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
