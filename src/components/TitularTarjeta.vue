<template>
 <div>
        <label for="">Titular de la tarjeta</label>
        <input
            :class="[titularValido ? 'input-valid' : 'input-invalid']"
            type="text"
            @input = "titularValidar"
            v-model="titular"
        />
        <p v-if="!titularValido" class="valido">Ingrese un valor válido</p>
        <p v-else> Ingrese el nombre como figura en la tarjeta</p>
    </div>
</template>
<script>
export default {
    name : 'TitularTarjeta',
    methods : {
        titularValidar() {
            this.titularValido = this.titular.length > 5;
        }
    },

    data() {
        return {
            titularValido: true,
            titular: ''
        }
    }
}
</script>