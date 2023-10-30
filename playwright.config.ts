import { LaunchOptions } from '@playwright/test';

export const config:LaunchOptions = {
  
    timeout: 600000,
    headless: true,
    slowMo: 1000,
    env: {
        password: "admin123"
    }
  
};