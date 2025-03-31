var App = Vue.component('App', {
    template: `
    <!-- v-once: il contenuto di questo div viene renderizzato solo una volta e non si aggiorna più -->
        <div v-once class="container">
            <h1> {{ titolo }} </h1>
            
            <!-- v-bind: associa dinamicamente uno stile all'elemento -->
            <p> <span v-bind:style="colorRed">5 + 3 fa: </span> {{ 5 + 3 }}</p>
            <p> <span v-bind:style="{color: color}">2 + 2 fa: </span> {{ 2 + 2 }}</p>
            
            <!-- Forma abbreviata di v-bind -->
            <p> <span :style="colorRed">5 + 3 fa: </span> {{ 5 + 3 }}</p>
            
            <!-- Stampa il nome e cognome dell'utente -->
            <p> {{ user.firstName }} {{ user.secondName }} </p>
            
            <!-- Chiama il metodo getFullName() per ottenere il nome completo -->
            <p> {{ user.getFullName() }} {{ titolo }} </p>
            
            <!-- Associa dinamicamente un link -->
            <p><a :href="myUrl">Vai su Google</a></p>
            
            <!-- Il pulsante è disabilitato se isDisabled è true -->
            <button class="btn btn-primary" :disabled="isDisabled">Click</button>
            
            <!-- Stampa se il pulsante è disabilitato o meno -->
            <p>Disabilitato: {{ isDisabled ? 'Si' : 'No' }}</p>
            
            <!-- Stampa il nome completo in maiuscolo -->
            <p>Nominativo completo in maiuscolo: {{ user.getFullName().toUpperCase() }}</p>
        </div>
    `,
    data() {
        return {
            titolo: "Salve a tutti!", // Titolo principale
            color: "red", // Colore dinamico per lo stile
            colorRed: "color: red", // Stile inline per il colore rosso
            myUrl: "http://www.google.com", // URL dinamico per il link
            isDisabled: true, // Stato del pulsante (abilitato/disabilitato)
            user: {
                firstName: 'Daniele', // Nome dell'utente
                secondName: 'Segreto', // Cognome dell'utente
                getFullName() {
                    return this.firstName + ' ' + this.secondName; // Ritorna il nome completo
                }
            },
        }
    },
});

// Creazione di una nuova istanza di Vue che monta il componente su un elemento con id "app"
new Vue({
    el: "#app",
});