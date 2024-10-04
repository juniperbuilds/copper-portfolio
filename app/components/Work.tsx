import { Card, CardContent } from "@/components/ui/card"
import { Info } from "lucide-react"
import * as Tooltip from "@radix-ui/react-tooltip"

type Project = {
  id: number;
  title: string;
  videoSrc: string;
}

const projects: Project[] = [
  { id: 1, title: "$JEET", videoSrc: "/videos/video1.mp4" },
  { id: 2, title: "$ARGOS", videoSrc: "/videos/video2.mp4" },
  { id: 3, title: "$CTO", videoSrc: "/videos/video3.mp4" },
  { id: 4, title: "$HEHEH", videoSrc: "/videos/video4.mp4" },
  { id: 5, title: "The Knowers", videoSrc: "/videos/video5.mp4" },
  { id: 6, title: "$BLEP", videoSrc: "/videos/video6.mp4" },
];

export default function Work() {
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
              <div className="aspect-video bg-muted relative">
                <video 
                  src={project.videoSrc}
                  controls
                  poster={`/videos/thumbnails/${project.id}.jpg`}
                  className="absolute inset-0 w-full h-full object-contain"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <h3 className="mt-2 font-semibold">{project.title}</h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}