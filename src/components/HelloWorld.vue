<template>
  <div>
    <h1 style="text-align: center; font-size: x-large;">Data</h1>
    <p v-if="loading" style="text-align: center; color: blue;">Loading...</p>
    <div v-else style="margin-left: 10px; margin-right: 10px;">
      <div v-for="(item, index) in reversedTableData" :key="index" :class="{ 'white-background': index % 2 === 0, 'block-background': index % 2 !== 0 }">
        <p v-for="(value, key) in item" :key="key" style="padding: 0px;">
          {{ key.charAt(0).toUpperCase() + key.slice(1) }}: {{ value }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onUnmounted, onMounted, watch } from 'vue'; // Import required functions from Vue
import { app } from './firebase';
import { getDatabase, ref as dbRef, onValue } from 'firebase/database';

// Get a reference to the Firebase database
const db = getDatabase(app);

export default {
  name: 'HelloWorld',
  setup() {
    const tableData = ref({}); // Create a reactive reference for table data
    const loading = ref(true); // Loading indicator

    const dataRef = dbRef(db, 'data'); // Reference to 'data' node in the database

    // Function to handle data change
    const handleDataChange = (snapshot) => {
      if (snapshot.exists()) {
        tableData.value = snapshot.val(); // Update tableData with snapshot value
        loading.value = false; // Turn off loading indicator
      } else {
        console.log('No data available.');
      }
    };

    // Fetch data from the database upon component initialization
    const fetchData = () => {
      onValue(dataRef, handleDataChange);
    };

    // Cleanup function to unsubscribe from dataListener
    const stop = onUnmounted(() => {
      dataRef.off('value', handleDataChange); // Unsubscribe from data changes
      stop(); // Stop the watcher when the component is unmounted
    });

    // Reverse the tableData object and store it in reversedTableData
    const reversedTableData = ref([]);

    // Watch for changes in tableData and update reversedTableData accordingly
    watch(tableData, () => {
      reversedTableData.value = Object.values(tableData.value).reverse();
    });

    // Automatically fetch data when component is mounted
    onMounted(fetchData);

    return {
      reversedTableData, // Return reversedTableData for template
      loading, // Return loading indicator for template
    };
  },
};
</script>

<style scoped>
.white-background {
  background-color: white;
}

.block-background {
  background-color: lightgrey;
}
</style>
