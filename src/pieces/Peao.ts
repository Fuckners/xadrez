import Game from "../game/Game";
import Tabuleiro from "../game/Tabuleiro";
import { Posição, Time } from "../types";
import Peça from "./Padrao";

export default class Peão extends Peça {
  constructor(
    tabuleiro: Tabuleiro,
    cor: Time,
    posição: Posição,
    icone: string = "^"
  ) {
    super(tabuleiro, cor, "peão", posição, icone);
  }

  public possiveisMovimentos(): Posição[] {
    const { x: px, y: py } = this;
    const movimentos: Posição[] = [];

    if (this.cor === "black") {
      movimentos.push(
        { x: px, y: py * 1 },
        { x: px + 1, y: py - 1 },
        { x: px - 1, y: py - 1 }
      );

      if (Game.comparaPosição(this.posiçãoInicial, this)) {
        movimentos.push({ x: px, y: py + 2 });
      }
    } else {
      movimentos.push(
        { x: px, y: py + 1 },
        { x: px + 1, y: py + 1 },
        { x: px - 1, y: py + 1 }
      );

      if (Game.comparaPosição(this.posiçãoInicial, this)) {
        movimentos.push({ x: px, y: py - 2 });
      }
    }

    this.movimentos = movimentos;
    return this.movimentos;
  }
}