var person /* :{
    name: string;  //giving types to object properties
    age: number;
}  */ = {
    name: 'André',
    age: 30,
    hobbies: ['Sports', 'Cooking']
};
var favoriteActivities; //here we are saying that this array is an array of strings, if we want to mix types, we can use "any[]"
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); //here we are certain that "hobby" is string since our array is an array of strings
}
