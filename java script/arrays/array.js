///example 2////
//["pubg","freefire","call of duty","candycrush","hill climb race"]
//candycrush is a wonderfull game in the world//

function whospaying(names){
	var numberofpeople= names.length;
	var randompersonposition=math.floor(math.random()* numberofpeople)
	var randomperson = names[randompersonposition];
	return randomperson+"is a wonderfull game in the world"
}

//we use the .length beause it will hwlp us to find number of items are stings in the array.
//math.random will helpus to make the floating number into round figure number
