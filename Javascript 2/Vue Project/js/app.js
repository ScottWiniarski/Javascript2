const app = Vue.createApp({
    data: function () {
        return {
            shipAndReceivingTable: [
                {
                    name: 'Steel Beam',
                    productID: '040020',
                    itemStatus: 'pending',
                    priority: 'low',
                    category: 'receiving'
                },
                {
                    name: 'Iron Core',
                    productID: '001283',
                    itemStatus: 'received',
                    priority: 'high',
                    category: 'receiving'
                },
                {
                    name: 'Cutting Tool Tips',
                    productID: '044932',
                    itemStatus: 'pending',
                    priority: 'absolute',
                    category: 'receiving'
                },
                {
                    name: 'Plasma Fuel Cells',
                    productID: '009332',
                    itemStatus: 'received',
                    priority: 'high',
                    category: 'receiving'
                },
                {
                    name: 'Iron 3/4th flat',
                    productID: '044221',
                    itemStatus: 'pending',
                    priority: 'low',
                    category: 'shipping'
                },
                {
                    name: 'Iron Rivets',
                    productID: '061273',
                    itemStatus: 'shipped',
                    priority: 'high',
                    category: 'shipping'
                },
                {
                    name: 'Iron Blades',
                    productID: '045132',
                    itemStatus: 'pending',
                    priority: 'absolute',
                    category: 'shipping'
                },
                {
                    name: 'Oxygen Tanks',
                    productID: '007782',
                    itemStatus: 'shipped',
                    priority: 'high',
                    category: 'shipping'
                },
            ],
        }
    },

    methods: {
        addToTable(item) {
            console.log('added from the app method')
            this.shipAndReceivingTable.push(item);
        },
        removeFromTable(item) {
            this.shipAndReceivingTable.splice(this.shipAndReceivingTable.indexOf(item), 1);
        },
    },

    computed: {
        receivingTable: function () {
            return this.shipAndReceivingTable.filter(function (item) {
                return item.category === 'receiving';
            })
        },

        shippingTable() {
            return this.shipAndReceivingTable.filter(function (item) {
                console.log(item.name)
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