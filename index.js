// Iteration 1: Names and Input
const hacker1 = 'Diogo';
console.log(`The driver\'s name is ${hacker1}`)

const hacker2 = 'Eduardo'
console.log(`The navigator\'s name is ${hacker2}`)

// Iteration 2: Conditionals
if(hacker1.length>hacker2.length){
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`)
} else if (hacker2.length>hacker1.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}

// Iteration 3: Loops

let driverName = ''

for(let i = 0; i<hacker1.length ; i++){
    driverName+=hacker1[i].toUpperCase() + ' '
}

console.log(driverName)


let reverseName = ''

for(let i = hacker1.length; i>0 ; i--){
reverseName+=hacker1[i-1];
}

console.log(reverseName)




// 3.3)
// const comparingNames = hacker1.toLowerCase().localeCompare(hacker2.toLowerCase())

// if(comparingNames === -1){
//     console.log('The driver\'s name goes first.')
// } else if (comparingNames === 1 ){
//     console.log('Yo, the navigator goes first, definitely.')
// } else{
//     console.log('What?! You both have the same name?')
// }


const comparingNamesLength = hacker1.length > hacker2.length

let biggerName

if(comparingNamesLength){
    biggerName = hacker1
} else {
    biggerName = hacker2
}

for(i=0 ; i < biggerName.length; i++){
   
   if(hacker1[i] === undefined){
    console.log('The driver\'s name goes first.')
    break
   } else if(hacker2[i] === undefined){
    console.log('Yo, the navigator goes first, definitely.')
    break
   } 
   
   
    if(hacker1[i].toLowerCase().localeCompare(hacker2[i].toLowerCase()) === -1){
        console.log('The driver\'s name goes first.')
        break;
    } else if (hacker2[i].toLowerCase().localeCompare(hacker1[i].toLowerCase()) === 1 ){
         console.log('Yo, the navigator goes first, definitely.')
         break;
    } 
         
  if(i === biggerName.length-1){
    console.log('What?! You both have the same name?')
  }
} 


/* BONUS 1 */

const longText ='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis, aliquid alias fugit officiis laudantium temporibus adipisci eos cum voluptate cupiditate. Obcaecati, consequatur eaque? Rerum sint quibusdam obcaecati ea. Iste, veritatis! Vitae hic provident cum ipsum accusamus velit libero alias enim magni debitis nihil fugiat incidunt quisquam culpa iste, distinctio mollitia explicabo! Aut dicta odit distinctio quaerat, quas fugiat consequatur. Ipsa! Optio deleniti, vel molestias totam laudantium eveniet reprehenderit aspernatur voluptates hic doloribus qui voluptate nam! Maiores sed dolor, sunt odit debitis magnam dolore est beatae nisi, ipsam soluta error deleniti.'

let wordsCount = 0


//We are assuming that the text is well formatted
for(let i=0; i<longText.length; i++){
    if(longText[i]===' ' || i === longText.length-1){
         wordsCount++;
    }
}

console.log(`The number of words is ${wordsCount}`)

let etCount = 0

for(let i=0; i<longText.length; i++){
    
    if(longText[i+1] === undefined){
        break;
    } else if(longText[i].toLowerCase()==='e' && longText[i+1].toLowerCase()==='t'){
     etCount++;
    }

}

console.log(`There are ${etCount} 'et' in the phrase.`)


// BONUS 2 

// i=0 = letra = a, length = 3, 
const phraseToCheck = 'A man, a plan, a canal, Panama!'
let normalPhrase = ''
let reversePhrase = ''
let ilegalChars = ' !"#$%&/()=*+-.,'


for(i=0; i<phraseToCheck.length; i++){
    
    if(ilegalChars.includes(phraseToCheck[i]) === true){
        continue;
    } else{
        normalPhrase+= phraseToCheck[i].toLowerCase();
    }
   
}

for(i=phraseToCheck.length-1; i>= 0; i--){
    
    if(ilegalChars.includes(phraseToCheck[i]) === true){
        continue;
    } else{
        reversePhrase+= phraseToCheck[i].toLowerCase();
    }
}


if(normalPhrase === reversePhrase){
    console.log('This phrase is a Palindrome!')
} else{
    console.log('This phrase is NOT a Palindrome!')
}