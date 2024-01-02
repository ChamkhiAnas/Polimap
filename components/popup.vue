<template>
    <div class="popup rounded-lg" >
        <div class="popup-heading rounded-lg flex relative flex-col justify-center items-center px-4 py-4">
            <h3 class="pt-1">الحزب الفائز</h3>
            <h1 class="pt-0">العدالة والتنمية</h1>
            <img  class="absolute left-0 top-0" src="/shape_left.svg">
            <img  class="absolute right-0 top-0"  src="/shape_right.svg">
        </div>

        <div class="popup-body">

            <div class="popup-content-items mx-4 my-4">

                <div class="popup-content gap-2 flex flex-row  py-1 flex-wrap items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M9.775 12q-.9 0-1.5-.675T7.8 9.75l.325-2.45q.2-1.425 1.3-2.363T12 4q1.475 0 2.575.938t1.3 2.362l.325 2.45q.125.9-.475 1.575t-1.5.675zM4 18v-.8q0-.85.438-1.562T5.6 14.55q1.55-.775 3.15-1.162T12 13q1.65 0 3.25.388t3.15 1.162q.725.375 1.163 1.088T20 17.2v.8q0 .825-.587 1.413T18 20H6q-.825 0-1.412-.587T4 18"/></svg>
                    <label>رئيس الحكومة :   </label>
                    <h6>عبد الاله بنكيران </h6>
                </div>

                <div class="popup-content gap-2 flex flex-row py-1 flex-wrap items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="m10.6 13.4l-2.15-2.15q-.275-.275-.7-.275t-.7.275q-.275.275-.275.7t.275.7L9.9 15.5q.3.3.7.3t.7-.3l5.65-5.65q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h14q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21z"/></svg>
                    <label>الحزب الفائز  :   </label>
                    <h6>العدالة والتنمية  </h6>
                </div>

                <div class="popup-content gap-2 flex flex-row flex-wrap py-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#ffffff" d="M3 4v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1m8 3h2v2h-2zm0 4h2v6h-2z"/></svg>
                    <label>عدد المقاعد البرلمانية  :   </label>
                    <h6>107  </h6>
                </div>


                <div class="popup-content gap-2 flex flex-row flex-wrap py-1 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20"><path fill="#ffffff" d="M17 7v3h-5.5A2.5 2.5 0 0 0 9 12.5V17H5.5A2.5 2.5 0 0 1 3 14.5V7zm-2.5-4A2.5 2.5 0 0 1 17 5.5V6H3v-.5A2.5 2.5 0 0 1 5.5 3zM10 12.5a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5zm7 4a.5.5 0 0 0-.5-.5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 .5-.5M12.5 13a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"/></svg>                    
                    <label>سنة :   </label>
                    <h6>2016  </h6>
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
    color: #E67E22;
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
    font-size: 1rem;
    }
}


}

</style>


<script setup>

</script>