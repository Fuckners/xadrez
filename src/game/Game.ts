import chalk from "chalk";
import { log } from "console";
import { createInterface } from "readline";
import Peça from "../pieces/Padrao";
import { Move, Posição } from "../types";
import Player from "./Player";
import Tabuleiro from "./Tabuleiro";

export default class Game {
  playerOne: { nick: string; placar: number };
  playerTwo: { nick: string; placar: number };
  tabuleiro: Tabuleiro;
  rl;

  constructor(public rounds: number = 3) {
    this.playerOne = new Player("Player One");
    this.playerTwo = new Player("Player Two");
    this.tabuleiro = new Tabuleiro(8, 8);
    this.rl = createInterface({
      input: process.stdin,
      output: process.stdout,
      terminal: true,
    });
  }

  static comparaPosição(posA: Posição, posB: Posição) {
    return posA.x === posB.x && posA.y === posB.y;
  }

  async start() {
    const go = await this.question("Pronto para começar? (yes/no) ");
    if (go == "no") {
      log(chalk.yellow("Encerrando..."));
      return this.rl.close();
    }

    this.playerOne.nick = await this.question("Qual o nome do primeiro jogador? ");
    this.playerTwo.nick = await this.question("Qual o nome do segundo jogador? ");

    log(chalk.green("O tabuleiro foi montado! Que os jogos comecem!"));

    for (let round = 1; round <= this.rounds; round++) {
      await this.match();
    }
  }

  async match(): Promise<void> {
    const jogadores = [this.playerOne, this.playerTwo];

    for (let turno = 0; true; turno++) {
      log(chalk.green(`Turno nº ${turno + 1}`));
      for (let i = 0; i < 2; i++) {
        this.render();

        log(chalk.blueBright(`É a vez do jogador ${jogadores[i].nick}`));

        let answer: string;
        do {
          answer = await this.question("Qual sua jogada? (0:0 0:0) ");
        } while (!this.validateAnswer(answer));

        const [_from, _to] = answer.split(" ") as [Move, Move];

        const from = this.readMove(_from);
        const to = this.readMove(_to);

        this.move(from, to);

        log(
          `${jogadores[i].nick} moveu ${from.nome} para a posição ${to.x}:${to.y}`
        );
      }
      break;
    }
  }

  validateAnswer(answer: string): boolean {
    return /^\d\:\d \d\:\d$/.test(answer);
  }

  readMove(move: `${number}:${number}`): Peça {
    const [x, y] = move.split(":");
    const peça = this.tabuleiro.get(Number(x), Number(y));

    return peça;
  }

  move(from: Peça, to: Peça) {}

  render() {
    const { rawLayout: layout } = this.tabuleiro;

    // clearWindow();
    log(
      "",
      ...layout.map(
        (linha, li) =>
          linha
            .map(({ toString: icone }, ci) => {
              return li % 2 == 0
                ? ci % 2 == 0
                  ? chalk.blackBright.bgWhite(` ${icone()} `)
                  : chalk.whiteBright.bgBlack(` ${icone()} `)
                : ci % 2 == 0
                ? chalk.whiteBright.bgBlack(` ${icone()} `)
                : chalk.blackBright.bgWhite(` ${icone()} `);
            })
            .join("") + "\n\r"
      )
    );
  }

  question(pergunta: string): Promise<string> {
    return new Promise((resolve) => {
      this.rl.question(pergunta, resolve);
    });
  }
}