import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
id: "Techsocket Pvt Ltd",
title: "Techsocket",
    description:
"Techsocket makes running global teams simple.HR, Payroll, International Employment, contractor management and more.",
icon: "/skills/nestjs.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
githubUrl: "https://github.com/TechSocket-India-private-limited/techsocket",
url: "https://techsocket.in/",
tags: ["nextjs", "mongodb", "React.js", "Material UI"],
  },
  {
id: "Insure at Oasis",
title: "OIF Tech",
    description:
"A variety of insurance-specific solutions for quoting and proposals, comparison, client and policy management, commissions management, compliance management.",
icon: "/skills/flutter.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,

url: "https://oiftech.com/",
tags: ["PHP", "Mysql", ],
  },

];
export default projects;
