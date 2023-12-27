<template>
    <div class="map-container">
      <Map :slider="sliderprop"  class="absolute z-10" />
      <Slider @UpdateValue="handleSlider" class="z-20 progress-container relative" />
      <Keys class="z-20 keys-container relative"  />
  
    </div>
    </template>
  
  
  <style lang="scss"  scoped>
  
  .map-container{
    height: 100vh;
    width: 100vw;
  }
  
  .progress-container{
    position: absolute;
    top: 94%; 
    left: 50%; 
    transform: translate(-50%, -50%);
    direction: rtl;


}

.keys-container{
  top: 40%;
  left: 69%;
  position: absolute;
  direction:rtl;

}

  </style>
    
    <script setup>

    const sliderprop=ref(1);


    const handleSlider = (val) =>{
      sliderprop.value=val

    }

   
    </script>
    