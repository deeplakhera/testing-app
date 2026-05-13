document.addEventListener('DOMContentLoaded', () => {
    const apiButton = document.getElementById('apiButton');
    const apiResponse = document.getElementById('apiResponse');

    apiButton.addEventListener('click', async () => {
        try {
            apiButton.disabled = true;
            apiButton.textContent = 'Loading...';
            
            const response = await fetch('/api/hello');
            const data = await response.json();
            
            apiResponse.classList.add('active');
            apiResponse.innerHTML = `
                <h3>API Response:</h3>
                <p><strong>Message:</strong> ${data.message}</p>
                <p><strong>Timestamp:</strong> ${new Date(data.timestamp).toLocaleString()}</p>
            `;
        } catch (error) {
            apiResponse.classList.add('active');
            apiResponse.innerHTML = `
                <h3>Error:</h3>
                <p style="color: red;">${error.message}</p>
            `;
        } finally {
            apiButton.disabled = false;
            apiButton.textContent = 'Call API';
        }
    });
});
