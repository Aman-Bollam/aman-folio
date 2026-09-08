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
    title: "ClinicVoice AI",
    description:
      "AI receptionist that schedules patient appointments over real phone calls.",
    href: "https://github.com/Aman-Bollam/clinicvoice-ai",
    linkLabel: "View on GitHub →",
    image: { src: "/clinicvoiceai-removebg-preview.png", alt: "ClinicVoice AI Logo" },
  },
  {
    title: "Landline",
    description:
      "Turns tenant maintenance calls into AI-routed tickets and landlord updates.",
    href: "https://www.youtube.com/watch?v=hVYeVVmle1w",
    linkLabel: "View Demo →",
    image: { src: "/landlinelogo.png", alt: "Landline Logo" },
  },
  {
    title: "Fast Fourier Transform Lab",
    description:
      "Interactive FFT learning platform with practice problems and online judge",
    href: "https://aman-bollam.github.io/fast-fourier-transform-presentation",
    linkLabel: "View Demo →",
    image: { src: "/fft.png", alt: "FTT Logo" },
  },
];

// Older projects kept for reference but no longer shown in the portfolio.
export const archivedProjects: Project[] = [
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
      "AI housing assistant that detects air quality risks for tenants",
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
