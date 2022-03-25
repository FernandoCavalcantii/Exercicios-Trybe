const xFinder = (str) => {
    const splitStr = str.split('');
    for (let i = 0; i < splitStr.length; i += 1) {
        if (splitStr[i] === 'x') {
            splitStr.splice(i, 1, 'bebeto');
        }
    }
    return splitStr.join('');
}

const newStr = xFinder('A vaca é x nossa x');

const skills = ['Dedicado', 'Escuta ativa', 'Inteligente', 'Proativo', 'Comunicativo'];

const skillsString = (str) => {
    const sortedSkills = skills.sort();
    return `${str}! Minhas cinco principais habilidades são: ${sortedSkills}`;
}

console.log(skillsString(newStr));