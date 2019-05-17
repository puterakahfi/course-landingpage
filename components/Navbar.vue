<template>
  <nav class="navbar container  " role="navigation" aria-label="main navigation">
    <div class="navbar-brand ">
      <nuxt-link to="/" class="navbar-item  is-paddingless">
        <strong>COURSE TITLE </strong> &nbsp;HERE
      </nuxt-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        
      </div>
    </div>
  </nav>
</template>


<style scoped>
.navbar {
  left: 0;
  right: 0;
  background-color: transparent;
  padding-top: 20px;
  padding-bottom: 20px;
  height: auto;
}
</style>