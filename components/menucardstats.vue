<template>

    <div class="menucard">
        <div @click="sendCloseMenu()" class="menu-card-wrapper">
            <Button class="flex flex-row px-4 py-4 justify-center items-center gap-2">إغلاق النافذة 
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                    <path fill="#191b1f" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/>
                </svg>
            </Button>
        </div>

        <h3 class="mt-12 flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#292c3d" d="M3 21q-.425 0-.712-.288T2 20q0-.425.288-.712T3 19h18q.425 0 .713.288T22 20q0 .425-.288.713T21 21zm1.5-3q-.625 0-1.062-.437T3 16.5v-4q0-.625.438-1.062T4.5 11q.625 0 1.063.438T6 12.5v4q0 .625-.437 1.063T4.5 18m5 0q-.625 0-1.062-.437T8 16.5v-9q0-.625.438-1.062T9.5 6q.625 0 1.063.438T11 7.5v9q0 .625-.437 1.063T9.5 18m5 0q-.625 0-1.062-.437T13 16.5v-6q0-.625.438-1.062T14.5 9q.625 0 1.063.438T16 10.5v6q0 .625-.437 1.063T14.5 18m5 0q-.625 0-1.062-.437T18 16.5v-12q0-.625.438-1.062T19.5 3q.625 0 1.063.438T21 4.5v12q0 .625-.437 1.063T19.5 18"/></svg>
            الناتج المحلي الإجمالي
        </h3>
        <p class="mt-6 flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#2ecc71" d="M14.55 16.55L11 13V8h2v4.175l2.95 2.95ZM11 6V4h2v2Zm7 7v-2h2v2Zm-7 7v-2h2v2Zm-7-7v-2h2v2Zm8 9q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
            <span>عند بداية الولاية     ({{ new Date(data[active-1].begining_of_state).toISOString().split('T')[0].slice(0, 4)}}) : </span>
            <strong style="direction:rtl"> {{ data[active-1].stats.gdp_start }} </strong>
        </p>


        <p class="mt-4 flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#e74c3c" d="M14.55 16.55L11 13V8h2v4.175l2.95 2.95ZM11 6V4h2v2Zm7 7v-2h2v2Zm-7 7v-2h2v2Zm-7-7v-2h2v2Zm8 9q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
            <span>عند نهاية الولاية ({{ new Date(data[active-1].end_of_state).toISOString().split('T')[0].slice(0, 4)}}) :</span>
            <strong class="" style="direction:rtl"> {{ data[active-1].stats.gdp_end }} </strong>
        </p>

        <h3 class="mt-8 flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#292c3d" d="M14.06 9.94L12 9l2.06-.94L15 6l.94 2.06L18 9l-2.06.94L15 12zM4 14l.94-2.06L7 11l-2.06-.94L4 8l-.94 2.06L1 11l2.06.94zm4.5-5l1.09-2.41L12 5.5L9.59 4.41L8.5 2L7.41 4.41L5 5.5l2.41 1.09zm-4 11.5l6-6.01l4 4L23 8.93l-1.41-1.41l-7.09 7.97l-4-4L3 19z"/></svg>
            معدل التضخم
        </h3>

        <p class="mt-6 flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#2ecc71" d="M14.55 16.55L11 13V8h2v4.175l2.95 2.95ZM11 6V4h2v2Zm7 7v-2h2v2Zm-7 7v-2h2v2Zm-7-7v-2h2v2Zm8 9q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
            <span>عند بداية الولاية     ({{ new Date(data[active-1].begining_of_state).toISOString().split('T')[0].slice(0, 4)}}) :</span>
            <strong> {{ data[active-1].stats.inflation_start }} </strong>
        </p>


        <p class="mt-4 flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#e74c3c" d="M14.55 16.55L11 13V8h2v4.175l2.95 2.95ZM11 6V4h2v2Zm7 7v-2h2v2Zm-7 7v-2h2v2Zm-7-7v-2h2v2Zm8 9q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
            <span>عند نهاية الولاية   ({{ new Date(data[active-1].end_of_state).toISOString().split('T')[0].slice(0, 4)}}) :</span>
            <strong>{{ data[active-1].stats.inflation_end }} </strong>
        </p>


        <h3 class="mt-8 flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="#292c3d" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-.175-.012-.363t-.013-.312q-.125.725-.675 1.2T18 13h-2q-.825 0-1.412-.587T14 11v-1h-4V8q0-.825.588-1.412T12 6h1q0-.575.313-1.012t.762-.713q-.5-.125-1.012-.2T12 4Q8.65 4 6.325 6.325T4 12h5q1.65 0 2.825 1.175T13 16v1h-3v2.75q.5.125.988.188T12 20"/></svg>
             معدل الهجرة الصافي
        </h3>

        <p class="mt-6 flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#2ecc71" d="M14.55 16.55L11 13V8h2v4.175l2.95 2.95ZM11 6V4h2v2Zm7 7v-2h2v2Zm-7 7v-2h2v2Zm-7-7v-2h2v2Zm8 9q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
            <span>عند بداية الولاية    ({{ new Date(data[active-1].begining_of_state).toISOString().split('T')[0].slice(0, 4)}}) :</span>
            <strong>{{ data[active-1].stats.netmg_start }}  </strong>
        </p>


        <p class="mt-4 flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#e74c3c" d="M14.55 16.55L11 13V8h2v4.175l2.95 2.95ZM11 6V4h2v2Zm7 7v-2h2v2Zm-7 7v-2h2v2Zm-7-7v-2h2v2Zm8 9q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
            <span>عند نهاية الولاية    ({{ new Date(data[active-1].end_of_state).toISOString().split('T')[0].slice(0, 4)}}) :</span>
            <strong>{{ data[active-1].stats.netmg_end }} </strong>
        </p>


        <h3 class="mt-8 flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 16 16"><path fill="#292c3d" fill-rule="evenodd" d="M4.535 3A3.503 3.503 0 0 1 7.25.08v1.67a.75.75 0 1 0 1.5 0V.08A3.503 3.503 0 0 1 11.464 3h.286a.75.75 0 0 1 0 1.5h-.25a3.5 3.5 0 0 1-7 0h-.25a.75.75 0 0 1 0-1.5zM8 6.5a2 2 0 0 1-2-2h4a2 2 0 0 1-2 2m-5.5 6c0-.204.22-.809 1.32-1.459a5.74 5.74 0 0 1 .223-.125L5.01 13.5H3.5a1 1 0 0 1-1-1m4.114 1l-1.179-3.143A9.213 9.213 0 0 1 8 10c.93 0 1.8.135 2.565.357L9.387 13.5H6.612Zm4.375 0H12.5a1 1 0 0 0 1-1c0-.204-.22-.809-1.32-1.459a5.7 5.7 0 0 0-.223-.125l-.969 2.584ZM8 8.5c-3.85 0-7 2-7 4A2.5 2.5 0 0 0 3.5 15h9a2.5 2.5 0 0 0 2.5-2.5c0-2-3.15-4-7-4" clip-rule="evenodd"/></svg>
            معدل البطالة من مجموع الساكنة النشيطة 
        </h3>

        <p class="mt-6 flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#2ecc71" d="M14.55 16.55L11 13V8h2v4.175l2.95 2.95ZM11 6V4h2v2Zm7 7v-2h2v2Zm-7 7v-2h2v2Zm-7-7v-2h2v2Zm8 9q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
            <span>عند بداية الولاية    ({{ new Date(data[active-1].begining_of_state).toISOString().split('T')[0].slice(0, 4)}}) :</span>
            <strong>{{ data[active-1].stats.un_start }} </strong>
        </p>


        <p class="mt-4 flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="#e74c3c" d="M14.55 16.55L11 13V8h2v4.175l2.95 2.95ZM11 6V4h2v2Zm7 7v-2h2v2Zm-7 7v-2h2v2Zm-7-7v-2h2v2Zm8 9q-2.075 0-3.9-.788q-1.825-.787-3.175-2.137q-1.35-1.35-2.137-3.175Q2 14.075 2 12t.788-3.9q.787-1.825 2.137-3.175q1.35-1.35 3.175-2.138Q9.925 2 12 2t3.9.787q1.825.788 3.175 2.138q1.35 1.35 2.137 3.175Q22 9.925 22 12t-.788 3.9q-.787 1.825-2.137 3.175q-1.35 1.35-3.175 2.137Q14.075 22 12 22Z"/></svg>
            <span>عند نهاية الولاية    ({{ new Date(data[active-1].end_of_state).toISOString().split('T')[0].slice(0, 4)}}) :</span>
            <strong>{{ data[active-1].stats.un_end }}  </strong>
        </p>

     
    </div>

