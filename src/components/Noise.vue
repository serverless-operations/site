<template>
  <div class="noise-container">
    <div class="noise"></div>
  </div>
</template>

<style lang="scss">
  .noise-container {
    position: fixed;
    width: 100%;
    height: 100%;
    // height: calc(var(--vh,1vh)*100);
    pointer-events: none;
    z-index: 100;
    mix-blend-mode: soft-light;
    opacity: 0.2;
  }
  .noise {
    position: absolute;
    width: 100%;
    height: 100%;
    background-image: url('../assets/images/bg/noise.png');
    
  }
</style>