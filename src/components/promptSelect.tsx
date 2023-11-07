import React from 'react';

import { api } from '@/lib/axios';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

type Prompt = {
  id: string;
  title: string;
  template: string;
};

type PromptSelectProps = {
  onPromptSelected: (template: string) => void;
};

export function PromptSelect(props: PromptSelectProps) {
  const [prompts, setPrompts] = React.useState<Prompt[] | null>(null);

  React.useEffect(() => {
    async function fetchPrompts() {
      const response = await api.get('/prompts');

      setPrompts(response.data);
    }

    fetchPrompts();
  }, []);

  function handlePromptSelected(promptId: string) {
    const selectedPrompt = prompts?.find((prompt) => prompt.id === promptId);

    if (!selectedPrompt) {
      return;
    }

    props.onPromptSelected(selectedPrompt.template);
  }

  return (
    <Select onValueChange={handlePromptSelected}>
      <SelectTrigger>
        <SelectValue placeholder="Select a prompt..." />
      </SelectTrigger>
      <SelectContent>
        {prompts?.map((prompt) => (
          <SelectItem key={prompt.id} value={prompt.id}>
            {prompt.title}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
