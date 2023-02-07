import Tabuleiro from "../game/Tabuleiro";
import { Posição, Time } from "../types";
import Peça from "./Padrao";

export default class Torre extends Peça {
  constructor(
    tabuleiro: Tabuleiro,
    cor: Time,
    posição: Posição,
    icone: string = "H"
  ) {
    super(tabuleiro, cor, "torre", posição, icone);
  }

  public possiveisMovimentos(): Posição[] {
    const { x: px, y: py } = this;
    const movimentos = [] as Posição[];

    const máximoCasas = 8;
    const reto = [
      (quantidade: number) => ({ y: quantidade, x: 0 }),
      (quantidade: number) => ({ y: 0, x: quantidade }),
      (quantidade: number) => ({ y: -quantidade, x: 0 }),
      (quantidade: number) => ({ y: 0, x: -quantidade }),
    ];

    for (let lado = 1; lado <= 4; lado++) {
      for (let casa = 1; casa <= máximoCasas; casa++) {
        const { x: rx, y: ry } = reto[lado](casa);
        movimentos.push({ x: px + rx, y: py + ry });
      }
    }

    this.movimentos = movimentos;
    return this.movimentos;
  }
}
