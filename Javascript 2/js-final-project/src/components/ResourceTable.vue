<template>
  <company-memo-modal v-if="warning != null" :item="{warning}"></company-memo-modal>
  <div class="d-flex justify-content-center">
  <div class="table table-striped table-hover table-bordered table-light">
    <thead>
    <tr>
      <th scope="row">Item Name</th>
      <th scope="row">Item Quantity</th>
    </tr>
    </thead>
    <tbody>
    <tr scope="row" v-for="item in items" :key="item.id">
      <resource-details :item="item" @item-total="dailyTotal"></resource-details>
    </tr>
    <tr>
      <td>{{ dailySum }}</td>
      <td>
        <button type="button" class="btn btn-outline-dark" @click="submitAmount">Submit</button>
      </td>
    </tr>
    </tbody>
  </div>
  </div>
</template>

<script>
import ResourceDetails from "@/components/ResourceDetails";
import {db} from "@/firebase";
import CompanyMemoModal from "@/components/CompanyMemoModal";


export default {
  name: "ResourceTable.vue",
  components: {
    ResourceDetails,
    CompanyMemoModal,
  },

  props: {
    items: Array,
  },

  methods: {
    async submitAmount() {
      console.log('Pump the total', this.dailySum);

      const minerRef = db.collection('Miners').doc('GF2I01UwakEhAQwEohqB');
      const doc = await minerRef.get();

      const firstWarning = db.collection('CompanyMessages').doc('EZtk7KfC5Gwwvq2jMNw0');
      const secondWarning = db.collection('CompanyMessages').doc('n1GrbmlyyfVOIZE4jNGO');
      //const finalWarning = db.collection('CompanyMessages').doc('');


      if (!doc.exists) {
        console.log('No such document');
      } else {
        if (doc.data().maxYield < this.dailySum) {
          console.log('Employee Data: ', doc.data().maxYield);
          await minerRef.update({maxYield: this.dailySum});
          /*await minerRef.onSnapshot(snapshot => {
            this.miner = [];

            snapshot.forEach(person => {
              this.miner.push(person.data());
            })
          })*/
        } else {
          //alert('You have missed your daily threshold.');
          let counter = doc.data().strikes;
          counter++;
          switch (counter) {
            case 1:
              this.warning = firstWarning;
              break;
            case 2:
              this.warning = secondWarning;
              break;
              // case 3: this.warning = finalWarning;
              //         break;
            default:
              this.warning = null;
          }
          await minerRef.update({strikes: counter});
          /*minerRef.onSnapshot(snapshot => {
            this.miner = [];

            snapshot.forEach(person => {
              this.miner.push(person.data());
            })
          })*/
        }
      }

      // let miner =  db.collection('Miners').doc(this.);
      // console.log(miner.firstName);
      //this.$emit()
    },

    dailyTotal(itemId, itemTotal) {
      if (!this.itemsTotal.find(e => e.id === itemId)) {
        this.itemsTotal.push({'id': itemId, 'total': 0});
      }
      let item = this.itemsTotal.find(e => e.id === itemId);
      item.total = itemTotal;
    }
  },

  computed: {
    dailySum() {
      return this.itemsTotal.reduce((accumulator, currentValue) => accumulator + currentValue.total, 0)
    },

    warning() {
      return this.warning;
    }
  },

  data() {
    return {
      itemsTotal: [],
    }
  },
}
</script>

<style scoped>

</style>