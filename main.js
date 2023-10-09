console.log("Hi it's Monday")
// instructions to myself about what I want to write here

let numOfPets = 0

numOfPets = numOfPets + 1
console.log('The value of our variable is: ', numOfPets)
numOfPets = numOfPets + 1
console.log('The value of our variable now is: ', numOfPets)
numOfPets += 1
console.log('The value of our variable NOW is: ', numOfPets)
numOfPets++
console.log('And the value of our variable NOW is: ', numOfPets)

// if statements

let dogsAreCool = true
let catsAreMean = false

let age = 27
// imagine grabbing the value from the input form, whatever the user put in
// maybe calculating your age based on a date compared to today
// only then do I know the value of age

if (age > 17) {
  // do this thing!
  console.log('You can vote')
} else {
  console.log('Nope')
}

let petName = 'Anton'

if (petName) {
  console.log('Your pet has a name')
} else {
  console.log('Your pet still needs a name')
}

function greetPet(name) {
  console.log('🐶 Hi, ' + name)
}

greetPet('Belletrix')
greetPet('Cosmo')
greetPet('Yolko Ono')
