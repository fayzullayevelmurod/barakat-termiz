<template>
    <div>
        <div id="featured-title" class="clearfix featured-title-left">
            <div id="featured-title-inner" class="container clearfix">
                <div class="featured-title-inner-wrap">
                    <div class="featured-title-heading-wrap">
                        <h1 class="featured-title-heading">Service Detail</h1>
                    </div>
                    <div id="breadcrumbs">
                        <div class="breadcrumbs-inner">
                            <div class="breadcrumb-trail">
                                <a href="#" title="Construction" rel="home" class="trail-begin">Home</a>
                                <span class="sep">/</span>
                                <span class="trail-end">Service Detail</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="main-content" class="site-main clearfix mb-5">
            <div id="content-wrap" class="container">
                <div id="site-content" class="site-content clearfix">
                    <div id="inner-content" class="inner-content-wrap">
                        <div class="container-fluid padding-0">
                            <div class="row mb-5">
                                <div class="col-md-12">
                                    <div class="wprt-spacer" data-desktop="80" data-mobi="60" data-smobi="60"></div>
                                    <h2 class="line-height-normal margin-bottom-10">name</h2>
                                    <div class="wprt-lines style-1 custom-3">
                                        <div class="line-1"></div>
                                        <div class="line-2"></div>
                                    </div>
                                    <div class="wprt-spacer" data-desktop="25" data-mobi="25" data-smobi="25"></div>
                                    <div class="wprt-spacer" data-desktop="40" data-mobi="40" data-smobi="40"></div>
                                </div>
                                <div class="col-md-6">
                                    <div class="wprt-galleries-grid has-bullets bullet-style-2 bullet30 has-arrows arrow-position-2 arrow-light" data-layout="slider" data-column="1" data-column2="1" data-column3="1" data-column4="1" data-gaph="30" data-gapv="30">
                                        <div id="images-wrap" class="cbp">
                                            <div class="cbp-item">
                                                <div class="item-wrap">
                                                    <a class="zoom" href="/img/services/1.jpg"><i class="fa fa-arrows-alt"></i></a>
                                                    <img src="/img/services/1.jpg" alt="image" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                <div class="wprt-spacer" data-desktop="0" data-mobi="40" data-smobi="40"></div>
                                    <h3 class="line-height-normal margin-bottom-10">title</h3>
                                    <div class="wprt-lines style-1 custom-3">
                                        <div class="line-1"></div>
                                        <div class="line-2"></div>
                                    </div>
                                    <div class="wprt-spacer" data-desktop="25" data-mobi="25" data-smobi="25"></div>
                                    <p class=" margin-bottom-25">description</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Services"
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