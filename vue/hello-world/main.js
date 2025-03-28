// Creazione di un'istanza di Vue
var app = new Vue({
    // Associa l'istanza di Vue all'elemento con id 'app'
    el: '#app',
    // Definisce i dati dell'applicazione
    data: {
        // Proprietà 'titolo' con valore iniziale 'Hello World'
        titolo: 'Hello World'
    },
    // template: '<button>{{ titolo }}</button>' // Template HTML che mostra il valore di 'titolo' (sostituisce tutto il contenuto di #app)
});

// Seleziona l'elemento con id 'saluto' e associa un evento click
$('#saluto').click(function (e) { 
    // Previene il comportamento predefinito dell'elemento (es. un link che ricarica la pagina)
    e.preventDefault();
    // Modifica il valore della proprietà 'titolo' dell'istanza Vue
    app.titolo = 'Mi hai cliccato!';
});
