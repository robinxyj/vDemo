<template>
  <el-row>
    <el-table :data="tabledata">
      <el-table-column type="expand">
        <template slot-scope="secope">
          <el-form label-position="left" inline class="demo-table-expand">
            <el-form-item label="内容">
              <span>{{ secope.row.desc }}</span>
            </el-form-item>
          </el-form>
        </template>
      </el-table-column>
      <el-table-column label="操作时间" prop="time"></el-table-column>
      <el-table-column label="操作人" prop="name"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="secope">
          <el-button size="mini" type="danger" @click="handleDelete(secope.$index)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-button @click="handleAdd()">增加</el-button>
  </el-row>
</template>


<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
import { IDINCREMENT, IDDECREMENT } from "../store/mutation-types";
export default {
  data() {
    return {
      // tabledata: [
      //   {
      //     time: "2020-1-3 14:20",
      //     name: "小虎",
      //     desc: "小虎的日记"
      //   },
      //   {
      //     time: "2020-1-4 14:30",
      //     name: "丽丽",
      //     desc: "丽丽的日记"
      //   }
      // ]
      tabledata: store.getters.tabledata
    };
  },
  methods: {
    ...mapMutations([IDINCREMENT,IDDECREMENT]),
    ...mapActions(['addInfo','delInfo']),
    ...mapGetters(['tabeldata']),
    handleAdd() {
      console.log("我跳了");
      this.$router.push("/edit");
    },
    async handleDelete(index) {
      this.$store.commit(IDDECREMENT)
      this.deInfo(index);
      console.log(index);
    }

  }
};
</script>

<style>
#main {
  float: none;
  margin: 0 auto;
}
.el-input {
  padding-bottom: 5px;
}
.el-select {
  display: block;
}
.btn-auto {
  width: 100%;
  margin-top: 12px;
}
</style>