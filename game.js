class Game {
    constructor () {
        this.score = document.getElementById('score');
        this.points = 0;
        this.boxes = [];
    }

    play () {
        this._createBox(5); //Максимальное количество кубиков на игровом поле
        this._render();
        this._checkClick();
        this._checkBoxOutside();
        this.score.innerHTML = this.points;
      }

    _createBox (maxNamberBoxes) { 
        let box = new randomColorBox();
        if (this.boxes.length < maxNamberBoxes){
                this.boxes.push(box);
            }
        }

    _checkClick () {
        controller.canvas.addEventListener('click', (event) => {
          this.boxes.forEach((element, index) => {
            if((event.offsetX >= element.positionX && event.offsetX <= element.positionX+40) 
              && (event.offsetY >= element.positionY && event.offsetY <= element.positionY+40)){
                this.boxes.splice(index, 1);
                this.points++;
              } 
          });
      })
    }  

    _checkBoxOutside () {
        this.boxes.forEach((element, index) => {
            if(element.positionY > 480){
                this.boxes.splice(index, 1);
                alert(`You managed to catch: ${this.points} colorBoxes`);
                controller.stop();
            }
        });
    }  

    _render () {
        this.boxes.forEach(element => {
            controller.context.fillStyle = element.color;
            controller.context.fillRect(element.positionX, element.positionY, 40, 40);
            element._move();
        });
    }
}