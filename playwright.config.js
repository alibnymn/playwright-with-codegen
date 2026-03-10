  import { defineConfig } from '@playwright/test';
  import ExcelReporter from './excelReporter.js';

  export default defineConfig({
    testDir: './test', 
    timeout: 30000,
    use: {
      browserName: 'chromium',
      headless: !!process.env.CI,
    },
    reporter: [
      ['list'], 
      ['./excelReporter.js']
    ],

  });
