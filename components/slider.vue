<template>
        <div class=" slider-container">


            <div class=" relative flex flex-row justify-center items-center">
              <svg @click="decreasevalue()" class="absolute left-0 cursor-pointer"  xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="#292c3d" d="M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.712T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>
              <div class="range relative w-10/12 m-0 m-auto flex justify-center">
                <input  v-model="slider" @input="updateSliderValuePosition" type="range" min="1" max="11" steps="1"   >
                <div id="sliderValue"><p>{{ years[slider-1] }}</p></div>
              </div>
              <svg @click="increasevalue()" class="absolute right-0 cursor-pointer"  xmlns="http://www.w3.org/2000/svg" width="38" height="38" viewBox="0 0 24 24"><path fill="#292c3d" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>

            </div>

            <div class="flex controllers flex-row gap-6 w-full  justify-center items-center m-0 m-auto pt-4 ">
            <h6 class="mt-4">Speed</h6>
            <svg @click="decreaseSpeed()" xmlns="http://www.w3.org/2000/svg" class="block cursor-pointer  mt-4" width="32" height="32" viewBox="0 0 24 24"><path fill="#292c3d" d="m21.5 18l-9-6l9-6zm-10 0l-9-6l9-6z"/></svg>
            <svg @click="isplayed=true;increaseSlider()" v-if="!isplayed" class="block  mt-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="#292c3d" d="M12 2C6.475 2 2 6.475 2 12s4.475 10 10 10s10-4.475 10-10S17.525 2 12 2m-2 14.5v-9l6 4.5z"/></svg>
            <svg @click="isplayed=false;stopSlider()" v-if="isplayed" class="block mt-4 cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="45" height="45" viewBox="0 0 24 24"><path fill="#292c3d" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-1 14H9V8h2zm4 0h-2V8h2z"/></svg>

            <svg @click="increaseSpeed()" xmlns="http://www.w3.org/2000/svg" class="block cursor-pointer  mt-4" width="32" height="32" viewBox="0 0 24 24"><path fill="#292c3d" d="M2.5 16.125v-8.25q0-.45.3-.725t.7-.275q.125 0 .275.025t.275.125l6.2 4.15q.225.15.338.363T10.7 12q0 .25-.112.463t-.338.362l-6.2 4.15q-.125.1-.275.125t-.275.025q-.4 0-.7-.275t-.3-.725m10 0v-8.25q0-.45.3-.725t.7-.275q.125 0 .275.025t.275.125l6.2 4.15q.225.15.338.363T20.7 12q0 .25-.112.463t-.338.362l-6.2 4.15q-.125.1-.275.125t-.275.025q-.4 0-.7-.275t-.3-.725"/></svg>
            <h6 class="mt-4">{{speed}}x</h6>
            </div>
        </div>
</template>


<style lang="scss" scoped>
@use "~/assets/styling.scss";


.slider-container{
    width:35vw;
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
  height: 5px;
  z-index: 1;
}


#sliderValue {
  position: absolute;
  top: -3.5rem; /* Adjust this value to position the div above the thumb */
  left: 0rem;
  transform: translateX(-50%);
  white-space: nowrap;
  width: 4rem;
  height: 2rem;
  background-color: #292c3d;
  text-align: center;
  border-radius: 4px;
  padding-top: 0.2rem;
  font-family:  $Font-IBM-4;
  font-size: 0.95rem;


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


  &::-webkit-slider-thumb::after {
    width: 30px;
    height: 10px;
    background-color: red;
    top: 2rem;
    
  }

  &::-moz-range-thumb::after {
    width: 30px;
    height: 10px;
    background-color: red;
    top: 2rem;


    
  }

  &::-ms-thumb::after {
    width: 30px;
    height: 10px;
    background-color: red;
    top: 2rem;


    
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

.controllers{
h6{
  color:#292c3d;
  font-family:  $Font-IBM-5;
  font-size: 0.95rem;

}

}



</style>

<script setup>

    const slider=ref(1);
    const isplayed=ref(false);
    const speed=ref(1);
    const years=ref(['1963','1970','1977','1984','1993','1997','2002','2007','2011','2016','2021']);




    const increaseSpeed = () => {
      if (speed.value < 2) speed.value += 0.25;
    }

    const decreaseSpeed = () => {
      if (speed.value > 0.25) speed.value -= 0.25;
    }

    watch(slider, (newValue) => {
    newValue=parseInt(newValue)
    if (newValue>0) {
      const sliderInput = document.querySelector('input[type="range"]');
      const sliderValue = document.getElementById('sliderValue');     
      const thumbPosition = ((newValue - sliderInput.min) / (sliderInput.max - sliderInput.min)) * sliderInput.offsetWidth;
      console.log('thumbPosition',thumbPosition)
      sliderValue.style.left = thumbPosition + 'px';
    }
    
    });


    const increasevalue = () =>{
      if (parseInt(slider.value) < 11) slider.value = parseInt(slider.value)+1;
    }


    const decreasevalue = () =>{
      if (parseInt(slider.value) > 1) slider.value = parseInt(slider.value)-1;
    }



    // const increaseSlider = () => {
    //   if (speed.value > 2) speed.value += 0.25;
    // };

    // const stopSlider = () => {

    // }

 

</script>