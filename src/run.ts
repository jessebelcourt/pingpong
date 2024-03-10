import OpenAI from 'openai';
import { Olivaw } from './olivaw';

const messages: OpenAI.Chat.Completions.ChatCompletionMessageParam[] = [
  {
      "role": "system",
      "content": "You are a helpful assistant.",
  },
  {
      "role": "user",
      "content": "Who won the world series in 2020?"
  },
  {
      "role": "assistant",
      "content": "The Los Angeles Dodgers won the World Series in 2020."
  },
  {
      "role": "user",
      "content": "Where was it played?"
  }
];

(async () => {
  const oli = new Olivaw();
  await oli.initiate(messages);
})();