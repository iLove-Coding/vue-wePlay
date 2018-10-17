<template>
   <div class="wp-main-chat__contacts">
       <ul class="select-tab">
            <li class="tab-item"></li>
            <li class="tab-item"></li>
            <li class="tab-item"></li>
       </ul>
       <ul class="group-list">
           <li class="group-item"></li>
           <li class="group-item"></li>
           <li class="group-item"></li>
           <li class="group-item"></li>
           <li class="group-item"></li>
       </ul>
   </div>
</template>
<script src="./contacts.js"></script>
<style lang="sass" scoped>
@include b(main-chat) {
    @include e(contacts) {
        height: calc(100% - 50px);
        box-sizing: border-box;
        border-top: solid 1px transparent;
        overflow-y: scroll;
        .select-tab {
            height: 100px;
            background: white;
            box-sizing: border-box;
            margin: 15px 0;
            display: flex;
            justify-content: space-between;
            .tab-item {
                flex: 1;
                text-align: center;
                line-height: 100px;
            }
        }
        .group-list {
            background-color: white;
            border-top: solid 1px #e5e5e5;
            .group-item {
                height: 55px;
            }
        }
    }
}
</style>
