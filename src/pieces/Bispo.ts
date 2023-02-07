import { Posição, Time } from "../types";
import Peça from "./Padrao";

export default class Bispo extends Peça {
  constructor(cor: Time, posição: Posição, icone: string = "j") {
    super(cor, "bispo", posição, icone);
  }

  public possiveisMovimentos(): Posição[] {
    const { x: px, y: py } = this;
    const movimentos = [] as Posição[];

    const máximoCasas = 8;
    const horizontal = [
      (quantidade: number) => ({ y: quantidade, x: quantidade }),
      (quantidade: number) => ({ y: -quantidade, x: -quantidade }),
      (quantidade: number) => ({ y: -quantidade, x: quantidade }),
      (quantidade: number) => ({ y: quantidade, x: -quantidade }),
    ];

    for (let lado = 1; lado <= 4; lado++) {
      for (let casa = 1; casa <= máximoCasas; casa++) {
        const { x: ox, y: oy } = horizontal[lado](casa);
        movimentos.push({ x: px + ox, y: py + oy });
      }
    }

    this.movimentos = movimentos;
    return this.movimentos;
  }
}