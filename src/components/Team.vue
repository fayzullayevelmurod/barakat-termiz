<template>
    <div id="main-content" class="site-main clearfix">
        <div id="content-wrap">
            <div id="site-content" class="site-content clearfix">
                <div id="inner-content" class="inner-content-wrap">
                    <div class="page-content">
                        <section class="wprt-section offer" id="team">
                            <div class="container">
                            <div class="row">
                            <div class="col-md-12">
                                <div
                                class="wprt-spacer"
                                data-desktop="70"
                                data-mobi="60"
                                data-smobi="60"
                                ></div>
                                <h2 style="font-size: 30px !important">Команда</h2>
                                <div class="wprt-lines style-1 custom-5">
                                <div class="line-1"></div>
                                <div class="line-2"></div>
                                </div>
                                <div
                                class="wprt-spacer"
                                data-desktop="50"
                                data-mobi="40"
                                data-smobi="40"
                                ></div>
                            </div>
                            <!-- /.col-md-12 -->

                            <div class="col-md-12">
                                <div
                                class="wprt-service arrow-style-2 has-arrows arrow60 arrow-light"
                                data-layout="slider"
                                data-column="4"
                                data-column2="3"
                                data-column3="2"
                                data-column4="1"
                                data-gaph="30"
                                data-gapv="30"
                                >
                                <div id="service-wrap" class="cbp">
                                    <div class="cbp-item" v-for="item of team" :key="item.id">
                                    <div class="service-item clearfix">
                                        <div class="thumb">
                                        <img
                                            :src="item.src"
                                            alt="image"
                                            style="
                                            width: 230px !important;
                                            height: 280px !important;
                                            "
                                        />
                                        </div>
                                        <div class="service-item-wrap">
                                        <h3 class="title font-size-18">
                                            <a class="font-size-22" href="/">{{item.name}}</a>
                                        </h3>
                                        <p class="desc font-size-16">{{item.description}}</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div
                                class="wprt-spacer"
                                data-desktop="80"
                                data-mobi="60"
                                data-smobi="60"
                                ></div>
                            </div>
                            <!-- /.col-md-12 -->
                            </div>
                            <!-- /.row -->
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Data from "@/data.json";

export default {
    data(){
        return{
            team: Data.team
        }
    },
    name: "Team"
}
</script>