<template>
    <div>
        <div>
            <label for="">Fecha de vencimiento</label>
            <input 
                type="number" min="1" max="12"
                v-model="vencimientoMes"
                @input="validarVencimiento"
                class="inputVencimiento"
                placeholder="MM"
            >
            <select v-model="vencimientoAño">
                <option 
                    v-for="año in vencimientoOptions" 
                    :value="año" :key="año" 
                    >
                    {{ año }}
                </option>
            </select>
            <p class="valido" v-if="!vencimientoValido">Los datos ingresados son incorrectos o la tarjeta se encuentra vencida.</p>
        </div>
    </div>
</template>
<script>
export default {
    name : 'VencimientoTarjeta',
    
    methods : {
        validarVencimiento() {
            this.vencimientoValido = this.vencimientoMes > 0 && this.vencimientoMes < 13
        },

        generarAños() {
            let año = (new Date).getFullYear()
            let años = []

            for (let i = 0; i < 5; i++) {
                años.push(String(año+i).slice(2,4))
            }

            this.vencimientoOptions = años
        },
    },

    mounted() {
        this.generarAños()
    },

    data() {
        return {
            vencimientoValido: true,
            vencimientoMes: null,
            vencimientoAño : null,
            vencimientoOptions : []
        }
    }

}

</script>
