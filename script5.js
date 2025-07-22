let btn = document.getElementById("locateBtn");

btn.addEventListener("click", function() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                document.getElementById("output").innerText = 
                    `Latitude: ${latitude.toFixed(4)}, Longitude: ${longitude.toFixed(4)}`;
            },
        );
    } 
});