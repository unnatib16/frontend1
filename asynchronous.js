function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.3; 
            if (success) {
                resolve({ data: "Here is your fetched data!" });
            } else {
                reject(new Error("API request failed. Please try again."));
            }
        }, 2000);
    });
}

async function getData() {
    try {
        console.log("Fetching data...");
        const response = await fetchData();
        console.log("Success:", response.data);
    } catch (error) {
        console.error("Error:", error.message);
    }
}

getData();
