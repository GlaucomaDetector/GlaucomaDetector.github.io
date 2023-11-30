document.getElementById('uploadButton').addEventListener('click', function() {
    const fileInput = document.getElementById('fileUpload');
    const file = fileInput.files[0];

    if (file) {
        // Initialize your Teachable Machine model here
        const modelURL = 'YOUR_MODEL_URL'; // Replace with your model URL

        // Load the model
        tmImage.load(modelURL)
            .then(model => {
                // Model loaded, process the file
                const reader = new FileReader();
                reader.onload = function(event) {
                    const img = new Image();
                    img.src = event.target.result;
                    img.onload = function() {
                        // Get predictions
                        model.predict(img).then(predictions => {
                            // Display the results
                            document.getElementById('output').innerText = JSON.stringify(predictions);
                        });
                    }
                };
                reader.readAsDataURL(file);
            })
            .catch(error => {
                console.error('Error loading the model', error);
            });
    } else {
        alert('Please select a file to upload.');
    }
});
