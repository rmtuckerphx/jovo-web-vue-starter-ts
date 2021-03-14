# Jovo Web Vue Starter (TypeScript)

This project is a starter kit to using Jovo for a cross-platform voice app on Amazon Alexa and Google Assistant. For Smart Displays, this project can be used for games that are using Alexa Web API for Games and the intention is to also support Interaction Canvas for Google Conversationl Actions (Games, Storytelling, Education).

The voice app project is in the `/app` folder and the website is in the `/web` folder.

Each folder has its own package.json which shows commands to use as well as a README.md file.

## app
1. `cd app` and `npm install`
2. Do a `jovo build`. 
    - Verify that `app\platforms\alexaSkill\skill.json` has a value for `apis.custom.endpoint.uri`
    - Verify that ther is a Skill ID in the `app\platforms\alexaSkill\.ask\config` file.
3. Do a `jovo deploy`.
4. In `app\src\app.ts` in the LAUNCH() handler, set the URL to the S3 bucket of the web deployed web app.
5. Run `jovo run --inspect 3003`
6. Click on the webhook link in the terminal to open the Jovo Debugger.

Note: You must run the Alexa Skill from a device to see the HTML pages.


## web
1. `cd web` and `npm install`
2. To deploy the web app to an S3 Bucket, this project uses `vue-cli-plugin-s3-deploy`. Follow the instructions at https://github.com/multiplegeorges/vue-cli-plugin-s3-deploy and run `vue invoke s3-deploy` to add values to `web\vue.config.js` or you can manually change the default values. See `awsProfile` and `bucket`.
3. `npm run serve` to run local website and test screen changes
4. `npm run build` to compile files for production
5. `npm run deploy` to deploy files to S3 bucket

Created 2021 by Mark Tucker.