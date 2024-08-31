
// Q1
// let box = document.getElementById("myLink")
// box.onclick = function() {
//     alert("You clicked the link!");
// };

// Q2

// document.getElementById ("image")
//  addEventListener("click", function() {
//     alert("Thanks for purchasing a phone from us");
// });

// document.getElementById ("image2") 
//  addEventListener("click", function() {
//     alert("Thanks for purchasing a phone from us");
// });

// document.getElementById ("image3")
//  addEventListener("click", function() {
//     alert("Thanks for purchasing a phone from us");
// });

//    


//  Q3
// function deleteRecord(button) {
//     
//     button.parentElement.remove();
// }

// Q4
// const image1 = document.getElementById('swap');

//         image1.addEventListener('mouseover', function() {
//             image1.src = "0x0.webp";
//         });

//         image1.addEventListener('mouseout', function() {
//             image1.src = "960x0.webp";
//         });

// Q5
let count = 0;

function increase() {
    count++;
    document.getElementById("counter").innerText = count;
}

function decrease() {
    count--;
    document.getElementById("counter").innerText = count;
}
     
