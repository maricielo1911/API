document.addEventListener("DOMContentLoaded", function() {
    const videoInput = document.getElementById("video-input");
    const videoPlayer = document.getElementById("video-player");
    const loadingMessage = document.getElementById("loading-message");
  
    videoInput.addEventListener("change", function() {
      const file = videoInput.files[0];
  
      if (file && file.type.startsWith("video/")) {
        loadingMessage.textContent = "Cargando el vídeo...";
  
        const fileReader = new FileReader();
        fileReader.onload = function() {
          videoPlayer.src = URL.createObjectURL(file);
          loadingMessage.textContent = "";
        };
  
        fileReader.readAsDataURL(file);
      } else {
        alert("Por favor, selecciona un archivo de vídeo válido.");
      }
    });
  });