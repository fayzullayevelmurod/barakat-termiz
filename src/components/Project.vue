<template>
    <div id="main-content" class="site-main clearfix">
        <div id="content-wrap">
            <div id="site-content" class="site-content clearfix">
                <div id="inner-content" class="inner-content-wrap">
                    <div class="page-content">
                        <section id="projects" class="wprt-section works parallax">
                            <div class="container">
                                <div class="row">
                                <div class="col-md-12">
                                    <div
                                    class="wprt-spacer"
                                    data-desktop="70"
                                    data-mobi="60"
                                    data-smobi="60"
                                    ></div>
                                    <h2
                                    class="text-left text-white"
                                    style="font-size: 30px !important"
                                    >
                                    Проекты
                                    </h2>
                                    <div class="wprt-lines custom-2">
                                    <div class="line-1"></div>
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
                                    class="wprt-project arrow-style-2 has-arrows arrow60 arrow-dark"
                                    data-layout="slider"
                                    data-column="3"
                                    data-column2="3"
                                    data-column3="2"
                                    data-column4="1"
                                    data-gaph="30"
                                    data-gapv="30"
                                    >
                                    <div id="projects" class="cbp">
                                        <div class="cbp-item" v-for="item of projects" :key="item.id">
                                        <div class="project-item position-relative">
                                            <div class="inner">
                                            <figure class="effect-honey">
                                                <img
                                                :src="item.src"
                                                alt="image"
                                                />
                                                <a class="stretched" href="/">
                                                <figcaption>
                                                    <div>
                                                        <h2>
                                                            <a
                                                            class="stretched-link"
                                                            href="/"
                                                            >{{item.name}}</a>
                                                        </h2>
                                                        <h3>{{item.description}}</h3>
                                                    </div>
                                                </figcaption>
                                                </a>
                                            </figure>
                                            <a
                                                class="project-zoom cbp-lightbox"
                                                href="/img/projects/1.jpg"
                                                data-title="title"
                                            >
                                                <i class="fa fa-arrows-alt"></i>
                                            </a>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    
                                    <!-- /#projects -->
                                    </div>
                                    <!--/.wprt-project -->
                                </div>
                                <!-- /.col-md-12 -->

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
            projects: Data.project
        }
    },
  name: 'Project',
}
</script>
