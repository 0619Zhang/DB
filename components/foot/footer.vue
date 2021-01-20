<template>
    <div class="tabbarWrap">
        <div class="item" v-for="(item,index) in tablist" :key="index" @click="change(index)">
            <myfooter :item='item'></myfooter>
        </div>
        
    </div>
</template>

<script>
import myfooter from './zi'
export default {
    data(){
        return{
            tablist:[
                {title:'首页',n_img:'ic_tab_home_normal.png',a_img:'ic_tab_home_active.png',flag:true,url:'/home'},
                 {title:'书影音',n_img:'ic_tab_subject_normal.png',a_img:'ic_tab_subject_active.png',flag:false,url:'/audio'},
                  {title:'广播',n_img:'ic_tab_status_normal.png',a_img:'ic_tab_status_active.png',flag:false,url:'/broadcast'},
                   {title:'小组',n_img:'ic_tab_group_normal.png',a_img:'ic_tab_group_active.png',flag:false,url:'/group'},
                    {title:'我的',n_img:'ic_tab_profile_normal.png',a_img:'ic_tab_profile_active.png',flag:false,url:'/mine'}
            ]
        }
    },
    components:{
        myfooter:myfooter
    },
    methods:{
        change(index){
            for(var i=0;i<this.tablist.length;i++){
                this.tablist[i].flag=false
            }
            this.tablist[index].flag=true;
            this.$router.push(this.tablist[index].url)
        }
    }
}
</script>

<style lang="less" scoped>
    .tabbarWrap{
        height: 0.6rem;
        width: 100%;
        background-color: #fff;
        border-top: 1px solid #d8d8d8;
        display: flex;
        position: fixed;
        bottom: 0;
        .item {
            flex: 1;
        }
    }

</style>