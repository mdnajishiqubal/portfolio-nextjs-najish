import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
id: "Techsocket Pvt Ltd",
title: "Techsocket",
    description:
"Techsocket makes running global teams simple.HR, Payroll, International Employment, contractor management and more.",
icon: "/skills/react.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
githubUrl: "https://github.com/TechSocket-India-private-limited/techsocket",
url: "https://techsocket.in/",
    tags: ["Flutter", "Dart", "GetX", "Hive"],
  },
  {
id: "Insure at Oasis",
title: "OIF Tech",
    description:
      "An e-commerce web application developed using React.js, Material UI, Redux, and Stripe.",
icon: "/skills/php.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,

url: "https://oiftech.com/",
    tags: ["React.js", "Redux", "Material UI", "Stripe"],
  },

];
export default projects;
