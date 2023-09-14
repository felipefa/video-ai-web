import { Github } from "lucide-react";

import { Button } from "./components/ui/button";
import { Separator } from "./components/ui/separator";

export function App() {
  return (
    <div>
      <div className="px-6 py-3 flex items-center justify-between border-b">
        <h1 className="font-bold text-xl">video.ai</h1>

        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">
            Developed by
            <a
              className="font-bold hover:underline ml-1"
              href="https://github.com/felipefa"
            >
              @felipefa
            </a>
          </span>

          <Separator className="h-6" orientation="vertical" />

          <a href="https://github.com/felipefa/video-ai-web">
            <Button variant="outline">
              <Github className="h-4 w-4 mr-2" />
              GitHub
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
