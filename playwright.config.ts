import { LaunchOptions } from '@playwright/test';

export const config:LaunchOptions = {
  
    timeout: 600000,
    slowMo: 500,
    headless: true,

};