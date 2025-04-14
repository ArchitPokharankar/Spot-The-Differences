# SpotTheDifferences
A web game where players must spot 3 differences between two images before time runs out. Built using HTML, CSS, JavaScript, and a configurable JSON file for dynamic game logic.

# Spot the Difference - Retro Web Game 🎮

A simple retro-style "Spot the Difference" game built using HTML, CSS, JavaScript, and JSON.

## 🎮 How to Play

- Click **Start Game** to begin.
- Two images are shown side-by-side.
- Click on the differences on either image to score points.
- Find all differences before the timer runs out!

---

## 🚀 How to Run the Game Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/spot-the-difference-game.git
   
2. Navigate to the folder:
cd spot-the-difference-game

3. Open index.html in your browser.
That’s it! No installation required.

__________________________________________________________________________________________________________________________________________________________________________________________

How the Game Uses config.json
The game uses a config.json file to dynamically load image data and define clickable "difference" zones. This file includes the file names of the two images (image1.jpg and image2.jpg) and a list of rectangular coordinates representing areas where differences exist. Each difference is defined using properties like x, y, width, and height, for example:

  "differences": [
    { "x": 132, "y": 265, "width": 34, "height": 28 },   
    { "x": 223, "y": 242, "width": 28, "height": 62 },   
    { "x": 4, "y": 138, "width": 19, "height": 42 }    
  ]

To find these coordinates manually, Paint was used to open the images and draw rectangles over the differences. The top-left corner of each marked area was taken as the (x, y) starting point, and the rectangle’s size was measured to determine the width and height.

When the game starts, JavaScript fetches the config.json file, displays the images, and listens for clicks from the player. It checks if the clicked point falls within any of the defined difference zones. If a correct area is clicked, a red outline is shown on both images, a ding sound plays, and the score increases. Once all differences are found, a win message and sound are triggered.