</template>


<style lang="scss" scoped>
@use "~/assets/styling.scss";

.menucard {
    direction: rtl;
    h3 {
        color: #292C3D;
        font-family:  $Font-IBM-6;
        font-size: 0.95rem;
        border-bottom: 1px solid black;
        padding-bottom: 0.8rem;
        width: 80%;
    }
    p {
        color: #292C3D;
        font-family: $Font-IBM-4;
        font-size: 1rem;
        span{
        font-family: $Font-IBM-5;
        font-size: 0.9rem;
        }
        strong{
        font-family: $Font-IBM-6;
        font-size: 0.9rem;


        }
    }
}

.menu-card-wrapper {
    border-bottom: 0.4px solid rgba(41, 44, 61, 0.2);

    Button {
        color: #292C3D;
        font-family:  $Font-IBM-5;

        border: none;
        outline: none;
        cursor: pointer;
    }
}

.links {
    // margin-top: 20%; 
}
</style>


<script setup>


const visitGithub = () =>{
    const externalLink = "https://github.com/ChamkhiAnas";
    window.open(externalLink, "_blank");
}

const visitLinkedin = () =>{
    const externalLink = "https://www.linkedin.com/in/anaschamkhi";
    window.open(externalLink, "_blank");
}

const visitTwitter = () =>{
    const externalLink = "https://www.linkedin.com/in/anaschamkhi";
    window.open(externalLink, "_blank");
}

const sendMail = () =>{
  const recipientEmail = "chamkhianas@gmail.com";
  const mailtoLink = `mailto:${recipientEmail}`;
  window.location.href = mailtoLink;    
}

const emit = defineEmits(['closeMenu'])

const sendCloseMenu = () =>{
    emit('closeMenu')
}


const props=defineProps(["stats","sliderprop"])

const active = computed(() => props.sliderprop)

const data=ref(props.stats)







</script>