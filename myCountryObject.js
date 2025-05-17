const myCountry={
    country:'Tanzania',
    capital:"Dodoma",
    language:"Kiswahili",
    population:65,
    neighbours:[
        'kenya',
        'Uganda',
        'Burundi',
        'Congo',
        'Rwanda',
        'Zambia',
        'Malawi'
    ],
    describe:function(){
        console.log(this.country.toUpperCase()+" has capital city called "+this.capital.toUpperCase()+
            " its Language is "+this.language.toUpperCase()+" and has "+this.population+" millions of people, has neighbours like "
            +this.neighbours
        )
    },
    checkIsIsland:function(){
        this.isIsland = this.neighbours.length === 0 ? true : false;
    },
    
};

myCountry.describe();
myCountry.checkIsIsland();
console.log("Is it an island?", myCountry.isIsland);
console.log("population increase by 2 million, new polution is ",myCountry.population+=2);
console.log("population decrease by 2 million, new polution is ",myCountry.population-=2);