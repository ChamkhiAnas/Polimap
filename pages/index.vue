<template>
    <div class="map-container">
      <Map :slider="sliderprop"  class="absolute z-10" />
      <Slider @UpdateValue="handleSlider" class="z-20 progress-container relative" />
      <Keys class="z-20 keys-container relative"  />
      <Popup class="z-30 popup-container" />
  
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
  bottom: 20%;
  right: 6%;
  position: absolute;
  direction:rtl;
}

.popup-container{
  position: absolute;
  top: 20%;
  left: 6%;
  direction: rtl;
}

@media screen and (min-width: 768px) {
.keys-container{
  right: 25%;
}

.popup-container{
  left: 25%;
}

}


  </style>
    
    <script setup>

    const sliderprop=ref(1);


    const handleSlider = (val) =>{
      sliderprop.value=val

    }

   
    </script>
    