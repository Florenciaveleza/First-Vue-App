<template>
    <section id="formulario" class="m-5">
        <div class="container">
            <div class="row">
                <div class="col-6">
                    <h2>Datos de pago</h2>
                    <NumeroTarjeta />
                    <TitularTarjeta />
                    <VencimientoTarjeta />
                    <CvvTarjeta />
                    <DniTarjeta />
                    <CuotasTarjeta />
                    <MontoCompra precio="3999"/>
                </div>
                <div class="col-6 envio">
                <h2>Datos de envio</h2>
                    <DireccionCompra />
                    <CodigoPostal />
                    <CheckboxCampo />
                </div>
            </div>
        </div>
    </section>
</template>
<script>
import NumeroTarjeta from "./NumeroTarjeta.vue";
import TitularTarjeta from "./TitularTarjeta.vue";
import VencimientoTarjeta from "./VencimientoTarjeta.vue";
import CvvTarjeta from "./CvvTarjeta.vue";
import DniTarjeta from "./DniTarjeta.vue";
import CuotasTarjeta from "./CuotasTarjeta.vue";
import MontoCompra from "./MontoCompra.vue";
import DireccionCompra from "./DireccionCompra.vue";
import CodigoPostal from "./CodigoPostal.vue";
import CheckboxCampo from "./CheckboxCampo.vue";
export default {
    name: 'PagoPage', 

    components : {
        NumeroTarjeta,
        TitularTarjeta,
        VencimientoTarjeta,
        CvvTarjeta,
        DniTarjeta,
        CuotasTarjeta,
        MontoCompra,
        DireccionCompra,
        CodigoPostal,
        CheckboxCampo
    }
}
</script>
<style>
#formulario {
  color: white;
}

#formulario input {
  background: none;
  border: 1px solid rgb(56, 56, 56);
  margin-left: 1rem;
  margin-top: 1rem;
  border-radius: 5px;
}

#formulario select{
  background: none;
  border: 1px solid rgb(56, 56, 56);
  margin-left: 1rem;
  margin-top: 1rem;
  color: white;
  padding: 2px;
  border-radius: 5px;
}

#formulario option {
background-color: var(--text);
}

#formulario p {
  color: rgb(144, 144, 144);
}
.detail-cont {
  max-width: 600px;
  max-height: 550px;
  background-color: rgb(41, 41, 41);
  border-radius: 10px;
}

.inputVencimiento {
  color: white;
}

.envio input{
  color: white;
}
.input-valid {
  color: rgb(16, 119, 43);
}
.input-invalid {
  color: red;
  border: solid 3px red;
  border-radius: 5px;
}
</style>