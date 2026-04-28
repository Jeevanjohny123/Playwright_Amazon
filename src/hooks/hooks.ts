import {
  Before,
  After,
  setWorldConstructor
} from '@cucumber/cucumber';

import { chromium } from 'playwright';
import { CustomWorld } from '../types/world';
import { ENV } from '../config/env';
import { getYamlData } from '../utils/yamlReader';
import path from 'path';
import { setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(60000);

// setWorldConstructor(CustomWorld);

Before(async function () {
  // Launch browser
  this.browser = await chromium.launch({ headless: ENV.headless });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  console.log('Loading YAML...');
  // Load YAML once
  this.testData = getYamlData(
    path.resolve(__dirname, '../test-data/users.yaml')
  );
  console.log('Loaded YAML:', this.testData);
});

After(async function () {
  await this.browser.close();
});