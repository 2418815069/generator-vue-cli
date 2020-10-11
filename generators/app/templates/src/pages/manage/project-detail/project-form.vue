<template>
  <div class="listComDiv">
    <div class="listContent">
      <div class="listLeft">
        <div class="listRow">
          <div class="listLable">项目名称</div>
          <div class="listMsg" style="height: 40px">{{ formData.proName }}</div>
        </div>
        <div class="listRow">
          <div class="listLable">项目简介</div>
          <div class="listMsg" style="height: 95px">{{ formData.proContext }}</div>
        </div>
        <div class="listRow">
          <div class="listLable">项目类别</div>
          <div class="listMsg" style="height: 40px">{{ formData.proCategory }}xx项目类别</div>
        </div>
        <div class="listRow">
          <div class="listLable">项目类型</div>
          <div class="listMsg" style="height: 40px">{{ formData.proType }}</div>
        </div>
        <div class="listRow">
          <div class="listLable">方法学</div>
          <div class="listMsg" style="height: 40px">{{ formData.methodology }}</div>
        </div>
        <div class="listRow">
          <div class="listLable">项目所在地区</div>
          <div class="listMsg" style="height: 40px">{{ formData.address }}</div>
        </div>
        <div class="listRow">
          <div class="listLable">项目位置图片</div>
          <div class="listMsg" style="height: 87px">
            <img :src="formData.img" class="mapPosition" />
          </div>
        </div>
        <div class="listRow">
          <div class="listLable">生物多样性状况</div>
          <div class="listMsg" style="height: 87px">
            <span>{{ formData.bioDiversityContent }}</span>
            <img :src="formData.bioDiversityimg" class="mapPosition" />
          </div>
        </div>
        <div class="listRow">
          <div class="listLable">项目负责人</div>
          <div class="listMsg" style="height: 40px">{{ formData.proLeader }}</div>
        </div>
        <div class="listRow">
          <div class="listLable">项目业主</div>
          <div class="listMsg" style="height: 40px">{{ formData.proDuty }}</div>
        </div>
        <div class="listRow">
          <div class="listLable">项目承建单位</div>
          <div class="listMsg" style="height: 40px">{{ formData.proContractor }}</div>
        </div>
      </div>
      <div class="listRight">
        <div class="listRow">
          <div class="listLable">项目审定单位</div>
          <div class="listMsg">{{ formData.proChecker }}</div>
        </div>
        <div class="listRow">
          <div class="listLable">GPS边界</div>
          <div class="listMsg">{{ formData.gpsBoundary }}</div>
        </div>
        <div class="listRow">
          <div class="listLable">GPS东西南北至</div>
          <div class="listMsg">
            <div style="display: flex">
              <div>
                <span>东至</span>
                <span>{{ formData.gpsEast }}</span>
              </div>
              <div>
                <span>西至</span>
                <span>{{ formData.gpsWest }}</span>
              </div>
            </div>
            <div style="display: flex">
              <div>
                <span>北至</span>
                <span>{{ formData.gpsNorth }}</span>
              </div>
              <div>
                <span>南至</span>
                <span>{{ formData.gpsSouth }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="listRow">
          <div class="listLable">项目设计书</div>
          <div class="listMsg">{{ formData.proDesignbookName }}XXXXXXXXXXX--项目设计书.doc</div>
        </div>
        <div class="listRow">
          <div class="listLable">林权证号</div>
          <div class="listMsg">{{ formData.forestCode }}</div>
        </div>
        <div class="listRow">
          <div class="listLable">林地所有权利人</div>
          <div class="listMsg">{{ formData.forestOwner }}</div>
        </div>
        <div class="listRow">
          <div class="listLable">林地使用权利人</div>
          <div class="listMsg">{{ formData.forestOperator }}</div>
        </div>
        <div class="listRow">
          <div class="listLable">林木所有权利人</div>
          <div class="listMsg">{{ formData.woodsOwner }}</div>
        </div>
        <div class="listRow">
          <div class="listLable">林木使用权利人</div>
          <div class="listMsg">{{ formData.woodsOperator }}</div>
        </div>
        <div class="listRow">
          <div class="listLable">预计减排量</div>
          <div class="listMsg">{{ formData.estimateCount }}</div>
        </div>
      </div>
    </div>
    <el-button
      v-for="item in buttonData"
      :key="item.actionid"
      type="primary"
      @click="submitData(item)"
    >{{ item.actionid }}</el-button>
    <el-button @click="backPage">返回</el-button>
  </div>
</template>

<script>
import { getProcess } from "../api/projectlist";
import { postRegister } from "../api/process";

export default {
  name: "project-form",
  data() {
    return {
      status: this.$router.currentRoute.params.status,
      id: this.$router.currentRoute.params.id,
      buttonData: []
    };
  },
  props: {
    formData: null //数据源
  },
  mounted() {
    this.getProcessData();
  },
  methods: {
    async getProcessData() {
      const param = {};
      param.status = this.status;
      let result = await getProcess(param);
      if (!result) return;
      this.buttonData = result;
      console.log("this.buttonData", this.buttonData, result);
    },
    async submitData(item) {
      const submitMsg = {
        uuid: this.id,
        process: item.actionid,
        status: item.nextstatus
      };
      let result = await postRegister(submitMsg);
      if (!result) return;
      if (result.success) {
        this.$message({
          showClose: true,
          message: result.message,
          type: "success"
        });
        this.$router.push({ name: "project-list" });
      }
      console.log(item, submitMsg);
    },
    backPage() {
      this.$router.back(-1);
    }
  },
  components: {}
};
</script>

<style scoped>
.listDiv {
  width: 100%;
  padding: 20px 22px 60px 22px;
  background-color: white;
}
.mapPosition {
  width: 69px;
  height: 69px;
}
</style>
