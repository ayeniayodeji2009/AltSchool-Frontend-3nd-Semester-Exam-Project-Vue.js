<template>
    <div>
        <div id = "navigation">
        <!-- <RouterLink to="/404_page">404 page</RouterLink> -->
        <RouterLink to="/counter">Home</RouterLink>
        </div>

        <!-- <h1>Home</h1>
        <p>This is the counter app page</p> -->

        <h1>AltSchool-Front End 3rd Semester Examination Project</h1>
        <h3>Counter App codded with vue.js</h3>
  <div class="count_display">
    <center>
  <h1>{{count}}</h1>
    </center>
  </div>

  <div>
    <button v-on:click="isHidden = false" class="setCount_btn">Set Count</button>

    <div v-if="!isHidden">
    <button v-on:click="isHidden = true" title="Close">X</button><br />
    <input type="number" :value ="inputValprop" @input = "setValueInput" class = "num_input" title="input your value" /><br />
    <button @click="setValue" title="Click to enter value">Set Value</button>
    </div>

   </div>
  
  <button @click="decrement" class="decremment_btn" >Decrement</button>
  <button @click="reset" class="resetCount_btn">Reset Count</button>
  <button @click="increment" class="incremment_btn">Increment</button>
  <br />
  <!--<p> {{ inputValprop }} </p> -->
    </div>
    <br />
    <br />
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'App',

  data(){
    return {
      isHidden: true,
      inputValprop: ''
    }
  },

  components: {
   // HelloWorld
  },
  computed:{
    count(){
      return this.$store.getters.getCount;
    },
  },
  methods:{

  increment(){      
  this.$store.dispatch('increaseChangeCount', 1)
    },

  decrement(){      
  this.$store.dispatch('decreaseChangeCount', 1)
    },

      reset(){     
  this.$store.dispatch('reset')    
    },

  setValueInput(event){
    event.preventDefault()  
    this.inputValprop = parseInt(event.target.value, 10)
    this.$store.dispatch('setValueInput', this.inputValprop)   
    },

  setValue(){ 

        this.$store.dispatch('setValue')
    
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
  background-color: rgb(223, 218, 218);
}

.count_display {
    background-color: white;
    color: rgb(50, 170, 90);
    width: 50%;
    height: 20%;
    margin: 0 auto;
    font-size: 550%;
    border-radius: 50px;
    transition: 0.5s;
    /* border: 2px solid rgb(50, 170, 90); */
    padding: 0px 10px;
}

.num_input{
  width: 60px;
  height: 25px;
  border-radius: 5px;
  font-size: 20px;
}

button {
  width: 100px;
  height: 30px;
  border-radius: 5px;
  font-size: 11px;
  margin: 5px;
  color: rgb(50, 170, 90);
  border: 2px solid rgb(50, 170, 90);
}

button:hover {
  background-color: rgb(50, 170, 90);
  color: white;
  font-size: 15px;
  border: 2px solid rgb(144, 224, 171);
  transition: 0.5s;
}

/*
.count_display {
  width: 100px;
  height: 100px;
  background-color: red;
  position: relative;
  animation-name: example;
  animation-duration: 4s;
  animation-iteration-count: 3;
}

@keyframes example {
  0%   {background-color:red; left:0px; top:0px;}
  25%  {background-color:yellow; left:200px; top:0px;}
  50%  {background-color:blue; left:200px; top:200px;}
  75%  {background-color:green; left:0px; top:200px;}
  100% {background-color:red; left:0px; top:0px;}
}
*/
</style>