<template>
  <div class="accounts-register">
    <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户类型" prop="userType">
          <el-select class="w-all" v-model="ruleForm.userType" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
      </el-form-item>
      <el-form-item label="用户名" prop="userName">
        <el-input type="userName" v-model="ruleForm.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model.number="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="姓名" prop="name">
        <el-input v-model.number="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="部门" prop="department">
        <el-input v-model.number="ruleForm.department"></el-input>
      </el-form-item>
      <el-form-item label="手机号" prop="phone">
        <el-input v-model.number="ruleForm.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button class="w-all" type="primary" @click="submitForm('ruleForm')">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
    name: 'accounts-register',
    components: {
    },
    data() {
        return {
          options: [{
            label: '注册机构',
            value: '注册机构'
          },{
            label: '注册项目参与方',
            value: '注册项目参与方'
          },{
            label: '注册审定机构',
            value: '注册审定机构'
          }],
          ruleForm: {
            userType: '',
            userName: '',
            password: '',
            name: '',
            department: '',
            phone: ''
          },
          rules: {
            userType: [
              { required: true, trigger: 'blur' }
            ],
            userName: [
              { required: true, trigger: 'blur' }
            ],
            password: [
              { required: true, trigger: 'blur' }
            ]
          }
      };
    },
    methods: {
    },
    created() {
    }
};
</script>

<style scoped lang="stylus">
.submit
  width 100%

</style>