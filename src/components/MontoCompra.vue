<template>
    <p><span class="totales">Subtotal: </span> {{ precio | precio}}</p>
</template>
<script>
export default {
    name : 'MontoCompra',

    filters: {
            precio (value) {
                return new Intl.NumberFormat('es-AR', {
                    style: 'currency',
                    currency: 'ARS'
                })
                .format(value)
            } 
        },

        props : [
            'precio'
        ],
}
</script>