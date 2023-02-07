export type peçaCasa = Peças.Peça | " ";
export type linha = [
  peçaCasa,
  peçaCasa,
  peçaCasa,
  peçaCasa,
  peçaCasa,
  peçaCasa,
  peçaCasa,
  peçaCasa
];
export type casas = [linha, linha, linha, linha, linha, linha, linha, linha];

export interface Posição {
  x: number;
  y: number;
}

export type Time = "black" | "white" | "neutral";

export namespace Peças {
  export interface Peça {
    readonly posiçãoInicial: Posição;
    cor: Time;
    x: number;
    y: number;

    possiveisMovimentos(): Posição[];
  }
}

export type Move = `${number}:${number}`;