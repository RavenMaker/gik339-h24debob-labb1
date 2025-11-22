// uppgift 2 

//console.log(name); //hittar inte då name finns inne i blocket ned
console.log(age);//age hittas men kan ej skrivas ut då den inte hunnit insierat ett värde ännu så den blir undefined
//console.log(country); //hittar inte då country finns inne i blocket ned
{
    let name="babbaboie"; // let i ett block är inte globalt
    const country="Sweden"; // const funngerar som let i ett block
    var age=25; // var är golobalt i ett block som funkar globalt överallt

    //funkar med alla då dom är i samma block
    console.log(country); 
    //console.log(age); 
    console.log(name);
    ///////////////////////////////////////////
}
//console.log(name);// hitats inte då name finns inne i blocket ovan för men den får blankt men får error då namn längst ner i fillen finns och vill prata med den så den får Error
console.log(age); // hittas då age använder var och fungerar överalt
//console.log(country); // hitats inte då contry finns inne i blocket ovan för men den får error raport då den inte finns globalt

///upgift 3



//varat true hära 
if ('3' == 3) {
    console.log("true");
} else {
    console.log("false");
}
if (null == undefined) {
    console.log("true");
} else {
    console.log("false");
} 
//alla visar false här nere
if (NaN == NaN) {  
    console.log("true");
} else {
    console.log("false");
}
/*== means med att det är lika med som jämför på båda sidor och vill ha något som är lika dant*/

/*=== means med att värdet är av lika dant eller har lika dant typ av värde */
if ('3' === 3) {
    console.log("true");
} else {
    console.log("false");
}
if (NaN === NaN) {
    console.log("true");
} else {
    console.log("false");
}       
if (null === undefined) {
    console.log("true");
} else {
    console.log("false");
}
/* NaN är en förkortning på Not a Number och den fungerar som ett nummer men den är inte ett giltigt nummer*/
/* undefined menas med att variablen har inte blivigt till delat eller insierat över huvud taget*/
/* Null är en syntax variabel men fungerar nästan som undefined i en del steg men inte alla*/
console.log(undefined ? 'Truthy' : 'Falsy'); // Falsy, jämför inte undefined med något annat

// uppgift 4

let name = "kent"; // namn finns här utanför och innuti funktionen men det påvärkar inte varandra då let blir inte att hamna inne i blocket
function greet(name){// namn här är inte berorende av name utanför blocket
    console.log(name); // här ser du namnet som skickas in i funktionen och inte den som finns utanför
    return "hej " + name;
}

console.log(greet("Barbie"));// anropar funktionsdeklaration med random namn som kan påvärkas som du vill
console.log(name); // här ser du namnet som finns utanför funktionen och inte den vi sickade in i funktionen

/*Jag använder ett Funktionsdeklaration då jag ser det som tydligaste sättet för att ilusterara hur koden fungerar och där för använder jag det till detta,
Funktionsdeklaration är ett bättre sätt att identifiera att något är till en funktion. Och varför jag inte valde
Funktionsutryck är ett extra stepp till att kontakta den i jämförelse ifrån funktionsdeklaration då du använder en variabel du sparar och
kontaktr på samma sätt som Funktionsdeklaration men med extra steps, och varför jag inte använder arrowfunktion
är för att den inte ser super tydlig ut på att den är en funktion då den används med en variabel som du sedan sättr ihop med något insick som ser ut så här
är ett exempel "variabelnamn = (parameter) => retun" i short turm så har du någon variabel typ där Variabelnamn är som exempel vis const och parameter kan 
vara name och return är ilustartion för en snabb visning är här är hur den ska sicka ut formatet sättet du är ute efter */