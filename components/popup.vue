<template>
    <div class="popup rounded-lg" >
        <div class="popup-heading rounded-lg flex relative flex-col justify-center items-center px-4 py-4">
            <h3 class="pt-1">الحزب القائد للحكومة</h3>
            <h1  class="pt-0">{{data[active-1].wining_party}}</h1>
            <img  class="absolute left-0 top-0" src="/shape_left.svg">
            <img  class="absolute right-0 top-0"  src="/shape_right.svg">
        </div>

        <div class="popup-body">

            <div class="popup-content-items mx-4 my-4">

                <div class="popup-content gap-2 flex flex-row  py-1 flex-wrap items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4q1.475 0 2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675zM4 18v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18"/></svg>
                    <label>{{ data[active-1].position_head }}  : </label>
                    <h6 >{{ data[active-1].head_of_government }} </h6>
                </div>

                <div class="popup-content gap-2 flex flex-row flex-wrap py-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M3 4v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m8 3h2v2h-2zm0 4h2v6h-2z"/></svg>
                    <label>الطيف السياسي  :   </label>
                    <h6 :style="{ color: data[active-1].color }">{{ data[active-1].political_sphere }}  </h6>
                </div>


                <div class="popup-content gap-2 flex flex-row flex-wrap py-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-1.6-.6-3.075t-1.725-2.6L12 12V4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20"/></svg>
                    <label>بداية الولاية  :   </label>
                    <h6 >{{ new Date(data[active-1].begining_of_state).toISOString().split('T')[0]}} </h6>
                </div>

                <div class="popup-content gap-2 flex flex-row flex-wrap py-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10s10-4.47 10-10S17.53 2 12 2"/></svg>
                    <label>نهاية  الولاية  :   </label>
                    <h6 >{{ new Date(data[active-1].end_of_state).toISOString().split('T')[0]}}   </h6>
                </div>


                
            </div>


        </div>

    </div>
</template>

<style lang="scss" scoped>
@use "~/assets/styling.scss";
.popup{
    width: 16em;
    min-height: 14rem;
    height: fit-content;
    background-color: #292C3D;
}

.popup-heading{
    h3{
        color: #FFFFFF;
        font-size: 0.8rem;
        font-family: $Font-IBM-4 ;
        text-align: center;
    }
    h1{
        color: #FFFFFF;
        font-size: 0.9rem;
        font-family: $Font-IBM-5 ;
        text-align: center;
    }
    img{
        width: 6rem;
    }
    background-color: #2C2F40;
    min-height: 2rem;
    height: fit-content;
    overflow: hidden;
}

.popup-content{
    label{
    font-family:  $Font-IBM-3;
    font-size: 0.85rem;
    color: white;
    }
    h6{
    font-family:   $Font-IBM-5;
    font-size: 0.9rem;
    color: white;
    }
}


@media screen and (min-width: 768px) {

    .popup{
    width: 18rem;
    min-height: 15rem;
    height: fit-content;
    background-color: #292C3D;
}

.popup-heading{
    h3{
        font-size: 0.9rem;
    }
    h1{
        font-size: 1rem;
    }
    min-height: 4rem;

}
.popup-content{
    label{
    font-size: 0.93rem;
    }
    h6{
    font-size: 0.9rem;
    }
}


}

</style>


<script setup>
import { _backgroundColor } from '#tailwind-config/theme';


const props=defineProps(["popupdata","sliderprop"])

const data=ref(props.popupdata)


const active = computed(() => props.sliderprop)

console.log("active tab",active)
console.log("data",data.value)




</script>