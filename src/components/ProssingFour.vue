<template>
  <div class="App">
    <Head />
    <div v-if="count > 0" class="text-center l-loading">
      <svg class="circlespinner" viewBox="0 0 50 50">
        <circle class="path" cx="25" cy="25" r="20" fill="none" stroke-width="5"></circle>
      </svg>
      <h1 style="font-size: 14px; color: grey; font-family: Heebo, sans-serif;">
        Please wait... Verifying your login details<br />
        Redirecting in <span id="countdown">{{ count }}</span> seconds.
      </h1>
    </div>
    <Footer />
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
import Head from './HeadPage.vue';
import Footer from './FooterPage.vue';

export default {
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      count: 10,
    };
  },
  mounted() {
    const router = useRouter();
    const countdownInterval = setInterval(() => {
      this.count -= 1;
      if (this.count <= 0) {
        clearInterval(countdownInterval);
        router.push('/blogfive');
      }
    }, 1000);
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
