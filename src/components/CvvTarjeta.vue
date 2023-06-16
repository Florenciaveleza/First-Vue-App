<template>
    <div>
        <label for="">CVV</label>
        <input type="number" v-model="cvv" @input="validarCVV" placeholder="Ej: 123" :class="[cvvValido ? 'input-valid' : 'input-invalid']"/>
        <p class="valido" v-if="!cvvValido">Los datos ingresados son incorrectos</p>
    </div>
</template>
<script>
export default {
    name : 'CvvTarjeta',

    methods : {
        validarCVV() {
            this.cvvValido = this.cvv.length == 3
        }
    },

    data() {
        return {
            cvv: '',
            cvvValido: true,
        }
    }
}
</script>