<template>
  <div class="listDiv">
    <div class="listTitle" style="margin-bottom: 20px">项目注册</div>
    <el-form ref="registerForm" :model="registerForm">
      <div class="listContent">
        <div class="listLeft">
          <el-form-item label="项目名称">
            <el-input v-model="registerForm.proName" placeholder="请填写项目名称"></el-input>
          </el-form-item>
          <el-form-item label="项目简介">
            <el-input
              class="textArea"
              style="height: 95px"
              type="textarea"
              placeholder="请填写项目简介"
              v-model="registerForm.proContext"
            ></el-input>
          </el-form-item>
          <el-form-item label="项目类别">
            <el-select v-model="registerForm.proCategory" placeholder="请选择项目类别">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目类型">
            <el-input placeholder="请填写项目类型" v-model="registerForm.proType"></el-input>
          </el-form-item>
          <el-form-item label="方法学">
            <el-select v-model="registerForm.methodology" placeholder="请选择方法学">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="项目所在地区">
            <el-input v-model="registerForm.address"></el-input>
          </el-form-item>
          <el-form-item label="项目位置图片">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="registerForm.dialogVisible">
              <img width="100%" :src="registerForm.biologicalImageUrl" alt />
            </el-dialog>
          </el-form-item>
          <el-form-item label="生物多样性状况">
            <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="biologicalPreview"
              :on-remove="biologicalRemove"
            >
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="registerForm.biologicalVisible">
              <img width="100%" :src="registerForm.biologicalImageUrl" alt />
            </el-dialog>
          </el-form-item>
          <el-form-item label="项目负责人">
            <el-input placeholder="请填写项目负责人" v-model="registerForm.desc"></el-input>
          </el-form-item>
          <div class="listRow" style="height: 40px; line-height: 40px;">
            <div class="listLable">项目业主</div>
            <div class="listMsg">{{proDuty}}</div>
          </div>
        </div>

        <div class="listRight">
          <el-form-item label="项目承建单位">
            <el-input placeholder="请填写项目承建单位" v-model="registerForm.desc"></el-input>
          </el-form-item>
          <el-form-item label="项目审定单位">
            <el-select v-model="registerForm.region" placeholder="请选择项目审定单位">
              <el-option
                v-for="(item, i) in selectData"
                :label="item.organizationName"
                :value="item.uuid"
                :key="i"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="GPS边界">
            <el-input placeholder="请填写GPS边界" v-model="registerForm.gpsBoundary"></el-input>
          </el-form-item>
          <el-form-item label="GPS东西南北至">
            <div>
              <div class="gpsBox">
                <el-input placeholder="请填写GPS东至" v-model="registerForm.gpsEast" class="borderInput">
                  <template slot="prepend">东至</template>
                </el-input>
                <el-input placeholder="请填写GPS西至" v-model="registerForm.gpsWest">
                  <template slot="prepend">西至</template>
                </el-input>
              </div>
              <div class="gpsBox">
                <el-input
                  placeholder="请填写GPS北至"
                  v-model="registerForm.gpsNorth"
                  class="borderInput"
                >
                  <template slot="prepend">北至</template>
                </el-input>
                <el-input placeholder="请填写GPS南至" v-model="registerForm.gpsSouth">
                  <template slot="prepend">南至</template>
                </el-input>
              </div>
            </div>
          </el-form-item>
          <el-form-item label="项目设计书">
            <el-input placeholder="请选择项目设计书" v-model="registerForm.proDesignbook"></el-input>
          </el-form-item>

          <el-form-item label="林权证号">
            <el-input placeholder="请填写项目负责单位" v-model="registerForm.forestCode"></el-input>
          </el-form-item>
          <el-form-item label="林地所有权利人">
            <el-input placeholder="请填写林地所有权利人" v-model="registerForm.forestOwner"></el-input>
          </el-form-item>
          <el-form-item label="林地使用权利人">
            <el-input placeholder="请填写林地使用权利人" v-model="registerForm.forestOperator"></el-input>
          </el-form-item>
          <el-form-item label="林木所有权利人">
            <el-input placeholder="请填写林木所有权利人" v-model="registerForm.woodsOwner"></el-input>
          </el-form-item>
          <el-form-item label="林木使用权利人">
            <el-input placeholder="请填写林木使用权利人" v-model="registerForm.woodsOperator"></el-input>
          </el-form-item>
          <el-form-item label="预计减排量" class="estimateInput">
            <el-input placeholder="请填写预计减排量" v-model="registerForm.estimateCount">
              <template slot="append">tCO2e</template>
            </el-input>
          </el-form-item>
        </div>
      </div>
      <el-form-item>
        <el-button type="primary" @click="submitData('registerForm', '2')">提交项目审定</el-button>
        <el-button @click="submitData('registerForm', '1')">保存草稿</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Storage from "@/util/storage";
import { postRegister } from "@/pages/manage/api/process";
import { getOrganization } from "../api/ccermanage";
export default {
  name: "project-register",
  components: {},
  data() {
    return {
      params: {
        page: 1,
        size: 100
      },
      selectData: [],
      proDuty: Storage.get("userInfo").companyName,
      registerForm: {
        proName: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: "",
        dialogImageUrl: "",
        dialogVisible: false,
        biologicalImageUrl: "",
        biologicalVisible: false,
        gpsEast: "",
        gpsWest: "",
        gpsNorth: "",
        gpsSouth: ""
      }
    };
  },
  mounted() {
    this.getListData(this.params);
  },
  methods: {
    async getListData(params) {
      let result = await getOrganization(params);
      if (!result) return;
      this.selectData = result.content;
      console.log("result", this.selectData, result.content);
    },
    submitData(formName, type) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (type === "1") {
            this.registerForm.process = "保存草稿";
          } else {
            this.registerForm.process = "提交";
          }
          this.registerForm.proDuty = this.proDuty;
          this.registerForm.status = type;
          console.log("this.form", this.registerForm);
          let result = await postRegister(this.registerForm);
          if (result.success) {
            this.$message({
              showClose: true,
              message: result.message,
              type: "success"
            });
            this.$router.push({ name: "project-list" });
            console.log("result", result);
          }
        } else {
          return false;
        }
      });
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.form.dialogImageUrl = file.url;
      this.form.dialogVisible = true;
    },
    biologicalRemove(file, fileList) {
      console.log(file, fileList);
    },
    biologicalPreview(file) {
      this.form.biologicalImageUrl = file.url;
      this.form.biologicalVisible = true;
    }
  }
};
</script>

<style scoped>
.listDiv {
  width: 100%;
  padding: 20px 22px 60px 22px;
  background-color: white;
}
.textArea .el-textarea__inner {
  height: 95px;
}
.gpsBox {
  display: flex;
  width: 350px;
}
.borderInput {
  border-right: 1px solid rgba(168, 168, 168, 1);
}
</style>
