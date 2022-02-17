const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
// console.log(bands)

function strip(bandName){
    return bandName.replace(/^(a |an |the )/i, '').trim()
    // return bandName
}
const sotrtedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1: -1)
// const sotrtedBands = bands.sort((a,b) => a < b )

document.querySelector("#bands").innerHTML=
    sotrtedBands.map(band => `<li>${band}</li>`).join("")

// bandNames = []
// // function strip()
// for (bandName of bands){
//     bandName = bandName.replace(/^(a |an |the )/i, '')//.trim()
//     bandNames.push(bandName)
// }
// bandNames.forEach(element => {
//     console.log(element)
    
// });

// bandsNames= bandNames.sort() 
// document.querySelector("#bands").innerHTML =
//     bandNames.map(band => `<li>${band}<li>`).join("")

// console.log(bandNames)

