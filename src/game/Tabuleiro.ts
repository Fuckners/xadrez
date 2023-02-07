import None from "../pieces/None";
import Peça from "../pieces/Padrao";
import { Posição } from "../types";

export default class Tabuleiro {
  protected _layout: Peça[][];
  public linhas: number = 0;
  public colunas: number = 0;

  constructor(altura: number, largura: number) {
    // this.build();
    this.linhas = altura;
    this.colunas = largura;

    this._layout = this.buildEmpity(altura, largura);
  }

  public mover(from: Posição, to: Posição) {
    if (!this.positionExists(from))
      throw new Error(
        "Não existe uma peça nessa posição porque a posição não existe no tabuleiro."
      );

    if (!this.isAPiece(from.x, from.y))
      throw new Error(
        "Não existe uma peça nessa posição, logo, não é possível move-la."
      );

    if (!this.positionExists(to))
      throw new Error(
        "Não é possível mover a peça para essa posição porque a posição destino não existe."
      );

    return this;
  }

  protected buildEmpity(altura: number, largura: number): Peça[][] {
    if (altura <= 0 || largura <= 0)
      throw new Error("O tabuleiro deve ter no mínimo 1 de largura e 1 de altura.");

    return Array.from({ length: altura }, (_, y) =>
      Array.from({ length: largura }, (_, x) => new None(this, { x, y }))
    );
  }

  public get(x: number, y: number): Peça {
    if (!this.positionExists({ x, y }))
      throw new Error(
        "Não é possível pegar a peça dessa posição. A posição não existe no tabuleiro."
      );

    return this.rawLayout[y][x];
  }

  public setar<T extends Peça>(peça: T) {
    if (!this.positionExists(peça))
      throw new Error(
        "Não é possível colocar um peça nessa posição. A posição não existe no tabuleiro."
      );

    const { x, y } = peça;
    this._layout[y][x] = peça;

    return this;
  }

  // private build() {
  //   for (let casa in this.rawLayout[0])
  //     this.setar(new Peão("white", { x: Number(casa), y: 1 }));

  //   this.setar(new Torre("white", { x: 0, y: 0 }))
  //     .setar(new Cavalo("white", { x: 1, y: 0 }))
  //     .setar(new Bispo("white", { x: 2, y: 0 }))
  //     .setar(new Rei("white", { x: 3, y: 0 }))
  //     .setar(new Rainha("white", { x: 4, y: 0 }))
  //     .setar(new Bispo("white", { x: 5, y: 0 }))
  //     .setar(new Cavalo("white", { x: 6, y: 0 }))
  //     .setar(new Torre("white", { x: 7, y: 0 }));

  //   for (let casa in this.rawLayout[0])
  //     this.setar(new Peão("black", { x: Number(casa), y: 6 }));

  //   this.setar(new Torre("black", { x: 0, y: 7 }))
  //     .setar(new Cavalo("black", { x: 1, y: 7 }))
  //     .setar(new Bispo("black", { x: 2, y: 7 }))
  //     .setar(new Rei("black", { x: 3, y: 7 }))
  //     .setar(new Rainha("black", { x: 4, y: 7 }))
  //     .setar(new Bispo("black", { x: 5, y: 7 }))
  //     .setar(new Cavalo("black", { x: 6, y: 7 }))
  //     .setar(new Torre("black", { x: 7, y: 7 }));
  // }

  public isAPiece(x: number, y: number) {
    return this.get(x, y).nome !== "none";
  }

  public positionExists({ x, y }: Posição) {
    return x > 0 && x < this.colunas && this.linhas > y && 0 < y;
  }

  public get layout() {
    return this._layout.map((linha) => linha.map((casa) => casa.toString()));
  }

  public get rawLayout() {
    return this._layout;
  }
}