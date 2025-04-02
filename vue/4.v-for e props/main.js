var App = Vue.component('App', {
    template: `
        <div class="container">
            <!-- Renderizza il componente 'product-list' -->
            <product-list></product-list>
        </div>
    `,
    data() {
        return {}
    },
});

// Componente product-lst (componente padre)
Vue.component('product-list', {
    template: `
        <div>
            <h2>Elenco dei prodotti</h2>

            <div>
                <!-- Renderizza il componente 'product-box' -->
                <!-- Il v-for crea un componente 'product-box' per ogni prodotto -->
                <!-- :key serve per rendere dinamico il componente -->
                <!-- v-bind:item associa il prodotto corrente al componente, inviando l'oggetto al componente figlio -->
                <product-box v-for="product in products" :key="product.id" v-bind:item="product"></product-box>
            </div>
        </div>
    `,

    data() {
        return {
            // Array di oggetti prodotto
            products: [
                {
                    id: 1,
                    nome: "Prodotto 1",
                    descrizione: "Breve descrizione del prodotto 1",
                    prezzo: 10.99,
                    disp: 100
                },
                {
                    id: 2,
                    nome: "Prodotto 2",
                    descrizione: "Breve descrizione del prodotto 2",
                    prezzo: 19.99,
                    disp: 50
                },
                {
                    id: 3,
                    nome: "Prodotto 3",
                    descrizione: "Breve descrizione del prodotto 3",
                    prezzo: 29.99,
                    disp: 10
                },
                {
                    id: 4,
                    nome: "Prodotto 4",
                    descrizione: "Breve descrizione del prodotto 4",
                    prezzo: 39.99,
                    disp: 0
                },
                {
                    id: 5,
                    nome: "Prodotto 5",
                    descrizione: "Breve descrizione del prodotto 5",
                    prezzo: 49.99,
                    disp: 20
                },
                {
                    id: 6,
                    nome: "Prodotto 6",
                    descrizione: "Breve descrizione del prodotto 6",
                    prezzo: 59.99,
                    disp: 5
                }
            ]
        }
    },
});

// Componente product-box (componente figlio)
Vue.component('product-box', {
    template: `
        <div class="card" style="width:240px; float:left; margin:16px;">
            <!-- v-bind:src associa la url dell'immagine -->
            <img class="card-img-top"
                v-bind:src="'https://picsum.photos/240/240?image=' + item.id">
                <div class="card-body">
                    <h4 class="card-title">{{ item.nome }}</h4>
                    <p class="card-text">{{ item.descrizione }}</p>
                    <p class="card-text text-right"><strong>Prezzo: {{ item.prezzo }}</p>
                    <a href="#" class="btn btn-primary">Dettaglio</a>
                </div>
        </div>
    `,
    // Definizione delle props che il componente accetta, cioè l'oggetto prodotto che proviene dal componente padre
    props: ['item'],
});

// Creazione di una nuova istanza di Vue che monta il componente su un elemento con id "app"
new Vue({
    el: "#app",
});