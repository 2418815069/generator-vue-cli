<template>
  <div class="accounts-login">
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="用户名" prop="userName">
        <el-input type="userName" v-model="ruleForm.userName" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input show-password v-model.number="ruleForm.password"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="code">
          <el-input v-model.number="ruleForm.code"></el-input>
          <div class="codeNuber">V9AM</div>
        </div>
      </el-form-item>
      <el-form-item>
        <el-button class="w-all" type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { loginApi } from "./api";
import Storage from "@/util/storage";
export default {
  name: "accounts-login",
  components: {},
  data() {
    return {
      ruleForm: {
        userName: "",
        password: "",
        // 后面有时间改下
        code: "V9AM"
      },
      rules: {
        userName: [{ required: true, trigger: "blur" }],
        password: [{ required: true, trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          // 登录测试帐号: xmcy 密码: 111111
          // 权限的说明，分5类权限，项目参与方、审定机构-管理、审定机构-业务、注册机构-管理、注册机构-业务
          // 后端映射关系为:
          // roleId 1  type 0  -> 项目参与 userType->1
          // roleId 5  type 2 -> 审定机构业务 userType->2
          // roleId 4  type 2 -> 审定机构管理 userType->3
          // roleId 3  type 1 -> 注册机构业务 userType->4
          // roleId 2  type 1 -> 注册机构管理 userType->5
          let userInfo = await loginApi(this.ruleForm);
          let userType = 99;
          if (userInfo) {
            const { roleId, type } = userInfo;
            if (roleId == "1" && type == "0") {
              userType = 1;
            }
            if (roleId == "5" && type == "2") {
              userType = 2;
            }
            if (roleId == "4" && type == "2") {
              userType = 3;
            }
            if (roleId == "3" && type == "1") {
              userType = 4;
            }
            if (roleId == "3" && type == "1") {
              userType = 5;
            }
          }
          userInfo.userType = userType;
          Storage.set("userInfo", userInfo);
          Storage.set("jwt", userInfo.token);
          this.$router.push({
            name: "main"
          });
        } else {
          return false;
        }
      });
    }
  },
  created() {}
};
</script>

<style scoped lang="stylus">
@import '~@/css/color.styl';

.code {
  display: flex;
}

.codeNuber {
  padding: 0 10px;
  border: 1px solid color-primary;
  margin-left: 10px;
  border-radius: 5px;
}
</style>
