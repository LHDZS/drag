
<style lang="less" scoped>
.hello {
    width: 100%;
    height: 100%;
    .left {
        float: left;
        width: 300px;
        height: 100%;
        .list-group-item {
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 16px;
        }
    }
    .con {
        float: left;
        width: calc(100% - 600px);
        height: 99%;
        text-align: center;
        overflow: hidden;
        .ladu {
          float: left;
          min-width: 200px;
          height: 38px;
          line-height: 38px;
          margin-right: 8px;
          padding: 0 20px;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          border-left: 1px solid #e4e4e4;
          border-right: 1px solid #e4e4e4
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
                }
                .yinzhang {
                  width: 100px;
                  height: 100px;
                  border: 1px dashed red;
                  position: absolute;
                  margin: 0;
                  padding: 0;
                  font-size: 100%;
                  font: inherit;
                  vertical-align: baseline;
                  img {
                    width: 100%;
                    height: 100%;
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
        .list-group-item {
          width: 100%;
          height: 50px;
          line-height: 50px;
          text-align: center;
          font-size: 16px;
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

<template>
  <div class="hello">
    <div class="left">
        <div class="row">
            <div class="col-5">
            <!-- <h2>可用组件列表</h2>
            <div class="list-group-item" v-for="(element,key) in list1" :key="key" draggable 
            @dragstart="dragstart($event, element, key)" 
            @dragend="dragend($event, element, key)"
            >{{ element.name }}</div> -->
            </div>
        </div>
    </div>
    <div class="con" ref="con">
        <div class="ladu">
          <el-slider v-model="scale" :min="50" :max="200"  @change="chang"></el-slider>
        </div>
        <div class="ladu">
          <el-pagination
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="1"
            layout="prev, pager, next, jumper"
            :total="numPages">
          </el-pagination>
        </div>
        <div style="float: left">
          <el-button size="mini" type="primary" @click="tijiao">提交</el-button>
        </div>
        <div class="pdf" id="pdf">
          <div class="pdfaaa" v-for="i in numPages" :key="i">
              <div class="pdfsss" ref="pdf" :style="'width:' + padWidth + 'px;' + 'height:' + pdfHeight + 'px'" @mouseover="changeActive(i)">
                <pdf
                    :src="pdfSrc"
                    :page="i"
                    @num-pages="pageCount=$event"
                    @page-loaded="currentPage=$event"
                ></pdf>
                <div class="yinzhang" v-for="(item,key) in list3[i]" :key="key" :style="'width:' + width + 'px;height:' + height + 'px;top:' + item.y + 'px;left:' + item.x + 'px'">
                  <img :src="item.url" alt="">
                </div>
              </div>
            </div>  
        </div>
    </div>
    <div class="right">
      <h2>可用组件列表</h2>
      <div class="list-group-item" v-for="(element,key) in list1" :key="key" draggable 
      @dragstart="dragstart($event, element, key)" 
      @dragend="dragend($event, element, key)"
      >{{ element.name }}</div>
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
      options: [],
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
        { name: "印章1", id: 1, content: "内容内容内容。。。。", url:"https://gsb-zc.oss-cn-beijing.aliyuncs.com//zc_2236159410351889120207143158891logo2.png" },
        { name: "印章2", id: 2, content: "内容内容内容。。。。", url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1595411660323&di=74090aebc661135b7328421a130a11f5&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180423%2F740367f977bb4c279920ebbcdc8d4f24.jpeg"},
      ],
      list2: {
        1: []
      },
      list3: [],
      list4: [],
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
      console.log(this.$route.query.list);
      this.list3 = JSON.parse(this.$route.query.list);
      this.list4 = JSON.parse(this.$route.query.list);
      this.pdfTask(this.pdfSrc)
  },
  methods: {
    handleScroll(e) {
      // console.log('????????????????????')
      // let h = document.getElementById('pdf').scrollTop;
      var scrollTop = document.getElementById('pdf').scrollTop
      console.log(scrollTop )
      for (let i = 1; i <= this.numPages; i++) {
        if (scrollTop > Number(this.pdfHeight) * i) {
          this.currentPage3 = i + 1
        }else {
          this.currentPage3 = i - 1
        }
      }
    },
    tijiao() {
      let arr = []
      for (const key in this.list3) {
        arr = arr.concat(this.list3[key])
      }
      console.log(arr, '提交了')
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      let a = null
      console.log(this.$refs.pdf)
      let h = this.$refs.pdf[val - 1].offsetTop
      this.$nextTick(() => {
        document.querySelector('.pdf').scrollTop = h - 50
      })
    },
    // 鼠标进入
    changeActive(i) {
      // console.log(i,'鼠标移入');
      this.pdfKey = i;
    },
    pdfTask(pdfUrl){
        let self = this
        let loadingTask = pdf.createLoadingTask(pdfUrl)
        loadingTask.promise.then(pdf => {
          console.log(pdf,'成功了');
          self.pdfUrl = loadingTask
          self.numPages = pdf._pdfInfo.numPages
          for (let index = 0; index < self.numPages; index++) {
            self.list2[index + 1] = []         
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
        for (let j = 0; j < this.list3[i].length; j++) {
          this.list3[i][j].y = this.list4[i][j].y * (this.scale / 100)
          this.list3[i][j].x = this.list4[i][j].x * (this.scale / 100)
        }
      }
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
        // console.log('左边拖动开始',e)
        //   this.list2.push(evt);
        this.activeNames = e
      },
      dragend(e, val, key) {
        console.log('左边拖动结束')
        // console.log(e,val);
        // console.log(document.getElementById('pdf').scrollTop)
        let left = this.$refs.pdf[0].getBoundingClientRect().left;
        let right = this.$refs.pdf[0].getBoundingClientRect().left + 595;
        let bottom = this.$refs.pdf[0].getBoundingClientRect().bottom;
        // console.log(Number(this.pdfHeight) + 38)
        // if (e.x <= left || e.x >= right) {
        //     return
        // }
        let h = document.getElementById('pdf').scrollTop;
        let w = document.getElementById('pdf').scrollLeft;
        // console.log(w, h);
        // console.log(e.x,'鼠标距离左边的距离')
        // console.log(left,'pdf元素距离左边的距离')
        // console.log(Number(this.width)/2,'元素宽度')
        // console.log(e.x, e.y);
        let x = (e.x - left) + w;
        let y = e.y + h;

        // console.log(x, y);
        
        for (const i in this.list3) {
          for (let j = 0; j < this.list3[i].length; j++) {
            // console.log(this.list3[i][j].x + Number(this.width) >= x && this.list3[i][j].x <= x && this.list3[i][j].y <= y && this.list3[i][j].y + Number(this.height) >= y)
            // console.log(this.list3[i][j].x  + Number(this.width) ,this.list3[i][j].y  + Number(this.height))
            // console.log(x, y);
            // console.log(this.list3[i][j].x,this.list3[i][j].y)
            if ( this.list3[i][j].x + Number(this.width) >= x && this.list3[i][j].x <= x && this.list3[i][j].y <= y && this.list3[i][j].y + Number(this.height) >= y) {
              console.log('在范围内')
              // this.width = parseInt(100 * (this.scale / 100));
              // this.height = parseInt(100 * (this.scale / 100));
              this.list3[i][j]['url'] = val.url;
              // console.log(this.list3)
              this.$forceUpdate();
            }else {
              console.log('不在范围内')
            }
          }  
        }
              
        
        
      }
  }
}
</script>