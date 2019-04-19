class Person {
	constructor (fullName,favColor){
		this.name=fullName;
		this.favoriteColor=favColor;

	}

	greet() {
	console.log("Hi there, my name is "+this.name+" and my favourite color is "+this.favoriteColor)
	}
}

// module.exports = Person;  node.js way of defining the return

export default Person;  // ecma 6 way 

