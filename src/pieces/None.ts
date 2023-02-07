import Tabuleiro from "../game/Tabuleiro";
import { Posição } from "../types";
import Peça from "./Padrao";

export default class None extends Peça {
  constructor(tabuleiro: Tabuleiro, posição: Posição) {
    super(tabuleiro, "neutral", "none", posição, " ");
  }

  public possiveisMovimentos(): Posição[] {
    return this.movimentos;
  }
}
