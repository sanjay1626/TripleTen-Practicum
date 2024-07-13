async function postRequest(){
    // Prepare POST body
    const requestBody = {
        "products": [
            {
                "id": 5,
                "quantity": 1
            },
            {
                "id": 4,
                "quantity": 5
            }
        ]
    }
    try {
        // Use the fetch method to send a POST request to the specified URL and wait for the response
        const response = await fetch('https://cnt-50a59588-6a9d-4a0a-a271-397fc79d6002.containerhub.tripleten-services.com/api/v1/warehouses/check', {
            method: 'POST',
            // Set headers
            headers: {
            'Content-Type': 'application/json'
            },
            // Set request body and convert the data object into a JSON string
            body: JSON.stringify(requestBody)
        });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

postRequest();