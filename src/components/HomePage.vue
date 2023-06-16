<template>
    <section id="home" class="d-flex align-items-center">
    <div class="container">
      <div class="row">
        <div class="col-4 ms-5">
          <div>
            <h1>Mas que una hamburguesa</h1>
            <p>Disfruta de las mejores hamburguesas.</p>
            <button class="btn-menu"><router-link to="/MenuPage">Menu</router-link></button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
    name: 'HomePage'
}

</script>
<style>
#home {
  position: relative;
  background: url(../assets/hero.jpg) no-repeat center center fixed;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  margin: 0; 
  padding: 0;
  color: white;
}
.btn-menu {
  border: 2px solid white;
  background: none;
  border-radius: 5px;
}
a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  padding: 1.5rem;
}

a:hover {
  color: white;
}

@media only screen and (max-width: 600px) {
    #home {
    background-image: url(../assets/hero-mobile.jpg);
  }
}
</style>
