<!--
File: Landing.vue

Description: Temporary Landing Page.

Author: Vapurrmaid <vapurrmaid@gmail.com>

Copyright (C) 2018 kevinmarley.ca <vapurrmaid@gmail.com>

This code can be freely viewed and forked as per the GitHub
terms of service. However, it may not be modified or distributed.
The members of {@link https://github.com/KevinMarley} hold the sole rights
for contribution and modification.
-->
<template>
  <div class="landing">
    <header class="container valign-wrapper">
      <div>
        <h1>
          <span>K</span>evin
          <span>M</span>arley
        </h1>
        <h2>Sales Representative <br />
            Davenport Realty Brokerage <br />
            Hamilton, ON
        </h2>
        <a class="social-icon" href="https://www.facebook.com/kevinmarleydavenport" title="Kevin Marley's Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a class="social-icon" href="https://twitter.com/Kevin_M_dvnprt" title="Kevin Marley's Twitter">
          <i class="fab fa-twitter"></i>
        </a>
        <a class="social-icon" href="https://www.instagram.com/kevin.marley.dvnprt/" title="Kevin Marley's Instagram">
          <i class="fab fa-instagram"></i>
        </a>
      </div>
    </header>
    <!-- <h3>Coming Soon</h3> -->
  </div>
</template>

<style>
.landing {
    width: 100vw;
    height: 100vh;

    min-width: 320px;
    min-height: 500px;

    background-image: linear-gradient(
    to right bottom,
    rgba(194, 24, 91, 0.6),
    rgba(92, 107, 192, 0.6));
    background-size: cover;
    color: #FFF;
    text-align: center;
}

header > div {
  width: 100%;
}

@media only screen and (max-width: 420px) {
  .landing h1 {
    width: initial;
    text-align: left;
  }
}

.landing h1 {
  font-family: 'Lato', sans-serif;
  font-size: 3rem;
  font-weight: 100;
  letter-spacing: 5px;
  text-transform: uppercase;
}

.landing h1 span {
  font-size: 4.2rem;
  font-weight: 300;
}

.landing header {
  height: 90%;
  text-align: center;
}

@media only screen and (max-width: 420px) {
  .landing header { text-align: left; }
}

.landing h2 {
  font-family: 'Lato', sans-serif;
  font-size: 1.5rem;
  font-weight: 300;
}

.social-icon {
  display: inline-block;
  width: 36px;
  height: 36px;
  margin: 0 5px;
  padding: 6px 0;

  border: 1px solid #FFF;
  border-radius: 50%;
  text-align: center;

  color: #FFF;
  cursor: pointer;

  transition: all .2;
}

.social-icon:hover {
  color: #ddd;
  border-color: #ddd;
}

/*h3 {
  position: absolute;
  top: 0;
  left: 1rem;

  font-family: 'Montserrat', sans-serif;
  font-size: 2rem;
  font-weight: 100;
  text-transform: lowercase;
}*/
</style>
