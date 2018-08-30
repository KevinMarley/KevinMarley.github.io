<template>
  <footer class="page-footer footer">

    <!-- Links Container -->
    <div class="container">
      <div class="row">

        <!-- Footer Heading -->
        <div class="col s12">
          <h5 id="Connect" class="footer__heading">
            Connect with Kevin
          </h5>
          <p class="footer__p">
            kevinmarleyward12@gmail.com
          </p>
        </div>

        <!-- Footer Links -->
        <div class="col s12">
          <ul class="footer__list">
            <li class="footer__list__item">
              <a class="footer__link" href="https://www.facebook.com/KevinMarleyWard12">
                <img class="footer__link__img" src="@/assets/Flogo.png">
              </a>
            </li>
            <li class="footer__list__item">
              <a class="footer__link" href="https://www.instagram.com/kevin.marley.ward12/">
                <img class="footer__link__img" src="@/assets/IG.png">
              </a>
            </li>
            <li class="footer__list__item">
              <a class="footer__link" href="https://twitter.com/Kevin_MarleyW12">
                <img class="footer__link__img" src="@/assets/TLogo.png">
              </a>
            </li>
            <li class="footer__list__item">
              <a class="footer__link" href="mailto:kevinmarleyward12@gmail.com">
                <img class="footer__link__img" src="@/assets/GLogo.png">
              </a>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Footer Copyright -->
    <div class="footer-copyright">
      <div class="container">
        <div class="row">

          <div class="col s6">
            Copyright &copy; 2018  Kevin Marley <br />
            <span class="vapurrmaid">
              Developed, Designed by
              <a class="vapurrmaid vapurrmaid__logo" href="https://github.com/vapurrmaid">
                Vapurrmaid
              </a>
            </span>
          </div>

          <div class="col s6 footer__reporting">
            <a class="footer__reporting__link" href="https://github.com/KevinMarley/KevinMarley.github.io/tree/dev">
              <i class="material-icons white-text">code</i>
            </a>
            <a href="https://github.com/KevinMarley/KevinMarley.github.io/issues">
              <i class="material-icons white-text">bug_report</i>
            </a>
          </div>

        </div>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="scss">
@import '../sass/abstracts/variables';

.footer {
  min-width: 320px;
  background-color: $color-primary-light-2 !important;

  &__heading {
    letter-spacing: 2px;
  }

  &__p {
    padding: .5rem 0;
  }

  &__list {

    &__item {
      float: left;
      transition: all .5s ease;
      &:not(:last-child) { margin-right: 1rem; }
      &:hover { transform: scale(1.2); }
    }
  }

  &__link {

    &__img { height: 3rem; }
  }

  &__reporting {
    text-align: right;

    &__link {
      &:not(:last-child) { margin-right: 1rem;}
    }
  }
}

.vapurrmaid {
  color: $color-black;

  &__logo {
    font-family: 'VT323', monospace;
    letter-spacing: 1px;
  }
}
</style>
