<template>  
  <el-form label-position="top" :model="tabledata" :rules="rules" ref="tabledata" label-width="100px" class="main">
  <el-form-item label="操作时间" required>  
    <nowtime></nowtime>      
  </el-form-item>
  <el-form-item label="操作人姓名" prop="name">
    <el-input v-model="tabledata.name"></el-input>
  </el-form-item>
  
  <el-form-item label="备忘录" prop="desc">
    <el-input type="textarea" v-model="tabledata.desc"></el-input>
  </el-form-item>
  <el-form-item size="medium">
    <el-button type="primary"   @click="submitForm('tabledata')">保存</el-button>
  </el-form-item>
</el-form>
</template>

<script>
import {mapState,mapMutations,mapActions} from 'vuex'
import {IDINCREMENT,IDDECREMENT} from '../store/mutation-types'
export default {
  name:'MemoFile',
  data(){
    return {
      tabledata: {
        time:'',
        name: '',
        desc: '',
      },
      rules: {
        name: [
          { required: true, message: '操作人姓名', trigger: 'blur' },
          { min: 2, max: 4, message: '长度在 2 到 4 个字符', trigger: 'blur' }
        ],
        desc: [
          { required: true, message: '请填写内容', trigger: 'blur' }
        ]
      },
    };
  },
  methods: {
    ...mapMutations([IDINCREMENT,IDDECREMENT]),
    ...mapActions(['addInfo','delInfo']),
    //保存数据
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
      this.$store.commit(IDDECREMENT);
      this.addInfo(this.tabledata);
      //操作完毕后跳回主页
      this.$router.push('/')
    },
  },
}
</script>

<style scoped>
#main{
  float: none;
  margin: 0 auto;
}
.el-input{
  padding-bottom: 5px;
}
.el-select {
  display: block;
}
</style>