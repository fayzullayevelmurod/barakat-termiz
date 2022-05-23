<template>
    <div>
        <div id="featured-title" class="clearfix featured-title-left">
            <div id="featured-title-inner" class="container clearfix">
                <div class="featured-title-inner-wrap">
                    <div class="featured-title-heading-wrap">
                        <h1 class="featured-title-heading">Portfel tafsilotlari</h1>
                    </div>
                    <div id="breadcrumbs">
                        <div class="breadcrumbs-inner">
                            <div class="breadcrumb-trail">
                                <router-link to="/" title="Barakat Termiz" rel="home" class="trail-begin">Bosh sahifa</router-link>
                                <span class="sep">/</span>
                                <span class="trail-end">Portfel tafsilotlari</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="main-content" class="site-main clearfix">
            <div id="content-wrap">
                <div id="site-content" class="site-content clearfix">
                    <div id="inner-content" class="inner-content-wrap">
                        <div class="page-content">
                            <section class="wprt-section">
                                <div class="container">
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="wprt-spacer" data-desktop="80" data-mobi="60" data-smobi="60"></div>
                                        </div><!-- /.col-md-12 -->

                                        <div class="col-md-8">
                                            <div class="wprt-galleries galleries w-770px" data-width="142" data-margin="15">
                                                <div id="wprt-slider" class="flexslider">
                                                    <ul class="slides">
                                                        <li class="flex-active-slide">
                                                            <a class="zoom" href="/img/projects/2.jpg"><i class="fa fa-arrows-alt"></i></a>
                                                            <img src="/img/projects/3.jpg" alt="image" />
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div id="wprt-carousel" class="flexslider">
                                                    <ul class="slides">
                                                        <li><img src="/img/projects/1.jpg" alt="image"></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div><!-- /.col-md-8 -->

                                        <div class="col-md-4">
                                            <div class="wprt-spacer" data-desktop="0" data-mobi="40" data-smobi="40"></div>

                                            <h3 class="line-height-normal margin-bottom-10">title</h3>
                                            <div class="wprt-lines style-1 custom-3">
                                                <div class="line-1"></div>
                                                <div class="line-2"></div>
                                            </div>

                                            <div class="wprt-spacer" data-desktop="25" data-mobi="25" data-smobi="25"></div>

                                            <p>discription</p>
                                        
                                            <div class="wprt-lines style-1 custom-4">
                                                <div class="line-1"></div>
                                            </div>

                                            <ul class="wprt-list style-2 accent-color margin-top-30 margin-bottom-25">
                                                <li><strong>Buyurtmachi:</strong></li>
                                                <li><strong>Topshirilgan yili:</strong></li>
                                                <li><strong>Qurilgan joyi:</strong></li>
                                                <li><strong>Sarflangan mablag:</strong>so'm</li>
                                            </ul>

                    
                                        </div><!-- /.col-md-4 -->

                                        <div class="col-md-12">
                                            <div class="wprt-spacer" data-desktop="80" data-mobi="60" data-smobi="60"></div>
                                        </div><!-- /.col-md-12 -->
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Project"
}
</script>


<style scoped>
    #top-bar{
        background-color: #ffbc13;
    }
    #site-header{
        background-color: #fff;
    }
    #featured-title{
        margin-top: 125px;
    }
    @media only screen and (max-width: 768px){
        #featured-title{
        margin-top: 68px;
        }
    }
    
    @media only screen and (max-width: 470px){
        #featured-title{
        margin-top: 52px;
    }
    }
</style>