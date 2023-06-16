<template>
     <div>
        <label for="">DNI</label>
        <input type="number" v-model="dni" @input="validarDni" :class="[dniValido ? 'input-valid' : 'input-invalid']"> 
        <p class="valido" v-if="!dniValido">Los datos ingresados son incorrectos</p>
    </div>
</template>
<script>
export default {
    name : 'DniTarjeta',

    methods : {
        validarDni() {
            this.dniValido = this.dni.length == 7 || this.dni.length == 8
        }
    },

    data() {
        return {
            dni: '',
            dniValido: true,
        }
    }
}
</script>