/* const person:{
    name: string;  //giving types to object properties
    age: number;
    hobbies: string[];
    role: [number, string]; //this is a tuple type, a special array strict with 2 elements where the first is a number and the second element is a string
}  = {
    name: 'André',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'author']
};
 */
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'André',
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    role: Role.AUTHOR,
};
//person.role.push('admin'); //methods like this are an exception, so they work
/* person.role[1] = 10; */ //this doesnt work because index 1 (second element) should be an string
var favoriteActivities; //here we are saying that this array is an array of strings, if we want to mix types, we can use "any[]"
favoriteActivities = ['Sports'];
console.log(person.name);
for (var _i = 0, _a = person.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby.toUpperCase()); //here we are certain that "hobby" is a string since our array is an array of strings
}
if (person.role === Role.AUTHOR) {
    console.log('is author');
}
