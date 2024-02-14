<template>

    <div class="menucard">
        <div @click="sendCloseMenu()" class="menu-card-wrapper">
            <Button class="flex flex-row px-4 py-4 justify-center items-center gap-2">إغلاق النافذة 
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                    <path fill="#191b1f" d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"/>
                </svg>
            </Button>
        </div>

        <h3 class="mt-12">حول الموقع</h3>
        <p class="mt-6">هذا المشروع غير تابع لأي جهة رسمية وهو عبارة عن عرض مرئي حول توزيع الأطياف السياسية للحكومات المتعاقبة خلال التاريخ السياسي الحديث للمغرب مع إدراج بعض المعطيات والبيانات الخاصة بكل واحدة منها </p>
        <br>
        <p>يمكنك النقر على الخط الزمني وسحبه للتحريك، واستخدام عجلة التمرير للتقدم أو الرجوع و زيادة السرعة أو إبطائها.</p>

        <h3 class="mt-12 flex flex-row items-center gap-2">
            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24">
                <path fill="#e17055" d="M12 17q.425 0 .713-.288T13 16q0-.425-.288-.712T12 15q-.425 0-.712.288T11 16q0 .425.288.713T12 17m-1-4h2V7h-2zm1 10.3L8.65 20H4v-4.65L.7 12L4 8.65V4h4.65L12 .7L15.35 4H20v4.65L23.3 12L20 15.35V20h-4.65z"/>
            </svg> -->
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 512 512"><path fill="none" d="M240 304h32l6-160h-44z"/><path fill="#292c3d" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m20 319.91h-40v-40h40ZM272 304h-32l-6-160h44Z"/></svg>
            تنويه
        </h3>
        <p class="mt-6">المعطيات والبيانات المستخدمة هنا تم التدقيق فيها من طرف بعض طلبة العلوم السياسية</p>


        <h3 class="mt-12 flex flex-row items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24"><path fill="#292c3d" d="M8.4 14.65q.225-.6.363-1.263T8.9 12q0-.725-.137-1.388T8.4 9.35l-1.85.75q.15.45.25.925t.1.975q0 .5-.1.975t-.25.925zM11.6 16q.425-.95.613-1.95T12.4 12q0-1.05-.187-2.05T11.6 8l-1.85.75q.35.75.5 1.563T10.4 12q0 .875-.15 1.688t-.5 1.562zm3.25 1.35q.525-1.25.788-2.588T15.9 12q0-1.425-.262-2.762T14.85 6.65l-1.85.8q.45 1.05.675 2.2T13.9 12q0 1.2-.225 2.35T13 16.55zM12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22"/></svg>
            تواصل معنا
        </h3>
        <div class="links flex flex-row gap-1  mt-6 w-full mb-10">
            
            <div @click="visitGithub()" class="github hover:bg-stone-200 hover:rounded-lg hover:rotate-12 px-3 py-3 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16">
                    <path fill="#292c3d" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59c.4.07.55-.17.55-.38c0-.19-.01-.82-.01-1.49c-2.01.37-2.53-.49-2.69-.94c-.09-.23-.48-.94-.82-1.13c-.28-.15-.68-.52-.01-.53c.63-.01 1.08.58 1.23.82c.72 1.21 1.87.87 2.33.66c.07-.52.28-.87.51-1.07c-1.78-.2-3.64-.89-3.64-3.95c0-.87.31-1.59.82-2.15c-.08-.2-.36-1.02.08-2.12c0 0 .67-.21 2.2.82c.64-.18 1.32-.27 2-.27c.68 0 1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82c.44 1.1.16 1.92.08 2.12c.51.56.82 1.27.82 2.15c0 3.07-1.87 3.75-3.65 3.95c.29.25.54.73.54 1.48c0 1.07-.01 1.93-.01 2.2c0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
            </div>

            <div @click="visitLinkedin()" class="linkedin  hover:bg-stone-200 hover:rounded-lg hover:rotate-12 px-3 py-3 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20">
                    <path fill="#292c3d" d="M5 3c0 1.062-.71 1.976-2.001 1.976C1.784 4.976 1 4.114 1 3.052C1 1.962 1.76 1 3 1s1.976.91 2 2M1 19V6h4v13zm6-8.556c0-1.545-.051-2.836-.102-3.951h3.594l.178 1.723h.076c.506-.811 1.746-2 3.822-2C17.1 6.216 19 7.911 19 11.558V19h-4v-6.861c0-1.594-.607-2.81-2-2.81c-1.062 0-1.594.86-1.873 1.569c-.102.254-.127.608-.127.963V19H7z"/>
                </svg>
            </div>
         
            <div @click="visitTwitter()" class="twitter  hover:bg-stone-200 hover:rounded-lg hover:rotate-12 px-3 py-3 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#292c3d" d="M18.205 2.25h3.308l-7.227 8.26l8.502 11.24H16.13l-5.214-6.817L4.95 21.75H1.64l7.73-8.835L1.215 2.25H8.04l4.713 6.231zm-1.161 17.52h1.833L7.045 4.126H5.078z"/>
                </svg>
            </div>
            <div @click="sendMail()"  class="mail  hover:bg-stone-200 hover:rounded-lg hover:rotate-12 px-3 py-3 cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="#292c3d" d="M19 22q-1.65 0-2.825-1.175T15 18v-4.5q0-1.05.725-1.775T17.5 11q1.05 0 1.775.725T20 13.5V18h-2v-4.5q0-.2-.15-.35T17.5 13q-.2 0-.35.15t-.15.35V18q0 .825.588 1.413T19 20q.825 0 1.413-.587T21 18v-4h2v4q0 1.65-1.175 2.825T19 22M3 18q-.825 0-1.412-.587T1 16V4q0-.825.588-1.412T3 2h16q.825 0 1.413.588T21 4v6h-3.5q-1.45 0-2.475 1.025T14 13.5V18zm8-7l8-5V4l-8 5l-8-5v2z"/>
                </svg>
            </div>
        </div>
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
    const externalLink = "https://twitter.com/ChamkhAnas";
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





</script>