import { Posição } from "../types";
import Peça from "./Padrao";

export default class None extends Peça {
  constructor(posição: Posição) {
    super("neutral", "none", posição, " ");
  }

  public possiveisMovimentos(): Posição[] {
    return this.movimentos;
  }
}