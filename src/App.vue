<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <router-link to="/" class="logo">Burger queen</router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <router-link to="/MenuPage">Menú</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>

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
  background-color: var(--bg-gray);
}
h1 {
  font-size: 2.5rem;
  font-weight: bold !important;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
} 
/*NAV*/
.bg-dark {
  background: black !important;
}

.logo {
  font-family: "Rubik", sans-serif;
  font-size: 1.5rem;
}

/* Estilo a */
a {
  color: white !important;
  text-decoration: none !important;
  font-weight: 600;
  padding: 1.5rem;
}

a:hover {
  color: white;
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 1.25rem;
  }
  p {
    font-size: 1rem;
  }
  .img-sm {
    max-width: 300px;
  }
}
</style>
