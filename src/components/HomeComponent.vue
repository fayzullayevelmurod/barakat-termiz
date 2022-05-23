<template>
    <div
          id="hero-section"
          data-number="3"
          data-image-1="/img/slider/1.jpg"
          data-image-2="/img/slider/2.jpg"
          data-image-3="/img/slider/6.jpg"
          data-effect="fade"
        >
          <div class="hero-content">
            <div class="hero-title scroll" data-min="20px" data-max="80px">
              <h1>Добро пожаловать</h1>
              <h1>Баракат Термез</h1>
              <h1>Как мы можем вам помочь?</h1>
            </div>

            <div class="hero-text">
              <p>Дома, которые мы построили, - это прочные дома</p>
            </div>

            <div class="hero-button">
              <a class="wprt-button rounded-3px" href="#about">О нас</a>
            </div>
          </div>
          <!-- /.hero-content -->
          <a class="arrow scroll-target" href="#services-section"></a
          ><!-- change href value to ID of section you want to scroll down -->
    </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>