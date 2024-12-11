// Add event listeners and handle image uploads for each detection option

// Freshness Detection
document.getElementById('freshnessForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const imageUpload = document.getElementById('freshnessUpload');
    if (imageUpload.files.length === 0) {
        alert('Please select an image for Freshness Detection');
        return;
    }

    const formData = new FormData();
    formData.append('file', imageUpload.files[0]);

    try {
        const response = await fetch('/analyze/freshness', { method: 'POST', body: formData });
        const data = await response.json();
        alert(`Freshness Score: ${data.freshness_score}`);
    } catch (error) {
        console.error('Error in Freshness Detection:', error);
        alert('An error occurred during Freshness Detection. Please try again.');
    }
});



// Expiry Date Detection
document.getElementById('expiryForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const imageUpload = document.getElementById('expiryUpload');
    if (imageUpload.files.length === 0) {
        alert('Please select an image for Expiry Date Detection');
        return;
    }

    const formData = new FormData();
    formData.append('file', imageUpload.files[0]);

    try {
        const response = await fetch('/analyze/expiry', { method: 'POST', body: formData });
        const data = await response.json();
        alert(`Expiry Date: ${data.expiry_date}`);
    } catch (error) {
        console.error('Error in Expiry Date Detection:', error);
        alert('An error occurred during Expiry Date Detection. Please try again.');
    }
});

// Brand Detection
document.getElementById('brandForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const imageUpload = document.getElementById('brandUpload');
    if (imageUpload.files.length === 0) {
        alert('Please select an image for Brand Detection');
        return;
    }

    const formData = new FormData();
    formData.append('file', imageUpload.files[0]);

    try {
        const response = await fetch('/analyze/brand', { method: 'POST', body: formData });
        const data = await response.json();
        alert(`Brand Detected: ${data.brand}`);
    } catch (error) {
        console.error('Error in Brand Detection:', error);
        alert('An error occurred during Brand Detection. Please try again.');
    }
});
