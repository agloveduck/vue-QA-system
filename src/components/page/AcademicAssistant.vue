<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="4">
        <el-menu class="el-menu-vertical-demo">
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title">文献列表</span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-picture"></i>
            <span slot="title">词频分析</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-picture"></i>
            <span slot="title">作者合作网络分析</span>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-picture"></i>
            <span slot="title">趋势分析</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-picture"></i>
            <span slot="title">文献来源分析</span>
          </el-menu-item>
          <el-menu-item index="6">
            <i class="el-icon-picture"></i>
            <span slot="title">主题分布</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="1">
        <div>&nbsp;</div>
      </el-col>
      <el-col :span="18">
        <el-divider content-position="left">文献列表</el-divider>
        <div class="paperlist">
          <div class="button_bar">
            <el-button size="mini" type="primary" plain @click="refreshAllpic"
              >刷新分析图</el-button
            >
            <el-button size="mini" plain @click="clearAll"
              >清除全部文献</el-button
            >
          </div>
          <div class="main_content">
            <el-table :data="paperlist" style="width: 100%" stripe>
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form
                    label-position="left"
                    inline
                    class="demo-table-expand"
                  >
                    <el-form-item label="标题">
                      <span>{{ props.row.title }}</span>
                    </el-form-item>
                    <el-form-item label="时间">
                      <span>{{ props.row.time }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column label="标题" prop="title"> </el-table-column>
              <el-table-column fixed="right" label="操作" width="50">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, paperlist)"
                    type="text"
                    size="small"
                  >
                    移除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
        <el-divider content-position="left">词频分析</el-divider>
        <div class="wordcloud_img pic_container" v-if="wordCloudFlag">
          <el-image style="width: 57%" :src="url" fit="contain">
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <el-divider content-position="left">作者合作网络分析</el-divider>
        <div class="pic_container" v-if="authorNetFlag">
          <authornet :networkdata="authorNetworkData"></authornet>
        </div>
        <el-divider content-position="left">趋势分析</el-divider>
        <div class="pic_container" v-if="lineChartFlag">
          <linechart :linechartdata="lineChartData"></linechart>
        </div>
        <el-divider content-position="left">文献来源分析</el-divider>
        <div class="pic_container" v-if="pieChartFlag">
          <piechart :piechartdata="pieChartData"></piechart>
        </div>
        <el-divider content-position="left">主题分布</el-divider>
        <div class="pic_container" v-if="barChartFlagSubject">
          <barchart :barchartdata="barChartDataSubject"></barchart>
        </div>
        <el-divider content-position="left">机构分布</el-divider>
        <div class="pic_container" v-if="barChartFlagInstitution">
          <barchart :barchartdata="barChartDataInstitution"></barchart>
        </div>
        <el-divider content-position="left">精读</el-divider>
        <div class="reading">
          <el-descriptions direction="vertical" border :column = "1">
            <el-descriptions-item label="摘要" >
            <span v-for="(item, i) in intensive.abstract.slice(0,5)"
              :key="i"><li>{{item}}</li></span>
            </el-descriptions-item>
            <el-descriptions-item label="目标" >
              <span v-for="(item, i) in intensive.objective.slice(0,5)"
              :key="i"><li>{{item}}</li></span>
            </el-descriptions-item>
            <el-descriptions-item label="背景">
              <span v-for="(item, i) in intensive.background.slice(0,5)"
              :key="i"><li>{{item}}</li></span>
            </el-descriptions-item>
            <el-descriptions-item label="方法">
              <span v-for="(item, i) in intensive.method.slice(0,5)"
              :key="i"><li>{{item}}</li></span>
            </el-descriptions-item>
            <el-descriptions-item label="结果">
              <span v-for="(item, i) in intensive.result.slice(0,5)"
              :key="i"><li>{{item}}</li></span>
            </el-descriptions-item>
            <el-descriptions-item label="结论">
              <span v-for="(item, i) in intensive.conclusion.slice(0,5)"
              :key="i"><li>{{item}}</li></span>
            </el-descriptions-item>
          </el-descriptions>
        </div>
      </el-col>
      <el-col :span="1">
        <div>&nbsp;</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import AuthorNetwork from "./subcomp/AuthorNetwork.vue";
