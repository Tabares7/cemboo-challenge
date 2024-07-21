export const fetchDummyData = async () => {
    try {
      const targetUrl = "https://dummy.restapiexample.com"; // Original API URL
      const response = await fetch( targetUrl, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("There was an error fetching the data:", error);
    }
  };
