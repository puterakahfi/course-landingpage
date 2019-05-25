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
        <a
          class="navbar-item is-white"
          target="_blank"
          href="https://github.com/puterakahfi/course-landingpage/issues"
        >
          <span class="icon">
            <fa :icon="['fab', 'github']" class="fa-2x"/>
          </span>
        </a>
      </div>
    </div>
  </nav>
</template>


<script>
export default {
  mounted() {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(
      document.querySelectorAll(".navbar-burger"),
      0
    );

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
      // Add a click event on each of them
      $navbarBurgers.forEach(el => {
        el.addEventListener("click", () => {
          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle("is-active");
          $target.classList.toggle("is-active");
        });
      });
    }
  }
};
</script>


<style scoped lang="scss">
.navbar {
  left: 0;
  right: 0;
  background-color: transparent;
  padding-top: 20px;
  padding-bottom: 20px;
  height: auto;

  .navbar-brand {
    .nuxt-link-active {
      border: none !important;
    }
  }
  .nuxt-link-active {
    border: none !important;
  }
  .nuxt-link-exact-active {
    font-weight: bold;
    border-bottom: solid 2px #3b82fa !important;
    border-bottom-width: medium;
  }
}
</style>