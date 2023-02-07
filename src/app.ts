import Game from "./game/Game";
const { log } = console;

function clearWindow() {
  const [_windowsWidth, windowsHeight] = process.stdout.getWindowSize();
  for (let line = 0; line < windowsHeight; line++) log("\r\n");
}

const game = new Game();
game.start();