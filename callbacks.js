let animals = ['Giraffe','Elephant','Yak']//array

/*function animals up to 3 arguments froeach calls back 3 times forEach element in the array aniamls.
A specified action will be prefomed that we specify with the animals.forEach function.*/
animals.forEach(function(animal, index){//argument added index. call back function
    console.log(animal, index) //shows what is in the array and what place in the array as index.
} )

animals.forEach ( (animal, index) =>{ //arrow function notation same function action as using the word function, the word function is replace =>.
    console.log(animal, index)
})
//only one line of code you can omit the {}. all on one line. write it the way it mnkes sense to me.
animals.forEach((animal,index)=> console.log(animal, index))

animals.forEach( function(animal) {  // no indexing
    console.log(animal)
})

animals.forEach( animal => console.log(animal)) //no index use same more consise.  