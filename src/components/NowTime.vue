<template>
  <div class="header-file">
    <el-row class="timer">
      <div>{{ nowDate + ' ' + nowTime }}</div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nowDate: "", // 当前日期
      nowTime: "" // 当前时间
    };
  },
  methods: {
    currentTime() {
      setInterval(this.getDate, 500);
    },
    getDate: function() {
      var _this = this;
      let yy = new Date().getFullYear();
      let MM = new Date().getMonth() + 1;
      let dd = new Date().getDate();
      let week = new Date().getDay();
      let hh = new Date().getHours();
      let mm =
        new Date().getMinutes() < 10
          ? "0" + new Date().getMinutes()
          : new Date().getMinutes();
      let ss =
        new Date().getSeconds() < 10
          ? "0" + new Date().getSeconds()
          : new Date().getSeconds();
      _this.nowTime = hh + ":" + mm + ":" + ss;
      _this.nowDate = yy + "/" + MM + "/" + dd;
    }
  },
  mounted() {
    this.currentTime();
  },
  // 销毁定时器
  beforeDestroy: function() {
    if (this.getDate) {
      console.log("销毁定时器");
      clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
    }
  }
};
</script>