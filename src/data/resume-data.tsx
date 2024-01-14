import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Igor Nunes Ferro",
  initials: "INF",
  location: "São Paulo, Brazil, BRT",
  locationLink: "https://www.google.com/maps/place/São%20Paulo",
  about:
    "Electrical and Computer Engineer whose focus lies in the ever-evolving field of cybersecurity.",
  summary:
    "A 23-year old from Brazil who went far away from home to study in Belgium. I love listening to music, cycling and traveling around the world, and my favorite band is Panic! At the Disco. Today, with a degree in Electrical Engineering and his Masters in Computer Engineering, I work as an IT Analyst in Cybersecurity at BTG Pactual, the biggest investiment bank of LATAM.",
  avatarUrl: "https://media.licdn.com/dms/image/D4D03AQE2kSQRW4UgCg/profile-displayphoto-shrink_200_200/0/1701896848039?e=1710979200&v=beta&t=X2IFIuX0nZU7sVee3N35by_BCR1oEq5E5H9NNi9zbqY",
  personalWebsiteUrl: "https://www.linkedin.com/in/igor-nunes-ferro/",
  contact: {
    email: "igornferro@outlook.com",
    tel: "+5511982376895",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/IgorFerro1",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/igor-nunes-ferro/",
        icon: LinkedInIcon,
      },
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: XIcon,
      // },
    ],
  },
  education: [
    {
      school: "POLI/USP - Escola Politécnica da Universidade de São Paulo",
      degree: "Bachelor's Degree in Electrical Engineering, Major in Computer Engineering",
      start: "2018",
      end: "2023",
    },
    {
      school: "UCLouvain - Université catholique de Louvain",
      degree: "Master's Degree in Computer Science and Engineering, Major in Security and Networks",
      start: "2021",
      end: "2023",
    },
  ],
  work: [
    {
      company: "BTG Pactual",
      link: "https://www.btgpactual.com",
      badges: [],
      title: "IT Analyst • Security ",
      // logo: ParabolLogo,
      start: "Jan 2024",
      end: "Present",
      description:
        "Part of the CyberSecurity Purple Team for the Corporate Division of the bank, responsible for security mechanisms, such as rate limiters, access control systems, biometry, and user identity analysis. The main resposibilities lie on finding and fixing flaws and exploits.",
    },
    {
      company: "BTG Pactual",
      link: "https://www.btgpactual.com",
      badges: [],
      title: "IT Intern • Security ",
      // logo: ParabolLogo,
      start: "Sep 2023",
      end: "Dec 2023",
      description:
        "Part of the CyberSecurity Purple Team for the Corporate Division of the bank. As an intern, I worked in a project related to rate limiting requests.",
    },
    {
      company: "ARGO - Inovação em Saúde",
      link: "https://www.instagram.com/argo.usp/",
      badges: [],
      title: "Invited Collaborator",
      logo: JojoMobileLogo,
      start: "Mar 2021",
      end: "Sep 2021",
      description:
        "I was invited by ARGO group to collaborate on a project, mainly because of my cybersecurity knowledge. The project was a wound-tracking mobile application. \n• Analysed cybersecurity and data protection aspects in the project, according to Brazilian GDPR law. \n• Contributed to the development of the front end of a testing application. \n• Contributed to the connection from the app to Firebase servers.",
    },
    // {
    //   company: "Nokia Siemens Networks",
    //   link: "https://www.nokia.com",
    //   badges: [],
    //   title: "C/C++ Developer",
    //   logo: NSNLogo,
    //   start: "2010",
    //   end: "2012",
    //   description: "Creating and testing software for LTE base stations",
    // },
  ],
  skills: [
    "Elixir",
    "C#",
    "Python",
    "Flutter",
    "Firebase",
    "Docker",
    "metasploit",
    "hydra",
    "sqlmap",
    "nmap",
    "aircrack",
    "VHDL",
    "SystemVerilog",
    "LaTeX",
  ],
  projects: [
    {
      title: "IoT Hound",
      techStack: [
        "Side Project",
        "Python",
      ],
      description: "An IoT Forensics tool to locate devices within crime scenes.",
      logo: ConsultlyLogo,
      link: {
        label: "IoT Hound Website",
        href: "https://sites.google.com/usp.br/iot-hound/",
      },
    },]
  //   {
  //     title: "Monito",
  //     techStack: ["Side Project", "TypeScript", "Next.js", "Browser Extension"],
  //     description:
  //       "Browser extension that records everything happening in a web application",
  //     logo: MonitoLogo,
  //     link: {
  //       label: "monito.dev",
  //       href: "https://monito.dev/",
  //     },
  //   },
  //   {
  //     title: "Jarocki.me",
  //     techStack: ["Side Project", "Next.js", "MDX"],
  //     description:
  //       "My personal website and blog. Built with Next.js and Notion API",
  //     logo: JarockiMeLogo,
  //     link: {
  //       label: "github.com",
  //       href: "https://jarocki.me/",
  //     },
  //   },
  //   {
  //     title: "Minimal",
  //     techStack: ["Side Project", "Next.js", "Puppeteer"],
  //     description:
  //       "Minimalist calendars, habit trackers and planners generator",
  //     logo: Minimal,
  //     link: {
  //       label: "useminimal.com",
  //       href: "https://useminimal.com/",
  //     },
  //   },
  //   {
  //     title: "Barepapers",
  //     techStack: ["Side Project", "Next.js", "Puppeteer"],
  //     description:
  //       "Generates beautiful wallpapers using random shapes and gradients",
  //     logo: BarepapersLogo,
  //     link: {
  //       label: "barepapers.com",
  //       href: "https://barepapers.com/",
  //     },
  //   },
  //   {
  //     title: "Year progress",
  //     techStack: ["Side Project", "TypeScript", "Next.js"],
  //     description: "Tracks current year progress and displays a countdown",
  //     logo: YearProgressLogo,
  //     link: {
  //       label: "getyearprogress.com",
  //       href: "https://getyearprogress.com/",
  //     },
  //   },
  //   {
  //     title: "Parabol",
  //     techStack: [
  //       "Full Stack Developer",
  //       "TypeScript",
  //       "React",
  //       "Node.js",
  //       "GraphQL",
  //     ],
  //     description:
  //       "The Agile meeting co-pilot that delivers better meetings with less effort",
  //     logo: ParabolLogo,
  //     link: {
  //       label: "github.com",
  //       href: "https://parabol.co/",
  //     },
  //   },
  //   {
  //     title: "Evercast",
  //     techStack: [
  //       "Lead Frontend Developer",

  //       "TypeScript",
  //       "React",
  //       "Node.js",
  //       "GraphQL",
  //     ],
  //     description:
  //       "Creative collaboration platform that combines video conferencing and HD media streaming",
  //     logo: EvercastLogo,
  //     link: {
  //       label: "evercast.us",
  //       href: "https://www.evercast.us/",
  //     },
  //   },
  //   {
  //     title: "Mobile Vikings",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application for leading virtual mobile operator in Poland",
  //     logo: MobileVikingsLogo,
  //     link: {
  //       label: "mobilevikings.pl",
  //       href: "https://mobilevikings.pl/",
  //     },
  //   },
  //   {
  //     title: "Howdy",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Howdy is a place for you to join communities you care about",
  //     logo: Howdy,
  //     link: {
  //       label: "play.google.com",
  //       href: "https://howdy.co/",
  //     },
  //   },
  //   {
  //     title: "Tastycloud",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application for managing and displaying restaurant menus in kiosk mode",
  //     logo: TastyCloudLogo,
  //     link: {
  //       label: "tastycloud.fr",
  //       href: "https://www.tastycloud.fr/",
  //     },
  //   },
  //   {
  //     title: "Ambit",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application that helps with sharing your contact details",
  //     logo: AmbitLogo,
  //   },
  //   {
  //     title: "Bim",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Android application that helps with booking a table in a restaurants",
  //     logo: BimLogo,
  //   },
  //   {
  //     title: "Canal Digital GO",
  //     techStack: ["Lead Android Developer", "Android", "Kotlin"],
  //     description:
  //       "Video streaming mobile application for Canal Digital subscribers",
  //     logo: CDGOLogo,
  //   },
  // ],
} as const;
