const wakeUp = () => 'Acordando!!';
const breakfest = () => 'Bora tomar café!!';
const goodNight = () => 'Partiu dormir!!';

const doingThings = (func) => {
    console.log(func());
};

doingThings(wakeUp);
doingThings(breakfest);
doingThings(goodNight);