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
      <LGeoJson :key="updateColor" :geojson="geojson.data" :optionsStyle="geoStyle"></LGeoJson>
    </LMap>

  </div>
</template>

<script setup>

const { data: geojson } = await useFetch('http://localhost:3000/api/geodata');
const zoom = ref(6);
const center = ref([30.427755, -9.598107]);
const updateColor=ref(true)
const calcValue=ref(1.3)


const props = defineProps(['slider','colors'])


const color=ref(props.colors[0])



   // Watch for changes to the prop
watch(() => props.slider, (newValue) => {
      color.value=props.colors[newValue-1]
      geoStyle.value.fillColor =props.colors[newValue-1]
      updateColor.value=!updateColor.value;
});




const geoStyle = ref({
  fillColor: props.colors[0],
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
  return minZoom.value * calcValue.value;
});

const adjustedMaxZoom = computed(() => {
  return maxZoom.value * calcValue.value;
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


  if (width.value < 430) {
    minZoom.value = 3;
    maxZoom.value = 3;
    console.log('user is updating the viewport', width.value);
    console.log('minZoom.value', minZoom.value);

    calcValue.value=1.6

};

if (width.value > 1024) {
    minZoom.value = 4;
    maxZoom.value = 4;

};


 
}


// Lifecycle hooks
onBeforeMount(() => {
  // Attach resize event listener
  window.addEventListener('resize', handleResize);

  // Handle initial map size
  handleResize();
});

</script>


<style lang="scss">

.leaflet-zoom-animated{
 
  // transform: translate3d(-198px, -85px, 0px)  !important;
}


#map{
  .leaflet-container{
    background-color: #FFFBF5 !important;
  }
}


</style>
