<template>
        <div class=" slider-container">


            <div class="range">
                <input  v-model="slider" type="range" min="1" max="11" steps="1"   >

            </div>

            <ul class="range-labels">
                <li :class="{ active: slider == 1, selected: slider == 1}">1963</li>
                <li :class="{ active: slider == 2, selected: slider == 2}">1970</li>
                <li :class="{ active: slider == 3, selected: slider == 3}">1977</li>
                <li :class="{ active: slider == 4, selected: slider == 4}">1984</li>
                <li :class="{ active: slider == 5, selected: slider == 5}">1993</li>
                <li :class="{ active: slider == 6, selected: slider == 6}">1997</li>
                <li :class="{ active: slider == 7, selected: slider == 7}">2002</li>
                <li :class="{ active: slider == 8, selected: slider == 8}">2007</li>
                <li :class="{ active: slider == 9, selected: slider == 9}">2011</li>
                <li :class="{ active: slider == 10, selected: slider == 10}">2016</li>
                <li :class="{ active: slider == 11, selected: slider == 11}">2021</li>
            </ul>

            <svg @click="isplayed=true;increaseSlider()" v-if="!isplayed" class="block m-0 m-auto mt-14 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="#292c3d" d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10s10-4.475 10-10S17.525 2 12 2m-2 14.5v-9l6 4.5z"/></svg>
            <svg @click="isplayed=false" v-if="isplayed" class="block m-0 m-auto mt-14 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="#292c3d" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1 14H9V8h2zm4 0h-2V8h2z"/></svg>
        </div>
</template>


<style lang="scss">

.slider-container{
    width:75vw;
}
@mixin rangeThumb {
  width: 0.8rem;
  height: 0.8rem;
  margin: -8px 0  0;
  border-radius: 50%;
  background: #FFFBF5;
  cursor: pointer;
  border: 10px solid #292C3D !important;
  
  z-index: 99;
}

@mixin rangeTrack {
  width: 100%;
  height: 4px;
  cursor: pointer;
  background: #b2b2b2;
  z-index: 1;
}

.range {
  position: relative;
  width: 100%;
  height: 5px;
  z-index: 1;

}

.range input {
  width: 100%;
  position: absolute;
  top: 2px;
  height: 0;
  -webkit-appearance: none;
  z-index: 1;




  // Thumb
  &::-webkit-slider-thumb {
    -webkit-appearance: none; // needed again for Chrome & Safari
    @include rangeThumb;
    
  }

  &::-moz-range-thumb {
    @include rangeThumb;
    
  }

  &::-ms-thumb {
    @include rangeThumb;
    
  }

  // Track
  &::-webkit-slider-runnable-track {
    @include rangeTrack;
    
  }

  &::-moz-range-track {
    @include rangeTrack;
    
  }

  &::-ms-track {
    @include rangeTrack;
    
  }

  &:focus { // override outline/background on focus
    background: none;
    outline: none;
    
  }

  &::-ms-track { // A little somethin' somethin' for IE
    width: 100%;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
    
  }
}

input[type="range"]::-moz-range-progress {
  /* Styles for the part of the range that has been reached */
  background-color: #292C3D;
}

// Labels below slider
.range-labels {
  margin: 18px -41px 0;
  padding: 0;
  list-style: none;
  background: green !important;

  
  li {
    position: relative;
    float: left;
    width: 9%;
    text-align: center;
    color: #b2b2b2;
    font-size: 14px;
    cursor: pointer;

    
    &::before {
      position: absolute;
      top: -25px;
      right: 0;
      left: 0;
      content: "";
      margin: 0 auto;
      width: 9px;
      height: 9px;
      background: #b2b2b2;
      border-radius: 50%;
      background: #BFB8A3 !important;
      z-index: 0;


    }
  }
  
  .active {
    color: #292C3D;
  }
  
  .selected::before {
    background: #292C3D;
  }
  
  .active.selected::before {
    display: none;
  }
}



</style>

<script setup>

    const slider=ref(1);
    const isplayed=ref(false);


    watch(slider, (newValue) => {
    // Do something when the value of 'slider' changes
    console.log('Slider value changed from', newValue);
    });

    const increaseSlider = () => {
    // Increase the slider value
    slider.value += 1;
    setTimeout(increaseSlider, 1000);
    };


</script>