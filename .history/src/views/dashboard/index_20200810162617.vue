<template>
    <div class="body">
        
        <el-row class="ehart-head" :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                <div @mouseenter="hover(1)" @mouseleave="move" :class="{active:isActive==1}" class="grid-content bg-purple">
                    <h3>访问量</h3>
                    <div id="visits">

                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                <div @mouseenter="hover(2)" @mouseleave="move" :class="{active:isActive==2}" class="grid-content bg-purple">
                    <h3>销售情况</h3>
                    <div id="Authorization">

                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
                <div @mouseenter="hover(3)" @mouseleave="move" :class="{active:isActive==3}" class="grid-content bg-purple">
                    <h3>词云</h3>
                    <div id="wordCloudDom">

                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row class="ehart-head" :gutter="20">
            <el-col :xs="24" :sm="16" :md="16" :lg="16" :xl="16">
                <div @mouseenter="hover(4)" @mouseleave="move" :class="{active:isActive==4}" class="grid-content bg-purple">
                    <h3>人口增长情况</h3>
                    <div id="StackAreaDom">

                    </div>
                </div>
            </el-col>
            <el-col :xs="24" :sm="8" :md="8" :lg="8" :xl="8">
                <div @mouseenter="hover(5)" @mouseleave="move" :class="{active:isActive==5}" class="grid-content bg-purple">
                    <h3>擅长技能</h3>
                    <ul class="get-list">
                        <li>
                            <h4>Javascript</h4>
                            <h4>熟练程度：20%</h4>
                        </li>
                        <li>
                            <h4>ES6</h4>
                            <h4>熟练程度：10%</h4>
                        </li>
                        <li>
                            <h4>VUE</h4>
                            <h4>熟练程度：20%</h4>
                        </li>
                        <li>
                            <h4>ES6</h4>
                            <h4>熟练程度：10%</h4>
                        </li>
                        <li>
                            <h4>ElementUI</h4>
                            <h4>熟练程度：5%</h4>
                        </li>
                    </ul>
                    <div class="btns">
                        <el-button @click="go('https://jq.qq.com/?_wv=1027&k=ywMkGrfF')" type="danger">加入VUE交流组</el-button>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row class="menu-list" :gutter="20">
            <el-col :xs="6" :sm="4" :md="4" :lg="3" :xl="3" v-for="(item,index) in menuList" :key="index">
                <div class="menu-item" @mouseenter="hover(index+10)" @mouseleave="move" :class="{active:isActive==index+10}">
                    <i :class="item.icon" :style="{'color':item.color,'fontSize':'50px'}"></i>
                    <p>{{item.name}}</p>
                </div>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import {
        Area,
        Column,
        WordCloud,
        StackedArea
    } from '@antv/g2plot';
    export default {
        data() {
            return {
                activities: [{
                    content: '通过Vue.directive绑定全局按钮级权限指令v-permission(系统设置有所体现)',
                    timestamp: '2020-07-17',
                    size: 'large',
                    type: 'primary',
                },{
                    content: '增加tagView左右滑动，快捷关闭操作',
                    timestamp: '2020-06-14',
                    size: 'large',
                },{
                    content: '将前端权限管理，通过官方默认的方式进行权限验证，修改mock用户信息返回参数,路由文件中在路由元meta中通过roles:["admin","editor"]进行权限控制',
                    timestamp: '2020-06-10',
                    size: 'large',
                },{
                    content: '更新配置@/settings.js文件中的routesRole来切换前端或者后端控制路由    （已改为默认前端控制）',
                    timestamp: '2020-06-08',
                    size: 'large',
                },{
                    content: '新增权限人员管理，角色管理',
                    timestamp: '2020-06-08',
                    size: 'large',
                }, {
                    content: '更新控制面板布局内容',
                    timestamp: '2020-06-06',
                    size: 'large',
                }, {
                    content: '引入蚂蚁金服图表库及vue-video-player',
                    timestamp: '2020-05-23',
                }, {
                    content: '引入vue-element-admin集成版图标',
                    timestamp: '2018-05-02',
                    size: 'large'
                }, {
                    content: '基于vue-element-admin基础版，更改为后端JSON控制路由',
                    timestamp: '2020-05-01'
                }],
                menuList: [{
                    icon: 'el-icon-video-camera-solid',
                    name: '视频',
                    color: 'rgb(255, 192, 105)'
                }, {
                    icon: 'el-icon-s-order',
                    name: '工作日程',
                    color: 'rgb(92, 219, 211)'
                }, {
                    icon: 'el-icon-s-marketing',
                    name: '数据报表',
                    color: 'rgb(179, 127, 235)'
                }, {
                    icon: 'el-icon-view',
                    name: '异常监控',
                    color: 'rgb(105, 192, 255)'
                }, {
                    icon: 'el-icon-present',
                    name: '最好的礼物',
                    color: 'rgb(255, 133, 192)'
                }, {
                    icon: 'el-icon-location',
                    name: '定位系统',
                    color: 'rgb(255, 214, 102)'
                }, {
                    icon: 'el-icon-basketball',
                    name: '轻松时刻',
                    color: 'rgb(255, 156, 110)'
                }, {
                    icon: 'el-icon-moon-night',
                    name: '锁屏处理',
                    color: 'rgb(149, 222, 100)'
                }],
                isActive: -1,
                areaPlotdata: [{
                        year: '1991',
                        value: 3
                    },
                    {
                        year: '1992',
                        value: 4
                    },
                    {
                        year: '1993',
                        value: 3.5
                    },
                    {
                        year: '1994',
                        value: 5
                    },
                    {
                        year: '1995',
                        value: 4.9
                    },
                    {
                        year: '1996',
                        value: 6
                    },
                    {
                        year: '1997',
                        value: 7
                    },
                    {
                        year: '1998',
                        value: 9
                    },
                    {
                        year: '1999',
                        value: 13
                    },
                ],
                Columndata: [{
                        type: '家具家电',
                        sales: 38,
                    },
                    {
                        type: '粮油副食',
                        sales: 52,
                    },
                    {
                        type: '生鲜水果',
                        sales: 61,
                    },
                    {
                        type: '美容洗护',
                        sales: 145,
                    },
                    {
                        type: '母婴用品',
                        sales: 48,
                    },
                    {
                        type: '进口食品',
                        sales: 38,
                    },
                    {
                        type: '食品饮料',
                        sales: 38,
                    },
                    {
                        type: '家庭清洁',
                        sales: 38,
                    },
                ],
                wordData: [{
                    id: 1,
                    word: 'vue',
                    weight: 2,

                }, {
                    id: 2,
                    word: 'vuex',
                    weight: 2
                }, {
                    id: 3,
                    word: 'elementUi',
                    weight: 3,

                }, {
                    id: 4,
                    word: 'vue-element-admin',
                    weight: 3
                }, {
                    id: 5,
                    word: 'vue-admin-beautiful',
                    weight: 4,

                }, {
                    id: 6,
                    word: 'vue-router',
                    weight: 8
                }, {
                    id: 7,
                    word: 'axios',
                    weight: 5,

                }, {
                    id: 8,
                    word: 'g2plot',
                    weight: 2
                }],
                StackAreadata: [{
                        country: 'Asia',
                        year: '1900',
                        value: 242,
                    },
                    {
                        country: 'Asia',
                        year: '2000',
                        value: 652,
                    },
                    {
                        country: 'Asia',
                        year: '2010',
                        value: 342,
                    },
                    {
                        country: 'Asia',
                        year: '2020',
                        value: 835,
                    },
                    {
                        country: 'Europe',
                        year: '1900',
                        value: 163,
                    },
                    {
                        country: 'Europe',
                        year: '2000',
                        value: 203,
                    },
                    {
                        country: 'Europe',
                        year: '2010',
                        value: 463,
                    },
                    {
                        country: 'Europe',
                        year: '2020',
                        value: 203,
                    },
                ],
            }
        },
        mounted() {
            this.areaPlot().render();
            this.columnPlot().render();
            this.wordCloudPlot().render();
            this.StackAreaPlot().render();
        },
        components: {},
        methods: {
            hover(i) {
                this.isActive = i
            },
            move() {
                this.isActive = -1
            },
            go(url) {
                window.open(url)
            },
            areaPlot() {
                return (
                    new Area(document.getElementById('visits'), {
                        data: this.areaPlotdata,
                        xField: 'year',
                        yField: 'value',
                        height: '280',
                        width: '400',
                        forceFit: true
                    })
                )
            },
            columnPlot() {
                return (
                    new Column(document.getElementById('Authorization'), {
                        data: this.Columndata,
                        xField: 'type',
                        yField: 'sales',
                        padding: 'auto',
                        height: '280',
                        width: '400',
                        forceFit: true,
                        meta: {
                            type: {
                                alias: '类别',
                            },
                            sales: {
                                alias: '销售额(万)',
                            },
                        },
                    })
                )
            },
            wordCloudPlot() {
                let that = this;
                return (
                    new WordCloud(document.getElementById('wordCloudDom'), {
                        data: this.wordData,
                        height: '280',
                        width: '400',
                        shape: 'triangle-forward',
                        forceFit: true,
                        selected: -1,
                        wordStyle: {
                            fontSize: [20, 40],
                            gridSize: 16,
                            rotation: [0, 0]
                        },
                        onWordCloudClick(item, dimension, evt, fn) {
                            that.$message({
                                message: `点击了${item.word}`,
                                type: 'success'
                            });
                        }
                    })
                )
            },
            StackAreaPlot() {
                return (
                    new StackedArea(document.getElementById('StackAreaDom'), {
                        data: this.StackAreadata,
                        meta: {
                            year: {
                                alias: '年份',
                                range: [0, 1],
                            },
                            value: {
                                alias: '数量',
                                formatter: (v) => {
                                    return `${v}个`
                                }
                            }
                        },
                        height: '280',
                        xField: 'year',
                        yField: 'value',
                        forceFit: true,
                        stackField: 'country',
                        legend: {
                            visible: false
                        }
                    })
                )
            },
        }
    }
