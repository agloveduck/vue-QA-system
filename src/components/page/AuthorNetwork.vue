<template>
  <div id="app">
    <div id="graph"></div>
  </div>
</template>

<script>
import * as d3 from "d3";
import {
  getNodeSelfPath,
  setLinkGroup,
  getNodesLine,
} from "../../utils/deviceRelation";

//代码参考自github上 zhaoluo123 /vue-d3-force
//https://hub.fastgit.org/zhaoluo123/vue-d3-force.git
export default {
  data() {
    return {
      mapdata: {
        links: [
          {
            source: 0,
            target: 1,
            relation: {
              relationshipId: 1,
              relationship: "Cooperation",
              weight: 1,
              created: 1574822650825,
              lineNumber: null,
              isSelf: false,
            },
          },
          {
            source: 0,
            target: 2,
            relation: {
              relationshipId: 2,
              relationship: "Cooperation",
              weight: 1,
              created: 1574821264333,
              lineNumber: null,
              isSelf: false,
            },
          },
          {
            source: 0,
            target: 3,
            relation: {
              relationshipId: 3,
              relationship: "Cooperation",
              weight: 1,
              created: 1574821264333,
              lineNumber: null,
              isSelf: false,
            },
          },
          {
            source: 0,
            target: 4,
            relation: {
              relationshipId: 4,
              relationship: "Cooperation",
              weight: 1,
              created: 1574821264333,
              lineNumber: null,
              isSelf: false,
            },
          },
          {
            source: 0,
            target: 5,
            relation: {
              relationshipId: 5,
              relationship: "Cooperation",
              weight: 1,
              created: 1574821264333,
              lineNumber: null,
              isSelf: false,
            },
          },
          {
            source: 0,
            target: 6,
            relation: {
              relationshipId: 6,
              relationship: "Cooperation",
              weight: 1,
              created: 1574821264333,
              lineNumber: null,
              isSelf: false,
            },
          },
          {
            source: 0,
            target: 7,
            relation: {
              relationshipId: 7,
              relationship: "Cooperation",
              weight: 1,
              created: 1574821264333,
              lineNumber: null,
              isSelf: false,
            },
          },
          {
            source: 8,
            target: 9,
            relation: {
              relationshipId: 8,
              relationship: "Cooperation",
              weight: 1,
              created: 1574821264333,
              lineNumber: null,
              isSelf: false,
            },
          },
        ],
        nodes: [
          {
            id: 1,
            authorName: "Khaled Habas",
            linkId: 0,
          },
          {
            id: 2,
            authorName: "Chioma Nganwuchu",
            linkId: 1,
          },
          {
            id: 3,
            authorName: "Fanila Shahzad",
            linkId: 2,
          },
          {
            id: 4,
            authorName: "Rajendran Gopalan",
            linkId: 3,
          },
          {
            id: 5,
            authorName: "Mainul Haque",
            linkId: 4,
          },
          {
            id: 6,
            authorName: "Sayeeda Rahman",
            linkId: 5,
          },
          {
            id: 7,
            authorName: "Anwarul Azim Majumder",
            linkId: 6,
          },
          {
            id: 8,
            authorName: "Talat Nasim",
            linkId: 7,
          },
          {
            id: 9,
            authorName: "Seiya Yamayoshi",
            linkId: 8,
          },
          {
            id: 10,
            authorName: "Yoshihiro Kawaoka",
            linkId: 9,
          },
        ],
      },
    };
  },
  mounted() {
    this.getData();
    this.renderGraph(this.mapdata);
  },
  props: ["networkdata"],
  methods: {
    getData() {
      this.mapdata = this.networkdata;
      /* this.mapdata = {
        links: [
          {
            source: 0,
            target: 4,
            relation: {
              relationshipId: 0,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 0,
            target: 2,
            relation: {
              relationshipId: 1,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 3,
            target: 6,
            relation: {
              relationshipId: 2,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 3,
            target: 11,
            relation: {
              relationshipId: 3,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 3,
            target: 0,
            relation: {
              relationshipId: 4,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 3,
            target: 4,
            relation: {
              relationshipId: 5,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 3,
            target: 2,
            relation: {
              relationshipId: 6,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 4,
            target: 2,
            relation: {
              relationshipId: 7,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 5,
            target: 12,
            relation: {
              relationshipId: 8,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 5,
            target: 7,
            relation: {
              relationshipId: 9,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 5,
            target: 9,
            relation: {
              relationshipId: 10,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 5,
            target: 1,
            relation: {
              relationshipId: 11,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 6,
            target: 11,
            relation: {
              relationshipId: 12,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 6,
            target: 0,
            relation: {
              relationshipId: 13,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 6,
            target: 4,
            relation: {
              relationshipId: 14,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 6,
            target: 2,
            relation: {
              relationshipId: 15,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 7,
            target: 9,
            relation: {
              relationshipId: 16,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 7,
            target: 1,
            relation: {
              relationshipId: 17,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 8,
            target: 3,
            relation: {
              relationshipId: 18,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 8,
            target: 6,
            relation: {
              relationshipId: 19,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 8,
            target: 11,
            relation: {
              relationshipId: 20,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 8,
            target: 0,
            relation: {
              relationshipId: 21,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 8,
            target: 4,
            relation: {
              relationshipId: 22,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 8,
            target: 2,
            relation: {
              relationshipId: 23,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 9,
            target: 1,
            relation: {
              relationshipId: 24,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 10,
            target: 8,
            relation: {
              relationshipId: 25,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 10,
            target: 3,
            relation: {
              relationshipId: 26,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 10,
            target: 6,
            relation: {
              relationshipId: 27,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 10,
            target: 11,
            relation: {
              relationshipId: 28,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 10,
            target: 0,
            relation: {
              relationshipId: 29,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 10,
            target: 4,
            relation: {
              relationshipId: 30,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 10,
            target: 2,
            relation: {
              relationshipId: 31,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 11,
            target: 0,
            relation: {
              relationshipId: 32,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 11,
            target: 4,
            relation: {
              relationshipId: 33,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 11,
            target: 2,
            relation: {
              relationshipId: 34,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 12,
            target: 7,
            relation: {
              relationshipId: 35,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 12,
            target: 9,
            relation: {
              relationshipId: 36,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
          {
            source: 12,
            target: 1,
            relation: {
              relationshipId: 37,
              relationship: "Cooperation",
              weight: "1",
              created: "1627897596",
              lineNumber: "null",
              isSelf: false,
            },
          },
        ],
        nodes: [
          { id: 0, authorName: "Sayeeda Rahman", linkId: 0 },
          { id: 1, authorName: "San Kim", linkId: 1 },
          { id: 2, authorName: "Talat Nasim", linkId: 2 },
          { id: 3, authorName: "Fanila Shahzad", linkId: 3 },
          { id: 4, authorName: "Anwarul Azim Majumder", linkId: 4 },
          { id: 5, authorName: "Hyun Jee Han", linkId: 5 },
          { id: 6, authorName: "Rajendran Gopalan", linkId: 6 },
          { id: 7, authorName: "Obumneme Anyim", linkId: 7 },
          { id: 8, authorName: "Chioma Nganwuchu", linkId: 8 },
          { id: 9, authorName: "Chinedu Ekweremadu", linkId: 9 },
          { id: 10, authorName: "Khaled Habas", linkId: 10 },
          { id: 11, authorName: "Mainul Haque", linkId: 11 },
          { id: 12, authorName: "Chinekwu Nwagwu", linkId: 12 },
        ],
      }; */
    },
    renderGraph(data) {
      let { links, nodes } = data;

      //关系分组
      setLinkGroup(links);

      //点击节点后弹出的灰色圆圈以及图标的定义，分为三组【1.删除、2.联系、3.解除位置锁定】
      let [
        removePath,
        remove_rect1,
        remove_rect2,
        remove_line1,
        remove_line2,
        remove_line3,
      ] = [null];
      let [unlockPath, unlock_path1, unlock_rect1, unlock_line1] = [null];
      let [
        hidePath,
        hide_path1,
        hide_path2,
        hide_path3,
        hide_path4,
        hide_circle1,
        hide_line1,
      ] = [null];
      let rightArc = d3.svg
        .arc()
        .outerRadius(60)
        .innerRadius(30)
        .startAngle(0)
        .endAngle(1.85);
      let leftArc = d3.svg
        .arc()
        .outerRadius(60)
        .innerRadius(30)
        .startAngle(4.5)
        .endAngle(6.23);
      let bottomArc = d3.svg
        .arc()
        .outerRadius(60)
        .innerRadius(30)
        .startAngle(1.9)
        .endAngle(4.45);

      d3.select("#graph").html("");

      const force = d3.layout
        .force() //layout将json格式转化为力学图可用的格式
        .nodes(nodes) //设定节点数组
        .links(links) //设定连线数组
        .linkDistance(150) //连接线长度
        .charge(-1500) //顶点的电荷数。该参数决定是排斥还是吸引，数值越小越互相排斥
        .on("tick", tick) //指时间间隔，隔一段时间刷新一次画面
        .start(); //开始转换

      let zoom = d3.behavior.zoom().scaleExtent([0.4, 2]).on("zoom", zoomed);

      const svg = d3
        .select("#graph")
        .append("svg")
        .attr("pointer-event", "all")
        .attr("preserveAspectRatio", "xMidYMid meet") //自适应容器大小
        .attr("viewBox", "-300 -300 700 700")
        .call(zoom);

      //设置连接线
      const edges_line = svg
        .append("g")
        .selectAll(".edgepath")
        .data(force.links())
        .enter()
        .append("path")
        .attr("marker-end", function (d, i) {
          return getMarkerArrow(i);
        }) //根据箭头标记的id号标记箭头
        .style("stroke", "#9aaabf")
        .style("stroke-width", 1) //线条粗细
        .style("fill-opacity", 0)
        .style("cursor", "pointer")
        .attr("id", function (d, i) {
          return "edgepath" + i;
        })
        .on("mouseover", function (d) {
          return getStrokeWidth(d);
        })
        .on("mouseout", function () {
          edges_line.style("stroke-width", 1);
        })
        .on("click", (d, i) => {
          deleteLine(d, i);
        });

      const edges_text = svg
        .append("g")
        .selectAll(".edgetext")
        .data(links)
        .enter()
        .append("text")
        .style("pointer-events", "none")
        .attr("class", "linetext")
        .attr("text-anchor", "middle")
        .attr("fill-opacity", 1)
        .style("cursor", "pointer")
        .attr({
          class: "edgelabel",
          id: function (d, i) {
            return "edgepath" + i;
          },
          dx: 50,
          dy: 0,
          fill: "#9aaabf",
        });

      //设置线条上的文字
      edges_text
        .append("textPath")
        .attr("xlink:href", function (d, i) {
          return "#edgepath" + i;
        })
        .attr("pointer-events", "none")
        .attr("font-size", 9)
        .text(function (d) {
          return d.relation.relationship;
        });

      const circle_g = svg
        .selectAll("circle")
        .data(force.nodes()) //表示使用force.nodes数据
        .enter()
        .append("g")
        .attr("class", function (node, i) {
          return "g_circle_" + i;
        }) //标记circle的父节点
        .style("cursor", "pointer")
        .call(drag()) //将当前选中的元素传到drag函数中，使顶点可以被拖动
        .on("click", (node, i) => {
          if (d3.event.defaultPrevented) return; //阻止click事件和拖拽事件冲突
          circleClick(node, i, this);
        })
        .on("mouseover", (node) => {
          if (d3.event.defaultPrevented) return;
          showNodeInfo(node, this);
          // showCircleBorderOuterArc(node, i);
        });

      svg.on("dblclick.zoom", null); //取消svg和圆圈的双击放大事件（d3中默认开启7个事件，关闭防止与上面的双击事件冲突）
      circle_g.on("dblclick.zoom", null);

      //圆圈
      const circle = circle_g
        .append("circle")
        .style("stroke-width", "2px")
        .attr("r", 25) //设置圆圈半径
        .style("fill", function (node) {
          return getCircleColor(node);
        });

      let text = circle_g
        .append("text")
        .attr("dy", ".35em")
        .attr("text-anchor", "middle") //在圆圈中加上数据
        .style("fill", "#FFFFFF")
        .attr("x", function (d) {
          appendCircleText(d, this);
        });

      //圆圈的提示文字
      circle.append("svg:title").text(function (node) {
        return node.authorName;
        // switch (node.label) {
        //   case "Device":
        //     return node.factoryCode;
        //   case "Application":
        //     return node.applicationName;
        //   case "Position":
        //     return node.positionCode;
        //   case "Manufacturer":
        //     return node.manufacturerName;
        //   case "IotInfrastructure":
        //     return node.iotInfrastructureName;
        //   case "DeviceAdmin":
        //     return node.name;
        // }
      });
      text.append("svg:title").text(function (node) {
        return node.authorName;
        // switch (node.label) {
        //   case "Device":
        //     return node.factoryCode;
        //   case "Application":
        //     return node.applicationName;
        //   case "Position":
        //     return node.positionCode;
        //   case "Manufacturer":
        //     return node.manufacturerName;
        //   case "IotInfrastructure":
        //     return node.iotInfrastructureName;
        //   case "DeviceAdmin":
        //     return node.name;
        // }
      });

      function zoomed() {
        //svg下的g标签移动大小
        svg
          .selectAll("g")
          .attr(
            "transform",
            "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")"
          );
      }

      function getMarkerArrow(i) {
        svg
          .append("defs")
          .append("marker") //箭头
          .attr("id", "arrow" + i)
          .attr("markerUnits", "strokeWidth") //设置为strokeWidth箭头会随着线的粗细发生变化
          .attr("markerUnits", "userSpaceOnUse")
          .attr("markerWidth", 10) //标识的大小
          .attr("markerHeight", 10)
          .attr("viewBox", "0 -4 12 15") //坐标系的区域
          .attr("refX", 0) //箭头坐标
          .attr("refY", 0)
          .attr("orient", "auto") //绘制方向，可设定为：auto（自动确认方向）和 角度值
          .append("svg:path")
          .attr("stroke-width", 1) //箭头宽度
          .attr("d", "M0,-5L10,0L0,5") //箭头的路径
          .attr("fill", "rgba(0,0,0, 0.4)"); //箭头颜色
        return "url(#arrow" + i + ")";
      }

      function getStrokeWidth(d) {
        edges_line.style("stroke-width", function (edge) {
          return edge.relation.relationshipId === d.relation.relationshipId
            ? 3
            : 1;
        });
      }

      function drag() {
        //拖拽函数
        return force.drag().on("dragstart", function (d) {
          d3.event.sourceEvent.stopPropagation(); //取消默认事件
          d.fixed = true; //拖拽开始后设定被拖拽对象为固定
        });
      }

      function circleClick(node, i, _this) {
        //获取当前节点是否包含圆环
        let existedRing = svg
          .select(".g_circle_" + i)
          .selectAll(".g_circle_path");
        //清除上个节点的圆圈以及图标
        svg.selectAll(".g_circle_path").remove();
        svg.selectAll(".remove_a").remove();
        svg.selectAll(".hide_a").remove();
        svg.selectAll(".unlock_a").remove();
        if (existedRing && existedRing[0].length === 0) {
          //showCircleBorderOuterArc(node, i);
          //绘制灰色可点击圆圈，分为三部分分别绘制
          showRemove(node, i, _this);
          showUnlock(node, i, _this);
          showHide(node, i, _this);
        }
      }

      function getCircleColor(node) {
        let color = {
          Device: "#FF9D00",
          Position: "#C477E9",
          Work: "#67CAF4",
          Install: "#BCDD73",
          Application: "#DD1E9E",
          Manufacturer: "#DDBA9E",
          IotInfrastructure: "#6ca5dd",
          DeviceAdmin: "#50DD87",
        }; //圆圈背景色
        return color[node.label] || "#C477E9";
      }

      function appendCircleText(d, _this) {
        let circleText = "";
        if (d.label === "Device" && d.factoryCode) {
          circleText = d.factoryCode;
        } else if (d.label === "Position") {
          circleText = d.positionCode;
        } else if (d.label === "Application") {
          circleText = d.applicationName;
        } else if (d.label === "Manufacturer") {
          circleText = d.manufacturerName;
        } else if (d.label === "IotInfrastructure") {
          circleText = d.iotInfrastructureName;
        } else if (d.label === "DeviceAdmin") {
          circleText = d.name;
        } else {
          circleText = d.authorName;
        }
        //如果小于四个字符，不换行
        if (circleText && circleText.length > 7) {
          circleText = circleText.substring(0, 7) + "...";
          d3.select(_this).text(function () {
            return "";
          });
        }
        d3.select(_this)
          .append("tspan")
          .attr("x", 0)
          .attr("y", 0)
          .attr("font-size", 10)
          .text(function () {
            return circleText;
          });
      }

      function deleteLine(d, i) {
        // alert("delete this " + d + "," + i);
        this.$alert("只读图，不允许删除");
      }

      function tick() {
        circle.attr("transform", transform1); //圆圈
        text.attr("transform", transform2); //顶点文字
        edges_line.attr("d", function (d) {
          //绘制自己指向自己的路径
          if (d.relation.isSelf) {
            return getNodeSelfPath(d);
          }
          //绘制两个节点之间的路径
          return getNodesLine(d); //曲线路径
        });

        // if(circleBorderOuterArcObj !== null) {
        //   circleBorderOuterArcObj.attr("transform", function (d){ return "translate("+d.x+","+d.y+")" });
        // }

        //绘制节点删除功能半圆环
        if (removePath !== null) {
          removePath.attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
          });

          let r1 = null;
          remove_rect1
            .attr("d", function (d) {
              r1 = d;
            })
            .attr("x", r1.x + 33 + 6.75)
            .attr("y", r1.y - 36 + 9.75)
            .attr("width", 5)
            .attr("height", 3)
            .attr("rx", 1.5)
            .attr("ry", 1.5);

          let r2 = null;
          remove_rect2
            .attr("d", function (d) {
              r2 = d;
            })
            .attr("x", r2.x + 30 + 6.75)
            .attr("y", r2.y - 33 + 9.75)
            .attr("width", 12)
            .attr("height", 14)
            .attr("rx", 1.5)
            .attr("ry", 1.5);

          let l1 = null;
          remove_line1
            .attr("d", function (d) {
              l1 = d;
            })
            .attr("x1", l1.x + 28 + 6.75)
            .attr("y1", l1.y - 33 + 9.75)
            .attr("x2", l1.x + 45 + 6.75)
            .attr("y2", l1.y - 33 + 9.75);

          let l2 = null;
          remove_line2
            .attr("d", function (d) {
              l2 = d;
            })
            .attr("x1", l2.x + 34 + 6.75)
            .attr("y1", l2.y - 30 + 9.75)
            .attr("x2", l2.x + 34 + 6.75)
            .attr("y2", l2.y - 23 + 9.75);

          let l3 = null;
          remove_line3
            .attr("d", function (d) {
              l3 = d;
            })
            .attr("x1", l3.x + 38 + 6.75)
            .attr("y1", l3.y - 30 + 9.75)
            .attr("x2", l3.x + 38 + 6.75)
            .attr("y2", l3.y - 23 + 9.75);
        }

        //绘制解除节点位置锁定半圆环
        if (unlockPath !== null) {
          unlockPath.attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
          });
          unlock_path1.attr("transform", function (d) {
            return "translate(" + (d.x - 45) + "," + (d.y - 23) + ")";
          });

          let r1 = null;
          unlock_rect1
            .attr("d", function (d) {
              r1 = d;
            })
            .attr("x", r1.x - 52 + 6.75)
            .attr("y", r1.y - 30 + 9.75)
            .attr("width", 15)
            .attr("height", 12)
            .attr("rx", 1.5)
            .attr("ry", 1.5);

          let l1 = null;
          unlock_line1
            .attr("d", function (d) {
              l1 = d;
            })
            .attr("x1", l1.x - 52 + 15)
            .attr("y1", l1.y - 30 + 15)
            .attr("x2", l1.x - 52 + 15)
            .attr("y2", l1.y - 30 + 18);
        }

        //绘制隐藏节点和关系半圆环
        if (hidePath !== null) {
          hidePath.attr("transform", function (d) {
            return "translate(" + d.x + "," + d.y + ")";
          });

          hide_path1.attr("d", function (d) {
            return (
              "M" +
              (d.x - 13) +
              "," +
              (d.y + 42) +
              "A15,15,0,0,1" +
              (d.x + 13) +
              "," +
              (d.y + 42)
            );
          });
          hide_path2.attr("d", function (d) {
            return (
              "M" +
              (d.x - 12 + 10.4) +
              "," +
              (d.y + 34 + 10.937) +
              "A" +
              3.749 +
              "," +
              3.749 +
              ",0,1,1," +
              (d.x - 12 + 15.338) +
              "," +
              (d.y + 33 + 9)
            );
          });
          hide_path3.attr("d", function (d) {
            return (
              "M" +
              (d.x - 12) +
              "," +
              (d.y + 42) +
              "A20,20,0,0,0" +
              (d.x - 4) +
              "," +
              (d.y + 47)
            );
          });
          hide_path4.attr("d", function (d) {
            return (
              "M" +
              (d.x + 11) +
              "," +
              (d.y + 44) +
              "A20,20,0,0,0" +
              (d.x + 13) +
              "," +
              (d.y + 42)
            );
          });

          let c1 = null;
          hide_circle1
            .attr("d", function (d) {
              c1 = d;
            })
            .attr("cx", c1.x - 12 + 17.15)
            .attr("cy", c1.y + 33 + 17.25)
            .attr("r", 6);

          let l1 = null;
          hide_line1
            .attr("d", function (d) {
              l1 = d;
            })
            .attr("x1", l1.x - 12 + 14.15)
            .attr("y1", l1.y + 33 + 17.25)
            .attr("x2", l1.x - 12 + 20.15)
            .attr("y2", l1.y + 33 + 17.25);
        }
      }

      //设置圆圈和文字的坐标
      function transform1(d) {
        return "translate(" + d.x + "," + d.y + ")";
      }

      function transform2(d) {
        return "translate(" + d.x + "," + d.y + ")";
      }
      function showRemove(node, i, _this) {
        removePath = d3
          .select(".g_circle_" + i)
          .append("path")
          .attr("class", "g_circle_path")
          .attr("transform", "translate(" + node.x + "," + node.y + ")")
          .attr("d", rightArc)
          .attr("fill", "rgb(210, 213, 218)")
          .style("cursor", "pointer")
          .on("click", () => {
            removeNodeAndPath(node, _this);
          })
          .on("mouseover", function () {
            removePath.attr("fill", "rgb(185, 185, 185)");
          })
          .on("mouseout", function () {
            removePath.attr("fill", "rgb(210, 213, 218)");
          });

        d3.select(".g_circle_" + i)
          .append("g")
          .attr("class", "remove_a")
          .attr(
            "transform",
            "translate(" + (node.x + 33) + "," + (node.y - 24) + ") scale(0.7)"
          )
          .append("defs")
          .append("style")
          .text(
            ".remove_a{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}"
          );

        removePath.append("title").attr("class", "remove_a").text("Remove");
        remove_rect1 = d3
          .select(".g_circle_" + i)
          .append("rect")
          .attr("class", "remove_a")
          .attr("x", node.x + 33 + 6.75)
          .attr("y", node.y - 36 + 9.75)
          .attr("width", 5)
          .attr("height", 3)
          .attr("rx", 1.5)
          .attr("ry", 1.5);
        remove_rect2 = d3
          .select(".g_circle_" + i)
          .append("rect")
          .attr("class", "remove_a")
          .attr("x", node.x + 30 + 6.75)
          .attr("y", node.y - 33 + 9.75)
          .attr("width", 12)
          .attr("height", 14)
          .attr("rx", 1.5)
          .attr("ry", 1.5);
        remove_line1 = d3
          .select(".g_circle_" + i)
          .append("line")
          .attr("class", "remove_a")
          .attr("x1", node.x + 28 + 6.75)
          .attr("y1", node.y - 33 + 9.75)
          .attr("x2", node.x + 45 + 6.75)
          .attr("y2", node.y - 33 + 9.75);
        remove_line2 = d3
          .select(".g_circle_" + i)
          .append("line")
          .attr("class", "remove_a")
          .attr("x1", node.x + 34 + 6.75)
          .attr("y1", node.y - 30 + 9.75)
          .attr("x2", node.x + 34 + 6.75)
          .attr("y2", node.y - 23 + 9.75);
        remove_line3 = d3
          .select(".g_circle_" + i)
          .append("line")
          .attr("class", "remove_a")
          .attr("x1", node.x + 38 + 6.75)
          .attr("y1", node.y - 30 + 9.75)
          .attr("x2", node.x + 38 + 6.75)
          .attr("y2", node.y - 23 + 9.75);

        d3.selectAll(".remove_a").on("click", () => {
          removeNodeAndPath(node, _this);
        });
      }

      function showHide(node, i) {
        hidePath = d3
          .select(".g_circle_" + i)
          .append("path")
          .attr("class", "g_circle_path")
          .attr("transform", "translate(" + node.x + "," + node.y + ")")
          .attr("d", bottomArc)
          .attr("fill", "rgb(210, 213, 218)")
          .style("cursor", "pointer")
          .on("click", function () {
            hideNodeAndLinks(node);
          })
          .on("mouseover", function () {
            hidePath.attr("fill", "rgb(185, 185, 185)");
          })
          .on("mouseout", function () {
            hidePath.attr("fill", "rgb(210, 213, 218)");
          });

        d3.select(".g_circle_" + i)
          .append("g")
          .attr("class", "hide_a")
          .attr(
            "transform",
            "translate(" + (node.x - 8) + "," + (node.y + 38) + ") scale(0.7)"
          )
          .append("defs")
          .append("style")
          .text(
            ".hide_a{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}"
          );

        hidePath.append("title").attr("class", "hide_a").text("Hide");

        hide_path1 = d3
          .select(".g_circle_" + i)
          .append("path")
          .attr("class", "hide_a")
          .attr("d", function (d) {
            return (
              "M" +
              (d.x - 13) +
              "," +
              (d.y + 42) +
              "A15,15,0,0,1" +
              (d.x + 13) +
              "," +
              (d.y + 42)
            );
          });
        hide_path2 = d3
          .select(".g_circle_" + i)
          .append("path")
          .attr("class", "hide_a")
          .attr("d", function (d) {
            return (
              "M" +
              (d.x - 12 + 10.4) +
              "," +
              (d.y + 34 + 10.937) +
              "A" +
              3.749 +
              "," +
              3.749 +
              ",0,1,1," +
              (d.x - 12 + 15.338) +
              "," +
              (d.y + 33 + 9)
            );
          });
        hide_path3 = d3
          .select(".g_circle_" + i)
          .append("path")
          .attr("class", "hide_a")
          .attr("d", function (d) {
            return (
              "M" +
              (d.x - 12) +
              "," +
              (d.y + 42) +
              "A20,20,0,0,0" +
              (d.x - 4) +
              "," +
              (d.y + 47)
            );
          });
        hide_path4 = d3
          .select(".g_circle_" + i)
          .append("path")
          .attr("class", "hide_a")
          .attr("d", function (d) {
            return (
              "M" +
              (d.x + 11) +
              "," +
              (d.y + 44) +
              "A20,20,0,0,0" +
              (d.x + 13) +
              "," +
              (d.y + 42)
            );
          });
        hide_circle1 = d3
          .select(".g_circle_" + i)
          .append("circle")
          .attr("class", "hide_a")
          .attr("cx", node.x - 12 + 17.15)
          .attr("cy", node.y + 33 + 17.25)
          .attr("r", 6);
        hide_line1 = d3
          .select(".g_circle_" + i)
          .append("line")
          .attr("class", "hide_a")
          .attr("x1", node.x - 12 + 14.15)
          .attr("y1", node.y + 33 + 17.25)
          .attr("x2", node.x - 12 + 20.15)
          .attr("y2", node.y + 33 + 17.25);
        d3.selectAll(".hide_a").on("click", (d) => {
          hideNodeAndLinks(d);
        });
      }
      function showUnlock(node, i) {
        unlockPath = d3
          .select(".g_circle_" + i)
          .append("path")
          .attr("class", "g_circle_path")
          .attr("transform", "translate(" + node.x + "," + node.y + ")")
          .attr("d", leftArc)
          .attr("fill", "rgb(210, 213, 218)")
          .style("cursor", "pointer")
          .on("click", function (d) {
            unlockNodeFixed(d);
          })
          .on("mouseover", function () {
            unlockPath.attr("fill", "rgb(185, 185, 185)");
          })
          .on("mouseout", function () {
            unlockPath.attr("fill", "rgb(210, 213, 218)");
          });

        d3.select(".g_circle_" + i)
          .append("g")
          .attr("class", "unlock_a")
          .attr(
            "transform",
            "translate(" + (node.x - 52) + "," + (node.y - 30) + ") scale(0.7)"
          )
          .append("defs")
          .append("style")
          .text(
            ".unlock_a{fill:none;stroke:#FFFFFF;stroke-linecap:round;stroke-linejoin:round;stroke-width:1.5px;}"
          );

        unlockPath.append("title").attr("class", "unlock_a").text("Unlock");
        unlock_path1 = d3
          .select(".g_circle_" + i)
          .append("path")
          .attr("class", "unlock_a")
          .attr(
            "transform",
            "translate(" + (node.x - 45) + "," + (node.y - 23) + ")"
          )
          .attr(
            "d",
            d3.svg
              .arc()
              .outerRadius(5.3)
              .innerRadius(5)
              .startAngle(-1.8)
              .endAngle(1.8)
          )
          .attr("fill", "#FFFFFF");

        unlock_rect1 = d3
          .select(".g_circle_" + i)
          .append("rect")
          .attr("class", "unlock_a")
          .attr("x", node.x - 52 + 6.75)
          .attr("y", node.y - 30 + 9.75)
          .attr("width", 15)
          .attr("height", 12)
          .attr("rx", 1.5)
          .attr("ry", 1.5);
        unlock_line1 = d3
          .select(".g_circle_" + i)
          .append("line")
          .attr("class", "unlock_a")
          .attr("x1", node.x - 52 + 15)
          .attr("y1", node.y - 30 + 15)
          .attr("x2", node.x - 52 + 15)
          .attr("y2", node.y - 30 + 18);

        d3.selectAll(".unlock_a").on("click", (d) => {
          unlockNodeFixed(d);
        });
      }
      function hideNodeAndLinks(node) {
        d3.event.stopPropagation();
        circle_g.attr("node", function (n) {
          if (n.id === node.id) {
            d3.select(this).remove();
          }
        });
        edges_line.attr("d", function (d) {
          if (d.source.id === node.id || d.target.id === node.id) {
            d3.select(this).remove();
          }
        });
      }
      function removeNodeAndPath(node, _this) {
        d3.event.stopPropagation();
        alert("delete this " + node + "," + _this);
      }
      function showNodeInfo(node, _this) {
        // window.console.log(node);
        // window.console.log(_this);
      }
      function unlockNodeFixed(d) {
        d3.event.stopPropagation();
        d3.select(this).classed("fixed", (d.fixed = false)); //解除节点位置锁定
        //清除上个节点的圆圈以及图标
        svg.selectAll(".g_circle_path").remove();
        svg.selectAll(".remove_a").remove();
        svg.selectAll(".hide_a").remove();
        svg.selectAll(".unlock_a").remove();
      }
    },
  },
  watch: {
    networkdata: {
      handler(val, oldVal) {
        // console.log("watch-an-comp");
        // console.log(val);
        // console.log(this.mapdata);
        this.getData();
        this.renderGraph(this.mapdata);
      },
    },
    deep: true,
    immediate: true,
  },
};
</script>

<style>
#graph {
  width: 100%;
  height: 100%;
}
</style>
