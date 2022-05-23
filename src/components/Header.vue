<template>
  <div id="site-header-wrap">
    <!-- Top Bar -->
    <div id="top-bar" class="style-2">
      <div id="top-bar-inner" class="container">
        <div class="top-bar-inner-wrap">
          <div class="top-bar-socials">
            <div class="inner">
              <span class="icons">
                <a href="#" title="Telegram"
                  ><span class="fa fa-telegram" aria-hidden="true"></span
                ></a>
                <a href="#" title="Facebook"
                  ><span class="fa fa-facebook" aria-hidden="true"></span
                ></a>
                <a href="#" title="Instagram"
                  ><span class="fa fa-instagram" aria-hidden="true"></span
                ></a>
              </span>
            </div>
          </div>
          <!-- /.top-bar-socials -->

          <div class="top-bar-content">
            <span id="top-bar-text">
              <i class="fa fa-phone-square"></i
              ><a href="tel:+998997397770">+998 99 739 77 70</a>
              <i class="fa fa-envelope"></i
              ><a href="mailto:barakattermiz@gmail.com"
                >barakattermiz@gmail.com</a
              >
              <i class="fa fa-clock-o"></i>Рабочее время: 8:00 - 19:00 </span
            ><!-- /#top-bar-text -->
          </div>
          <!-- /.top-bar-content -->
        </div>
      </div>
    </div>
    <!-- /#top-bar -->

    <!-- Header -->
    <header id="site-header" class="header-front-page style-5">
      <div id="site-header-inner" class="container">
        <div class="wrap-inner">
          <div id="site-logo" class="clearfix">
            <div id="site-logo-inner">
              <router-link
                to="/"
                title="Bosh sahifa"
                rel="Bosh sahifa"
                class="main-logo"
              >
                <img
                  src="/img/logo-b.png"
                  alt="Construction"
                  data-retina="/img/logo-b.png"
                  data-width="200"
                  data-height="30"
                  width="250"
                  height="100"
                />
              </router-link>
            </div>
          </div>
          <div class="mobile-button"><span></span></div>
          <nav id="main-nav" class="main-nav">
            <ul class="menu">
              <li class="menu-item"><router-link to="/">Домой</router-link></li>
              <li class="menu-item"><a href="#about">О нас</a></li>
              <li class="menu-item"><router-link to="/Project">проекты</router-link></li>
              <li class="menu-item"><router-link to="/Team">команда</router-link></li>
            </ul>
          </nav>
          <!-- /#main-nav -->

          <div id="header-search">
            <a class="header-search-icon" href="#"
              ><span class="fa fa-search"></span
            ></a>

            <form
              role="search"
              method="get"
              class="header-search-form"
              action="#"
            >
              <input
                type="text"
                value=""
                name="s"
                class="header-search-field text-20"
                placeholder="Поиск"
              />
              <button
                type="submit"
                class="header-search-submit"
                title="Search"
              >
                Поиск
              </button>
              <input type="hidden" name="post_type" value="post" />
            </form>
          </div>
          <!-- /#header-search -->
        </div>
      </div>
      <!-- /#site-header-inner -->
    </header>
    <!-- /#site-header -->
  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>