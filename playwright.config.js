import { defineConfig, devices } from '@playwright/test';
import path from 'path'; // Tambahkan import ini
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  testDir: './test',
  timeout: 60000,
  
  reporter: [
    ['list'],
    [path.join(__dirname, './excelReporter.js')] 
  ],

  use: {
    actionTimeout: 20000,
    navigationTimeout: 60000,
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
