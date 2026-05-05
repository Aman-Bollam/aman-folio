import Image from "next/image";
import { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex items-start gap-4 md:gap-6">
      {project.image ? (
        <Image
          src={project.image.src}
          alt={project.image.alt}
          width={64}
          height={64}
          className="w-12 h-12 md:w-16 md:h-16 object-contain rounded-lg"
        />
      ) : project.fallback ? (
        <div
          className={`w-12 h-12 md:w-16 md:h-16 ${project.fallback.bg} rounded-lg flex items-center justify-center`}
        >
          <span className={`text-white ${project.fallback.textClassName ?? ""}`}>
            {project.fallback.text}
          </span>
        </div>
      ) : null}
      <div>
        <h3 className="text-xl md:text-2xl font-light">{project.title}</h3>
        <p className="text-lg md:text-xl italic mb-2">{project.description}</p>
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-sm"
        >
          {project.linkLabel}
        </a>
      </div>
    </div>
  );
}
