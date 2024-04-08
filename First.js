

// const tempratures = [3,-2,-6,-1,'error',9,13,17,15,14,9,8]

// const calTempFunction = function(temps){

//     let max = temps[0];
//     let min = temps[0];

//     for(let i=0;i<temps.length;i++){
//         let currentTemp = temps[i]
//         if(typeof currentTemp !== 'number') continue;
//         if(currentTemp > max) max = currentTemp
//         if(currentTemp < min) min = currentTemp
//     }

//     console.log(`max is ${max} and min is ${min}`)
//     return max-min
// }

// const ampitude = calTempFunction(tempratures)
// console.log(ampitude)


// const measureKelvin = function(){
//     const measurement = {
//         type:'temp',
//         unit:'celsius',

//         value:Number(prompt("Degrees celsius"))
//     }
//     console.table(measurement)

//     const kelvin =  measurement.value + 273
//     return kelvin
// }

// console.log(measureKelvin())
const days = ['mon','tue','wed','thu',,'fri','sat','sun']
const openHours = {
    mon:{
        open:12,
        close:22
    },
    thu:{
        open:32,
        close:12
    },
    fri:{
        open:9,
        close:9
    }
}

// const resturant = {
//     name:'Classico Italano',
//     location:'Havelock mall wellawetta colombo 05',
//     categories:["italain","vegetarian","pizztsa","organic"],
//     startMenu:["ppasta","chicken","cheese","mushroom","Garlic","Bread"],
//     mainMenu:["pizza","chips","Ristto"],
//     order:function(starterIndex,mainIndex){
//         return [this.startMenu[starterIndex],this.mainMenu[mainIndex]]
//     },
//     openHours:openHours,
//     orderPasta:function(ing1,ing2,ing3){
//         console.log(`Here is your pasta with ${ing1} ${ing2} and ${ing3}`)
//     },
//     orderPizza:function(mainIngrediant,...otheringridant){
//         console.log(mainIngrediant)
//         console.log(otheringridant)
//     }
// }



// // let [first,second] = resturant.categories

// // console.log(first,second)


// // console.log(resturant.order(2,1))

// // const nested = [2,4,[5,6]]
// // const[i,,j] = nested

// // const [p,q,r] = [8,9]

// // // const  {location,categories} = resturant

// // const {fri:{open:o,close:c}} = openHours
// // console.log(o,c)


// const arr = [7,8,9]

// const badArr = [1,2,...arr]

// const newMenu = [...resturant.mainMenu,'Gnocci','Gucci']
// console.log(newMenu)

// // const ingrediants = [prompt('Let\'s make pasta ingrediants ?'),prompt('ingrediants 2?'),prompt('ingrediants 3 ?')]
// // console.log(ingrediants)

// // resturant.orderPasta(...ingrediants)
// // const newresturant = {...resturant,founder:"Clevia"}

// const arrr = [1,2,...[3,4]]

// const {sat,...weekdays} = resturant.openHours
// console.log(weekdays)

// const rest1 = {
//     name:'Capri',
//     numGuests:20
// }

// const rest2 = {
//     name:"La Pizza",
//     owner:'Giovani'
// }

// // rest1.numGuests = rest1.numGuests  || 10;
// // rest2.numGuests = rest2.numGuests || 10;

// rest1.numGuests  ??=10
// rest2.numGuests  ??= 10 //nullish operater assign value if particular variable is Null or undefined

// console.log(rest1)
// console.log(rest2)


// const menu = [...resturant.startMenu,...resturant.mainMenu]

// for(const item of menu) console.log(item)

// for(const [i,el] of  menu.entries()){
//     console.log(`${i+1} :${el}`)
// }

// if(resturant.openHours.mon) console.log
// (resturant.openHours.mon.open)

// console.log(resturant.openHours.mon?.open)// if mon day available open

// for(const day in days){
//     console.log(day)
//     const open = resturant.openHours[day]?.open || closed
//     console.log(`on ${day} we open at ${open}`)
// }


const getCountry = function(country){
    fetch(`https://restcountries.eu/rest/v2/name/${country}`)
    .then(function(res){
        console.log(res.json())
    })
}

getCountry('portugal')