export type Project = {
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  image?: { src: string; alt: string };
  fallback?: { bg: string; text: string; textClassName?: string };
};

export const projects: Project[] = [
  {
    title: "IMC Prosperity 4",
    description:
      "Algorithmic trading research repo for IMC Prosperity finalist strategy development",
    href: "https://github.com/Aman-Bollam/Prosperity4",
    linkLabel: "View on GitHub →",
    image: { src: "/prosperity.png", alt: "IMCProsperity Logo" },
  },
  {
    title: "AirEquity",
    description:
      "AI housing health assistant for air quality risk detection and tenant report generation",
    href: "https://github.com/Aman-Bollam/airequity",
    linkLabel: "View on GitHub →",
    image: { src: "/airequityy.png", alt: "AirEquity Logo" },
  },
  {
    title: "TerpSense",
    description:
      "Real-time AI financial intervention app that analyzes purchases before checkout",
    href: "https://github.com/Aman-Bollam/TerpSense",
    linkLabel: "View on GitHub →",
    image: { src: "/terpsense.png", alt: "TerpSense Logo" },
  },
  {
    title: "OOTDLY",
    description: "A fashion app for creating and sharing daily outfits",
    href: "https://youtu.be/Z71EN_UgoBo?si=88VfDEC_YRN6FZyp&t=237",
    linkLabel: "View Demo on YouTube →",
    fallback: { bg: "bg-pink-400", text: "OOTD", textClassName: "text-xs md:text-sm font-bold" },
  },
  {
    title: "LSTM Stock Predictor",
    description: "Stock price prediction using neural networks",
    href: "https://github.com/Aman-Bollam/LSTM-model-Stock-Predictor",
    linkLabel: "View on GitHub →",
    fallback: { bg: "bg-blue-600", text: "ML", textClassName: "text-xl md:text-2xl font-light" },
  },
  {
    title: "Space Invaders",
    description:
      "A customizable Java Swing game inspired by the 1978 arcade classic",
    href: "https://github.com/Aman-Bollam/Space-Invaders",
    linkLabel: "View on GitHub →",
    image: { src: "/space-invaders.png", alt: "Space Invaders" },
  },
  {
    title: "Flappy Bird",
    description: "A Java Swing-based recreation of the classic game",
    href: "https://github.com/Aman-Bollam/FlappyBird",
    linkLabel: "View on GitHub →",
    image: { src: "/flappy-bird.png", alt: "Flappy Bird" },
  },
];
