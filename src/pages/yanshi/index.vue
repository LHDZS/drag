
<style lang="less" scoped>
.hello {
    width: 100%;
    height: 100%;
    .left {
        float: left;
        width: 300px;
        height: 100%;
        display: flex;
        justify-content: center;
        .list-group-item {
          width: 200px;
          height: 40px;
          line-height: 40px;
          text-align: center;
          font-size: 16px;
          border: 1px solid #eee;
          margin-bottom: 10px;
        }
    }
    .con {
        float: left;
        width: calc(100% - 600px);
        height: 99%;
        text-align: center;
        overflow: hidden;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        .ladu {
          float: left;
          height: 38px;
          line-height: 38px;
          margin-right: 8px;
          padding: 0 20px;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          border-right: 1px solid #e4e4e4;
          .pagin {
            display: flex;
            align-items: center;
            justify-content: center;
            .but {
              padding: 0px 15px;
              cursor: pointer;
            }
          }
        }
        .pdf {
            display: inline-block;
            width: 100%;
            height: calc(100% - 38px);
            overflow: auto;
            background-color: #eee;
            .pdfaaa {
              width: 100%;
              .pdfsss {
                display: inline-block;
                width: 600px;
                height: 850px;
                position: relative;
                margin-top: 20px;
                .dra {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    margin: 0;
                    padding: 0;
                    border: 0;
                    font-size: 100%;
                    font: inherit;
                    vertical-align: baseline;
                    .list {
                        width: 20%;
                        height: 14%;
                        position: absolute;
                        -webkit-box-sizing: border-box;
                        box-sizing: border-box;
                        border-width: 1px;
                        border-style: solid;
                        -webkit-user-select: none;
                        -moz-user-select: none;
                        -ms-user-select: none;
                        user-select: none;
                        background-color: hsla(0,0%,100%,.85);
                        cursor: default;
                        .shanchu {
                          width: 50px;
                          height: 20px;
                          line-height: 20px;
                          background-color: #333;
                          position: absolute;
                          bottom: -20px;
                          left: 25px;
                          color: #fff;
                          cursor: pointer;
                        }
                    }
                }
              }
            }
        } 
    }
    .right {
        float: right;
        width: 300px;
        height: 100%;
        padding-top: 20px;
        box-sizing: border-box;
        .kongjian {
          width: 220px;
          margin: 0 auto;
          text-align: center;
        }
    }
    .wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .item{
        width: 300px;
        height: 50px;
        background-color: #42b983;
        color: #ffffff;
    }
}
</style>

<style lang="less">
.hello .pagin .el-input--mini .el-input__inner {
  border:none;
  border-bottom: 1px solid;
  border-radius: 0px;
  height: 13px;
  padding: 0px 5px;
  box-sizing: border-box;
  text-align: center;
}
</style>

<template>
  <div class="hello">
    <div class="left">
        <div class="row">
            <div class="col-5">
            <h2>可用组件列表</h2>
              <div class="list-group-item" v-for="(element,key) in list1" :key="key" draggable dropEffect="move"
              @dragstart="dragstart($event, element, key)" 
              @dragend="dragend($event, element, key)"
              >
              {{ element.name }}</div>
              </div>
        </div>
    </div>
    <div class="con" ref="con">
        <div class="ladu" style="width:200px">
          <el-slider v-model="scale" :min="50" :max="200"  @change="chang"></el-slider>
        </div>
        <div class="ladu">
          <div class="pagin">
            <div class="but" @click="handleCurrentChange('jian')"><i class="el-icon-arrow-left"></i></div>
            <div>
              <el-input size="mini" style="width:30px;" v-model="input" @change="handleCurrentChange"></el-input>/{{numPages}}
            </div>
            <div class="but" @click="handleCurrentChange('jia')"><i class="el-icon-arrow-right"></i></div>
          </div>
          <!-- <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage"
            :page-size="1"
            layout="prev, pager, next, jumper"
            :total="numPages">
          </el-pagination> -->
        </div>
        <div class="ladu">
          <el-button size="mini" type="primary" @click="tijiao">提交</el-button>
        </div>
        <div class="pdf" id="pdf">
          <div class="pdfaaa" v-for="i in numPages" :key="i">
              <div class="pdfsss" ref="pdf" :style="'width:' + padWidth + 'px;' + 'height:' + pdfHeight + 'px'" @mouseover="changeActive(i)" @dragover="dragover">
                <pdf
                    :src="pdfSrc"
                    :page="i"
                    @num-pages="pageCount=$event"
                    @page-loaded="currentPage=$event"
                ></pdf>
                <div class="dra">
                  <vue-draggable-resizable
                      ref="dragg"
                      v-for="(element,index) in list2[i]"
                      :key="index"
                      :w="width"
                      :h="height"
                      :x="element.x"
                      :y="element.y"
                      :parent="true"
                      :resizable="false"
                      :grid="[10,10]"
                      class-name="list"
                      @dragging="onDrag(arguments, i, index)"
                      @resizing="onResize"
                      @activated="nodianji($event, element)"
                  >
                  <div>{{element.name}}</div>
                  <div>{{element.content}}</div>
                  <div class="shanchu" @click="shanchu(i,index)">删除</div>
                  </vue-draggable-resizable>
                </div> 
              </div>
            </div>  
        </div>
    </div>
    <div class="right">
      <div class="kongjian" v-if="itemType">
        <div>{{item.name}}</div>
        <el-input v-model="item.content" style="margin-top: 15px;" placeholder="请输入内容"></el-input>
        <el-select v-model="item.id" style="width: 100%;margin-top:15px;" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      </div>
    </div>
  </div>
