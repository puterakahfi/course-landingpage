<template>
  <nav class="navbar is-transparent container">
    <div class="navbar-brand">
      <nuxt-link to="/" class="navbar-item has-text-weight-bold">
        <img
          src="https://img.icons8.com/dusk/384/e-learning.png"
          alt="Course: Course awesome landingpage"
        > COURSE
      </nuxt-link>
      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <nuxt-link to="/testimonials" class="navbar-item">Testimonials</nuxt-link>
        <nuxt-link to="/faq" class="navbar-item">FAQ</nuxt-link>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a
                class="button is-white"
                target="_blank"
                href="https://github.com/puterakahfi/course-landingpage/issues"
              >
                <span class="icon">
                  <fa :icon="['fab', 'github']" class="fa-2x"/>
                </span>
              </a>
            </p>
          </div>
        </div>
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