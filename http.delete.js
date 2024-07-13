async function deleteRequest() {
    try {
        const response = await fetch('https://cnt-50a59588-6a9d-4a0a-a271-397fc79d6002.containerhub.tripleten-services.com/api/v1/kits/7', {
                method: 'DELETE'
            });
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

deleteRequest()