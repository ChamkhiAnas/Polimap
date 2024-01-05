<template>
        <div class="navbar w-full z-30 md:px-4 py-6  flex justify-around flex-row">
            <svg @click="SendOpen()" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24"><path fill="#292c3d" fill-rule="evenodd" d="M3.5 5a1 1 0 0 0 0 2h17a1 1 0 1 0 0-2zm-1 7a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1m0 6.001a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1" clip-rule="evenodd"/></svg>
            <div @click="SendOpenStats()" class="achivements cursor-pointer flex flex-row gap-2 justify-center items-center">
                <h1>الأرقام خلال الولاية</h1>
                <svg v-if="isStatsOpen" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#292c3d" d="m12 16l4-4l-4-4l-1.4 1.4l1.6 1.6H8v2h4.2l-1.6 1.6zm0 6q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>
                <svg v-if="!isStatsOpen"  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#292c3d" d="M11.8 13H15q.425 0 .713-.288T16 12q0-.425-.288-.712T15 11h-3.2l.9-.9q.275-.275.275-.7t-.275-.7q-.275-.275-.7-.275t-.7.275l-2.6 2.6q-.3.3-.3.7t.3.7l2.6 2.6q.275.275.7.275t.7-.275q.275-.275.275-.7t-.275-.7zm.2 9q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>
            </div>
            

        
        </div>


</template>

<style lang="scss" scoped>
@use "~/assets/styling.scss";

.navbar{
    min-height: 3rem;
    height: fit-content;
    direction: rtl;
    border-bottom: 0.4px solid rgba(41, 44, 61, 0.2);
}
.achivements{
    h1{
        font-size: 1rem;
        font-family: $Font-IBM-5 ;
        color: #292C3D;

    }
}

</style>

<script setup>

const emit = defineEmits(['Openmenu'])

const props = defineProps(['isStatsOpen']);


const SendOpen = () =>{
    emit('Openmenu')
}


const SendOpenStats = () =>{

    emit('SendOpenStats')


}


</script>