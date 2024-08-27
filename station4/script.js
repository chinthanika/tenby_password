const correctCode = "IMDMF004";

document.getElementById('submitCode').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    console.log(userInput)

    checkCode(userInput);
});

function checkCode(userCode) {
    const code = document.getElementById('code');
    code.innerHTML = ''; // Clear previous feedback

    const span = document.createElement('span');
    if (userCode == correctCode){
        span.className = 'correct';
        span.textContent = 'Congratulations ! Your team made it!';

        confetti({
            particleCount: 500,
            spread: 100,
            origin: { y: 0.6 }
        });
    }
    else {
        span.className = 'wrong';
        span.textContent = 'Please try again.';
    }

    code.appendChild(span)

    // for (let i = 0; i < guess.length; i++) {
    //     const span = document.createElement('span');
    //     if (guess[i] === correctNumber[i]) {
    //         span.className = 'correct';
    //     } else if (correctNumber.includes(guess[i])) {
    //         span.className = 'wrong-position';
    //     } else {
    //         span.className = 'wrong';
    //     }
    //     span.textContent = guess[i];
    //     feedback.appendChild(span);
    // }
}

// $(document).ready(function () {
//     $('.toggle').click(function(){
//         $('.decimalToBinary').toggleClass('decimalToBinaryClose')
//         $('.convert').toggleClass('decimalToBinaryClose')
//         $('.binaryToDecimal').toggleClass('binaryToDecimalOpen')
//         $('.unconvert').toggleClass('inline-block')
//         $(".clear").toggleClass("clear-converted").toggleClass("clear-unconverted")
//     })
//     $(".clear").click(function () {
//         if ($(this).hasClass("clear-converted")){
//             $(".decimalToBinary textarea").val("")
//         } else {
//             $(".binaryToDecimal textarea").val("")
//         }
//     })
//     $('.convert').click(function () {
//         var charCodes     = [],
//             dividing      = [],
//             allBinaryCode = [],
//             decimal       = $('.decimalToBinary textarea.decimal').val(),
//             chars         = decimal.split('');
//         for( x=0; x<decimal.length; x++){
//             charCodes[x] = decimal.charCodeAt(x)
//         }
//         for (y=0; y<charCodes.length; y++){
//             var    equal  = [],
//                 binary = [];
//             decimal = charCodes[y];
//             for(i=0; i<=999999999; i++){
//                 dividing[i] = decimal;
//                 equal[i] = dividing[i] / 2;
//                 decimal = Math.floor(equal[i]);
//                 binary[i] = dividing[i] % 2;
//                 if(equal[equal.length-1] < 1){
//                     break;
//                 }else{}
//             }
//             binary.reverse();
//             // Pad the binary number to make it 8 bits
//             while (binary.length < 8) {
//                 binary.unshift(0);
//             }
//             allBinaryCode[y] = binary.join('').toString();
//         }
//         $('.decimalToBinary textarea.disabled').val(allBinaryCode.join(' ').toString());
//     });
//     $('.unconvert').click(function(){
//         var allBinary = $('.binaryToDecimal textarea.binary').val().split(' '),
//             unicodes = [];
//         for(i=0; i<allBinary.length; i++){
//             var    oneBinaryLength = allBinary[i].length,
//                 equal = [],
//                 two   = [],
//                 char  = '',
//                 text  = [];
//             for(x=0; x<=oneBinaryLength -1; x++){
//                 two[x] = Math.pow(2,x);
//                 var binary = allBinary[i].split('');
//             }
//             two.reverse();
//             for(y=0; y < two.length; y++){
//                 equal[y] = two[y] * eval(binary[y]);
//             }
//             unicodes[i] = eval(equal.join('+'));
//             char        = String.fromCharCode(unicodes[i]);
//             text[i]     = char;
//             $('.binaryToDecimal textarea.disabled').val($('.binaryToDecimal textarea.disabled').val() + char)
//         }
//     });
// });

