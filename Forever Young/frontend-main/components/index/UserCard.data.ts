export class User {
  type: String;
  heading: String;
  content: String;
  image: String;

  constructor(type: String, heading: String, content: String, image: String) {
    this.type = type;
    this.heading = heading;
    this.content = content;
    this.image = image;
  }
}

const studentsType = "Students";
const studentsHeading = "Skill over Score!";
const studentsContent = `Find the best possible opportunities and people available around you complimenting your skillset; Internships/Start\u{2011}ups/Competitions/Hackathons/research opportunities and more! To unlock the full potential of every student, it is crucial that we carefully nurture their unique abilities and lead them towards the right opportunities where they can flourish.`;
const studentsImage = "UserStudent";

const startupsType = "Startups";
const startupsHeading = "Effort over procrastination!";
const startupsContent =
  "With a single search, you can access a wealth of high\u{2011}quality talent with the specific skillsets you need to succeed. No longer will you have to sift through countless resumes or spend countless hours searching for the perfect candidate. Simply enter your search criteria and let our platform do the rest, connecting you with the finest talent available.";
const startupsImage = "UserStartup";

const researchersType = "Researchers";
const researchersHeading = "Find skilled thinkers and innovators!";
const researchersContent =
  "Uncover a pool of exceptional problem\u{2011}solvers, critical thinkers, and innovative minds with the necessary skills for your research. Our platform connects you with individuals who are not only highly qualified, but also eager to learn, grow, and take on new challenges. With just a few clicks, you can find the perfect team to drive your research forward and unlock new insights and breakthroughs.";
const researchersImage = "UserResearcher";

const fundingInstitutionsType = "Funding Institutions";
const fundingInstitutionsHeading = "The most promising talent in one place!";
const fundingInstitutionsContent =
  "For funding institutions and inventors, finding a promising startup to invest in is always a hassle. Worry no more, as our platform helps investors find the best and most promising startups, backed by highly talented and quality teams, with just a simple search. By working with the best startups, funding institutions can help cultivate innovation and economic growth and get the right returns.";
const fundingInstitutionsImage = "UserFunding";

export const student = new User(
  studentsType,
  studentsHeading,
  studentsContent,
  studentsImage
);
export const startup = new User(
  startupsType,
  startupsHeading,
  startupsContent,
  startupsImage
);
export const researcher = new User(
  researchersType,
  researchersHeading,
  researchersContent,
  researchersImage
);

export const fundingInstitution = new User(
  fundingInstitutionsType,
  fundingInstitutionsHeading,
  fundingInstitutionsContent,
  fundingInstitutionsImage
);
