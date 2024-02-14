<template>
    <div class="error flex flex-col justify-center items-center gap-4">
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3RlaXNmbDB5NHFwdWxyMDZyb3Z2dzJ3YnJnY3VheHIybXdyNGs0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mGnJZiJ7qsQnNOPh4s/giphy.gif">
        
        <h1>المعذرة </h1>
        <h3>هناك خطأ ما في الخادم , المرجوا  إعادة تحميل الصفحة </h3>
        <h6>500 - خطأ داخلي في الخادم</h6>
        
    </div>

</template>

<style lang="scss" scoped>
@use "~/assets/styling.scss";


.error{
    color: black;
    direction: rtl;


    background-color: white;
    height: 100vh;
    img{
        height: 170px;
    }
    h1{
        color: black;
        font-size: 6rem;
        font-family:  $Font-IBM-5;
    }
    h3{
        font-size: 1.5rem;
        font-family:  $Font-IBM-4;


    }
    h6{
        font-size: 1rem;
        font-family:  $Font-IBM-4;


    }
}

</style>