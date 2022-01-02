Vue.config.productionTip = false
var app = new Vue({
    el: '#app',
    data: {
        list: [
            {
                id: 1,
                name: 'iPhone 13',
                price: 6188,
                count: 1
            },
            {
                id: 2,
                name: 'iPad Pro',
                price: 5888,
                count: 1
            },
            {
                id: 3,
                name: 'MacBook Pro',
                price: 21488,
                count: 1
            }
            // {
            //     id: 1,
            //     name: 'iPhone 7',
            //     price: 6188,
            //     count:1
            // },
            // {
            //     id: 1,
            //     name: 'iPhone 7',
            //     price: 6188,
            //     count:1
            // },
        ]

    },
    computed: {
        totalPrice: function () {
            var total = 0;
            for (let i = 0; i < this.list.length; i++) {
                const item = this.list[i];
                total += item.price * item.count;
            }

            return total;
            // return total.toString().replace(/\B(?=(\d{3}) + $)/g, ',');
        }
    },
    methods: {
        handleReduce: function(index) {
            if (this.list[index].count === 1) return;
            this.list[index].count--;
        },
        handleAdd: function(index) {
            this.list[index].count++;
        },
        handleRemove: function(index) {
            this.list.splice(index, 1);
        },
        getFinalPrice(price){
            return '￥' + price.toFixed(2);
        },
    },
    filters: {
        showPrice(price) {
            return '￥' + Number(price).toFixed(2);
        }
    }  
});



// /\B(?=(\d{3}) + $)/g

// \B 匹配非单词边界
// ?  匹配任何包含零个或一个 x 的字符串
// \d{3} 
// g 执行全局匹配 (查找所有匹配而非在找到第一个匹配后停止)

