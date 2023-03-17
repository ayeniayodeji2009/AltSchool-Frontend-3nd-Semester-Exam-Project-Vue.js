<!-- <script setup>
import {useStore} from "vuex";
import {computed, ref} from "vue";
import { computed, ref } from '@vue/composition-api';
import CounterApp from '../views/CounterApp.vue'

export default {
    setup() {
        const store = useStore();
        //this.$store.getters.getCount
        const currentCount = computed(()=>CounterApp)

        return {
            store,
            currentCount
        };
    }
   
    // console.log(store)
    // console.log(currentCount)
}

</script> -->