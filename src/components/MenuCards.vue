<template>
   <div class="container">
        <div class="row">
            <div class="col d-flex" v-for="product in products" :key="product.id">
                <div class="card mb-3" style="width: 18rem;">
                <router-link to="/DetallePage" class="title-menu"><img :src="product.imagen" class="card-img-top" alt="img"></router-link>
                    <div class="card-body text-center">
                    <router-link to="/DetallePage" class="title-menu">{{ product.title }}</router-link>
                    <p>{{ product.text }}</p>
                    <p>{{ product.precio | precio}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
   name: 'MenuCards',
   data() {
        return {
            //JSON PROVISIONAL (Debe hacer fetch a php)
            products : [
                {   "id" : 1,
                    "imagen" : "../assets/product1.png",
                    "title" : "Chef burger",
                    "text" : "Cubierta con queso derretido, bacon, cebolla caramelizada y una irresistible salsa casera",
                    "precio" : "2999"
                    
                },
                {
                    "id" : 2,
                    "imagen" : "../assets/product2.png",
                    "title" : "Clásica burger",
                    "text" : "Carne a la parrilla, pan, queso, ketchup, mostaza, papas regulares.",
                    "precio" : "2999"
                },
                {
                    "id" : 3,
                    "imagen" : "../assets/product3.png",
                    "title" : "Picante",
                    "text" : "Carne picante, pan, queso, guacamole, cebolla y tomate.",
                    "precio" : "2999"
                },
                {
                    "id" : 4,
                    "imagen" : "../assets/product4.png",
                    "title" : "Veggie",
                    "text" : "Medallon a base de plantes a la parrilla, pan, mayonesa, ketchup, cebolla, tomate, pepinos y lechuga.",
                    "precio" : "2999"
                },
                {
                    "id" : 5,
                    "imagen" : "../assets/product5.png",
                    "title" : "BBQ",
                    "text" : "Medallon de carne, barbacoa, pan, queso, mostaza, pepinos, lechuga y tomate",
                    "precio" : "2999"
                },
                {
                    "id" : 6,
                    "imagen" : "../assets/product6.png",
                    "title" : "kids burger",
                    "text" : "Carne a la parrilla, pan, queso, ketchup, mostaza, papas regulares, tamaño mediano",
                    "precio" : "2999"
                },
                {
                    "id" : 7,
                    "imagen" : "../assets/product7.png",
                    "title" : "queso burger",
                    "text" : "carne, pan, salsa 4 quesos, panceta, lechuga y tomate",
                    "precio" : "2999"
                },
                {   
                    "id" : 8,
                    "imagen" : "../assets/product8.png",
                    "title" : "pay burger",
                    "text" : "triple carne a la parrilla, pan, panceta, queso cheddar con balde de papas. ",
                    "precio" : "2999"
                },
                
                
            ],
            
        }
    },

    filters: {
            precio (value) {
                return new Intl.NumberFormat('es-AR', {
                    style: 'currency',
                    currency: 'ARS'
                })
                .format(value)
            } 
        }

}

</script>
<style>
.card {
  border: 1px solid white !important;
  background-color: var(--bg-gray) !important;
}
.card-body {
  color: white;
}
.title-menu:hover {
  font-weight: bold;
  text-decoration: underline;
}
p {
    color: white;
}
</style>