</template>


<script>
import pdf from "vue-pdf";
// import showPdf from "@/components/pdf.vue";
import vuedraggable from 'vuedraggable';

export default {
  name: 'HelloWorld',
  display: "Clone",
  order: 2,
  components: {
    pdf,
    vuedraggable
  },
  data () {
    return {
      input: 1,
      pdfKey: 1,
      currentPage3: 1,
      translate: '',
      padWidth: '600',
      pdfHeight: '850',
      scale: 100, //放大系数
      idx: -1,
      typeValue: "",
      pdfSrc: "",
      currentPage: 0, // pdf文件页码
      pageCount: 0, // pdf文件总页数
      numPages: 1,
      activeIndex: 0,
      vuePdf: null,
      options: [{
          value: '选项1',
          label: '知圈圈'
        }, {
          value: '选项2',
          label: '薪必果'
        }],
      itemType: false,
      item: {},
      width: 100,
      height: 100,
      x: 50,
      y: 50,
      positionX:0,
      positionY:0,
      dra: true,
      sty: '',
      list1: [
        { name: "组件1", id: 1, content: "内容内容内容。。。。" },
        { name: "组件2", id: 2, content: "内容内容内容。。。。" },
        { name: "组件3", id: 3, content: "内容内容内容。。。。" },
        { name: "组件4", id: 4, content: "内容内容内容。。。。" },
        { name: "组件5", id: 5, content: "内容内容内容。。。。" },
        { name: "组件6", id: 6, content: "内容内容内容。。。。" },
        { name: "组件7", id: 7, content: "内容内容内容。。。。" }
      ],
      list2: {
        1: []
      },
      list4: {
        1: []
      },
      activeNames: null,
      count: 0,
      msg: 'Welcome to Your Vue.js App',
      docInfo: {
        type: "pdf",
        href: "https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003237411.pdf"
      },
      pdfSrc: 'https://dakaname.oss-cn-hangzhou.aliyuncs.com/file/2018-12-28/1546003237411.pdf'
    }
  },
  updated() {

  },
  mounted(){
    document.getElementById('pdf').addEventListener('scroll',this.handleScroll,true)
    this.pdfTask(this.pdfSrc)
  },
  methods: {
    handleScroll(e) {
      // console.log('????????????????????')
      // let h = document.getElementById('pdf').scrollTop;
      var scrollTop = document.getElementById('pdf').scrollTop
      if (scrollTop === 0) {
        return
      }
      for (let i = 1; i <= this.numPages; i++) {
        if (scrollTop => Number(this.pdfHeight) * i) {
          this.currentPage3 = i + 1;
          // this.handleCurrentChange(i+1)
        }else if (scrollTop < Number(this.pdfHeight) * i) {
          this.currentPage3 = i - 1;
          // this.handleCurrentChange(i-1)
        }
      }
    },
    dragover(event) {
      // console.log(val,'移动的')
      event.preventDefault()
      event.dataTransfer.dropEffect = 'move'
    },
    shanchu(i,key) {
      this.list2[i].splice(key,1)
      this.list4[i].splice(key,1)
    },
    tijiao() {
      console.log(this.list2,'提交了')
      this.$router.push({path: '/yanshi1', query: {list : JSON.stringify(this.list2)}})
    },
    handleCurrentChange(val) {
      console.log(val, typeof val)
      if (!val) {
        return this.input = 1
      }
      if (val === 'jia' && this.currentPage3 < this.numPages) {
        this.currentPage3++
        this.input++
      }else if (val === 'jian' && this.currentPage3 > 1) {
        this.currentPage3--
        this.input--
      }else if (val < this.numPages){
        this.currentPage3 = val
      }else {
        return
      }

      console.log(`当前页: ${this.currentPage3}`);

      console.log(this.$refs.pdf)
      let h = this.$refs.pdf[this.currentPage3 - 1].offsetTop
      this.$nextTick(() => {
        document.querySelector('.pdf').scrollTop = h - 50
      })
      
    },
    // 鼠标进入
    changeActive(i) {
      console.log(i,'鼠标移入');
      this.pdfKey = i;
    },
    pdfTask(pdfUrl){
        let self = this
        let loadingTask = pdf.createLoadingTask(pdfUrl)
        console.log(loadingTask,'这是啥啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊');
        loadingTask.promise.then(pdf => {
          console.log(pdf,'成功了');
          self.pdfUrl = loadingTask
          self.numPages = pdf._pdfInfo.numPages
          for (let index = 0; index < self.numPages; index++) {
            self.list2[index + 1] = [];
            self.list4[index + 1] = [];
          }
          self.$forceUpdate();
          console.log(self.list2)
        }).catch((err) => {
          console.error('pdf加载失败')
      })
    },
    chang() {
      // console.log(this.$refs.dragg, '。。。。。。。。。。。。。。。。')
      this.padWidth = parseInt(600 * (this.scale / 100));
      this.pdfHeight = parseInt(850 * (this.scale / 100));


      this.width = parseInt(100 * (this.scale / 100));
      this.height = parseInt(100 * (this.scale / 100));

      for (let i = 1; i <= this.numPages; i++) {
        for (let j = 0; j < this.list2[i].length; j++) {
          this.list2[i][j].y = this.list4[i][j].y * (this.scale / 100)
          this.list2[i][j].x = this.list4[i][j].x * (this.scale / 100)
        }        
      }
      console.log(this.list2);
      this.$forceUpdate();
    },
    qingkong () {
      this.itemType = false
    },
    nodianji(e,val) {
      console.log(e,val,'点击控件')
      this.item = val;
    },
      onResize: function(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        console.log('>??????????????')
      },
      onDrag: function(arr, val, i) {
        console.log(val, i, '!!!!!!!!!!')
        this.list2[val][i].x = arr[0]
        this.list2[val][i].y = arr[1]
        // console.log(x,y,'>!!!!!!!!!!!!!!')
      },
      dragstart(e, val, key) {
        val['time'] = new Date()
        console.log('左边拖动开始',e)
        // e.target.className = 'hezi'
        //   this.list2.push(evt);
        this.activeNames = e
      },
      dragend(e, val, key) {
        console.log('左边拖动结束')
        console.log(this.$refs.pdf[this.pdfKey - 1].getBoundingClientRect());
        console.log(e.x ,e.y, '当前值')
        

        let left = this.$refs.pdf[this.pdfKey - 1].getBoundingClientRect().left;
        let right = this.$refs.pdf[this.pdfKey - 1].getBoundingClientRect().right;
        let bottom = this.$refs.pdf[this.pdfKey -1].getBoundingClientRect().bottom
        let top = this.$refs.pdf[this.pdfKey -1].getBoundingClientRect().top
        if (e.x <= left || e.x >= right) {
            return
        }
        if (e.y <= 0 || e.y >= bottom) {
            return
        }
        this.width = parseInt(100 * (this.scale / 100));
        this.height = parseInt(100 * (this.scale / 100));
        let x = null;
        let y = null;
        if (parseInt(bottom - e.y) < 100) {
          y = parseInt(bottom - 160)
        }else if (parseInt(e.y - top) < 100) {
          y = 0
        }else {
          y = e.y - top
        }
        if (parseInt(e.x - left) < 100) {
          x = 0
        }else if (parseInt(right - e.x) < 100) {
          x = parseInt(e.x - left) - 90
        }else {
          x = parseInt(e.x - left)
        }
        let obj = {
          content: val.content,
          id: val.id,
          name: val.name,
          x: x,
          y: y
        }
        this.list2[this.pdfKey].push(obj);
        this.list4[this.pdfKey].push(obj);
        this.item = obj;
        this.itemType = true;
        console.log(x, y, '最后值')
        this.$forceUpdate();
      }
  }
}
</script>