// ============================================================
// Portfolio Data — Edit this file to update your portfolio content
// ============================================================

export const personalInfo = {
  name: "Kumar Kishan",
  title: "Cyber Security Analyst",
  tagline:
    "Recent Computer Science graduate specializing in Information Security, with hands-on cybersecurity project experience and strong knowledge of security concepts.",
  phone: "+91 9267914452",
  email: "kumarkishan22595@gmail.com",
  linkedin: "https://www.linkedin.com/in/kumar-kishan-security/",
  github: "https://github.com/Kishan77888",
  location: "Kharar, Punjab, India",
  resumeLink: "Kumar_kishan_Resume.pdf",
  profilePhoto: "profile.jpeg",
};

export const aboutMe = {
  summary:
    "I'm a dedicated Cybersecurity professional with a B.E. in Computer Science (Information Security) from Chandigarh University. With hands-on experience in threat detection, penetration testing, and security monitoring, I build tools that protect digital systems. I'm passionate about leveraging Machine Learning and automation to strengthen cybersecurity defenses.",
  highlights: [
    "Specialized in Information Security with CGPA 7.3/10",
    "Experienced in building enterprise-grade threat detection systems",
    "Certified by Oracle, IBM, Cisco, Google & Deloitte",
    "Hackathon finalist among 200+ participants",
    "Completed 20+ TryHackMe rooms (SOC Level 1 & DFIR paths)",
  ],
};

export const education = {
  degree: "Bachelor of Engineering (B.E.) in Computer Science & Engineering",
  specialization: "Information Security",
  university: "Chandigarh University",
  location: "Mohali, Punjab",
  duration: "Aug 2022 — Jun 2026",
  cgpa: "7.3 / 10",
  coursework: {
    computerScience: [
      "Data Structures & Algorithms",
      "Database Management Systems (DBMS)",
      "Operating Systems",
      "Python Programming",
      "Java Programming",
      "Computer Networks",
    ],
    cybersecurity: [
      "Identity & Access Management (IAM)",
      "IT Security Auditing",
      "System & Network Security",
      "Blockchain Security",
      "Cryptography",
      "Network Operating Systems",
      "Digital Forensics",
      "Penetration Testing",
    ],
  },
};

export const skills = {
  security: [
    { name: "Cybersecurity", icon: "shield" },
    { name: "Network Security", icon: "shield" },
    { name: "Information Security", icon: "shield" },
    { name: "Threat Detection", icon: "shield" },
    { name: "Incident Response", icon: "shield" },
    { name: "Vulnerability Assessment", icon: "shield" },
    { name: "Penetration Testing", icon: "shield" },
    { name: "Risk Assessment", icon: "shield" },
    { name: "Threat Intelligence", icon: "shield" },
    { name: "SIEM", icon: "shield" },
  ],
  tools: [
    { name: "SIEM Tools", icon: "tool" },
    { name: "Wireshark", icon: "tool" },
    { name: "Nmap", icon: "tool" },
    { name: "Kali Linux", icon: "tool" },
    { name: "VMware", icon: "tool" },
    { name: "GitHub", icon: "tool" },
  ],
  programming: [
    { name: "Python", icon: "code" },
    { name: "Linux", icon: "code" },
    { name: "FastAPI", icon: "code" },
    { name: "Flask", icon: "code" },
    { name: "Machine Learning", icon: "code" },
  ],
};

export const projects = [
  {
    title: "Sentinel AI — Enterprise Insider Threat Detection",
    description:
      "A live insider threat detection platform using Python, FastAPI, and Machine Learning to monitor suspicious user activities in enterprise environments.",
    highlights: [
      "92–95% threat detection accuracy using behavioral analytics",
      "Real-time alert triage, forensic audit logging & MITRE ATT&CK mapping",
      "Reduced false positive alerts by ~20% through user behavior baseline modeling",
      "Deployed as an open-source cybersecurity project on GitHub",
    ],
    techStack: ["Python", "FastAPI", "Machine Learning", "MITRE ATT&CK"],
    github: "https://github.com/Kishan77888",
    live: null,
  },
  {
    title: "ML-Based Encrypted Traffic Threat Detection",
    description:
      "A machine learning-based system to detect cyber threats in encrypted TLS network traffic without decrypting packets.",
    highlights: [
      "Detect DDoS, port scanning & C2 communication with 92–95% accuracy",
      "Analyzed large-scale PCAP datasets for traffic analysis & security monitoring",
      "MITRE ATT&CK mapped attack patterns for SOC reporting",
      "Reduced SOC analyst alert fatigue by ~20% using behavioral anomaly detection",
    ],
    techStack: ["Python", "Machine Learning", "Wireshark", "MITRE ATT&CK"],
    github: "https://github.com/Kishan77888",
    live: null,
  },
  {
    title: "Dynamic 5G Network Slicing Security Analysis",
    description:
      "Simulated 3GPP-based 5G network slices (eMBB, URLLC, mMTC) to identify and analyze security vulnerabilities.",
    highlights: [
      "Identified resource exhaustion, impersonation attacks & slice hijacking",
      "Forensic investigation following NIST Incident Response Framework",
      "Proposed mitigation strategies aligned with 5G & 3GPP security standards",
      "Research on emerging 5G network security risks & threat modeling",
    ],
    techStack: ["Kali Linux", "VMware", "NIST Framework", "3GPP"],
    github: "https://github.com/Kishan77888",
    live: null,
  },
];

