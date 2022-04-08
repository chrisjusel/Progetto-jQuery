const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
    "piangere", "ridere", "amare", "amare1", "spavento", "shock"];

let nClicks = 0;
let arrayComparsion = [];

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    while (currentIndex != 0) {
  
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

    console.log(mieImg);
    console.log(shuffle(mieImg));

    function startGame(){
        var arrayShuffle = shuffle(mieImg);
        let grid = $('.griglia');

        while(grid.children().length != 0){
            grid.empty();
        }
        
        for(let i=0; i<arrayShuffle.length; i++){
            $('<div class="images"></div>').appendTo(grid);
            $(".images").eq(i).append('<img src="img/'+arrayShuffle[i]+'.png">')
        }
    }

    startGame();

    function mostraImg(image){
        arrayComparsion.push(image);
        if(arrayComparsion.length == 2){
            if(arrayComparsion[0] === arrayComparsion[1]){
                $('img').filter('[src="'+arrayComparsion[0]+'"]').parent().addClass("disabled");
                $('img').filter('[src="'+arrayComparsion[1]+'"]').parent().addClass("disabled");
                console.log("trovato");
                arrayComparsion = [];
            }
            else{
                $('.images').addClass("disabled");
                let temp = arrayComparsion;
                setTimeout(function(){
                    $('img').filter('[src="'+temp[0]+'"]').css('display', 'none');
                    $('img').filter('[src="'+temp[1]+'"]').css('display', 'none');
                    $('.images').removeClass("disabled");
                },700);
                arrayComparsion = [];
                console.log("non trovato");
            }
        }
    }

    $(".images").on('click', function(){
        $(this).children().css("display", "inline");
        mostraImg($(this).children().attr("src"));
        nClicks += 1;
        $('#clicks').text(nClicks);
    })