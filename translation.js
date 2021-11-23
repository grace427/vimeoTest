 import translationEN from "./lang/translation.en.js";
 import translationCN from "./lang/translation.cn.js";
 import translationKO from "./lang/translation.ko.js";



 const select = document.querySelector('#selectBox');

 const resource = {
     ko: { translation: translationKO },
     en: { translation: translationEN },
     cn: { translation: translationCN }
 }

 i18next.init(
     {
         lng: "en",  // default언어
         debug: true, // debug 기능 활성화
         resources: resource
     },
     function(err, t) {
         if (err) {
             console.error(err);
         } else {
          updateContent();
         }
     }
);

function updateContent() {
    document.getElementById("title").innerHTML = i18next.t("title");
    document.getElementById("content").innerHTML = i18next.t("content");
    document.querySelector(".explain").innerHTML = i18next.t("explain");
}

const handleLanguageOption = () => {
    i18next.changeLanguage(select.value);
}

select.addEventListener('change', handleLanguageOption);

i18next.on('languageChanged', (lang) => {
    switch(lang) {
        case "ko": 
            break;
        case "en": break;
        case "cn": break;
    }
    updateContent();
});
