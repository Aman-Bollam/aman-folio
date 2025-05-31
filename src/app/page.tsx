import { Metadata } from "next";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Aman Bollam - Portfolio",
  description: "Developer and Computer Science Student at UMD",
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[60vh] md:min-h-screen flex flex-col md:flex-row pt-16 md:pt-0">
        {/* Left side: Spline - Hidden on mobile */}
        <div className="hidden md:block w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden" style={{ clipPath: "inset(0 0 60px 0)" }}>
          <div className="absolute inset-0">
            <Spline
              scene="https://prod.spline.design/jK4TUn1TM29VPjwI/scene.splinecode"
              className="w-full h-full"
            />
          </div>
        </div>
        
        {/* Right side: Content - Full width on mobile */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Aman Bollam</h1>
          <p className="text-xl md:text-2xl text-gray-800">
            developer, computer science<br />
            student @ UMD
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="pb-16 pt-20 bg-[#E6E6E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Experience</h2>
          <div className="border-t border-black my-4"></div>
          <div className="space-y-8">
            <div className="flex items-start gap-4 md:gap-6">
              <Image 
                src="/pinterest-logo.png" 
                alt="Pinterest Logo" 
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-light">Pinterest</h3>
                <p className="text-lg md:text-xl italic">Engage Participant</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="pb-20 pt-16 bg-[#E6E6E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Projects</h2>
          <div className="border-t border-black my-4"></div>
          <div className="space-y-8">
            <div className="flex items-start gap-4 md:gap-6">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-xl md:text-2xl font-light">ML</span>
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-light">LSTM Stock Predictor</h3>
                <p className="text-lg md:text-xl italic mb-2">Stock price prediction using neural networks</p>
                <a
                  href="https://github.com/Aman-Bollam/LSTM-model-Stock-Predictor"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 md:gap-6">
              <Image 
                src="/space-invaders.png"
                alt="Space Invaders" 
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-light">Space Invaders</h3>
                <p className="text-lg md:text-xl italic mb-2">A customizable Java Swing game inspired by the 1978 arcade classic</p>
                <a
                  href="https://github.com/Aman-Bollam/Space-Invaders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
            <div className="flex items-start gap-4 md:gap-6">
              <Image 
                src="/flappy-bird.png"
                alt="Flappy Bird" 
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-light">Flappy Bird</h3>
                <p className="text-lg md:text-xl italic mb-2">A Java Swing-based recreation of the classic game</p>
                <a
                  href="https://github.com/Aman-Bollam/FlappyBird"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 text-sm"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}