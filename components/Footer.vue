<template>
  <footer class="footer">
    <div class="content has-text-centered has-text-white">
      <p>
        <strong class="has-text-white">COURSE LANDINGPAGE</strong>
        BY
        <a href="https://puterakahfi.github.io" class="is-uppercase">Putera Kahfi</a>
        <br>
      </p>
      <p class="is-size-7">
        The source code is licensed
        <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. The website content
        is licensed
        <a
          href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
        >CC BY NC SA 4.0</a>.
      </p>
      <a href="https://bulma.io" class="has-margin-bottom-100">
        <img
          src="https://bulma.io/images/made-with-bulma--dark.png"
          alt="Made with Bulma"
          width="128"
          height="24"
        >
      </a>
      <br>
      <div class="is-inline is-size-7">
        <a href="https://bulma.io">bulma.io</a> -
        <a href="https://nuxtjs.org/">nuxtjs.com</a>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
footer {

  a {
    color: turquoise;
    &:hover{
      color: white;
    }
  }
}
</style>



<script>
export default {
  props: ["data"]
};
</script>
