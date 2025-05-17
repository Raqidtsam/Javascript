const populations=[562,451,70,40];
console.log(populations.length===4);
function percentOfWorld1(population){
    return (population/7900)*100;
}

const percentages=[
    percentOfWorld1(populations[0]),
    percentOfWorld1(populations[1]),
    percentOfWorld1(populations[2]),
    percentOfWorld1(populations[3])
]
console.log(percentages.map(sw => sw.toFixed(1) + "%"));