import LineChart from "./charts/LineChart.vue";
import PieChart from "./charts/PieChart.vue";
import BarChart from "./charts/BarChart.vue";
export default {
  data() {
    return {
      paperlist: [],
      url: "",
      paperStr: "",
      authorNetworkData: { links: [], nodes: [] },
      lineChartData: {},
      pieChartData: {},
      barChartDataSubject: {},
      barChartDataInstitution: {},
      wordCloudFlag: false,
      authorNetFlag: false,
      lineChartFlag: false,
      pieChartFlag: false,
      barChartFlagSubject: false,
      barChartFlagInstitution: false,
      intensive: null,
    };
  },
  components: {
    authornet: AuthorNetwork,
    linechart: LineChart,
    piechart: PieChart,
    barchart: BarChart,
  },
  methods: {
    getSendList() {
      this.paperlist.forEach((item, i) => {
        if (i !== this.paperlist.length - 1) {
          this.paperStr = this.paperStr + item.id + ";";
        } else {
          this.paperStr = this.paperStr + item.id;
        }
        // console.log(this.paperStr);
      });
    },
    getWordCloud() {
      this.getSendList();
      this.$http
        .get("http://10.1.0.92:5000/createWordCloud?privateId=" + this.paperStr)
        .then(
          (result) => {
            this.url = result.body.pictureUrl[0];
            this.wordCloudFlag = true;
          },
          (err) => {
            this.$alert("无法加载图片", { type: "error" });
          }
        );
    },
    getAuthorNetwork() {
      // this.getSendList();
      this.$http
        .get(
          "http://10.1.0.92:5000/getAuthorNetwork?privateId=" + this.paperStr
        )
        .then(
          (result) => {
            // console.log("rb");
            // console.log(result.body);
            this.authorNetworkData = result.body;
            // console.log("an");
            // console.log(this.authorNetworkData);
            this.authorNetFlag = true;
          },
          (err) => {
            this.$alert("无法加载作者网络", { type: "error" });
          }
        );
    },
    getLineChart() {
      // this.getSendList();
      this.$http
        .get(
          "http://10.1.0.92:5000/getTrendAnalysis?privateId=" + this.paperStr
        )
        .then(
          (result) => {
            this.lineChartData = result.body;
            // console.log("lineChartData");
            // console.log(this.lineChartData);
            this.lineChartFlag = true;
          },
          (err) => {
            this.$alert("无法加载趋势分析", { type: "error" });
          }
        );
    },
    getPieChart() {
      // this.getSendList();
      this.$http
        .get(
          "http://10.1.0.92:5000/getSourceDistribution?privateId=" +
            this.paperStr
        )
        .then(
          (result) => {
            this.pieChartData = result.body;
            // console.log("pieChartData");
            // console.log(this.pieChartData);
            this.pieChartFlag = true;
          },
          (err) => {
            this.$alert("无法加载资源分布", { type: "error" });
          }
        );
    },
    getBarChart() {
      // this.getSendList();
      this.$http
        .get(
          "http://10.1.0.92:5000/getSubjectDistribution?privateId=" +
            this.paperStr
        )
        .then(
          (result) => {
            this.barChartDataSubject = result.body;
            // console.log("pieChartData");
            // console.log(this.pieChartData);
            this.barChartFlagSubject = true;
          },
          (err) => {
            this.$alert("无法加载主题分布", { type: "error" });
          }
        );
      this.$http
        .get(
          "http://10.1.0.92:5000/getInstitutionDistribution?privateId=" +
            this.paperStr
        )
        .then(
          (result) => {
            this.barChartDataInstitution = result.body;
            // console.log("pieChartData");
            // console.log(this.pieChartData);
            this.barChartFlagInstitution = true;
          },
          (err) => {
            this.$alert("无法加载主题分布", { type: "error" });
          }
        );
    },
    clearAll() {
      this.paperlist = [];
      this.wordCloudFlag = false;
      this.authorNetFlag = false;
      this.lineChartFlag = false;
      this.pieChartFlag = false;
      this.barChartFlag = false;
    },
    refreshAllpic() {
      if (this.paperlist.length > 0) {
        this.getWordCloud();
        this.getAuthorNetwork();
      } else {
        this.$alert("列表内容为空，无法调用相关组件");
      }
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    },
    read() {
    // this.getSendList();
      console.log(this.paperStr)
      this.$http
        .get("http://10.1.0.92:5000/getMultiFusion?privateId=" + this.paperStr)
        .then(
          (result) => {
            this.intensive = result.body;
                 console.log("body");   
             console.log(result.body);
             console.log("intensive");
             console.log(this.intensive);
            
          },
          (err) => {
            this.$message("加载内容出错");
          }
        );
    },
  },
  
  created() {
    // console.log("wordcloud");
    // console.log(this.$route.params.timestamp);
    var plist = JSON.parse(localStorage.getItem(this.$route.params.timestamp));
    this.paperlist = plist;
    // console.log(this.paperlist);
    // window.localStorage.removeItem(this.$route.params.timestamp);
    this.getWordCloud();
    this.getAuthorNetwork();
    this.getLineChart();
    this.getPieChart();
    this.getBarChart();
    this.read()
    // this.getSendList()
  },
};
</script>


<style lang="scss" scoped>
.button_bar {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.wordcloud_img {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
}
.pic_container {
  width: 100%;
}
.el-divider /deep/ * {
  font-size: 1em;
  font-weight: 600;
}
.el-divider__text {
  background-color: #f9fafc;
}
</style>

<style lang="less" scoped>
.el-menu {
  // height: calc(~"100vh - 100px");
  // height: 100%;
}
</style>