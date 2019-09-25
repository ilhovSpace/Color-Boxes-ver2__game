class Controller {
  constructor (canvas) {
    this.canvas  = canvas.link;
    this.context = this.canvas.getContext('2d');
    this.newGame = null;
  }

  start () {
    if(this.newGame === null){
        this.newGame = new Game();
        this.animate.call(this);
    }
  }

  stop () {
    this.newGame = null;
    this.context.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientWidth);
  }

  animate () {
    if(this.newGame !== null){
      this.context.clearRect(0, 0, this.canvas.clientWidth, this.canvas.clientWidth);
      this.newGame.play()
      requestAnimationFrame(this.animate.bind(this));
    };
  }
}

let controller = new Controller(_canvas);