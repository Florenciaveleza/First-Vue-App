<template>
     <div>
        <label for="">Código Postal</label>
        <input
        type="number"
            v-model="cp"
            @input="validarCp"
        />
        <p class="valido" v-if="!cpValido">Debe ingresar un número válido</p>
    </div>  
</template>
<script>
export default {
    name : 'CodigoPostal',

    methods : {
        validarCp() {
            this.cpValido = this.cp.length == 4
        }
    },

    data() {
        return{
            cp : null,
            cpValido : true
        }
    }
}
</script>