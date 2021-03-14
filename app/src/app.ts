import { App, Jovo } from 'jovo-framework';
import { Alexa, AlexaRequest } from 'jovo-platform-alexa';
import { JovoDebugger } from 'jovo-plugin-debugger';
import { FileDb } from 'jovo-db-filedb';
// import { GoogleAssistant } from 'jovo-platform-googleassistant';

// ------------------------------------------------------------------
// APP INITIALIZATION
// ------------------------------------------------------------------

const app = new App();

app.use(
  new Alexa(),
  // new GoogleAssistant(),
  new JovoDebugger(),
  new FileDb(),
);

// ------------------------------------------------------------------
// APP LOGIC
// ------------------------------------------------------------------

app.setHandler({
  LAUNCH() {
    const uri = `https://your-web-bucket-public.s3.amazonaws.com/index.html?t=${new Date().getTime()}`;
    startWeb(this, uri);
    return this.toIntent('HelloWorldIntent');
  },

  HelloWorldIntent() {
    // const data = {
    //   screen: "TextScreen",
    //   data: {
    //     text: "What's your name?"
    //   }
    // };
    // updateWeb(this, data);

    this.ask("Hello World! What's your name?", 'Please tell me your name.');
  },

  MyNameIsIntent() {
    const data = {
      screen: "TextScreen",
      data: {
        text: 'Hello, ' + this.$inputs.name.value 
      }
    };
    updateWeb(this, data);    

    this.tell('Hey ' + this.$inputs.name.value + ', nice to meet you!');
  },

  HelpIntent() {
    const data = {
      screen: "TextScreen",
      data: {
        text: "Help me!"
      }
    };
    updateWeb(this, data);

    this.ask("I wish that I could be more helpful. What next?", 'What next?');
  },

  PrivateMissingMessage() {
    const data = {
      screen: "TextScreen",
      data: {
        text: "Yikes!"
      }
    };
    updateWeb(this, data);

    this.ask("Unable to process message sent from the web site. What next?", 'What next?');
  },

  END() {
    const data = {
      screen: "ExitScreen"
    };

    updateWeb(this, data);
  },

  // @ts-ignore
  ON_REQUEST() {
    if (this.isAlexaSkill()) {
      const request = (this.alexaSkill().$request as AlexaRequest).request;
      if (request?.type === "Alexa.Presentation.HTML.Message") {
        const message = (request as any).message;
        if (message) {
          switch (message.text) {
            case "help":
              return this.toIntent("HelpIntent");

            default:
              return this.toIntent("PrivateMissingMessage");
          }
        }
      }
    }
  },

});

export { app };

function startWeb(jovo: Jovo, uri: string, data?: any) {
  if (jovo.isAlexaSkill()) {
    const request: AlexaRequest = (jovo.$alexaSkill!.$request as AlexaRequest);
    const htmlInterface = request.getSupportedInterfaces()["Alexa.Presentation.HTML"];

    if (htmlInterface !== null && htmlInterface !== undefined) {
      jovo.alexaSkill().addDirective(
        {
          type: "Alexa.Presentation.HTML.Start",
          data: data || {},
          request: {
            uri,
            method: "GET"
          },
          configuration: {
            "timeoutInSeconds": 120
          }
        }
      );
    }
  }
}

function updateWeb(jovo: Jovo, data: any) {
  if (jovo.isAlexaSkill()) {
    const request: AlexaRequest = (jovo.$alexaSkill!.$request as AlexaRequest);
    const htmlInterface = request.getSupportedInterfaces()["Alexa.Presentation.HTML"];

    if (htmlInterface !== null && htmlInterface !== undefined) {
      jovo.alexaSkill().addDirective(
        {
          type: "Alexa.Presentation.HTML.HandleMessage",
          message: data || {}
        }
      );
    }
  }
}