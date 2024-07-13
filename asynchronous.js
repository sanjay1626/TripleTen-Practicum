console.log("Hello World");
// Define an async function named fetchData
 /*
async function fetchData() {
    // Use the fetch method to send a GET request to the specified URL and wait for the response
      const response = await fetch('https://cnt-3b0020f6-5d6a-4985-9ea9-08d6a9b030ae.containerhub.tripleten-services.com/api/v1/warehouse');
      // Use the json method on the response object to extract the data from the response body and wait for it to be parsed
      const data = await response.json();    
      console.log(data);
  }
  
  // Call the fetchData function to execute it
  fetchData();*/
  
  //using try/catch
    async function fetchData() {
    try {
        const response = await fetch('https://cnt-3b0020f6-5d6a-4985-9ea9-08d6a9b030ae.containerhub.tripleten-services.com/api/v1/warehouses');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        // If an error occurs, log it to the console
        console.error(error);
    }
}
fetchData();