var cardsImgClasses = ["fa-anchor", "fa-bug", "fa-certificate", "fa-fire", "fa-user-secret", "fa-leaf", "fa-lightbulb", "fa-paint-brush", "fa-cut",
                        "fa-magic", "fa-gift", "fa-sun", "fa-car", "fa-eye", "fa-gavel", "fa-ambulance", "fa-globe", "fa-bullseye",
                        "fa-compass", "fa-volleyball-ball"];
let cells = document.getElementsByClassName('game-cell');
let gameCardImgList = createCardImageList(generateImgList(cardsImgClasses, cells), cells);


let isOddClick = true;
for (cell of cells){
    cell.addEventListener('click', function () {
            const icon = this.querySelector('i');
            if (icon.classList.contains('fa-american-sign-language-interpreting')) {
                icon.classList.remove('fa-american-sign-language-interpreting');
                for (i = 0; i < gameCardImgList.length; i++) {
                    if (this.dataset.coordinateCard === gameCardImgList[i][0]) {
                        icon.classList.add(gameCardImgList[i][1]);
                        gameCardImgList[i][2] = 'false';
                        this.style.backgroundColor = "pink";
                    }
                }
            }
            let comperValues = [];
            for (i = 0; i < gameCardImgList.length; i++) {
                if (gameCardImgList[i][2] === 'false') {
                    comperValues.push([gameCardImgList[i][0], gameCardImgList[i][1]]);
                }
            }
            console.log(comperValues);
            let index1 = Number(comperValues[0][0]);
            let index2 = Number(comperValues[1][0]);
            let class1 = new String(comperValues[0][1]);
            let class2 = new String(comperValues[1][1]);
            console.log(cells[index1]);
            if (comperValues.length === 2) {
                if (comperValues[0][1] === comperValues[1][1]) {
                        cells[index1].style.backgroundColor = "white";
                        this.style.backgroundColor = "white";
                        gameCardImgList[index1][2] = 'matched';
                        gameCardImgList[index2][2] = 'matched';
                }
                else {
                    setTimeout(function(){
                    cells[index1].classList.remove(class1);
                    cells[index1].classList.add('fa-american-sign-language-interpreting');
                    cells[index1].style.backgroundColor = "#27464d";
                    cells[index2].classList.remove(class2);
                    cells[index2].classList.add('fa-american-sign-language-interpreting');
                    cells[index2].style.backgroundColor = "#27464d";
                    }, 2000);
                    gameCardImgList[index1][2] = 'true';
                    gameCardImgList[index2][2] = 'true';
                }
            }
            comperValues.pop();
            comperValues.pop();
        });
    }


function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

function generateImgList(array, htmlElementsList){
    iconNumber=htmlElementsList.length/2;
    let ImgList = [];
    ImgList=(array.slice(0, iconNumber)).concat(array.slice(0, iconNumber));
    shuffle(ImgList);
    return ImgList;
}

function createCardImageList(array, htmlElementsList){
    let cardImgList =[];
    for (let i=0; i< htmlElementsList.length; i++){
        cardImgList.push([htmlElementsList[i].dataset.coordinateCard, array[i], 'true']);
    }
    return cardImgList;
    }
