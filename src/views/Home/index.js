import { randomColor } from '@/utils/common'
export default {
  name: 'home',
  data () {
    return {
      cssList: []
    }
  },
  mounted () {
    this.getList()
  },
  methods: {
    getList () {
      this.cssList = [
        {
          id: 7,
          cover: '5.jpg',
          title: 'css动画之3D旋转相册',
          desc: 'css动画之3D旋转相册',
          isHide: false,
          routeName: 'cssRotatePhotos'
        },
        // {
        //   id: 6,
        //   cover: '5.jpg',
        //   title: 'css特效之按钮悬浮特效',
        //   desc: 'css特效之按钮悬浮特效',
        //   isHide: true,
        //   routeName: 'cssButtons'
        // },
        {
          id: 5,
          cover: '5.jpg',
          title: 'css特效之rotate',
          desc: 'css特效之rotate',
          isHide: false,
          routeName: 'cssRotate'
        },
        // {
        //   id: 4,
        //   cover: '2.jpg',
        //   title: 'css特效之手风琴(无序列表)',
        //   desc: 'css特效之手风琴(无序列表)',
        //   isHide: true,
        //   routeName: 'according'
        // },        
        {
          id: 1,
          cover: '3.jpg',
          title: 'css特效之css进度条',
          desc: 'css特效之css进度条',
          isHide: false,
          routeName: 'cssProgress'
        },        
        {
          id: 3,
          cover: '2.jpg',
          title: 'css动画之cssLoading',
          desc: 'css动画之cssLoading',
          isHide: false,
          routeName: 'cssLoading'
        },
        {
          id: 2,
          cover: '1.jpg',
          title: 'css动画之css方块跳动',
          desc: 'css动画之css方块跳动',
          isHide: false,
          routeName: 'blockJump'
        },
        {
          id: 2,
          cover: '1.jpg',
          title: 'css实现半透明边框',
          desc: 'css实现半透明边框',
          isHide: false,
          routeName: 'blockJump'
        }
      ]
    },
    triggerToCssLink (name) {
      if (name) {
        this.$router.push({
          name
        })
      } else {
        alert('敬请期待！')
      }
    }
  }
}