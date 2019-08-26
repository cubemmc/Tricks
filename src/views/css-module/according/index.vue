<template>
  <div class="flex-center container">
    <div class="back_color"></div>
    <div id="wrap">
      <ul>
        <li>
          <div class="content">
            <dl>
              <dt><img src="@/assets/images/1.jpg"></dt>
              <dd>💖笔芯💖</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/2.jpg"></dt>
              <dd>💖笔芯💖</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/3.jpg"></dt>
              <dd>💖笔芯💖</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/4.jpg"></dt>
              <dd>💖笔芯💖</dd>
            </dl>
          </div>
          <p class="p1">重生名流巨星</p>
          <p class="p2">重生名流巨星</p>
        </li>
        <li>
          <div class="content">
            <dl>
              <dt><img src="@/assets/images/1.jpg"></dt>
              <dd>💕帅气💕</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/2.jpg"></dt>
              <dd>💕帅气💕</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/3.jpg"></dt>
              <dd>💕帅气💕</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/4.jpg"></dt>
              <dd>💕帅气💕</dd>
            </dl>
          </div>
          <p class="p1">亲爱的热爱的</p>
          <p class="p2">亲爱的热爱的</p>
        </li>
        <li>
          <div class="content">
            <dl>
              <dt><img src="@/assets/images/13.jpg"></dt>
              <dd>💖军阀💖</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/14.jpg"></dt>
              <dd>💖军阀💖</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/15.jpg"></dt>
              <dd>💖军阀💖</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/16.jpg"></dt>
              <dd>💖军阀💖</dd>
            </dl>
          </div>
          <p class="p1">老九门</p>
          <p class="p2">老九门</p>
        </li>
        <li>
          <div class="content">
            <dl>
              <dt><img src="@/assets/images/5.jpg"></dt>
              <dd>❤️张副官❤️</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/6.jpg"></dt>
              <dd>❤️张副官❤️</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/7.jpg"></dt>
              <dd>❤️张副官❤️</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/8.jpg"></dt>
              <dd>❤️张副官❤️</dd>
            </dl>
          </div>
          <p class="p1">沙海</p>
          <p class="p2">沙海</p>
        </li>
        <li>
          <div class="content">
            <dl>
              <dt><img src="@/assets/images/13.jpg"></dt>
              <dd>✌️国民弟弟✌️</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/14.jpg"></dt>
              <dd>✌️国民弟弟✌️</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/15.jpg"></dt>
              <dd>✌️国民弟弟✌️</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/16.jpg"></dt>
              <dd>✌️国民弟弟✌️</dd>
            </dl>
          </div>
          <p class="p1">烈火军校</p>
          <p class="p2">烈火军校</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.container{
  flex-direction: column;
  padding-top: 100px;
  width: 100%;
  box-sizing: border-box;
}
.back_color {
  background: #4f4f4f;
}
#wrap{
  width: 1200px;
  height: 300px;
  background: #6ca6cd;
  border: 5px solid #fff;
  overflow: hidden;
  box-sizing: border-box;
  ul {
    li {
      width: 238px;
      height: 300px;
      background: #6ca6cd;
      list-style: none;
      float: left;
      border: 1px solid #fff;
      position: relative;
      transition: 1s;
      box-sizing: border-box;
      .content {
        width: 962px;
        height: 260px;
        margin: 20px auto 0;
        position: absolute;
        top: 20px;
        left: 40px;
        dl {
          width: 220px;
          height: 218px;
          float: left;
          border: 1px solid #fff;
        }
        dt{
          display: flex;
          justify-content: center;
          width: 100%;
          height: 190px;
        }
        dd {
          background: rgba(0,0,0,0.5);
          color: #fff;
          text-align: center;
          font-size: 18px;
          line-height: 28px;
        }
        img {
          max-width: 100%;
          height: 100%;
        }
      }
      p {
        width: 238px;
        height: 300px;
        color: #fff;
        position: absolute;
        left: 0;
        background: rgba(0,0,0,0.5);
        line-height: 300px;
        text-align: center;
        transition: 1s;
      }
      .p1 {
        top: 0;
        left: 0;
      }
      .p2 {
        bottom: 0;
        left: 0;
      }
    }
    &:hover {
      li {
        width: 57px;
      }
    }
    li {
      &:hover {
        width: 962px;
        p {
          width: 962px;
          height: 32px;
          line-height: 32px;
        }
      }
    }
  }
}
</style>
