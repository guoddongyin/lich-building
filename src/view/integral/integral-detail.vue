<template>
    <div>
        <div class="integral-title">
            <div class="jifen">
                <p class="title">已使用积分</p>
                <p class="shuzi">{{useroneinfo.SYJF}}</p>
            </div>
            <div class="jifen">
                <p class="title">本月可用积分</p>
                <p class="shuzi">{{useroneinfo.KYJF}}</p>
            </div>
            <div class="jifen">
                <p class="title">总积分</p>
                <p class="shuzi">{{useroneinfo.TotalJF}}</p>
            </div>
        </div>
        <div class="we-title">积分明细</div>
        <div>
            <mt-cell :title="item.jftype" :label="item.createdate" v-for="(item,index) in jflslist"  :key="index">
                <span style="color: #eb4f4f">{{item.jf}}</span>
            </mt-cell>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'page-search',
        data() {
            return {
                value: '',
                defaultResult: [
                    'Apple',
                    'Banana',


                ],
                useroneinfo: '',
                jflslist:[]
            };
        },
        mounted() {
            this.getuserinfo();
            this.getjflslist();
        },
        methods: {
            getuserinfo: function () {
                var that = this;
                var datas = {}
                that.$fetch('oneinfo', datas)
                    .then((response) => {
                        var data = response.data;
                        that.useroneinfo = data

                    })

            },
            getjflslist:function () {
                var that = this;
                var datas = {}
                that.$fetch('jfls', datas)
                    .then((response) => {
                        var data = response.data ;
                        that.jflslist = data;
                        for(var i in that.jflslist){
                           if(parseFloat(that.jflslist[i].jf)>0){
                               that.jflslist[i].jf='+'+that.jflslist[i].jf
                           }
                        }

                    })
            }
        },
        computed: {
            filterResult() {
                return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
            }
        }
    };
</script>

<style lang="scss" scoped>
    .page-search {
        height: 100%;
    }

    .integral-title {
        width: 100%;
        height: 230px;
        /*background-color: #f2f2f2;*/
        background: url("../../../static/img/neirong1_02.png");
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        /*line-height: 200px;*/
        text-align: center;
        font-size: 28px;
        color: #333;
        .jifen {
            width: 33.33333%;
            color: #fff;
            .title {
                font-size: 20px;
                padding-bottom: 10px;
            }
            .shuzi {
                font-size: 36px;
            }
        }

    }

    .we-title {
        text-align: left;
        color: #333333;
        font-size: 34px;
        width: 140px;
        padding: 30px;
    }

</style>

