const app = Vue.createApp({
    data: function() {
        return {
            receivingTable: [
                {name: 'Steel Beam', productID: '040020', itemStatus: 'pending', priority: 'low', category: 'receiving'},
                {name: 'Iron Core', productID: '001283', itemStatus: 'received', priority: 'high', category: 'receiving'},
                {name: 'Cutting Tool Tips', productID: '044932', itemStatus: 'pending', priority: 'absolute', category: 'receiving'},
                {name: 'Plasma Fuel Cells', productID: '009332', itemStatus: 'received', priority: 'high', category: 'receiving'},
            ],
            shippingTable: [
                {name: 'Iron 3/4th flat', productID: '044221', itemStatus: 'pending', priority: 'low', category: 'shipping'},
                {name: 'Iron Rivets', productID: '061273', itemStatus: 'shipped', priority: 'high', category: 'shipping'},
                {name: 'Iron Blades', productID: '045132', itemStatus: 'pending', priority: 'absolute', category: 'shipping'},
                {name: 'Oxygen Tanks', productID: '007782', itemStatus: 'shipped', priority: 'high', category: 'shipping'},
            ],
        }
    },

    methods: {
        addReceiving(item){
            this.receivingTable.push(item);
        },
        removeReceiving(item){
            console.log("Removed table from app");
            this.receivingTable.splice(this.receivingTable.indexOf(item), 1);
        },

        addShipping(item){
            this.shippingTable.push(item);
        },
        removeShipping(item){
            this.shippingTable.splice(this.shippingTable.indexOf(item), 1);
        },
    },

    computed: {
        receiveTable: function(){
            return this.receivingTable.filter(function (item){
                return item.category === 'receiving';
            })
        },

        receiveGotTable(){
            return this.receivingTable.filter(function (item) {
                return item.itemStatus === 'received';
            })
        },

        shipTable(){
            return this.shippingTable.filter(function (item){
                return item.category === 'shipping';
            })
        },

        shippedTable(){
            return this.shippingTable.filter(function (item){
                return item.itemStatus = 'shipped';
            })
        }
    },

    mounted: function () {
        if (localStorage.getItem('receivingTable')) {
            this.receivingTable = JSON.parse(localStorage.getItem('receivingTable'));
        }
        if (localStorage.getItem('shippingTable')){
            this.shippingTable = JSON.parse(localStorage.getItem('shippingTable'));
        }
    },

    watch: {
        receivingTable: {
            handler: function (newList) {
                localStorage.setItem('receivingTable', JSON.stringify(newList));
            },

            deep: true
        },

        shippingTable: {
            handler: function (newList) {
                localStorage.setItem('shippingTable', JSON.stringify(newList));
            },

            deep: true
        },
    }


})