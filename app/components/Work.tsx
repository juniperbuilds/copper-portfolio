"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Info, Play } from "lucide-react"
import * as Tooltip from "@radix-ui/react-tooltip"
import { useState } from "react"

type Project = {
  id: number;
  title: string;
  fileId: string;
  thumbnailId: string;
}

const projects: Project[] = [
  { id: 1, title: "$JEET", fileId: "1xh51rIodqEyg_uPAOGL1Qx9iU__oMb8g", thumbnailId: "1khbMPJ2OiUuClj7n0Cv-USgsy4O3XLio" },
  { id: 2, title: "$ARGOS", fileId: "1nvSMCQuHEFHRn6dMc5e9mXjoRW7zU2CP", thumbnailId: "1v6U63i4MF-BOWw8gjSI61QgDijPKv2fu" },
  { id: 3, title: "$CTO", fileId: "1u25BR8SI3P6PgYvQQ58YXOcZhMm8VH3n", thumbnailId: "1qmC6t7Cei_VPFSh46ck5WjMj0yG67Ao5" },
  { id: 4, title: "$HEHEH", fileId: "17ldZlBrW14CSnVg4B7aiiVUXuZafwaEv", thumbnailId: "1-8U6fWJXcKcmvvnvdkqo2t2RQE-O8ViP" },
  { id: 5, title: "The Knowers", fileId: "1Cnu0SciFvtMg8yScxOwPdV7OsZrKjoWP", thumbnailId: "1DGog6i5VjgLeGRyIIT32MjN-TUCJVmCx" },
  { id: 6, title: "$BLEP", fileId: "1JQpNVGDLBqLy3mq_ph5pWcwKQsFeCvpB", thumbnailId: "1vUsjsrOL3iaAWKKq4KNd968R_3QHjDSq" },
];

export default function Work() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const playVideo = (fileId: string) => {
    setActiveVideo(fileId);
  };

  const getThumbnailUrl = (thumbnailId: string) => {
    return `https://drive.google.com/thumbnail?id=${thumbnailId}&sz=w1000`;
  };

  return (
    <section id="work" className="mb-16 scroll-mt-header">
      <div className="flex items-center justify-center mb-8">
        <h2 className="text-3xl font-bold text-center">My Work</h2>
        <Tooltip.Provider>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <button className="ml-2 text-muted-foreground hover:text-foreground inline-flex items-center">
                <Info size={16} />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content
                className="bg-popover text-popover-foreground px-4 py-2 rounded-md text-sm max-w-xs"
                side="right"
                align="center"
                sideOffset={5}
              >
                Artwork created for client projects. My involvement was limited to visual design. I do not endorse these projects or their outcomes.
                <Tooltip.Arrow className="fill-popover" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardContent className="p-4">
              <div className="aspect-video bg-muted relative group">
                {activeVideo === project.fileId ? (
                  <iframe 
                    id={`video-${project.fileId}`}
                    src={`https://drive.google.com/file/d/${project.fileId}/preview`}
                    width="100%"
                    height="100%"
                    allow="autoplay; fullscreen"
                    className="absolute inset-0"
                  ></iframe>
                ) : (
                  <>
                    <img 
                      src={getThumbnailUrl(project.thumbnailId)}
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <button 
                        onClick={() => playVideo(project.fileId)}
                        className="text-white hover:text-primary-foreground transition-colors"
                      >
                        <Play size={48} />
                      </button>
                    </div>
                  </>
                )}
              </div>
              <h3 className="mt-2 font-semibold text-center">{project.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}