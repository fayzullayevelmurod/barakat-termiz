<template>
    <div>
        <section class="content-lines-wrapper">
            <div class="content-lines-inner">
                <div class="content-lines"></div>
            </div>
        </section>
        <section class="team_one_img" style="padding-top: 250px;">
            <div class="row justify-content-center">
                <div class="col-6 col-md-3">
                    <img src="/img/team/1.jpg" class="rounded mx-auto d-block" alt="...">
                    <ul class="messenger">
                        <li><a href="/"><i class="ti-instagram"></i></a></li>
                        <li><a href="/"><i class="fab fa-telegram"></i></a></li>
                        <li><a href="/"><i class="ti-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="section-padding2">
            <div class="container"> 
                <div class="row">
                    <div class="col-md-12">
                        <h2 class="section-title2 text-center">name</h2>
                        </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <p>description></p>
                    </div>
                </div>
                <div class="row mt-30">
                    <div class="col-md-6 gallery-item">
                        <a href="/img/team/1.jpg" title="" class="img-zoom">
                            <div class="gallery-box">
                                <div class="gallery-img"> <img style="height: 300px;" src="/img/team/1.jpg" class="img-fluid mx-auto d-block" alt="work-img"> </div>
                            </div>
                        </a>
                    </div>     
                </div>
            </div>
        </section>
    </div>
</template>

<script>
export default {
    name: "Team"
}
</script>


<style scoped>
    .nav-link{
        color: #272727 !important;
        transition: all 0.5s ease;
    }
    .nav-link:hover{
        color: #b19777 !important;
    }
    .pro_top{
        width: 100%;
        height: 200px;
    }
    .team_one_img{
            padding-top: 250px;
        }
        .section-title2 {
            font-size: 35px;
            font-weight: 600;
            color: #b19777;
            position: relative;
            line-height: 1.25em;
            margin-bottom: 30px;
            letter-spacing: 3px;
            text-transform: uppercase;
        }
        .messenger{
            width: 100%;
            margin-top: 20px;
            display: flex;
            justify-content: space-evenly;
        }
        .fa-telegram{
            font-size: 18px;
        }
</style>