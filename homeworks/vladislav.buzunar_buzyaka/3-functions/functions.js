const TANK_VOLUME = 1000;

const OIL = 926;
const WATER = 1000;
const MERCURY = 1355;

const numOilBank = 3;
const numWaterBank = 5;
const numMercuryBank = 2;

function getWeight(weight, liquid, count) {
    return weight * count;
}

const totalWeightOil = getWeight(926, OIL, numOilBank);
const totalWeightWater = getWeight(1000, WATER, numWaterBank);
const totalWeightMercury = getWeight(1355, MERCURY, numMercuryBank);

console.log(`The total weight of the oil came to the port = ${totalWeightOil}(kg)`);
console.log(`The total weight of the water came to the port = ${totalWeightWater}(kg)`);
console.log(`The total weight of the mercury came to the port = ${totalWeightMercury}(kg)`);

function totalWeight() {
    return totalWeightOil + totalWeightWater + totalWeightMercury;
}

const allWeight = totalWeight();

console.log(`Total weight of liquids that arrived at the port = ${allWeight}(kg)`);
