// Uppgift 2


console.log(age); 
//console.log(name);     // fungerar inte – name finns bara inne i blocket
//console.log(country);  // fungerar inte – country finns bara inne i blocket
/*
    age får resultatet "undefined" här.
    och det beror på att age variabeln existerar men finner inget värde änu.
    anledningen är för att var-variabeln age blir att flyttas uppåt i koden.
*/
{
    let name = "babbaboie";   // kan bara se variaben i blocket 
    const country = "Sweden"; // kan bara se variaben i blocket
    var age = 25;             // kan se både ute och inuti blocket

    console.log(country); // fungerar
    console.log(name);    // fungerar
}

console.log(age); // fungerar – age är deklarerad med var och finns fortfarande
//console.log(name);     // fungerar inte – name finns bara inne i blocket
//console.log(country);  // fungerar inte – samma sak som ovan
/*

Reflektions frågor svar:
    Fråga 1:
        Hur fungerar var, let och const när de ligger i ett block {} ?
        
            let/const kommer bara hittas inne i blocket och finnas där, Men med const så kan värdet inte bytas.
            var blir att fungera utanför blocket och är synligt både före och efter, detta kan finna oväntade problem,
            därför man inte brukar använda var idag så ofta.
        
            let/const = säkert och förutsägbart. 
            var = gammalt och mer riskfyllt.

    Fråga 2:
        Vad händer om man skriver console.log före, i eller efter blocket?
        
            Före blocket:
            let/const ger error/fungerar inte då det är utanför deras scope
            var finns men värdet är undefined/inte identiferat ännu men är innanför scopet

            I blocket:
                alla variablar fungerar som det ska inne i scopet

            Efter blocket:
            let/const slutar att fungerar igen då det inte kan hittas längre då det är utanför scopet
            var finns kvar dock efter åt och nu har ett värde och inne i scopet
*/


// Uppgift 3

console.log('3' == 3);          
console.log(null == undefined);
console.log(NaN == NaN);

console.log('3' === 3);
console.log(NaN === NaN);       
console.log(null === undefined);

console.log(undefined ? 'Truthy' : 'Falsy');
/*
Reflektions frågor svar:
    Fråga 1:
        Vad är skillnaden mellan == och === ?

            ==:
            - JS gissar vilken typ du menar och konverterar vid behov.
            - Exempelvis: en sträng '3' konverteras till siffran 3 innan jämförelsen '3' == 3 som blir true.

            ===:
            - Tre lika med tecken gissar inte.
            - kollar både typ och värde exakt.
            - Exempelvis: så blir '3' och 3 att räknas som olika typer och där för blir '3' === 3 false.

            Specialfall:
            - null == undefined blir lika med true då det inte har något värde.
            - NaN === NaN är samma typ men trots det så är den endå false då den inte kan vara lika sig själv.
    Fråga 2:
        vad blir att hända i en ternary (?:) eller en if-sats med tuthy och Falsy?

            om vi skulle skriva bara Undefined i något av dessa villkor så skulle det se ut så här:
                if (undefined) { ... }
                detta gör så att JS fillen kollar om det blir sant eller falskt.
                men då undefined är ett falskt värde så blir det Falsy.
                och detta kan man se här med denna: 
                    console.log(undefined ? 'Truthy' : 'Falsy');


    Fråga 3:
        Vad står NaN, undefined och null för?
            
            NaN:
                - Förkortning för "Not a Number".
                - Betyder att detta inte kan räknas ut som ett nummer.
                - Den dycker upp JS och försöker göra matte med en strängar som inte är siffror.
                - exempel viss så skulle detta betyda NaN: 0/0 då det inte går att räkna ut.

            undefined:
                - betyder bara att variabeln finns men har inget värde satt änu.

            null:
                - betyder att variabeln medvetet har inget värde.
*/


//Uppgift 4 


let name = "kent"; // variabeln är nu global i detta skript

function greet(name) {  // name i funktionen är en parameter
    console.log(name);  // har ser vi parametens argument som sickas in
    return "hej " + name;
}

console.log(greet("Mikaela")); // vårat argument vi skicade in är Mikaela
console.log(name);  // här sickat den globala variabeln ut i konsolen som är kent



/*
Reflektions frågor svar:
    Vad är skilnaden mellan det olika funktionerna?
    Fråga 1:
        funktionsdeklaration:
            - kan man anropa före den står i koden.
        
        funktionsuttryck:
            - du kan bara användas den efter du har skapat den först.


        arrowfunktion:
            - kortare syntax
            - kan fungera med "this" 

        jag valde funktionsdeklaration då den har en tydligare struktur och för att jag kan Kontakta innan den har definierat sig,
        detta gör den mycket mer flexibel och lättare att kunna förstå.

    Fråga 2:
        när går det att kalla påå funktionerna?
            funktionsdeklaration:
                - det går att anropa den när som helst i koden.
            
            funktionsuttryck/arrowfunktion:
                - du kan bara kalla på den efter den har initerats.

    Fråga 3:
        vad skulle hända ifalla man skulle ändra variabel name?

            Inne i funktionen:
                - name är parameten du blir att sicka in till den.
            
            Utanför funktionen:
                - name blir en global variabel.
            
            dessa två "name" blir inte att påverka varandra.
            det är oberoende av varandra trots att det är samma namn på dom.
    Fråga 4:
        Vad det som skiljer mellan variabel, parameter och argument?

        variabel:
            - är som en box som du kan lagra ett värde i sig.
            - exempel: let age = 20;
        
        parameter:
            - är namnet på variaben innuti en funktion.
            - exempel: function greet(name) och då är name parametern.

        argument:
            - detta är de faktiska värdet du blir att sicka in till funktionen.
            - exempel: greet("Mikaela") då blir "Mikaela" ett argument.
*/