<template>
    <div class="map-container">
      <Map :slider="sliderprop"  class="absolute z-10" />
      <Slider @UpdateValue="handleSlider" class="z-20 progress-container relative" />
      <Keys  class="z-20 keys-container relative"  />
      <Popup class="z-30 popup-container" />
      <Navbar :isStatsOpen="isStatsOpen"  @Openmenu="open()"  @SendOpenStats="openStats()"  class="z-20 navbar-container" />


      <USlideover  class="px-0" v-model="isOpen" :side="'right'" :overlay="false"
      :ui="{ body: { base: 'flex-1 px-0' }, ring: '', rounded:'rounded-none',width:'w-full ',shadow:'shadow-none' }">
          <UCard class="flex flex-col flex-1 slidepanel " :ui="{ body: { base: 'flex-1 ',padding:'p-6' }, ring: '', rounded:'rounded-none',width:'w-1/6 max-w-xs',shadow:'shadow-none',divide: '' }">
          <Menucard @closeMenu="close()"/>
          </UCard>
      </USlideover>

      <USlideover   class="px-0 "  v-model="isStatsOpen" :side="'left'" :overlay="false"
      :ui="{ body: { base: 'flex-1 px-0' }, ring: '', rounded:'rounded-none',width:'max-w-md ',background:'#292C3D',shadow:'shadow-none' }">

          
          <UCard class="flex flex-col flex-1 slidepanelstats " :ui="{ body: { base: 'flex-1 ' ,padding:'p-6' }, ring: '', rounded:'rounded-none',width:'w-1/6 max-w-xs',background:'#292C3D',shadow:'shadow-none',divide: '' }">
          <Menucardstats  @closeMenu="closeStats()"/>
          </UCard>
      </USlideover>
  
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

.navbar-container{
  position: absolute;
  top: 0px;
}

.popup-container{
  position: absolute;
  top: 19%;
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


.slidepanel{
  background-color: #FFFBF5;
  border-left: 0.4px solid rgba(41, 44, 61, 0.2);
}

.slidepanelstats{
  background-color: #FFFBF5;
  border-right: 0.4px solid rgba(41, 44, 61, 0.2);


}
  </style>
    
    <script setup>

    const sliderprop=ref(1);
    const isOpen=ref(false);
    const isStatsOpen=ref(false);


    const handleSlider = (val) =>{
      sliderprop.value=val
    }

    const open = () =>{
      isOpen.value=true
    }


    const close = () => {
      isOpen.value=false
    }

    const openStats = () =>{
      isStatsOpen.value=true
    }

    const closeStats = () => {
      isStatsOpen.value=false
    }



    
   
    </script>
    