</script>

<style lang="scss" >
    .el-timeline-item__content{
        line-height: 26px;
    }
    .active {
        box-shadow: 1px 1px 10px 1px #eee;
        transition: .5s;
        cursor: pointer;
    }

    .body {
        margin: 20px;
        background: #fff;
        padding: 20px;
        .ehart-head {
            margin-top: 20px;

            .grid-content {
                border: 1px solid #eee;

                &:nth-last-of-type(1) {
                    margin-top: 20px;
                }

                h3 {
                    font-size: 14px;
                    border-bottom: 1px solid #eee;
                    padding: 10px;
                }

                .get-list {
                    width: 90%;
                    margin: 0 auto;
                    padding: 10px 0;

                    li {
                        width: 100%;
                        display: flex;
                        justify-content: space-around;
                        border: 1px solid #eee;
                        padding: 10px 0;
                        border-bottom: none;

                        &:nth-last-of-type(1) {
                            border-bottom: 1px solid #eee;
                        }

                        h4 {
                            width: 50%;
                            height: 100%;
                            padding-right: 10px;
                            text-align: right;
                            border-right: 1px solid #eee;

                            &:nth-last-of-type(1) {
                                border: none;
                                text-align: left;
                                padding-left: 10px;
                            }
                        }
                    }
                }

                .btns {
                    width: 90%;
                    margin: 0 auto;
                    padding-top: 8px;
                    padding-bottom: 20px;
                }
            }
            .block{
                padding:20px;
            }
        }

        .menu-item {
            border: 1px solid #eee;
            text-align: center;
            padding-top: 10px;
            margin-bottom: 20px;

            p {
                margin: 10px 0;
                font-size: 16px;
            }
        }
    }
</style>
