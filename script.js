const mieImg = ["arrabbiato", "bello", "piangere", "ridere", "amare", "amare1", "spavento", "shock", "arrabbiato", "bello",
    "piangere", "ridere", "amare", "amare1", "spavento", "shock"];

let nClicks = 0;
let arrayComparsion = [];
let countFound = 0;

startGame();

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
            $(".images").eq(i).append('<img src="img/'+arrayShuffle[i]+'.png" class="disable-select">')
        }
    }

    function mostraImg(image){
        arrayComparsion.push(image);
        if(arrayComparsion.length == 2){
            if(arrayComparsion[0] === arrayComparsion[1]){
                $('img').filter('[src="'+arrayComparsion[0]+'"]').parent().addClass("disabled");
                $('img').filter('[src="'+arrayComparsion[1]+'"]').parent().addClass("disabled");
                $('img').filter('[src="'+arrayComparsion[0]+'"]').parent().addClass('find');
                $('img').filter('[src="'+arrayComparsion[1]+'"]').parent().addClass('find');
                console.log("trovato");
                countFound += 1;
                if(countFound == mieImg.length/2) mostraModale();
                arrayComparsion = [];
            }
            else{
                $('.images').addClass("disabled");
                let temp = arrayComparsion;
                setTimeout(function(){
                    $('img').filter('[src="'+temp[0]+'"]').css('display', 'none');
                    $('img').filter('[src="'+temp[1]+'"]').css('display', 'none');
                    $('img').filter('[src="'+temp[0]+'"]').parent().removeClass('show');
                    $('img').filter('[src="'+temp[1]+'"]').parent().removeClass('show');
                    $('.images').removeClass("disabled");
                },700);
                arrayComparsion = [];
                console.log("non trovato");
            }
        }
    }

    function mostraModale(){
        let modale = $('#modal');
        modale.addClass('active');
        $("#nClicks").append('<h3>Hai completato la tua partita in soli ' + nClicks + ' click!</h3>');
    }


    $(".images").on('click', function(){
        $(this).children().css("display", "block");
        mostraImg($(this).children().attr("src"));
        $(this).addClass('show');
        nClicks += 1;
        $('#clicks').text(nClicks);
    });

    $("#Restart").on('click', () => {
        location.reload();
    });

        $(".playAgain").on('click', () => {
        location.reload();
    });

