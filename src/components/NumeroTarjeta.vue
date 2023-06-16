<template>
     <div>
        <label>Número de la tarjeta 
        </label>
        <input
        type="number"
            v-model="numeroTarjeta"
            @input="validarTarjeta"
            :class="[tarjetaValida ? 'input-valid' : 'input-invalid']"
        />
        <p>{{ numeroTarjeta | separarNumero }}</p>
        <p class="valido" v-if="!tarjetaValida">El número ingresado debe tener 16 dígitos.</p>
    </div>
</template>
<script>
export default {
    name: 'NumeroTarjeta',

    methods: {
        validarTarjeta() {
            this.tarjetaValida = this.numeroTarjeta.length == 16
        }
    },
    filters : {
        separarNumero(value) {
            return `${value}`.replace(/\B(?=(\d{4})+(?!\d))/g, " ");
        },
    },

    data() {
        return {
            numeroTarjeta: '',
            tarjetaValida: true,
        }
    }
}

</script>