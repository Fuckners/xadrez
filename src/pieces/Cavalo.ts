import { Posição, Time } from "../types";
import Peça from "./Padrao";

export default class Cavalo extends Peça {
  constructor(cor: Time, posição: Posição, icone: string = "T") {
    super(cor, "cavalo", posição, icone);
  }

  public possiveisMovimentos(): Posição[] {
    const { x: px, y: py } = this;
    const movimentos = [
      // cima
      { x: px + 1, y: py + 3 },
      { x: px - 1, y: py + 3 },
      // baixo
      { x: px + 1, y: py - 3 },
      { x: px - 1, y: py - 3 },
      // direta
      { x: px + 3, y: py + 1 },
      { x: px + 3, y: py - 1 },
      // esquerda
      { x: px - 3, y: py + 1 },
      { x: px - 3, y: py - 1 },
    ];

    this.movimentos = movimentos;
    return this.movimentos;
  }
}