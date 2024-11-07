document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loadingScreen");
    const appContent = document.getElementById("appContent");
  
    // Задержка на 5 секунд
    setTimeout(() => {
      loadingScreen.style.display = "none";
      appContent.style.display = "block";
    }, 5000);
  });
  