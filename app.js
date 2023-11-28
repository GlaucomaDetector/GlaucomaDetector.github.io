// Assuming your model and metadata are loaded in 'your_teachable_machine_script.js'

async function predict() {
    // Get the image from the imageUpload input
    const imageUpload = document.getElementById('imageUpload');
    const image = await loadImage(imageUpload.files[0]);

    // Make a prediction using Teachable Machine model
    const prediction = await window.model.predict(image, false);
    
    // Display the prediction
    document.getElementById('prediction').innerText = `Prediction: ${prediction[0].className}`;
}

// Helper function to load an image
function loadImage(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.src = e.target.result;
            img.onload = () => resolve(img);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
