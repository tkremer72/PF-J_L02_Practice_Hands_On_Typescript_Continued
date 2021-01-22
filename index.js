"use strict";
//Part 1
//Create a new class named entry that implements the person interface above
var Entry = /** @class */ (function () {
    function Entry(firstName, lastName, birthday) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
    }
    return Entry;
}());
/*create a new instance of the above class named newPerson.  Include the values Albert, Einstein,
5/14/1879 in the new instance as the correct types.  */
var newPerson = new Entry('Albert', 'Enstein', new Date('5/14/1879'));
// Console log the values of newPerson so the output looks like the example shown in the requirements
console.log('First Name: ' + newPerson.firstName + ', Last Name: ' + newPerson.lastName + ', Birthday: ' + newPerson.birthday);
//Part 2
/*Create an array named numbers that includes the following elements. twelve, one-hundred,
sixteen, forty-four, seventy-three, three-million */
var numbers = ['twelve', 'one-hundred', 'sixteen', 'forty-four', 'seventy-three', 'three-million'];
/*Create a generic funtion named sortArray with the type of <S> this function should take in an array and sort
the elements in alphabetical order.  Hint you will use the sort() function.  */
function sortArray(array) {
    return array.sort();
}
//Console log the above array before it is sorted
console.log('Array before sorting: ' + numbers);
//Console log the above array after it has been sorted.  The output should look similar to the example 
console.log('Array after sorting: ' + sortArray(numbers));
