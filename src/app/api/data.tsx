import { title } from "process";

export const footerlabels: { label: string; herf: string }[] = [
  { label: "Terms", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Disclosures", herf: "#" },
  { label: "Latest News", herf: "#" },
];

export const pricedeta: {
  title: string;
  short: string;
  icon: string;
  background: string;
  price: string;
  mark: string;
  width: number;
  height: number;
  padding: string;
}[] = [
  {
    title: "NIFTY 50",
    short: "NSE",
    icon: "/images/logo/NSE_logo.png",
    background: "bg-light_grey",
    price: "₹25,300",
    mark: "₹25,300 (+6.2%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "BANK NIFTY",
    short: "NSE",
    icon: "/images/logo/NSE_logo.png",
    background: "bg-light_grey",
    price: "₹57,350",
    mark: "₹57,350 (-46.2%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "SENSEX",
    short: "NSE",
    icon: "/images/logo/NSE_logo.png",
    background: "bg-light_grey",
    price: "₹78919",
    mark: "₹78919 (-46.2%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "FIN NIFTY",
    short: "NSE",
    icon: "/images/logo/NSE_logo.png",
    background: "bg-light_grey",
    price: "₹26,650",
    mark: "₹26,650 (-46.2%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "MIDCAP",
    short: "NSE",
    icon: "/images/logo/NSE_logo.png",
    background: "bg-light_grey",
    price: "₹13,166",
    mark: "₹13,166 (-46.2%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
  {
    title: "CRUDEOIL",
    short: "MCX",
    icon: "/images/logo/MCX_logo.png",
    background: "bg-light_grey",
    price: "₹8169",
    mark: "₹8169 (-46.2%)",
    width: 46,
    height: 46,
    padding: "px-0 py-0",
  },
];

export const portfolioData: { image: string; title: string }[] = [
  {
    image: "/images/portfolio/icon-wallet.svg",
    title: "Manage your Investments",
  },
  {
    image: "/images/portfolio/icon-vault.svg",
    title: "Money protection",
  },
  {
    image: "/images/portfolio/icon-mobileapp.svg",
    title: "Mobile friendly",
  },
];

export const upgradeData: { title: string }[] = [
  { title: "100% Secure" },
  { title: "A Fraction of the Cost" },
  { title: "More Durable" },
  { title: "Easier to Use" },
];

export const perksData: {
  icon: string;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: "/images/perks/icon-support.svg",
    title: "24/7 Support",
    text: "Need help? Get your requests solved quickly via support team.",
    space: "lg:mt-8",
  },
  {
    icon: "/images/perks/icon-community.svg",
    title: "Community",
    text: "Join the conversations on our broad community",
    space: "lg:mt-14",
  },
  {
    icon: "/images/perks/icon-academy.svg",
    title: "Academy",
    text: "Learn Trading and Coding",
    space: "lg:mt-4",
  },
];

export const timelineData: {
  icon: string;
  title: string;
  text: string;
  position: string;
}[] = [
  {
    icon: "/images/timeline/icon-planning.svg",
    title: "Planning",
    text: "Map the project's scope and architecture",
    position: "md:top-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-refinement.svg",
    title: "Refinement",
    text: "Refine and improve your solution",
    position: "md:top-0 md:right-0",
  },
  {
    icon: "/images/timeline/icon-prototype.svg",
    title: "Prototype",
    text: "Build a working prototype to test your product",
    position: "md:bottom-0 md:left-0",
  },
  {
    icon: "/images/timeline/icon-support.svg",
    title: "Support",
    text: "Deploy the product and ensure full support by us",
    position: "md:bottom-0 md:right-0",
  },
];

export const CryptoData: { name: string; price: number }[] = [
  { name: "Bitcoin BTC/USD", price: 67646.84 },
  { name: "Ethereum ETH/USD", price: 2515.93 },
  { name: "Bitcoin Cash BTC/USD", price: 366.96 },
  { name: "Litecoin LTC/USD", price: 61504.54 },
];
 