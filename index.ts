import * as readline from 'readline';
import fetch from 'node-fetch';

// Interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome To IP lookup");

// Function to lookup IP information
function lookupIP() {
  // Ask for IP address
  rl.question("\nEnter the IP address to lookup (or press Ctrl+C to exit): ", (ip) => {
    // Make request to IP geolocation API
    fetch(`http://ip-api.com/json/${ip}?fields=26945529`)
      .then(response => response.json())
      .then(data => {
        // Display gathered information
        console.log("\nIP Information:\n");
        console.log(`IP Address: ${data.query}`);
        console.log(`Continent: ${data.continent}`);
        console.log(`Country: ${data.country}`);
        console.log(`Region: ${data.regionName}`);
        console.log(`City: ${data.city}`);
        console.log(`District: ${data.district}`);
        console.log(`Timezone: ${data.timezone}`);
        console.log(`National Currency: ${data.currency}`);
        console.log(`Zip Code: ${data.zip}`);
        console.log(`Latitude: ${data.lat}`);
        console.log(`Longitude: ${data.lon}`);
        console.log(`ISP: ${data.isp}`);
        console.log(`Organization: ${data.org}`);
        console.log(`Cellular Data: ${data.mobile}`);
        console.log(`Proxy: ${data.proxy}`);
        console.log(`Data Center: ${data.hosting}`);
      })
      .catch(error => {
        console.log("Error occurred while fetching IP information.");
      })
      .finally(() => {
        // Recursively call lookupIP
        lookupIP();
      });
  });
}

// Start the IP lookup process
lookupIP();

// Close the interface when the user presses Ctrl+C
rl.on('close', () => {
  console.log("\nExiting IP lookup tool.");
  process.exit(0);
});
