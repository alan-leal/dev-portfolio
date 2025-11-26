import { ExternalLink } from "lucide-react";
import { Github } from "lucide-react";
import { ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "MediTalk",
        description: "A real-time AI powered medical interpreter web application that bridges communication gaps between patients and healthcare providers.",
        image: "/projects/meditalk_poster.png",
        tags: ["React", "Flask", "Python", "Google Colab", "Google STT-TTS"]   
    },
    {
        id: 2,
        title: "arcStar",
        description: "A feature-rich music Discord bot with 5+ core playback commands for real-time audio streaming.",
        image: "projects/arcStar_project.png",
        tags: ["Python", "discord.py", "asyncio", "FFmpeg", "Render", "UptimeRobot"],
        githubURL: "https://github.com/alan-leal/arcStar"
    },
    {
        id: 3,
        title: "Personal Portfolio Website",
        description: "A personal portfolio website built with React and Tailwind CSS to highlight my projects and skills in a fun and engaging way.",
        image: "/projects/portfolio_website.png",
        tags: ["React", "Tailwind CSS", "JavaScript", "Vercel"],
        githubURL: "https://github.com/alan-leal/dev-portfolio"
    }
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                {" "}
                Featured <span className="text-primary"> Projects </span>
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of the projects I've worked on recently. Feel free to explore!     
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                    >
                      <div className="h-48 overflow-hidden">
                        <img 
                            src={project.image} 
                            alt={project.title} 
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      </div>

                      <div className="p-6">
                        <div className="flex flex-wrap gap-2 mb-4">
                            {project.tags.map((tag) => (
                                <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">{tag}</span>
                            ))}
                        </div>
                      

                      <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>
                      <div className="flex space-x-3">
                        {/* Uncomment once demos are available */}
                        {/* <a>
                            <ExternalLink />
                        </a> */}
                        <a 
                          href={project.githubURL}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                          >
                            <Github size={20}/>
                        </a>
                      </div>
                     </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/alan-leal" target="_blank">
                    My GitHub! <ArrowRight size={16}/>
                </a>
            </div>
        </div>
    </section>;
}