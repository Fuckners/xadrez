import Tabuleiro from "../game/Tabuleiro";
import { Posição, Time } from "../types";
import Peça from "./Padrao";

export default class Rei extends Peça {
  constructor(
    tabuleiro: Tabuleiro,
    cor: Time,
    posição: Posição,
    icone: string = "R"
  ) {
    super(tabuleiro, cor, "rei", posição, icone);
  }

  public possiveisMovimentos(): Posição[] {
    const { x: px, y: py } = this;
    const movimentos = [
      { x: px + 0, y: py + 1 },
      { x: px + 1, y: py + 1 },
      { x: px + 1, y: py + 0 },
      { x: px + 1, y: py + -1 },
      { x: px + 0, y: py + -1 },
      { x: px + -1, y: py + -1 },
      { x: px + -1, y: py + 0 },
      { x: px + -1, y: py + 1 },
    ];

    this.movimentos = movimentos;
    return this.movimentos;
  }
}
