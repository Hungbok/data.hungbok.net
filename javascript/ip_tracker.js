$(document).ready(function() {
    let ipuserLang = navigator.language || navigator.userLanguage;
    ipuserLang = ipuserLang.split("-")[0]; // 브라우저 언어에서 기본 언어 코드만 추출
    // 브라우저 언어가 선택 가능한 언어 중 하나인지 확인
    const availableLangs = $("#select_lang .lang-option").map(function() { return $(this).attr('data-value'); }).get();
    if (!availableLangs.includes(ipuserLang)) {
        ipuserLang = 'en'; // 브라우저 언어가 선택 가능한 언어 중 하나가 아니면 기본값으로 영어 설정
    }
    $("#select_lang .lang-option[data-value='" + ipuserLang + "']").attr('selected', 'selected');
    loadCountry(ipuserLang);
    setText(ipuserLang);

    $("#select_lang").on('click', '.lang-option', function() {
        $("#select_lang .lang-option").removeAttr('selected');
        $(this).attr('selected', 'selected');
        const selectedLang = $(this).attr('data-value');
        loadCountry(selectedLang);
        setText(selectedLang);
    });
});

function loadCountry(lang) {
    $.ajax({
        "url": "https://api.ip.pe.kr/json/",
        "method": "GET"
    }).done(function (data) {
        $("#ip").text(data.ip);
        $("#code").text(data.country_code);
        $("#country").text(data.country_name[lang]);
    }).fail(function() {
        console.log("API call failed.");
    });
}

function setText(lang) {
    const texts = {
        "de": {
            title: "Überprüfen Sie die IP-Adresse",
            subtitle: "Sprache",
            ip: "IP Adresse",
            code: "Landesvorwahl",
            country: "Ländername",
            de: "Deutsch",
            en: "Englisch",
            es: "Spanisch",
            fa: "persisch",
            fr: "Französisch",
            ja: "Japanisch",
            ko: "Koreanisch",
            pt: "Portugiesisch",
            ru: "Russisch",
            zh: "Chinesisch",
        },
        "en": {
            title: "Check The IP Address",
            subtitle: "Language",
            ip: "IP Address",
            code: "Country Code",
            country: "Country Name",
            de: "German",
            en: "English",
            es: "Spanish",
            fa: "persian",
            fr: "French",
            ja: "Japanese",
            ko: "Korean",
            pt: "Portuguese",
            ru: "Russian",
            zh: "Chinese",
        },
        "es": {
            title: "comprobar la dirección IP",
            subtitle: "idioma",
            ip: "Dirección IP",
            code: "código de país",
            country: "nombre del país",
            de: "Alemán",
            en: "Inglés",
            es: "Español",
            fa: "persa",
            fr: "Francés",
            ja: "Japonés",
            ko: "Coreano",
            pt: "Portugués",
            ru: "Ruso",
            zh: "Chino",
        },
        "fa": {
            title: "آدرس IP را بررسی کنید",
            subtitle: "زبان",
            ip: "آدرس آی پی",
            code: "کد کشور",
            country: "نام کشور",
            de: "آلمانی",
            en: "انگلیسی",
            es: "اسپانیایی",
            fa: "فارسی",
            fr: "فرانسوی",
            ja: "ژاپنی",
            ko: "کره ای",
            pt: "پرتغالی",
            ru: "روسی",
            zh: "چینی ها",
        },
        "fr": {
            title: "vérifiez l'adresse IP",
            subtitle: "langue",
            ip: "Adresse IP",
            code: "code postal",
            country: "nom du pays",
            de: "Allemand",
            en: "Anglais",
            es: "Espagnol",
            fa: "persan",
            fr: "Français",
            ja: "Japonais",
            ko: "Coréen",
            pt: "Portugais",
            ru: "Russe",
            zh: "Chinois",
        },
        "ja": {
            title: "IPアドレスの確認",
            subtitle: "言語",
            ip: "IPアドレス",
            code: "国コード",
            country: "国名",
            de: "ドイツ語",
            en: "英語",
            es: "スペイン語",
            fa: "ペルシア語",
            fr: "フランス語",
            ja: "日本語",
            ko: "韓国語",
            pt: "ポルトガル語",
            ru: "ロシア語",
            zh: "中国語",
        },
        "ko": {
            title: "IP 주소 확인",
            subtitle: "언어",
            ip: "IP 주소",
            code: "국가 코드",
            country: "국가명",
            de: "독일어",
            en: "영어",
            es: "스페인어",
            fa: "페르시아어",
            fr: "프랑스어",
            ja: "일본어",
            ko: "한국어",
            pt: "포르투갈어",
            ru: "러시아어",
            zh: "중국어",
        },
        "pt-BR": {
            title: "verifique o endereço IP",
            subtitle: "linguagem",
            ip: "Endereço de IP",
            code: "Código do país",
            country: "nome do país",
            de: "Alemão",
            en: "Inglês",
            es: "Espanhol",
            fa: "persa",
            fr: "Francês",
            ja: "Japonês",
            ko: "Coreano",
            pt: "Português",
            ru: "Russo",
            zh: "Chinês",
        },
        "ru": {
            title: "проверьте IP-адрес",
            subtitle: "язык",
            ip: "Айпи адрес",
            code: "код страны",
            country: "Имя страны",
            de: "Немецкий",
            en: "Английский",
            es: "Испанский язык",
            fa: "персидский",
            fr: "Французский",
            ja: "Японский язык",
            ko: "Корейский язык",
            pt: "Португальский",
            ru: "Русский",
            zh: "Китайский язык",
        },
        "zh-CN": {
            title: "检查IP地址",
            subtitle: "语言",
            ip: "IP地址",
            code: "国家代码",
            country: "国家的名字",
            de: "德国的语言",
            en: "英语",
            es: "西班牙语",
            fa: "波斯语",
            fr: "法语",
            ja: "日语",
            ko: "朝鲜语",
            pt: "葡萄牙语",
            ru: "俄语",
            zh: "中文",
        }
    };
    $("[data-lang='title']").text(texts[lang].title);
    $("[data-lang='subtitle']").text(texts[lang].subtitle);
    $("[data-lang='ip']").text(texts[lang].ip);
    $("[data-lang='code']").text(texts[lang].code);
    $("[data-lang='country']").text(texts[lang].country);
    $("[data-lang='de']").text(texts[lang].de);
    $("[data-lang='en']").text(texts[lang].en);
    $("[data-lang='es']").text(texts[lang].es);
    $("[data-lang='fa']").text(texts[lang].fa);
    $("[data-lang='fr']").text(texts[lang].fr);
    $("[data-lang='ja']").text(texts[lang].ja);
    $("[data-lang='ko']").text(texts[lang].ko);
    $("[data-lang='pt']").text(texts[lang].pt);
    $("[data-lang='ru']").text(texts[lang].ru);
    $("[data-lang='zh']").text(texts[lang].zh);
    document.title = texts[lang].ip + " | HungBok";
}
