<script>
  export default {
    name: "FocusedResult",
    props: ['header', 'data'],
    methods: {
      minimize() {
        this.$emit("back")
      }
    },
    emits: ["back"]
  }
</script>


<template>

  <div class="parent">

        <p class="minimize" @click="minimize()"> ⛶ </p>
        <p class="instruction"> minimize </p>
        
        <div style="width: 100%; height: fit-content; display: flex; justify-content: center; align-items: center; white-space: pre;"> 
            <h3>{{header}}</h3>
        </div>
        <div class="divider"></div> 
        <pre>
            <p style="font-family: 'DM Mono', monospace; font-size: 16px">{{data}}</p>
        </pre>
    
  </div>

</template>


<style scoped>

.parent {
    width: 90vw;
    height: 100%;
    min-height: 90vh;
    padding: 2rem 4rem 2rem 4rem;
    background-color: #fbfbfb;
    box-shadow: 0px 0px 1px 0px var(--color-background); 
    border-radius: 3px;
}
.minimize {
    position: absolute;
    right: 6px;
    top: 6px;
}
.divider {
    width: 100%; 
    border: 1px solid var(--vt-c-black-mute); 
    border-bottom-style: none; 
    margin: 2% 0;
}
.minimize:hover {
    cursor: pointer;
}
.instruction {
    display: none;
}

@media (min-width: 1024px) {
.parent {
    padding: 2rem 4rem 2rem 4rem;
    margin: 5vh 5vw 5vh 5vw;
} 
.minimize:hover + .instruction {
    display: flex;
    padding: 5px;
    width: 50px;
    font-size: 10px;
    text-align: center;
    color: rgba(60, 60, 60, 0.66);
    background-color: rgba(247, 247, 247, 1);
    position: absolute;
    right: -40px;
    top: -25px;
    box-shadow: 0px 0px 1px 0px var(--color-background); 
} }

</style>