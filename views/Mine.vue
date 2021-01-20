<template>
    <div class="mineWrap">
        <div class="header">
            <myheader2>
                <span slot="title">我的</span>
                <img src="/img/ic_settings.png" alt="" slot="rightImg" class="rightImg">
            </myheader2>
        </div>
        <div class="kong">

        </div>
        <!-- 管理选择区域 -->
        <div class="change">
            <ul>
                <li v-for="(item,index) in list" :key="index">
                   <img :src="'/img/'+item.pic" alt=""><br>
                    {{item.name}}
                </li>
            </ul>
        </div>

        <!-- 选择栏 -->
        <div class="tab">
            <ul>
                <li v-for="(item,index) in tablist" :key="index">
                    <img :src="'/img/'+item.tupian" alt="">
                    <span>{{item.title}}</span>
                    <span style="font-size:0.2rem;color:green;margin-top:0rem">></span>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import myheader2 from '@/components/head/header2'
export default {
    data(){
        return{
            list:[
                {pic:'ic_tab_profile_active.png',name:'密码管理'},
                {pic:'ic_tab_profile_active.png',name:'银行卡管理'}
            ],
            tablist:[
                {tupian:'ic_tab_home_active.png',title:'风险承受能力评估'},
                {tupian:'ic_tab_home_active.png',title:'安全保障'},
                {tupian:'ic_tab_home_active.png',title:'我的关注'},
                {tupian:'ic_tab_home_active.png',title:'帮助中心'},
                {tupian:'ic_tab_home_active.png',title:'关于我们'},
                {tupian:'ic_tab_home_active.png',title:'检查更新'},
                {tupian:'ic_tab_home_active.png',title:'联系客服'},
            ]
        }
    },
     components:{
        myheader2:myheader2
    },
}
</script>

<style lang="less" scoped>
    .kong{
        height: 0.5rem;
    }
    .change{
        ul{
            width: 100%;
            display: flex;
            border-bottom: 1px solid rgb(214, 214, 214);
            padding: 0.1rem 0;
        }
        li{
            width: 100%;
            list-style-type: none;
            flex: 1;
            text-align: center;
            margin-top: 0.05rem;
            
            img{
                width: 30%;
            }
        }
    }

    .tab{
        ul{
            list-style-type: none;
            li{
                padding: 0 0.1rem;
                border-bottom: 1px solid rgb(214, 214, 214);
                margin-top: 0.1rem;
                img{
                    width: 12%;
                    vertical-align: middle;
                }
                span:nth-of-type(1){
                    margin-left: 0.1rem;
                }
                span:nth-of-type(2){
                    float: right;
                    margin-top: 0.1rem;
                    margin-right: 0.1rem;
                }
            }
        }
    }
</style>