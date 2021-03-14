<template>
  <div id="app" class="flex flex-col w-screen h-screen bg-gray-300 dark:bg-gray-900">
    <keep-alive>
      <component @send-text="onSendText" :screen-data="lastMessage" :is="currentScreen" />
    </keep-alive>
  </div>
</template>

<script lang="ts">
import WelcomeScreen from '@/components/WelcomeScreen.vue';
import ExitScreen from '@/components/ExitScreen.vue';
import TextScreen from '@/components/TextScreen.vue';
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: { WelcomeScreen, ExitScreen, TextScreen },
})
export default class App extends Vue {
  private alexaClient: any | null = null;
  private currentScreen = 'WelcomeScreen';
  public lastMessage: any;

  created(): void {
    const Alexa = (window as any).Alexa;
    console.log('Attempting to set up Alexa : ' + JSON.stringify(Alexa));

    Alexa.create({ version: '1.0' })
      .then(async (args: { alexa: any; message: any }) => {
        console.log(JSON.stringify('args: ' + JSON.stringify(args)));
        const { alexa, message } = args;
        this.alexaClient = alexa;

        console.log('Capabilities: ' + JSON.stringify(this.alexaClient.capabilities));
        console.log('Message: ' + JSON.stringify(message));
        this.alexaClient.skill.onMessage(this.onMessage);

        this.setupGame(message);
        // this.sendMessage({ foo: 'bar' });
      })
      .catch((error: any) => {
        console.log(JSON.stringify(error));

        this.alexaClient = null;
        const mockData = { foo: 'bar' };
        this.setupGame(mockData);
      });
  }

  public onSendText(text: string) {
    console.log('onSendText', text);
    this.sendMessage({ text });
  }

  private setupGame(message: any) {
    if (message) {
      console.log('onMessage: ' + JSON.stringify(message));
    }
  }

  private onMessage(message: any) {
    if (message) {
      console.log('onMessage: ' + JSON.stringify(message));

      if (message.screen) {
        this.currentScreen = message.screen;
        this.lastMessage = message;
      }
    }
  }

  private sendMessage(message: any) {
    if (this.alexaClient) {
      this.alexaClient.skill.sendMessage(message);
    }
  }
}
</script>

<style>
@import 'assets/css/theme.pcss';

#app {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
