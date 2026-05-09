fetch("https://api.data.gov.sg/v1/transport/traffic-images") //GET URL or send our REQUEST
    .then(response => response.json()) // response given convert to json so we can deal with it better
    .then(data => {
        const cameraDataDiv = document.getElementById("camera-data");
        data.items.forEach(item => {
            const cameraInfo = document.createElement("p");
            console.log(item);
            item.cameras.forEach(camera => {
                console.log(`Camera ID: ${camera.camera_id}, Image URL: ${camera.image}`);
                const cameraInfo = document.createElement("p");
                cameraInfo.innerHTML = `Camera ID: ${camera.camera_id}, Image URL: <img src='${camera.image}'>`;
                cameraDataDiv.appendChild(cameraInfo);
            });
            //cameraInfo.textContent = `Camera ID: ${item.camera_id}, Image URL: ${item.image}`;
            //cameraDataDiv.appendChild(cameraInfo);
        });
    })
    .catch(error => console.error("Error loading traffic camera data:", error));