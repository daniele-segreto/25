$(document).ready(function () {

    // Seleziona tutti gli input con classe "numero"
    $(".numero").on("input", function () {
        // Rimuove tutti i caratteri non numerici
        this.value = this.value.replace(/[^0-9]/g, "");
    });

    let operazione = null; // Memorizza l'operatore selezionato

    // Gestione del clic sui pulsanti degli operatori (+, -, x, :)
    $(".operatore").on("click", function () {
        const operatore = $(this).text().trim();

        // Se l'utente clicca su "=", calcola il risultato
        if (operatore === "=") {
            const numero1 = parseFloat($(".numero").eq(0).val());
            const numero2 = parseFloat($(".numero").eq(1).val());

            // Controlla se i numeri sono validi
            if (isNaN(numero1) || isNaN(numero2)) {
                $(".alert-container").html(`
                    <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        Inserisci due numeri validi!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `);
                return;
            }

            // Calcola il risultato in base all'operazione selezionata
            let risultato;
            switch (operazione) {
                case "+":
                    risultato = numero1 + numero2;
                    break;
                case "-":
                    risultato = numero1 - numero2;
                    break;
                case "x":
                    risultato = numero1 * numero2;
                    break;
                case ":":
                    if (numero2 === 0) {
                        $(".alert-container").html(`
                            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                                Divisione per zero non consentita!
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        `);
                        return;
                    }
                    risultato = numero1 / numero2;
                    break;
                default:
                    $(".alert-container").html(`
                        <div class="alert alert-danger alert-dismissible fade show" role="alert">
                            Seleziona un'operazione prima di calcolare il risultato!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    `);
                    return;
            }

            // Mostra il risultato
            $(".risultato").text(risultato);
        } else {
            // Memorizza l'operatore selezionato
            operazione = operatore;
        }
    });

});