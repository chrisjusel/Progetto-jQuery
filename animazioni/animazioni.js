$(()=>{
    $('#title').append(	
    '<div class="contenitore">'+
        '<div class="typed-out">Memory Game</div>'+
    '</div><br>');

    $('#congrats').append(
       ' <div class="Header">'+
        '<svg class="Header__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1337.97 684.43">'+
         ' <path class="Header__shape bigSquare" fill="#16d5d1" d="M546.519 349.271l86.383-56.098 56.097 86.383-86.383 56.098z"/>'+
          '<path class="Header__shape triangle" fill="none" stroke="#ff4676" stroke-width="8" d="M372.15 462.17L321 434.58l-4.88 56.16z"/>'+
          '<circle class="Header__shape bigCircle" fill="#ff4676" cx="1076.52" cy="262.17" r="59"/>'+
          '<path class="Header__shape littleSquare" fill="#ffe430" d="M285.523 262.61l12.372-53.59 53.59 12.372-12.372 53.59z"/>'+
          '<circle class="Header__shape hoop" fill="none" stroke="#ffe430" stroke-width="13" cx="905.52" cy="447.17" r="45"/>'+
          '<circle class="Header__shape littleCircle" fill="#0f1c70"cx="1036.52" cy="203.17" r="27"/>'+
        '</svg>'+
        '<h3 class="Header__title">Congratulazioni!</h3>'+
        '</div>'
    )
})