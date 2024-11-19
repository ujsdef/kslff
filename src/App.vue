<template>
<div>
<!-- <HeadPage/>
  <AboutPage/>
  <ProssingOne/>
  <BlogOne/>
  <FooterPage/> -->

  <router-view></router-view>

</div>
</template>

<script>

// import AboutPage from './components/AboutPage.vue'
// import ProssingOne from './components/ProssingOne.vue'
// import BlogOne from './components/BlogOne.vue'
// import HeadPage from './components/HeadPage.vue'
// import FooterPage from './components/FooterPage.vue'
// import FooterPageVue from './components/FooterPage.vue'

// import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    // ProssingOne,
    // AboutPage,
    // BlogOne,
    // HeadPage,
    // FooterPage,

    
    
  }
}
</script>

<style>
.App {
    background-color: #f9f9fb;
    font-family: Lato-Regular, sans-serif;
    margin: 0;
    padding: 0;
    width: 100vw;
  }
  
  a {
    color: #a6004d;
    text-decoration: none;
  }
  
  .card-login {
    text-align: center;
    border-radius: 20px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5),
      0 2px 4px 0 rgba(0, 0, 0, 0.26);
  }
  
  .card-login > button {
    background-color: transparent;
    margin: 0 !important;
    font-size: 0.75rem !important;
    border-radius: 20px;
    padding: 6px 0;
    border: none;
    color: #9b9b9b;
    font-family: "Work Sans", sans-serif;
    min-width: 0;
  }
  
  .card-login #a {
    width: 50%;
  }
  
  .card-login #b {
    width: 30%;
  }
  
  .card-login #c {
    width: 20%;
  }
  
  .card-login > .active {
    background-color: #a6004d;
    color: #fff;
  }
  
  h1 {
    font-size: 16px;
    font-family: "Work Sans", sans-serif;
    margin-bottom: 20px;
    display: block;
    font-weight: 900;
    color: black;
  }
  
  .header {
    background-color: #a6004d;
    text-align: left;
    padding: 10px;
    position: relative;
  }
  
  .header-text {
    font-size: 10px;
    font-family: "Work Sans", sans-serif;
  }
  
  .card {
    background-color: #f9f9fb;
    margin: 10px;
    display: block;
  }
  
  .mg {
    color: #506d85;
    letter-spacing: normal;
    line-height: 1.5;
    font-size: 10px;
    margin-top: 16px;
    margin-bottom: 20px;
  }
  
  .mainContent {
    padding: 10px;
    font-family: "Work Sans", sans-serif;
    font-weight: 900;
  }
  
  .para {
    height: 39px;
    padding-top: 16px;
  }
  
  .pmLogin {
    margin-top: 1.75rem;
  }
  
  .para span {
    font-size: 16px;
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    line-height: 1.2;
    color: #222;
  }
  
  .para span,
  .text-center {
    text-align: center;
  }
  
  .LoginForm {
    margin: 15px;
    padding: 15px;
  }
  
  .form-group {
    margin-bottom: 25px;
  }
  
  .form-group label {
    display: block;
  }
  
  .form-group label,
  .label {
    color: #9b9b9b;
    flex-basis: auto;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 25px;
  }
  
  .radio {
    accent-color: #97144d;
  }
  
  .form-group .new-control {
    width: 95%;
    padding: 5px;
    font-size: 16px;
    font-family: "Work Sans", sans-serif;
    font-weight: 400;
    color: black;
    background-color: #f9f9fb;
    caret-color: #a6004d;
    border-style: none;
    border-bottom: 1px solid #adbdcc;
    line-height: 20px;
  }
  
  .form-group .new-control:focus {
    border-style: none;
    outline: none;
    border-bottom: 1px solid #adbdcc;
  }
  
  .submit {
    background-color: #a6004d;
    color: white;
    text-transform: uppercase;
    border-radius: 25px;
    padding: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;
    font-size: 15px;
    font-family: "Work Sans", sans-serif;
    font-weight: 600;
    margin-top: 25px;
  }
  
  p {
    margin-bottom: 0;
    padding: 10px;
  }
  
  .circlespinner {
    animation: rotate 2s linear infinite;
    width: 50px;
    height: 75px;
    stroke: #f9f9fb;
  }
  
  .path {
    stroke: #a6004d;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  @keyframes rotate {
    to {
      transform: rotate(1turn);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    to {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -125;
    }
  }
  .l-loading {
    margin-top: 80px;
  }
  
  .form-group .invalid-message {
    font-size: 12px;
    color: red;
  }

  
  /* ========================================= */

  .hidden {
    display: none;
  }
  
  #mn {
    width: 100%;
    height: auto;
  }
  
  .card-login {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  .card-login button {
    flex-grow: 1;
    font-size: 16px;
    font-family: "Open Sans", sans-serif;
    margin-right: 10px;
    padding: 7px;
    border: none;
    outline: none;
    border-radius: 25px;
    cursor: pointer;
  }
  
  .card-login button.active {
    background-color: #a6004d;
  }
  

  .password-input {
    display: flex;
    align-items: center; /* Vertically center the items */
  }
  
  .eye-icon {
    cursor: pointer; /* Add a pointer cursor to indicate interactivity */
    margin-left: 10px; /* Adjust the margin as needed for spacing */
  }



  /* ++++++++++++++++++++++++++++++++++++++++ */

  

.error
{
color: Red;
font-family: 'Work Sans', sans-serif;
font-size:11px;
font-style: italic;
}


.imga{
    width: 100vw;
    height: 700px;
}

.imgf{
    width: 100vw;
    height: 100px;
}

.imgh{
    width: 99vw;
}


/* styles.css */

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  z-index: 9999; /* Set a high z-index to ensure it covers other elements */
  cursor: not-allowed; /* Set a cursor style to indicate clicks are blocked */
  pointer-events: all; /* Ensure the overlay captures all pointer events */
}


/* styles.css */

/* Hide content for screens with a width of 768px or more (tablets and desktops) */
@media screen and (min-width: 768px) {
  .mainContent {
    display: none;
  }

  .App {
    display: none;
  }
}

/* Show content for screens less than 768px (mobile) */
@media screen and (max-width: 767px) {
  .mainContent {
    display: block;
  }
  .App {
    display: block;
  }
}



</style>
