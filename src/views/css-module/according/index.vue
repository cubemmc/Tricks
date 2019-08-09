<template>
  <div class="flex-center-center container">
    <div id="wrap">
      <ul>
        <li>
          <div class="content">
            <dl>
              <dt><img src="@/assets/images/01.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/02.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/03.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/04.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
          </div>
          <p class="p1">灌篮之神</p>
          <p class="p2">灌篮之神</p>
        </li>
        <li>
          <div class="content">
            <dl>
              <dt><img src="@/assets/images/05.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/06.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/07.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/08.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
          </div>
          <p class="p1">灌篮之神</p>
          <p class="p2">灌篮之神</p>
        </li>
        <li>
          <div class="content">
            <dl>
              <dt><img src="@/assets/images/09.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/10.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/11.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/12.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
          </div>
          <p class="p1">灌篮之神</p>
          <p class="p2">灌篮之神</p>
        </li>
        <li>
          <div class="content">
            <dl>
              <dt><img src="@/assets/images/13.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/14.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/15.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/16.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
          </div>
          <p class="p1">灌篮之神</p>
          <p class="p2">灌篮之神</p>
        </li>
        <li>
          <div class="content">
            <dl>
              <dt><img src="@/assets/images/17.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/18.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/19.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/20.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
          </div>
          <p class="p1">灌篮之神</p>
          <p class="p2">灌篮之神</p>
        </li>
        <li>
          <div class="content">
            <dl>
              <dt><img src="@/assets/images/21.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/22.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/23.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
            <dl>
              <dt><img src="@/assets/images/24.jpg"></dt>
              <dd>灌篮</dd>
            </dl>
          </div>
          <p class="p1">灌篮之神</p>
          <p class="p2">灌篮之神</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="less" scoped>
.container{
  width: 100%;
  height: 100vh;
  background: #4f4f4f;
  box-sizing: border-box;
}
#wrap{
  width: 1194px;
  height: 300px;
  background: #6ca6cd;
  border: 5px solid #fff;
  overflow: hidden;
}
#wrap ul li{
  width: 197px;
  height: 300px;
  background: #6ca6cd;
  list-style: none;
  float: left;
  border: 1px solid #fff;
  position: relative;
  transition: 1s;
}
#wrap ul:hover li{
  width: 44px;
}
#wrap ul li:hover{
  width: 960px;
}
#wrap ul li .content{
  width: 960px;
  height: 260px;
  margin: 20px auto 0;
  position: absolute;
  top: 20px;
  left: 40px;
}
#wrap ul li .content dl{
  width: 220px;
  height: 218px;
  float: left;
  border: 1px solid #fff;
}
#wrap ul li .content dl dt{
  width: 200px;
  height: 170px;
}
#wrap ul li .content dl dt img{
  width: 160px;
  height: 100%;
  margin-left: 30px;
}
#wrap ul li .content dl dd{
  background: rgba(0,0,0,0.5);
  color: #fff;
  text-align: center;
  font-size: 18px;
  line-height: 28px;
}
#wrap ul li p{
  width: 197px;
  height: 300px;
  color: #fff;
  position: absolute;
  left: 0;
  background: rgba(0,0,0,0.5);
  line-height: 300px;
  text-align: center;
  transition: 1s;
}
#wrap ul li p.p1{
  top: 0;
  left: 0;
}
#wrap ul li p.p2{
  bottom: 0;
  left: 0;
}
#wrap ul li:hover p{
  width: 960px;
  height: 32px;
  line-height: 32px;
}
</style>
