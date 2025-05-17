function percentOfWorld1(population){
    return (population/7900)*100;
}
const PercTanzania=percentOfWorld1(60);
const percKenya=percentOfWorld1(40);
const percChina=percentOfWorld1(1447);

console.log("China population "+percChina.toFixed(2)+" % of world");
console.log("Kenya population "+percKenya.toFixed(2)+" % of world");
console.log("Tanzania population "+PercTanzania.toFixed(2)+"% of world");

const percentOfWorld2=function(population){
    return (population/7900)*100;
}
const PercIndia=percentOfWorld2(608);
const percKorea=percentOfWorld2(405);
const percSpain=percentOfWorld2(500);

console.log("India population "+PercIndia.toFixed(1)+" % of world");
console.log("Korea population "+percKorea.toFixed(1)+" % of world");
console.log("Spain population "+percSpain.toFixed(1)+"% of world");

const percentOfWorld3=(population)=>{
    return (population/7900)*100;
}
const PercGhana=percentOfWorld2(60);
const percAngola=percentOfWorld2(105);
const percCongo=percentOfWorld2(40);

console.log("Ghana population "+PercGhana.toFixed(3)+" % of world");
console.log("Angola population "+percAngola.toFixed(3)+" % of world");
console.log("Congo population "+percCongo.toFixed(3)+"% of world");