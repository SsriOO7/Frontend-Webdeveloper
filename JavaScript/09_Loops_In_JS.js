// For loop
console.log('For loop');
// This is an array
let friend = ['Apple','Mango','Banana','Papaya','Guava'];
// ------------------------------------------------------------
// Simple FOR loop
for(let i=0; i<friend.length; i++){
    console.log('This is old method of "for" ' + friend[i]);
}
//===========================================================
// Modern JavaScript FOR method
// ----------------------------------------------------------
// FOREACH loop


friend.forEach(function f(element) {
    console.log("This is modern method for 'for' loop in JavaScript 'FOREACH loop' "+ element);
});

//------------------------------------------------------------
// FOR OF loop

for (const element of friend) {
    console.log("This is also modern method for 'for' loop in JavaScript 'FOR OF loop' " + element);
}