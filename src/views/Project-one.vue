<template>
  <div id="projects">
      <div class="container">
        <div class="row py-5">
            <div class="col-12 col-md-6">
                <img :src="item.src" alt="">
            </div>
            <div class="col-12 col-md-6">
                <h1>{{item.name}}</h1>
                <h3>{{item.description}}</h3>
            </div>
        </div>
      </div>    
  </div>
</template>

<script>
import datas from "@/data.json";

export default {
  name: "Project-one",
  data: () => {
    return {
        item: null
    };
  },
  created(){
      this.item = (datas.project[Number(this.$route.params.id)-1]);
  }
};
</script>

<style scoped>
#projects {
  margin-top: 150px;
  background: white;
}
h1 {
  font-size: 50px;
  color: red;
}
</style>