export const certifications = [
  {
    name: "Oracle Cloud Infrastructure 2024 Generative AI Certified Professional",
    issuer: "Oracle University",
    date: "July 2024",
    validity: "Valid until July 2026",
    image: "certificates/oracle-oci-genai.png",
  },
  {
    name: "Junior Cybersecurity Analyst Career Path",
    issuer: "Cisco Networking Academy",
    date: "June 2023",
    image: "certificates/cisco-cybersecurity.jpg",
  },
  {
    name: "Security Intelligence Engineer",
    issuer: "IBM",
    date: "",
    image: "certificates/Security Intelligence Engineer.png",
  },
  {
    name: "Cloud Security",
    issuer: "IBM",
    date: "",
    image: "certificates/Screenshot 2026-05-19 130826.png",
  },
  {
    name: "Google Cybersecurity",
    issuer: "Coursera",
    date: "",
    image: "certificates/google cybersecurity (Coursera).jpg",
  },
  {
    name: "Cybersecurity Operations Fundamentals (CyberOps Associate)",
    issuer: "Cisco",
    date: "",
    image: "certificates/Cybersecurity Operations_page-0001.jpg",
  },
  {
    name: "Cyber Threat & Incident Response Job Simulation",
    issuer: "Deloitte Australia (Forage)",
    date: "",
    image: "certificates/Dellooite.jpg",
  },
];

export const experience = [
  {
    role: "Oracle Certified Professional",
    type: "Professional Certification — Industrial Training",
    organization: "Oracle University (via Chandigarh University)",
    duration: "2024",
    description:
      "Completed Oracle Cloud Infrastructure 2024 Generative AI Professional Certification as an industrial training alternative provided by Chandigarh University.",
    highlights: [
      "Oracle Cloud Infrastructure (OCI) Generative AI services",
      "AI/ML model deployment on cloud infrastructure",
      "Enterprise-grade cloud security practices",
    ],
  },
  {
    role: "Cybersecurity Trainee",
    type: "Summer Training",
    organization: "Cisco Skills for All — Chandigarh University",
    duration: "2023",
    description:
      "Completed the Junior Cybersecurity Analyst Career Path through Cisco Networking Academy during institutional summer training.",
    highlights: [
      "Network and information security controls",
      "Vulnerability assessment and risk management",
      "Incident response planning and management",
      "Systems and network security threat mitigation",
    ],
  },
];

export const achievements = [
  {
    title: "Hackathon Finalist",
    description:
      "Selected for Day 2 Prototype Development at Hackathon Stack Sprint 1.0, advancing to finals among 200+ participants.",
    icon: "trophy",
  },
  {
    title: "TryHackMe Learning",
    description:
      "Completed 20+ TryHackMe rooms including SOC Level 1 and DFIR paths, building offensive and defensive security skills.",
    icon: "terminal",
  },
  {
    title: "Threat Intelligence Research",
    description:
      "Researched and mapped publicly disclosed techniques to MITRE ATT&CK framework for threat analysis and security learning.",
    icon: "search",
  },
  {
    title: "Cybersecurity Community Engagement",
    description:
      "Engineered security systems that prevented data breaches, saving approximately $500,000 in potential losses.",
    icon: "users",
  },
];

export const strengths = [
  {
    title: "Threat Analysis",
    description:
      "Strong knowledge of cyber threats, vulnerability assessment, and security monitoring.",
  },
  {
    title: "Problem Solving",
    description:
      "Skilled in solving security challenges using Python, Machine Learning, and cybersecurity tools.",
  },
];
