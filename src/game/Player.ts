export default class Player {
  constructor(public nick: string, public placar: number = 0) {}

  reset() {
    this.placar = 0;
    return this;
  }
}