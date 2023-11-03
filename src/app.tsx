import { Github, Wand2 } from 'lucide-react';

import { Button } from './components/ui/button';
import { Label } from './components/ui/label';
import { Separator } from './components/ui/separator';
import { Textarea } from './components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './components/ui/select';
import { Slider } from './components/ui/slider';
import { VideoInputForm } from './components/videoInputForm';

export function App() {
  return (
    <div className="flex flex-col min-h-screen">
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

      <main className="flex flex-1 gap-6 p-6">
        <div className="flex flex-col flex-1 gap-4">
          <div className="flex-1 gap-4 grid grid-rows-2">
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Enter the prompt for the AI..."
            />
            <Textarea
              className="resize-none p-4 leading-relaxed"
              placeholder="Result generated by the AI..."
              readOnly
            />
          </div>

          <p className="text-sm text-muted-foreground">
            Pro tip: you can use the{' '}
            <code className="text-primary">{'{transcription}'}</code> variable
            in your prompt to add the transcription of the video's content
            there.
          </p>
        </div>

        <aside className="w-80 space-y-6">
          <VideoInputForm />

          <Separator />

          <form className="space-y-6">
            <div className="space-y-2">
              <Label>Prompt</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a prompt..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="youtube-title">YouTube Title</SelectItem>
                  <SelectItem value="youtube-description">
                    YouTube Description
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Model</Label>
              <Select defaultValue="gpt3.5" disabled>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="gpt3.5">GPT 3.5-turbo 16k</SelectItem>
                </SelectContent>
              </Select>
              <span className="block text-xs text-muted-foreground italic">
                You will be able to customise this soon.
              </span>
            </div>

            <Separator />

            <div className="space-y-4">
              <Label>Temperature</Label>
              <Slider min={0} max={1} step={0.1} />
              <span className="block text-xs text-muted-foreground italic">
                Higher values will make the AI more creative and possibly less
                accurate.
              </span>
            </div>

            <Separator />

            <Button className="w-full" type="submit">
              Run
              <Wand2 className="w-4 h-4 ml-2" />
            </Button>
          </form>
        </aside>
      </main>
    </div>
  );
}