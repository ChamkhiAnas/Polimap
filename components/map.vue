<template>
  <div id="map" style="height: 100vh; width: 100vw">
    
    <LMap
      :zoom="zoom"
      :center="center"
      :max-zoom="adjustedMaxZoom"
      :min-zoom="adjustedMinZoom"

      :options="{
        zoomControl: false,
        attributionControl: false,
        dragging: false,
      }"
      ref="mapRef"
      @update:size="handleMapResize"


    >
      <LGeoJson :geojson="geojson.data" :optionsStyle="geoStyle"></LGeoJson>
    </LMap>

    <p>{{minZoom}}</p>
  </div>
</template>

<script setup>

const { data: geojson } = await useFetch('http://localhost:3000/api/geodata');
const zoom = ref(6);
const center = ref([30.427755, -9.598107]);

const geoStyle = ref({
  fillColor: '#FBC531',
  weight: 1,
  opacity: 1,
  color: 'white',
  dashArray: '1',
  fillOpacity: 1,
  lineCap: 'round',
});

const minZoom = ref(4);
const maxZoom = ref(4);

const adjustedMinZoom = computed(() => {
  return minZoom.value * 1.3;
});

const adjustedMaxZoom = computed(() => {
  return maxZoom.value * 1.3;
});


const mapRef = ref(null);

const width = ref(0);


const handleMapResize= () => {

};

// Methods
const handleResize = () => {
  width.value = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  updateMapSize(width);
};

const updateMapSize = (width) => {


  if (width.value < 768) {
    minZoom.value = 3;
    maxZoom.value = 3;
    console.log('user is updating the viewport', width.value);
    console.log('minZoom.value', minZoom.value);


};

  // if (width.value >= 2200) {
  //   minZoom.value = 5;
  //   maxZoom.value = 5;
  // }
  const map = mapRef;
  

    // Optionally, trigger an update of the map here if needed
 
}


// Lifecycle hooks
onBeforeMount(() => {
  // Attach resize event listener
  window.addEventListener('resize', handleResize);

  // Handle initial map size
  handleResize();
});

onBeforeUnmount(() => {
  // Remove resize event listener when component is unmounted
  window.removeEventListener('resize', handleResize);
});
</script>
