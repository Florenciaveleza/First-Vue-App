<template>
    <div>
            <label for="">Dirección</label>
            <input
            type="text"
                v-model="direccion"
                @input="validarDireccion"
            />
            <p class="valido" v-if="!direccionValida">Debe ingresar una dirección</p>
        </div>
</template>
<script>
export default {
    name : 'DireccionCompra',

    methods : {
        validarDireccion() {
           this.direccionValida = this.direccion !== ''
        }
    },

    data() {
        return {
            direccion : null,
            direccionValida : true
        }
    }
}
</script>