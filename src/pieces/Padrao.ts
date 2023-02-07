import Tabuleiro from "../game/Tabuleiro";
import { Posição, Time } from "../types";
import { Peças } from "../types";

export default class Peça implements Peças.Peça {
  readonly posiçãoInicial: Posição;
  public x: number;
  public y: number;
  protected movimentos: Posição[] = [];

  constructor(
    protected tabuleiro: Tabuleiro,
    public cor: Time,
    public nome: string,
    posição: Posição,
    protected icone: string
  ) {
    this.posiçãoInicial = posição;
    this.x = posição.x;
    this.y = posição.y;
  }

  public toString() {
    return this.icone;
  }

  public possiveisMovimentos(): Posição[] {
    throw new Error("Método não implementado.");
  }

  public validaMovimento(movimento: Posição): boolean {
    const moveIndex = this.movimentos.findIndex(
      ({ x, y }) => movimento.x === x && movimento.y === y
    );
    return moveIndex !== -1;
  }
}
