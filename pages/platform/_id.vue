<template>
  <div class="container">
    <div class="columns align-items-center">
      <div class="column is-7">
        <section class="hero is-marginless">
          <div class="hero-body">
            <h1>Dana Syariah</h1>
            <div class="titleunderline"></div>

            <p>Dana Syariah adalah perusahaan P2P lending dengan menggunakan pprinsip syariah yang menyasar konsumen dari sektor properti. Dengan pinjaman mulai Rp1 miliar dan tenor 1 tahun, Dana Syariah telah menyalurkan pembiayaan kepada 10 proyek properti hingga akhir.</p>
          </div>
        </section>

        <br>
      </div>

      <div class="column is-5">
        <section class="hero is-marginless">
          <div class="hero-body">
            <h3 class="title is-5 is-marginless">Informasi</h3>
            <div class="titleunderline"></div>
            <br>
            <p>
            Tahun Berdiri : 2018
            <br>
            Aplikasi  : Android / ios
            </p>
          </div>
        </section>

        <br>
      </div>
    </div>

    <nav class="level">
      <div class="level-item has-text-left">
        <div>
          <span class="title is-marginless">
            <figure class="image is-128x128">
              <img src="https://afpi.or.id/fm/Members/3221_151567627cf.png">
            </figure>
          </span>
        </div>
      </div>
      <div class="level-item has-text-left">
        <div>
          <p class="heading">Tahun Berdiri</p>
          <p class="title">2018</p>
        </div>
      </div>

      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Followers</p>
          <p class="title">456K</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Likes</p>
          <p class="title">789</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Likes</p>
          <p class="title">789</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Likes</p>
          <p class="title">789</p>
        </div>
      </div>
      <div class="level-item has-text-centered">
        <div>
          <p class="heading">Likes</p>
          <p class="title">789</p>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  validate({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id);
  }
};
</script>

