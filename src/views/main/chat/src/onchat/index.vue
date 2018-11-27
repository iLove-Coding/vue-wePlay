<template>
  <wp-chat-page class="wp-main-chat-onchat">
    <header class="wp-main-chat-onchat__head">
      <div class="return-icon" @click="pageHandle('HomePage')"><i class="icon-ali-back-m"></i></div>
      <p class="friend-info">
          <span class="i-name">{{nowChatUser.username}}</span>
          <span class="i-status">{{nowChatUser.status===1?'在线':'离线'}}</span>
      </p>
      <div class="friend-info-icon" @click="pageHandle('FriendInfo')"><i class="icon-ali-user"></i></div>
    </header>
    <div class="wp-main-chat-onchat__content js-chat-content-box" @click="slidePanelHandle('block')">
      <div class="msg-line clearfix" v-for="(item,index) in chatInfoMap[nowChatUser.id]" :key="index">
        <div class="photo" :class="item.type===1?'m-photo':'f-photo'"></div>
        <div class="content" :class="item.type===1?'m-content':'f-content'">{{item.content}}</div>
        <div v-if="item.type===1&&!item.isSend" class="loading"></div>
      </div>
    </div>
    <div class="wp-main-chat-onchat__footer">
      <div class="msg-input">
        <input type="text" v-model="sendMsg" @keyup.enter.exact="sendHandle">
      </div>
      <ul class="more-panel">
        <li class="panel-item" @click="slidePanelHandle('pictures')"><i class="icon-ali-tupian"></i></li>
        <li class="panel-item" @click="slidePanelHandle('biaoqing')"><i class="icon-ali-biaoqing1"></i></li>
      </ul>
      <transition name="slide">
        <div class="slide-panel" v-show="showSlidePanel==='biaoqing'"></div>
      </transition>
    </div>
  </wp-chat-page>
</template>
<script src="./onchat.js">

</script>
<style lang="scss" scoped>
@mixin arrow-style() {
  content: '';
  position: absolute;
  top: 15px;
  width: 0;
  height: 0;
  border: 6px solid transparent;
}
@include b(main-chat-onchat) {
  @include e(head) {
    width: 100%;
    height: 60px;
    background-color: white;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    display: flex;
    justify-content: space-between;
    .return-icon {
      width: 60px;
      text-align:  center;
      .icon-ali-back-m {
        line-height: 60px;
        font-size: 30px;
        color: #19191b;
        }
      }
      .friend-info {
        text-align: center;
        span {
          display: block;
          &.i-name {
            font-size: 20px;
            line-height: 36px;
          }
          &.i-status {
            font-size: 14px;
          }
        }
      }
      .friend-info-icon {
        width: 60px;
        text-align: center;
        .icon-ali-user {
          line-height: 60px;
          font-size: 30px;
          color: #19191b;
        }
      }
  }
  @include e(content) {
    position: absolute;
    top: 0;
    left: 0;
    background-color: #ecedf0;
    width: 100%;
    height: calc(100% - 90px);
    box-sizing: border-box;
    overflow-y: scroll;
    padding-top: 60px;
      .msg-line {
        min-height: 60px;
        padding: 0 16px;
        margin: 10px 0;
        .photo {
          width: 50px;
          height: 50px;
          border-radius: 25px;
          background-color: green;
          &.m-photo {
              float: right;
          }
          &.f-photo {
              float: left;
          }
        }
        .content {
          max-width: 240px;
          min-width: 30px;
          padding: 10px;
          box-sizing: border-box;
          min-height: 44px;
          border-radius: 12px;
          font-size: 16px;
          line-height: 24px;
          margin-top: 3px;
          &.m-content {
            float: right;
            background-color: #51b6f2;
            color: white;
            margin-right: 13px;
            position: relative;
            &:after {
              @include arrow-style;
              right: -12px;
              border-left-color: #51b6f2;
            }
          }
          &.f-content {
            float: left;
            background-color: white;
            color: black;
            margin-left: 13px;
            position: relative;
            &:after {
              @include arrow-style;
              left: -12px;
              border-right-color: white;
            }
          }
        }
        .loading {
          width: 16px;
          height: 16px;
          border: 2px solid #777;
          border-top-color: transparent;
          border-radius: 50%;
          animation: rotate 1s linear infinite;
          box-sizing: border-box;
          float: right;
          margin-right: 8px;
          margin-top: 17px;
          @keyframes rotate{
            from {
              -webkit-transform: rotate(0);
            }
            to {
              -webkit-transform: rotate(360deg);
            }
          }
        }
      }
  }
  @include e(footer) {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 90px;
    width: 100%;
    background-color: #ecedf0;
    .msg-input {
        box-sizing: border-box;
        padding: 0 10px;
        width: 100%;
        input {
            width: 100%;
            height: 45px;
            border-radius: 10px;
            border: none;
            outline: none;
            box-sizing: border-box;
            padding: 0 10px;
            font-size: 14px;
        }
      }
      .more-panel {
        display: flex;
        padding: 0 10px;
        box-sizing: border-box;
        .panel-item {
            width: 45px;
            height: 45px;
            text-align: center;
            i {
                font-size: 30px;
                line-height: 45px;
                color: #808492;
            }
        }
      }
      .slide-panel {
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 300px;
          background-color: white;
          overflow-y: scroll;
      }
  }
}
.slide-enter, .slide-leave-to {
    transform: translateY(280px);
}
.slide-enter-active, .slide-leave-active {
    transition: .3s;
}
</style>
