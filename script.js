$(document).ready(function(){
         
    $.getJSON("data.json",
    function(data){

        var text = "";
        let BEN_KİMİM = data["VARIANTS"]["BEN_KİMİM"];

        for (const key in BEN_KİMİM) {
            if (Object.hasOwnProperty.call(BEN_KİMİM, key)) {
                text += `
                AD: ${BEN_KİMİM[key]["AD"]} 
                SOYAD: ${BEN_KİMİM[key]["SOYAD"]} 
                YAŞ: ${BEN_KİMİM[key]["YAŞ"]}
                YER: ${BEN_KİMİM[key]["YER"]}<br><hr>`;
        }
    }  

        var text2 = "";
        let BRANDS=data['BRANDS'];                   

        for (const key in BRANDS) {
            if (Object.hasOwnProperty.call(BRANDS, key)) {
                    text2 += `
                    C: ${BRANDS[key]["C"]}
                    JAVA: ${BRANDS[key]["JAVA"]}
                    PYTHON: ${BRANDS[key]["PYTHON"]}
                    HTML: ${BRANDS[key]["HTML"]}
                    CSS: ${BRANDS[key]["CSS"]}<br><hr>`;
            }   
        }

        var text3 = "";
        let CATEGORIES = data["CATEGORIES"];
        
        for (const key in CATEGORIES) {
            if (Object.hasOwnProperty.call(CATEGORIES, key)) {
                text3 += `
                YAPAY ZEKA: ${CATEGORIES[key]["YAPAY_ZEKA"]}
                Web Developer: ${CATEGORIES[key]["Wwb Developer"]}
                Java Developer: ${CATEGORIES[key]["Java Developer"]}
                PYTHON DEVELOPER: ${CATEGORIES[key]["PYTHON DEVELOPER<"]}`;
                
                
            }
        }
 
        
        var text5 = "";
        let PRICE = data["PRICE"];

        for (const key in PRICE) {
            if (Object.hasOwnProperty.call(PRICE, key)) {
                text5 = `
                MIN: ${PRICE["MIN"]} 
                MAX: ${PRICE["MAX"]} 
                MIN_SELECTED: ${PRICE["MIN_SELECTED"]}  
                MAX_SELECTED: ${PRICE["MAX_SELECTED"]} <br><hr>`;
            }
        }

        var text6 = "";
        let SETTINGS = data["SETTINGS"];
        
        for (const key in SETTINGS) {
            if (Object.hasOwnProperty.call(SETTINGS, key)) {
                text6 = `
                LANGUAGE: ${SETTINGS["LANGUAGE"]} 
                SHOW_COUNT: ${SETTINGS["SHOW_COUNT"]}`;
            }
        }

        document.getElementById("test").innerHTML  = text;
        document.getElementById("test2").innerHTML = text2;
        document.getElementById("test3").innerHTML = text3;
        document.getElementById("test4").innerHTML = text4;
        document.getElementById("test5").innerHTML = text5;
        document.getElementById("test6").innerHTML = text6;
    });
    data.getJSON.save(CV.pdf)
});