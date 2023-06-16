<template>
    <section id="detalles">
        <div class="container">
            <div class="row m-5">
                <div class="col detail-cont d-flex justify-content-center align-items-center">
                    <img src="../assets/product5.png" class="card-img-top img-fluid" alt="img">
                </div>
                <div class="col m-2 d-flex justify-content-center align-items-center">
                    <div>
                        <h2>BBQ</h2>
                        <p>Medallon de carne, barbacoa, pan, queso, mostaza, pepinos, lechuga y tomate</p>
                        <input type="number" @input="validarCantidad" v-model="cantidad" :min="1" :max="5" class="mb-3" :class="[ cantidadValida ? 'input-valid' : 'input-invalid']"/>
                        <p v-if="!cantidadValida">
                            Solo puede comprar 5 unidades. 
                        </p>
                        <p v-else>
                            El mínimo de compra es de una unidad
                         </p>
                        <button type="button" class="btn-detalles" v-show="cantidadValida"><router-link to="/PagoPage" class="btn-text">Comprar</router-link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: 'DetallePage',

    methods : {
        validarCantidad() {
            this.cantidadValida = this.cantidad >= 1 && this.cantidad <= 5;

        },
    },

    data() {
        return {
            cantidad : 1,
            cantidadValida : true,
        }
    }
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@800&display=swap");
:root {
  --blue: rgb(15, 8, 65);
  --text: rgb(38, 43, 66);
  --orange: rgb(236, 168, 104);
  --bg-gray: rgb(20, 20, 20);
}

body {
  font-family: "Open Sans", sans-serif !important;
  color: var(--text);
  background-color: var(--bg-gray) !important;
}
h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold !important;
  color: white !important;
} 
.input-valid {
    border: solid 2.5px rgb(5, 103, 5);
}
.input-invalid {
  border: solid 2.5px red;
  border-radius: 5px;
}
input {
    background: none;
    border: solid 1px white;
    border-radius: 5px;
    color: white;
    outline: none;
}

#detalles {
  color: white;
}

.btn-detalles {
  background-color: white;
  border-radius: 5px;
  padding: 0.5rem;
}
.btn-text {
  color: var(--text) !important;
  font-weight: bold;
}

.btn-text:hover {
  color: var(--text);
}
</style>