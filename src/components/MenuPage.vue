<template>
     <section id="menu">
        <h2 class="p-5">Nuestro menú</h2>
        <MenuCards/>
    </section>
</template>

<script>
import MenuCards from "./MenuCards.vue";
export default {
    name: 'MenuPage',
    components: {
        MenuCards
    }
}

</script>
<style>
#menu {
  background-color: var(--bg-gray);
}
@import url("https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Rubik:wght@800&display=swap");
:root {
  --blue: rgb(15, 8, 65);
  --text: rgb(38, 43, 66);
  --orange: rgb(236, 168, 104);
  --bg-gray: rgb(20, 20, 20);
}

body {
  font-family: "Open Sans", sans-serif !important;
  color: var(--text);
  background-color: var(--bg-gray) !important;
}
h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold !important;
  color: white !important;
} 

</style>