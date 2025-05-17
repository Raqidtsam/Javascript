function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`;
}
const desc1 = describeCountry("Finland", 6, "Helsinki");
const desc2 = describeCountry("Nigeria", 223, "Abuja");
const desc3 = describeCountry("Japan", 126, "Tokyo");
console.log(desc1);
console.log(desc2);
console.log(desc3);
