// Code your solutions in this file
function writeCards(names, event) {
  const thankYou =[];
  for (let i = 0; i < names.length; i++) {
    thankYou.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    
  }
return thankYou;
 }
function countDown(number){
    let i = number;
    while (i >= 0){
        console.log(i--);
    }
}

