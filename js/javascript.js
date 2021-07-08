/* 
Quali campi inserire nel form:

Una casella di testo per il form del passeggero
Una casella numerica per i km
Una tendina per selezionare la fascia d'età (Maggiorenne, Minorenne, Over65)
NON E' NECESSARIA ALCUNA VALIDAZIONE

Come calcolare  il prezzo:

il prezzo del biglietto è definito in base ai km (0.21 € al km) 
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali,

Cosa stampare sul biglietto:

Nome passeggero
Codice treno (inseriamo una stringa a caso, per ora)
Numero carrozza (randomizziamo una carrozza da 1 a 12)
Prezzo (stampato con due decimali)
Tariffa applicata all'utente (Tariffa minori, Tariffa ordinaria, Tariffa Over65)

Per la parte grafica

Facciamola solo se tutto il resto della logica è funzionante, vi allego uno screen dell'esercizio fatto in classe senza stile e una da prendere come esempio per la parte visiva. Sentitevi liberi di personalizzare ulteriormente la grafica se vi va.

Bonus

Nascondiamo la sezione del biglietto se non è ancora stato generato il biglietto stesso.
Aggiungiamo una funzione che ci permetta di resettare i campi del form ai valori originali. */

var buttonGenera = document.getElementById('genera');

buttonGenera.addEventListener('click', event => {
    var nome = document.getElementById('nome').value;
    var km = document.getElementById('km').value;
    var fasciaEta = document.getElementById('fascia_eta').value;
    var prezzo = 0.21 * km;

    if (fasciaEta === 'minorenne' ){
        prezzo *= 0.8;
    }
    else if (fasciaEta === 'over_65' ){
        prezzo *= 0.6;
    }
    var totale = document.getElementById('totale');
    totale.innerHTML ='costo biglietto Euro ' + prezzo.toFixed(2);


});


var buttonAnnulla = document.getElementById('annulla');

buttonAnnulla.addEventListener('click', event => {
    alert ('ciao annulla');




    
});