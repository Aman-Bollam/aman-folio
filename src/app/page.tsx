import { Metadata } from "next";
import Image from "next/image";
import ProjectCard from "@/components/ProjectCard";
import SplineHero from "@/components/SplineHero";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Aman Bollam - Portfolio",
  description: "Software engineer and computer science graduate from UMD",
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[60vh] md:min-h-screen flex flex-col md:flex-row pt-16 md:pt-0">
        {/* Left side: Spline - Hidden on mobile */}
        <div className="hidden md:block w-full md:w-1/2 h-[50vh] md:h-auto relative overflow-hidden" style={{ clipPath: "inset(0 0 60px 0)" }}>
          <div className="absolute inset-0">
            <SplineHero scene="https://prod.spline.design/jK4TUn1TM29VPjwI/scene.splinecode" />
          </div>
        </div>
        
        {/* Right side: Content - Full width on mobile */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-light mb-4">Aman Bollam</h1>
          <p className="text-xl md:text-2xl text-gray-800">
            building ideas into products
          </p>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="pb-16 pt-20 bg-[#E6E6E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Experience</h2>
          <div className="border-t border-black my-4"></div>
          <div className="space-y-8">
            {/* Microsoft Emerging Leaders Experience - now first, styled like Pinterest */}
            <div className="flex items-start gap-4 md:gap-6">
              <Image 
                src="/microsoft-logo.png" 
                alt="Microsoft Logo" 
                width={64}
                height={64}
                className="w-12 h-12 md:w-16 md:h-16 object-contain"
              />
              <div>
                <h3 className="text-xl md:text-2xl font-light">Microsoft</h3>
                <p className="text-lg md:text-xl italic">Emerging Leaders for College Students Program</p>
              </div>
            </div>
            {/* Pinterest Experience - now second */}
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
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-[calc(100vh-5.5rem)] pb-20 pt-16 bg-[#E6E6E6]">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-light mb-4">Contact</h2>
          <div className="border-t border-black my-4"></div>

          <div className="max-w-4xl mx-auto mt-11 flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/3 flex items-center">
              <div className="flex justify-center transform md:-translate-x-[35%]">
                <Image
                  src="/aman-profile.jpg"
                  alt="Aman Bollam"
                  width={280}
                  height={280}
                  className="w-full max-w-[240px] md:max-w-[280px] rounded-lg shadow-lg"
                />
              </div>
            </div>

            <div className="w-full md:w-2/3">
              <p className="text-lg md:text-xl">
                I created this portfolio to share more than what a resume ever could. My passion, my projects, and my personality all live here. If something catches your eye or you just want to talk tech, feel free to reach out through any of the channels below.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}