import { defineConfig } from "cypress";
import * as path from 'path';
import fs from 'fs'



export default defineConfig({
  e2e: {
    env: {
      viewportWidth: 1920,
      viewportHeight: 1080,
    },

    setupNodeEvents(on, config) {
      on("after:screenshot", (details: Cypress.ScreenshotDetails) => {
        const parsedPath = path.parse(details.path);
        let newName = `${details.takenAt} -- ${parsedPath.base}`
        let newPath = path.join(parsedPath.dir, newName)

        return new Promise((resolve, reject) => {
          fs.rename(details.path , newPath, (err) => {
            if (err) {
              return reject(err);
            }
          })
          console.log(newPath)
          resolve({ path: newPath })
        })
      });

      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json',
  },
  video: true,
  videosFolder: "cypress/reports/html/videos",
  screenshotsFolder: "cypress/reports/html/screenshots"

});
