let differences = [], found = 0, timer = 60, timerInterval;
let leftBox = document.getElementById("left");
let rightBox = document.getElementById("right");
let lostSound = document.getElementById("lost"); // Reference to the lost sound

window.onload = function () {
  document.getElementById('startBtn').addEventListener('click', () => {
    fetch('config.json')
      .then(res => res.json())
      .then(data => {
        config = data;
        startGame();
      });
  });
};

function startGame() {
    found = 0;
    timer = 60;
    clearInterval(timerInterval);
    document.getElementById("score").textContent = "0";
    document.getElementById("timer").textContent = "60";
    document.getElementById("message").textContent = "";
    leftBox.innerHTML = "";
    rightBox.innerHTML = "";

    document.getElementById("gameArea").style.display = "block";
    document.getElementById("startBtn").textContent = "Restart";

    fetch("config.json")
    .then(res => res.json())
    .then(data => {
      differences = [...data.differences];
      showImage("images/image1.jpg", leftBox);
      showImage("images/image2.jpg", rightBox);
      startTimer();
    });
}

function showImage(src, container) {
  const img = document.createElement("img");
  img.src = src;
  img.addEventListener("click", (e) => handleClick(e, container));
  container.appendChild(img);
}

function handleClick(e, container) {
  const rect = e.target.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  for (let i = 0; i < differences.length; i++) {
    const d = differences[i];
    if (x >= d.x && x <= d.x + d.width && y >= d.y && y <= d.y + d.height) {
      mark(d, leftBox);
      mark(d, rightBox);
      differences.splice(i, 1);
      found++;
      document.getElementById("score").textContent = found;
      document.getElementById("ding").play();

      if (differences.length === 0) {
        clearInterval(timerInterval);
        document.getElementById("message").textContent = "You Win! 🎉";
        document.getElementById("win").play();
      }
      break;
    }
  }
}

function mark(d, container) {
  const m = document.createElement("div");
  m.className = "mark";
  m.style.left = d.x + "px";
  m.style.top = d.y + "px";
  m.style.width = d.width + "px";
  m.style.height = d.height + "px";
  container.appendChild(m);
}

function startTimer() {
  timerInterval = setInterval(() => {
    timer--;
    document.getElementById("timer").textContent = timer;
    if (timer === 0) {
      clearInterval(timerInterval);
      document.getElementById("message").textContent = "Time's up! Try again!";
      lostSound.play(); 
    }
  }, 1000);
}
