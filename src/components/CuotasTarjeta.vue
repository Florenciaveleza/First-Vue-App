<template>
    <select>
        <option v-for="cuota in cuotas" :key="cuota">{{ cuota }} cuotas sin interés</option>
    </select>
</template>
<script>
export default {
    name : 'CuotasTarjeta',

    data() {
            return {
                cuotas: [
                    '1',
                    '3',
                    '6',
                    '12',
                ]
            }
        }

}
</script>