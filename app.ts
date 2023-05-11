const person/* :{
    name: string;  //giving types to object properties 
    age: number;
}  */= {
    name: 'André',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};

let favoriteActivities: string[]; //here we are saying that this array is an array of strings, if we want to mix types, we can use "any[]"
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies){
    console.log(hobby.toUpperCase()); //here we are certain that "hobby" is string since our array is an array of strings
}