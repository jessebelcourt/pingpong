import OpenAI from 'openai';
import 'dotenv/config';

import { InitiateArgs } from './types/initiate-args.type';

export class Olivaw {
  public client: OpenAI;
  private static model = "gpt-4-turbo-preview";
  
  constructor(apiToken?: string) {
    this.client = new OpenAI({
      apiKey: !apiToken 
        ? process.env['PP_CGPT_API_KEY'] 
        : apiToken
    });
  }

  async initiate(messages: InitiateArgs) {
    const completion = await this
      .client
      .chat
      .completions
      .create({
        messages,
        model: Olivaw.model
      });

    console.log(completion.choices[0]);
  }
}