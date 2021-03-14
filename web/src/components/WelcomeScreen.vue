<template>
  <section
    class="welcomescreen m-0 flex flex-col w-screen justify-center bg-gray-800 h-screen text-gray-100"
  >
    <div class="my-auto mx-auto text-center">
      <h1 class="text-6xl">Welcome</h1>
      <button
        class="py-6 px-10 text-5xl mt-20 bg-orange-500 text-white rounded-xl"
        @click="sendText('help')"
      >
        Help
      </button>
      <!-- <h3 class="text-3xl mt-10 text-teal-400">Are you ready to start?</h3> -->
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Emit, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'welcome-screen',
  components: {},
})
export default class WelcomeScreen extends Vue {
  @Prop()
  public screenData?: any;

  @Emit('send-text')
  sendText(text: string) {
    console.log('WelcomeScreen.sendText:', text);
  }
}
</script>

<style lang="scss" scoped></style>
