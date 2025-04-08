$(document).ready(function () {
    
    // Seleziona tutti gli input con classe "numero"
    $(".numero").on("input", function () {
        // Rimuove tutti i caratteri non numerici
        this.value = this.value.replace(/[^0-9]/g, "");
    });
    
    // Inizializzo le variabili
    let num1;
    let num2;
    let risultato;
    
    // Al click su un operatore
    $(".operatore").click(function (e) {
        e.preventDefault();
        const operatore = $(this).text(); // Usa .text() per ottenere il testo del pulsante
        
        // Catturo i valori/controllo se i campi sono vuoti
        num1 = $("#num1").val();
        num2 = $("#num2").val();
        
        // Se alcuni numeri non sono ancora stati inseriti
        if (!num1 || !num2) {
            alert("Inserisci entrambi i numeri prima di selezionare un'operazione!");
            return; // Interrompe l'esecuzione se i campi sono vuoti
        }
        
        if (operatore === "+") {
            risultato = parseInt(num1) + parseInt(num2); // Converte i valori in numeri interi
        } else if (operatore === "-") {
            risultato = parseInt(num1) - parseInt(num2); // Converte i valori in numeri interi
        } else if (operatore === "x") {
            risultato = parseInt(num1) * parseInt(num2); // Converte i valori in numeri interi
        } else if (operatore === ":") {
            risultato = parseInt(num1) / parseInt(num2); // Converte i valori in numeri interi
        }
    });
    
    $("#risultato").click(function (e) { 
        e.preventDefault();
        
        // alert("RISULTATO FINALE: " + risultato);
        
        // Svuoto i campi di inputd
        $("#num1").val('');
        $("#num2").val('');
        
        // Inserisco il contenuto sul div con id "risultato-display"
        $("#risultato-display").html(`
            <div>${risultato}</div>
        `);
        });
        
        // Al click sul pulsante "C", azzero tutto quanto
        $("#azzera").click(function (e) { 
            e.preventDefault();
            
            // Svuoto tutti i campi
            num1 = $("#num1").val('');
            num2 = $("#num2").val('');
            risultato = $("#risultato-display").html('');
        });
        
    });