import axios, { AxiosInstance } from 'axios';
import { IAxiosClientArgs } from './interfaces/axios-client-args.interface';

export class AxiosClient {
  public client: AxiosInstance;

  constructor({ 
    baseURL, 
    apiToken 
  }: IAxiosClientArgs) {
    this.client = axios.create({
      baseURL,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiToken}`,
      },
    });
  }
}