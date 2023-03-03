const app = Vue.createApp({
    data: function() {
        return {
            receivingList: [
                {name: 'Steel Beam', ProductID: '040020', itemStatus: 'pending', priority: 'low', category: 'receiving'},
                {name: 'Iron Core', ProductID: '001283', itemStatus: 'received', priority: 'high', category: 'receiving'},
                {name: 'Cutting Tool Tips', ProductID: '044932', itemStatus: 'pending', priority: 'absolute', category: 'receiving'},
                {name: 'Plasma Fuel Cells', ProductID: '009332', itemStatus: 'received', priority: 'high', category: 'receiving'},
            ],
            shippingList: [
                {name: 'Iron 3/4th flat', ProductID: '044221', itemStatus: 'pending', priority: 'low', category: 'shipping'},
                {name: 'Iron Rivets', ProductID: '061273', itemStatus: 'shipped', priority: 'high', category: 'shipping'},
                {name: 'Iron Blades', ProductID: '045132', itemStatus: 'pending', priority: 'absolute', category: 'shipping'},
                {name: 'Oxygen Tanks', ProductID: '007782', itemStatus: 'shipped', priority: 'high', category: 'shipping'},
            ],
        }
    },

    methods: {
        addReceiving(item){
            this.receivingList.push(item);
        },
        removeReceiving(item){
            this.receivingList.splice(this.receivingList.indexOf(item), 1);
        },

        addShipping(item){
            this.shippingList.push(item);
        },
        removeShipping(item){
            this.shippingList.splice(this.shippingList.indexOf(item), 1);
        },
    },

    computed: {
        receiveList: function(){
            return this.receivingList.filter(function (item){
                return item.category === 'receiving';
            })
        },

        receiveGotList(){
            return this.receivingList.filter(function (item) {
                return item.itemStatus === 'received';
            })
        },

        shipList(){
            return this.shippingList.filter(function (item){
                return item.category === 'shipping';
            })
        },

        shippedList(){
            return this.shippingList.filter(function (item){
                return item.itemStatus = 'shipped';
            })
        }
    },

    mounted: function () {
        if (localStorage.getItem('receivingList')) {
            this.receivingList = JSON.parse(localStorage.getItem('receivingList'));
        }
        if (localStorage.getItem('shippingList')){
            this.shippingList = JSON.parse(localStorage.getItem('shippingList'));
        }
    },

    watch: {
        receivingList: {
            handler: function (newList) {
                localStorage.setItem('receivingList', JSON.stringify(newList));
            },

            deep: true
        },

        shippingList: {
            handler: function (newList) {
                localStorage.setItem('shippingList', JSON.stringify(newList));
            },

            deep: true
        },
    }


})