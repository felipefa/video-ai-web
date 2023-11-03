import { FileVideo, Upload } from 'lucide-react';

import { Separator } from './ui/separator';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export function VideoInputForm() {
  return (
    <form className="space-y-6">
      <label
        htmlFor="video"
        className="border flex rounded-md aspect-video cursor-pointer border-da\ text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
      >
        <FileVideo className="h-4 w-4" />
        Select a video
      </label>

      <input type="file" id="video" accept="video/mp4" className="sr-only" />

      <Separator />

      <div className="space-y-2">
        <Label htmlFor="transcription_prompt">Transcription Prompt</Label>
        <Textarea
          id="transcription_prompt"
          className="h-20 leading-relaxed resize-none"
          placeholder="Enter keywords mentioned in the video separated by comma (,)"
        />
      </div>

      <Button className="w-full" type="submit">
        Upload video
        <Upload className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}
