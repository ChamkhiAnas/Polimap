<template>
    <div class="map-container">
      <Map class="absolute z-10" />
      <Slider class="z-20 progress-container relative" />
  
  
    </div>
    </template>
  
  
  <style lang="scss"  scoped>
  
  .map-container{
    height: 100vh;
    width: 100vw;
  }
  
  .progress-container{
    position: absolute;
    top: 92%; /* Move the top of the child to the vertical center of the parent */
    left: 50%; /* Move the left of the child to the horizontal center of the parent */
    transform: translate(-50%, -50%); /* Adjust the position to center both vertically and horizontally */

}

  </style>
    
    <script>
    export default {
      name: 'MapHomePage'
    }
    </script>
    