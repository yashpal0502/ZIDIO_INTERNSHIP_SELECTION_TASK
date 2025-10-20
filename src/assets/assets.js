import dummy_profile from "./dummy_profile.png";
import logo from "./logo.png";
import image from "./image.png";

export const assets = {
  logo,
  image,
};

export const dummyResumeData = [
  {
    // ----------------------------------------------------- Resume 1 ------------------------------------------------------
    personal_info: {
      full_name: "Ethan Carter",
      email: "ethan.carter@example.com",
      phone: "0 9988776655",
      location: "Seattle, WA, USA",
      linkedin: "https://www.linkedin.com/in/ethancarter",
      website: "https://www.ethancarter.dev",
      profession: "Software Engineer",
      image: dummy_profile,
    },
    _id: "90a2b41b2f5ee59987cc114a",
    userId: "90a2b41b2f5ee59987cc114b",
    title: "Ethan's Resume",
    public: true,
    professional_summary:
      "Results-driven Software Engineer with 5+ years of experience developing and optimizing web applications using React, Node.js, and cloud-native architectures. Passionate about clean code, scalability, and user experience.",
    skills: [
      "React",
      "Node.js",
      "Next.js",
      "MongoDB",
      "AWS",
      "GraphQL",
      "TypeScript",
      "Docker",
      "Redux",
      "Tailwind CSS",
    ],
    experience: [
      {
        company: "NovaByte Labs",
        position: "Senior Software Engineer",
        start_date: "2022-05",
        end_date: "Present",
        description:
          "Architected and maintained scalable cloud applications using AWS Lambda and DynamoDB. Mentored junior developers and led code review sessions to maintain code quality.",
        is_current: true,
        _id: "90a2b41b2f5ee59987cc114c",
      },
      {
        company: "PixelNova Tech",
        position: "Frontend Developer",
        start_date: "2019-02",
        end_date: "2022-04",
        description:
          "Built reusable UI components with React and Tailwind CSS. Collaborated with UX designers to improve product usability and accessibility standards.",
        is_current: false,
        _id: "90a2b41b2f5ee59987cc114d",
      },
    ],
    education: [
      {
        institution: "Cascade University of Technology",
        degree: "B.Tech",
        field: "Computer Engineering",
        graduation_date: "2018-06",
        gpa: "8.6",
        _id: "90a2b41b2f5ee59987cc114e",
      },
      {
        institution: "Evergreen High School",
        degree: "HIGHER SECONDARY",
        field: "Science",
        graduation_date: "2014-03",
        gpa: "",
        _id: "90a2b41b2f5ee59987cc114f",
      },
    ],
    template: "minimal-image",
    accent_color: "#3B82F6",
    project: [
      {
        name: "TaskFlow - Workflow Automation Tool",
        type: "Web Application (Productivity)",
        description:
          "TaskFlow automates repetitive business processes and integrates with major platforms like Slack and Google Workspace to streamline team workflows.",
        _id: "90a2b41b2f5ee59987cc1150",
      },
      {
        name: "EcoShop - Sustainable E-commerce Platform",
        type: "Web Application (E-commerce)",
        description:
          "EcoShop is a sustainability-focused online marketplace allowing users to shop eco-friendly products with transparent carbon footprint data.",
        _id: "90a2b41b2f5ee59987cc1151",
      },
    ],
    updatedAt: "2025-09-23T13:39:38.395Z",
    createdAt: "2025-09-23T13:39:38.395Z",
  },
  {
    // ----------------------------------------------------- Resume 2 ------------------------------------------------------
    personal_info: {
      full_name: "Sophia Turner",
      email: "sophia.turner@example.com",
      phone: "0 7766554433",
      location: "Denver, CO, USA",
      linkedin: "https://www.linkedin.com/in/sophiaturner",
      website: "https://www.sophiaturner.dev",
      profession: "UI/UX Designer",
      image: dummy_profile,
    },
    _id: "91b3c52c3f6ff61198dd225b",
    userId: "91b3c52c3f6ff61198dd225c",
    title: "Sophia's Resume",
    public: true,
    professional_summary:
      "Creative UI/UX Designer with over 6 years of experience crafting intuitive and engaging user experiences. Skilled in design systems, wireframing, prototyping, and usability testing.",
    skills: [
      "Figma",
      "Adobe XD",
      "Sketch",
      "HTML5",
      "CSS3",
      "JavaScript",
      "Design Thinking",
      "User Research",
      "Accessibility",
      "Responsive Design",
    ],
    experience: [
      {
        company: "DesignCore Studios",
        position: "Lead Product Designer",
        start_date: "2021-08",
        end_date: "Present",
        description:
          "Led the UI/UX design for multiple SaaS products. Collaborated closely with product managers and developers to ensure design feasibility and consistency.",
        is_current: true,
        _id: "91b3c52c3f6ff61198dd225d",
      },
      {
        company: "BrightPixel Agency",
        position: "UI/UX Designer",
        start_date: "2017-04",
        end_date: "2021-07",
        description:
          "Created responsive web and mobile app designs, conducted A/B testing, and improved user satisfaction scores by 30%.",
        is_current: false,
        _id: "91b3c52c3f6ff61198dd225e",
      },
    ],
    education: [
      {
        institution: "Denver School of Design & Technology",
        degree: "B.Des.",
        field: "User Experience Design",
        graduation_date: "2017-05",
        gpa: "3.7",
        _id: "91b3c52c3f6ff61198dd225f",
      },
      {
        institution: "Mountain View High School",
        degree: "High School Diploma",
        field: "Arts",
        graduation_date: "2013-04",
        gpa: "",
        _id: "91b3c52c3f6ff61198dd2260",
      },
    ],
    template: "minimal-image",
    accent_color: "#EC4899",
    project: [
      {
        name: "MindSpace - Mental Wellness App",
        type: "Mobile App (Health & Wellness)",
        description:
          "MindSpace is a mindfulness and meditation app that uses gamified design to encourage daily mental health habits and stress tracking.",
        _id: "91b3c52c3f6ff61198dd2261",
      },
      {
        name: "TravelEase - Travel Planner Dashboard",
        type: "Web Application (Travel)",
        description:
          "TravelEase helps users plan trips efficiently by combining itinerary management, budgeting tools, and AI-based recommendations.",
        _id: "91b3c52c3f6ff61198dd2262",
      },
    ],
    updatedAt: "2025-09-25T15:10:21.184Z",
    createdAt: "2025-09-25T15:10:21.184Z",
  },
  {
    // ----------------------------------------------------- Resume 3 ------------------------------------------------------
    personal_info: {
      full_name: "Noah Bennett",
      email: "noah.bennett@example.com",
      phone: "0 6655443322",
      location: "Boston, MA, USA",
      linkedin: "https://www.linkedin.com/in/noahbennett",
      website: "https://www.noahbennett.io",
      profession: "DevOps Engineer",
      image: dummy_profile,
    },
    _id: "92c4d63d4g7gg72209ee336c",
    userId: "92c4d63d4g7gg72209ee336d",
    title: "Noah's Resume",
    public: true,
    professional_summary:
      "Efficient and detail-oriented DevOps Engineer with 8 years of experience automating cloud infrastructure, improving CI/CD pipelines, and managing containerized deployments using Kubernetes and AWS.",
    skills: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Jenkins",
      "Ansible",
      "CI/CD",
      "Linux",
      "Python",
      "Monitoring Tools",
    ],
    experience: [
      {
        company: "CloudShift Technologies",
        position: "Senior DevOps Engineer",
        start_date: "2020-01",
        end_date: "Present",
        description:
          "Implemented infrastructure-as-code with Terraform and automated deployments using Jenkins. Reduced system downtime by 40% with proactive monitoring.",
        is_current: true,
        _id: "92c4d63d4g7gg72209ee336e",
      },
      {
        company: "SkyStack Systems",
        position: "DevOps Specialist",
        start_date: "2016-06",
        end_date: "2019-12",
        description:
          "Managed cloud-based applications and automated build pipelines for large-scale distributed systems, improving release efficiency by 50%.",
        is_current: false,
        _id: "92c4d63d4g7gg72209ee336f",
      },
    ],
    education: [
      {
        institution: "Boston Institute of Computing",
        degree: "B.E.",
        field: "Information Systems",
        graduation_date: "2016-05",
        gpa: "3.8",
        _id: "92c4d63d4g7gg72209ee3370",
      },
      {
        institution: "Northview High School",
        degree: "High School Diploma",
        field: "Science",
        graduation_date: "2012-04",
        gpa: "",
        _id: "92c4d63d4g7gg72209ee3371",
      },
    ],
    template: "minimal-image",
    accent_color: "#10B981",
    project: [
      {
        name: "AutoDeploy - CI/CD Automation Suite",
        type: "DevOps Tool",
        description:
          "AutoDeploy automates code testing, build, and deployment pipelines with seamless GitHub and Jenkins integration.",
        _id: "92c4d63d4g7gg72209ee3372",
      },
      {
        name: "InfraWatch - Cloud Monitoring System",
        type: "Monitoring Platform",
        description:
          "InfraWatch provides unified visibility into AWS, GCP, and Azure infrastructure, enabling proactive alerting and cost optimization.",
        _id: "92c4d63d4g7gg72209ee3373",
      },
    ],
    updatedAt: "2025-09-25T15:26:49.652Z",
    createdAt: "2025-09-25T15:26:49.652Z",
  },
];
