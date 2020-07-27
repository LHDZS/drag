<template>
  <div class="home">
    <canvas id="canvas" v-if="canType"></canvas>
      <div class="title">协议标题</div>
      <div class="content">
        协议内容
        一直在想，男人和女人真的没有纯友谊吗？就是心烦了可以一起出去喝喝小酒，聊聊天的那种。

        而且我以为我和他是一辈子的好朋友，直到……

        认识他在2014年，一掰手指头，嗯，也有五年光阴了。我们认识头几年没什么联系，就是即使见了面也只陷于打招呼，然后会是各玩各的。真正熟悉是在，他来到了我所在的城市工作后。

        还记得，他第一次给我发微信说：有没有节目安排，觉得好无聊，或者一起去吃东西也是可以的。那天我正好休息，待在家也没什么事做，就对他说：那我们一起去华莱士吃鸡吧，我很喜欢吃那里蜜汁鸡，吃一次就想吃第二次。他答应了。我们约在离我们两个都相对近的华莱士见面。

        我去到华莱士，他已经在那里坐着等我了，不过没点东西。我点了一只鸡加一杯可乐，问他吃什么，他边摆手边说：不习惯吃这类食物，你吃你的就可以了。我白了他一眼，说：不吃这些你又不说，我们可以去吃其他的东西。他说，你喜欢就好。我就不再说话了。意见也征求了，不吃就不吃，反正我又不会不好意思吃。等服务员端上一只鸡，我真的不顾他人的目光，一个人吃得津津有味。

        后来，他对我说，没想到你人瘦瘦的，胃口那么大。我不以为然，哼，吃得就是福。不过，我对他的印象挺好的，觉得他蛮懂得顾忌别人感受，再主要是谈吐不凡。

        他是一家公司的高管，平时忙得时候很忙，不忙的时候会闲出病。从那次我们见过面后，下班他有空就会约吃饭喝酒之类的。哈，我是那种喝茶也喝酒的女子。他知识量广泛，懂得很多，会告诉我很多职场上的干货。我遇到无法解决的困难也会向他求助，每次他都能帮我分析怎么做。每当此时，我觉得拥有这样一个异性朋友真的很不错。我一直把他当人生知己，相信他以前也是这样的。毕竟，有一次我们一起喝酒中，我喝醉了，他也没有欺负我，而是安静地坐在旁边等我酒醒。这样的异性朋友，夫复何求。

        在微信聊天时，我们会互相怼对方（虽然我们很少在微信上聊天）。他说我是猪，我说他是驴。他说我笨，我说他傻。怼着怼着，有时候觉得他挺逗比的。甚至以为我们聊天的气氛永远都不会尴尬。

        但在一次他心烦，我们一起出去喝酒中，喝着喝着，他突然就抱住我，要吻我。我吓坏了，用力把他推开，说：你怎么啦，我们是朋友，不可以这样子。他说：你很可爱，我喜欢你。我问：那你爱我么？他不语。我说：喜欢不是爱，如果再那样，我们朋友都做不成。我知道他有个异地女朋友，我们只会做朋友，也只能做朋友，我也只想把他当朋友。

        从那次以后，他约我出去喝酒时，我都要他向我保证不能对我有非分之想，我们只是朋友。他都会向我保证。可在最后那次，他还是想越线，我再一次被吓坏了。跟他说，我们的友情到此为止。

        之后，他约我，我都找各种理由推脱了。

        或许，男女之间真的不会有纯友谊吧。你们觉得呢？

        作者：静然安好
        链接：https://www.jianshu.com/p/a5bdcfc8df2e
        来源：简书
        著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
      </div>
      <div class="bottom">本协议由XXX公司为您提供服务</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      canvas: null,
      ctx: null,
      canvas2: null,
      ctx2: null,
      canType: true
    }
  },
  components: {

  },
  mounted() {
    this.xingkong();
    var that = this;
    
    window.onresize =()  =>{
        return (()=>{
          // this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
          // this.ctx2.clearRect(0,0,this.canvas2.width,this.canvas2.height);
          // that.canType = false;
          that.xingkong()
          // this.canvas.width = window.innerWidth;
          // this.canvas.height = window.innerHeight;
        })()
    }
  },
  methods: {
    xingkong() {     
      this.canType = true;
      this.canvas = document.getElementById('canvas');
      // console.log(this.canvas)
      this.ctx = this.canvas.getContext('2d');
      // console.log(this.ctx)
      this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);
      this.ctx.beginPath();
      var w = this.canvas.width = window.innerWidth;
      var h = this.canvas.height = window.innerHeight;
      

      var hue = 217;
      var stars = [];
      var count = 0;
      var maxStars = 1300;

      this.canvas2 = document.createElement('canvas');
      this.ctx2 = this.canvas2.getContext('2d');
      this.ctx2.clearRect(0,0,this.canvas2.width,this.canvas2.height);
      this.ctx2.beginPath();
      this.canvas2.width = 100;
      this.canvas2.height = 100;
      var half = this.canvas2.width / 2;
      var gradient2 = null;
      gradient2 = this.ctx2.createRadialGradient(half, half, 0, half, half, half);
      gradient2.addColorStop(0.025, '#CCC');
      gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
      gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
      gradient2.addColorStop(1, 'transparent');
      console.log(gradient2,'hahahahahah')
      this.ctx2.fillStyle = gradient2;
      this.ctx2.beginPath();
      this.ctx2.arc(half, half, half, 0, Math.PI * 2);
      this.ctx2.fill();


      function random(min, max) {
      if (arguments.length < 2) {
          max = min;
          min = 0;
      };

      if (min > max) {
          var hold = max;
          max = min;
          min = hold;
      };

      return Math.floor(Math.random() * (max - min + 1)) + min;
      };

      function maxOrbit(x, y) {
      var max = Math.max(x, y),
          diameter = Math.round(Math.sqrt(max * max + max * max));
      return diameter / 2;
      };

      var Star = function() {

      this.orbitRadius = random(maxOrbit(w, h));

      this.radius = random(60, this.orbitRadius) / 8; 

      this.orbitX = w / 2;
      this.orbitY = h / 2;
      this.timePassed = random(0, maxStars);
      this.speed = random(this.orbitRadius) / 50000; 
      // console.log(this.speed,'移动速度');
      this.alpha = random(2, 10) / 10;

      count++;
      stars[count] = this;
      };

      var that = this;
      Star.prototype.draw = function() {
      var x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
          y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
          twinkle = random(10);

      if (twinkle === 1 && this.alpha > 0) {
          this.alpha -= 0.05;
      } else if (twinkle === 2 && this.alpha < 1) {
          this.alpha += 0.05;
      };

      that.ctx.globalAlpha = this.alpha;
      that.ctx.drawImage(that.canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
      this.timePassed += this.speed;
      };

      for (var i = 0; i < maxStars; i++) {
      new Star();
      };
      console.log(maxStars,'星星数量');
      function animation() {
      that.ctx.globalCompositeOperation = 'source-over';
      that.ctx.globalAlpha = 0.5;
      that.ctx.fillStyle = 'hsla(' + hue + ', 64%, 6%, 2)';
      that.ctx.fillRect(0, 0, w, h);

      that.ctx.globalCompositeOperation = 'lighter';
      for (var i = 1, l = stars.length; i < l; i++) {
          stars[i].draw();
      };

      window.requestAnimationFrame(animation);
      };
      animation();
  },
  }
}
</script>

<style lang="less" scoped>
.home {
    width: 100%;
    height: 100%;
    // padding: .5rem;
    // box-sizing: border-box;
    position: relative;
    .title {
      font-size: .5rem;
      font-weight: 600;
    }
    .content {
      font-size: .4375rem;
      color: #333;
      text-align: left;
      margin-top: .625rem;
      padding-bottom: .6rem;
    }
    .bottom {
      width: 100%;
      font-size: .35rem;
      line-height: 1.25rem;
      text-align: center;
      position: absolute;
      bottom: 0;
      left: 0;
    }
}
</style>

<style>
/*css reset */
body,p,div,ol,ul,li,dl,dt,dd,h1,h2,h3,h4,h5,h6,form,input,iframe,nav {
 margin: 0;
 padding: 0;
}
html,body {
 width: 100%;
 height: 100%;
}
body {
 font: 14px Microsoft YaHei;
 -webkit-text-size-adjust:100%;
 -moz-user-select: none;
 -webkit-user-select: none;
 user-select: none;
 position: relative;
 background: #000;
}
 
#canvas {
 width: 100%;
 height: 100%;
 display: block;
 opacity: .8;
}
</style>