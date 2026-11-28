function updateclock() {
    const clockElement = document.getElementById('clock');
    if (clock){
        clock.innerHTML = new Date().toLocaleTimeString();
    }
  }

  // Update the clock every second
  setInterval(updateclock, 1000);
  updateclock(); // Initial call