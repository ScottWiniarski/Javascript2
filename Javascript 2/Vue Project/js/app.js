const app = Vue.createApp({
    data: function () {
        return {
            shipAndReceivingTable: [
                {
                    name: 'Steel Beam',
                    productID: '040020',
                    itemStatus: 'Pending',
                    priority: 'Low',
                    category: 'receiving'
                },
                {
                    name: 'Iron Core',
                    productID: '001283',
                    itemStatus: 'Received',
                    priority: 'High',
                    category: 'receiving'
                },
                {
                    name: 'Cutting Tool Tips',
                    productID: '044932',
                    itemStatus: 'Pending',
                    priority: 'Absolute',
                    category: 'receiving'
                },
                {
                    name: 'Plasma Fuel Cells',
                    productID: '009332',
                    itemStatus: 'Received',
                    priority: 'High',
                    category: 'receiving'
                },
                {
                    name: 'Iron 3/4th flat',
                    productID: '044221',
                    itemStatus: 'Pending',
                    priority: 'low',
                    category: 'shipping'
                },
                {
                    name: 'Iron Rivets',
                    productID: '061273',
                    itemStatus: 'Shipped',
                    priority: 'High',
                    category: 'shipping'
                },
                {
                    name: 'Iron Blades',
                    productID: '045132',
                    itemStatus: 'Pending',
                    priority: 'Absolute',
                    category: 'shipping'
                },
                {
                    name: 'Oxygen Tanks',
                    productID: '007782',
                    itemStatus: 'Shipped',
                    priority: 'High',
                    category: 'shipping'
                },
                {
                    name: 'Arkenstout',
                    productID: '003282',
                    itemStatus: 'Pending',
                    priority: 'Absolute',
                    category: 'receiving'
                },
                {
                    name: 'Gunpowder Surprise',
                    productID: '008283',
                    itemStatus: 'Shipped',
                    priority: 'Absolute',
                    category: "receiving",
                },
            ],
        }
    },

    methods: {
        addToTable(item) {
            //console.log('added from the app method')
            this.shipAndReceivingTable.push(item);
        },
        removeFromTable(item) {
            //console.log("removed from table");
            this.shipAndReceivingTable.splice(this.shipAndReceivingTable.indexOf(item), 1);
        },

        editTable(item, newItem){
            //console.log("editing item in app.js", item, newItem);
            this.shipAndReceivingTable.splice(this.shipAndReceivingTable.indexOf(item), 1, newItem)
        },

        searchTable(item){
            console.log('Searching the table for an item in app.js');
        }
    },

    computed: {
        receivingTable: function () {
            //console.log(this.shipAndReceivingTable);
            return this.shipAndReceivingTable.filter(function (item) {
                return item.category === 'receiving';
            })
        },

        shippingTable() {
            return this.shipAndReceivingTable.filter(function (item) {
                //console.log(item.name)
                return item.category === 'shipping';
            })
        },
    },

    mounted: function () {
        if (localStorage.getItem('shipAndReceivingTable')) {
            this.shipAndReceivingTable = JSON.parse(localStorage.getItem('shipAndReceivingTable'));
        }
    },

    watch: {
        shipAndReceivingTable: {
            handler: function (newList) {
                localStorage.setItem('shipAndReceivingTable', JSON.stringify(newList));
            }
        },
    }
})