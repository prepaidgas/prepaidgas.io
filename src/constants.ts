import { TeamMember } from "./app/page";
import { AccordionItem } from "./components/Accordion";
import { RoadmapItem } from "./components/Roadmap/Roadmap";

export const accordionData: AccordionItem[] = [
  {
    title: "Creating a Gas Order",
    body: "The user creates an order specifying the amount of Gas they want to purchase. They set a timeframe for when they need it, propose a price in their chosen token, and specify the security deposit required to ensure the transaction will be executed.",
    pathToImage: "/images/Image_placeholder.png",
  },
  {
    title: "Executor Accepts Order",
    body: "An executor reviews and selects orders they are willing to fulfill. They commit to sending the transaction on behalf of the user when requested. To guarantee this commitment, the executor locks in the security deposit specified by the user",
    pathToImage: "/images/Image_placeholder.png",
  },
  {
    title: "Transaction Request Processing",
    body: `Within the order's timeframe (e.g., 1 month), the user signs a transaction request, setting a deadline. This signature is sent to the executor (and other relevant parties if needed). The executor then includes the signature in the blockchain.`,
    pathToImage: "/images/Image_placeholder.png",
  },
  {
    title: "Transaction Execution or Executor Liquidation",
    body: `The executor carries out the transaction. If they fail to do so, any party can execute the transaction and claim part of the executor's security deposit. Alternatively, the user can choose to not proceed with the transaction and receive the part of executor's security deposit.`,
    pathToImage: "/images/Image_placeholder.png",
  },
];

export const SOCIAL_ICONS_PATHS = {
  twitter: "/images/x-twitter.svg",
  github: "/images/github.svg",
  telegram: "/images/telegram.svg",
  medium: "/images/medium.svg.png",
  linkedin: "/images/linkedin.svg",
};

export const TeamMemberData: TeamMember[] = [
  {
    name: "Max",
    about: "Oversees development and strategic goals",
    profilePicName: "/images/profile/Maksym.jpeg",
    socials: [
      {
        name: "twitter",
        iconPath: SOCIAL_ICONS_PATHS["twitter"],
        url: "https://twitter.com/web3skeptic",
      },
      {
        name: "github",
        iconPath: SOCIAL_ICONS_PATHS["github"],
        url: "https://github.com/web3skeptic",
      },
    ],
  },
  {
    name: "Stepan",
    about: "Designing and securing the protocol core",
    //profilePicName: "/images/profile/sekmak.jpeg",
    profilePicName: "/images/profile/Stepan_new.jpg",
    socials: [
      {
        name: "github",
        iconPath: SOCIAL_ICONS_PATHS["github"],
        url: "https://github.com/SteMak",
      },
      {
        name: "medium",
        iconPath: SOCIAL_ICONS_PATHS["medium"],
        url: "https://medium.com/@SteMak",
      },
      {
        name: "linkedin",
        iconPath: SOCIAL_ICONS_PATHS["linkedin"],
        url: "https://linkedin.com/in/SteMak",
      },
    ],
  },

  {
    name: "Tim",
    about: "Talking to the community and growing prepaidGas",
    profilePicName: "/images/profile/Tim.jpg",
    socials: [
      {
        name: "twitter",
        iconPath: SOCIAL_ICONS_PATHS["twitter"],
        url: "https://x.com/timmyjellyjelly",
      },
      {
        name: "linkedin",
        iconPath: SOCIAL_ICONS_PATHS["linkedin"],
        url: "https://www.linkedin.com/in/timretkoceri/",
      },
    ],
  },
  {
    name: "Nikita",
    about: "Ensuring a seamless and user-friendly interface",
    profilePicName: "/images/profile/Nikita_new.jpg",
    socials: [
      {
        name: "github",
        iconPath: SOCIAL_ICONS_PATHS["github"],
        url: "https://github.com/nikita-romashchenko",
      },
    ],
  },
];

export const roadmapData: RoadmapItem[] = [
  {
    title: "Mar 24",
    date: "Mar 24",
    body: "Smart contract implementation with meta-transaction support (ERC-2771)",
  },
  {
    title: "April 24",
    date: "Mar 24",
    body: "Develop basic bot to accept Gas orders",
  },
  {
    title: "Q2 24",
    date: "Mar 24",
    body: "Basic interface for the Gas purchasers",
  },
  {
    title: "Jul 24",
    date: "Mar 24",
    body: "Deploy smart contracts to the testnet",
  },
  {
    title: "Aug 24",
    date: "Mar 24",
    body: "Audit the smart contracts and verify their reliability",
  },
  {
    title: "Q4 24",
    date: "Mar 24",
    body: "Add Account Abstraction (EIP-4337) support",
  },
  {
    title: "Q1 25",
    date: "Mar 24",
    body: "Multichain Solution that enables trading Gas across different L2s",
  },
  {
    title: "Q2 25",
    date: "Mar 24",
    body: "Plaguing for with Ethers.js and web3.js libraries",
  },
];
