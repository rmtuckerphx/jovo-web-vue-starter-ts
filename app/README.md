# Jovo Template: Hello World

This template contains a Jovo Sample Voice App in TypeScript, with a simple "Hello World!" greeting, asking for the user's name and returning a personalised message.

## Quick Start

To use the Jovo Templates, you'll need the Jovo CLI. You can install it globally with NPM.

```sh
$ npm install -g jovo-cli
```

After successfully installing the Jovo CLI, you can install the template using one of the following commands:

```sh
$ jovo new <directory> --language typescript

## Alternative
$ jovo new <directory> --template helloworld --language typescript
```

> Read more about `jovo new` [here](https://www.jovo.tech/marketplace/jovo-cli#jovo-new).

Change your working directory into your newly created project directory and run your voice app:

```sh
# Change working directory to your previously specified directory.
$ cd <directory>

# Install dependencies.
$ npm install

# Run voice app, optionally with a --watch flag to restart on code changes.
$ jovo run [-w]
```

> Read more about `jovo run` [here](https://www.jovo.tech/marketplace/jovo-cli#jovo-run).

If you now go to the [Jovo Debugger](https://www.jovo.tech/marketplace/jovo-plugin-debugger) by pressing `.` or clicking on the webhook url in the terminal, you can test your voice application right away.

![Debugger Example](./img/debugger.gif)

## Next Steps

Now that you got the template running on the Jovo Debugger, it is time to deploy your voice app! You can find a tutorial for building a complete Alexa skill [here](https://www.jovo.tech/tutorials/alexa-skill-tutorial-nodejs).

To see what else you can do with the Jovo Framework, take a look at the [Jovo Documentation](https://www.jovo.tech/docs/).

## About Jovo

Jovo is the most popular development framework for voice, including platforms like Alexa, Google Assistant, mobile apps, and Raspberry Pi.

-   [Jovo Website](https://jovo.tech/)
-   [Documentation](https://jovo.tech/docs/)
-   [Marketplace](https://www.jovo.tech/marketplace/)
-   [Twitter](https://twitter.com/jovotech/)
-   [Forum](https://community.jovo.tech/)



## Quick Commands

### Uses project.js and models\en-US.json to populate folders under platforms folder
```
jovo build
```

### Pushes model and skill changes to Alexa Developer Console
```
jovo deploy
```

### Compiles typescript files to dist folder
```
npm run tsc
```

### Run code through proxy webhook
```
jovo run --inspect 3003
```



