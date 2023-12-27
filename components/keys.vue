<template>

    <div class="keys absolute flex flex-col gap-6 rtl justify-start items-start">

        <div class="flex flex-row justify-center items-center gap-3">
            <div style="background-color: #3D8116" class="color-item"></div>

            <h2>تكنوقراط</h2>
        </div>

        <div class="flex flex-row justify-center items-center gap-3">
            <div style="background-color: #3498DB" class="color-item"></div>

            <h2>يمين</h2>
        </div>

        <div class="flex flex-row justify-center items-center gap-3">
            <div style="background-color: #FBC531" class="color-item"></div>

            <h2>يمين وسطي</h2>
        </div>

        <div class="flex flex-row justify-center items-center gap-3">
            <div style="background-color: #E67E22" class="color-item"></div>

            <h2>يسار وسطي</h2>
        </div>

        <div class="flex flex-row justify-center items-center gap-3">
            <div style="background-color: #F4393A" class="color-item"></div>

            <h2>يسار </h2>
        </div>

    </div>


</template>


<style lang="scss" scoped>
@use "~/assets/styling.scss";

h2{
    color: #292C3D;
    font-family:  $Font-IBM-6;
}

.color-item{
    width: 0.4rem;
    height: 2rem;
    background-color: red;
}

</style>


<script setup>

</script>