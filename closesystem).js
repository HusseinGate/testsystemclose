// Function to close the sales system
function closeSalesSystem() {
    // Perform any necessary closing actions here
    console.log("Sales system closed.");
    // You can add code here to prevent further sales or terminate any ongoing transactions.
  }
  
  // Function to check the time and close the system if it's 11:59 pm
  function checkClosingTime() {
    const now = new Date();
    const closingTime = new Date(now);
    closingTime.setHours(23, 59, 0, 0); // Set the closing time to 11:59 pm
  
    // Compare the current time with the closing time
    if (now >= closingTime) {
      closeSalesSystem();
      clearInterval(closingInterval); // Stop the interval once the system is closed
    }
  }
  
  // Interval to check the time every minute
  const closingInterval = setInterval(checkClosingTime, 60000); // 60000 ms = 1 minute