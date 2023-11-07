import { LaunchOptions, defineConfig } from '@playwright/test';

export const config:LaunchOptions = {
  
    timeout: 600000,
    slowMo: 300,
    headless: false,
    env: {
        password: "admin123"
    }
  
};

export default defineConfig({
    use: {
      // Emulates the user locale.
      locale: 'en-GB',
  
      // Emulates the user timezone.
      timezoneId: 'Europe/Paris',
    },
  });