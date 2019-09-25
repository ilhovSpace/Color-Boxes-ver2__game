class randomColorBox{
    constructor () {
      this.positionX = this._randomNumber(40, 600);
      this.positionY = -(this._randomNumber(40, 360));
      this.color = this._randomColor();
      this.speed = this._randomNumber(1, 3);;
    }

    _randomColor () {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      };
      return color;
    }

    _randomNumber (min, max) {
      let rand = min - 0.5 + Math.random() * (max - min + 1);
      return Math.round(rand);
    }

    _move () {
      this.positionY += this.speed;
    }
  }