<template>
  <section
    class="exitscreen m-0 flex flex-col w-screen justify-center bg-gray-800 h-screen text-gray-100"
  >
    <div class="my-auto mx-auto text-center">
      <h1 class="text-6xl">Goodbye!</h1>
    </div>
  </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component({
  name: 'exit-screen',
  components: {},
})
export default class ExitScreen extends Vue {
  @Prop()
  public screenData?: any;
}
</script>

<style lang="scss" scoped></style>
