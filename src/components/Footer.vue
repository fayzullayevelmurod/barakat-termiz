<template>
    <div>
        <footer id="footer">
          <div id="footer-widgets" class="container style-1">
            <div class="row">
              <div class="col-md-4">
                <div class="widget widget_text">
                  <h2 class="widget-title"><span>О НАС</span></h2>
                  <div class="textwidget">
                    <img
                      src="/img/logo-b.png"
                      width="300"
                      height="130"
                      alt="image"
                      class="margin-top-5 margin-bottom-25"
                    />
                    <p></p>
                  </div>
                </div>
              </div>

              <div class="col-md-4">
                <div class="widget widget_links">
                  <h2 class="widget-title">
                    <span>РЕКОМЕНДАЦИИ О КОМПАНИИ</span>
                  </h2>
                  <ul class="wprt-links-clearfix col2">
                    <li class="style-2"><router-link to="/">Домой</router-link></li>
                    <li class="style-2">
                      <a href="#services-section">услуги</a>
                    </li>
                    <li class="style-2"><router-link to="/Project">проекты</router-link></li>
                  </ul>
                </div>
              </div>

              <div class="col-md-4">
                <div class="widget widget_information">
                  <h2 class="widget-title"><span>ДЛЯ КОНТАКТА</span></h2>
                  <ul class="style-2">
                    <li class="address-clearfix">
                      <span class="hl">Наш адресс</span>
                      <span class="text">Termiz shahri</span>
                    </li>
                    <li class="phone-clearfix">
                      <a href="tell:+998997397770">
                        <span class="hl">Телефон:</span>
                        <span class="text">+99 899 739 77 70</span>
                      </a>
                    </li>
                    <li class="email-clearfix">
                      <a href="mailto:barakattermiz@gmail.com">
                        <span class="hl">Электронной почты:</span>
                        <span class="text">barakattermiz@gmail.com</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div class="widget widget_spacer">
                  <div
                    class="wprt-spacer clearfix"
                    data-desktop="10"
                    data-mobi="10"
                    data-smobi="10"
                  ></div>
                </div>

                <div class="widget widget_socials">
                  <div class="socials">
                    <a target="_blank" href="#"
                      ><i class="fa fa-telegram"></i
                    ></a>
                    <a target="_blank" href="#"
                      ><i class="fa fa-facebook"></i
                    ></a>
                    <a target="_blank" href="#"
                      ><i class="fa fa-instagram"></i
                    ></a>
                    <a target="_blank" href="#"
                      ><i class="fa fa-youtube"></i
                    ></a>
                    <a target="_blank" href="#"
                      ><i class="fa fa-twitter"></i
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        <!-- Bottom -->
        <div id="bottom" class="clearfix style-1">
          <div id="bottom-bar-inner" class="wprt-container">
            <div class="bottom-bar-inner-wrap">
              <div class="bottom-bar-content">
                <div id="copyright">
                  <a href="http://tasnim.uz">Tasnim Texnologiya Akademiyasi</a>
                  &copy;
                </div>
                <!-- /#copyright -->
              </div>
              <!-- /.bottom-bar-content -->

              <div class="bottom-bar-menu">
                <ul class="bottom-nav">
                  <li><a href="http://tasnim.uz">Tasnimga murojaat</a></li>
                  <li><a href="http://tasnim.uz">FAQ</a></li>
                  <li><a href="http://tasnim.uz">Takliflar</a></li>
                </ul>
              </div>
              <!-- /.bottom-bar-menu -->
            </div>
          </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>