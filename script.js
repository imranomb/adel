const niz_uspomena = [
    {
        url: "1.jpeg",
        opis: "Hvala ti što žrtvuješ svoj organizam da bi spriječio mene od konzumacije alkohola."
    },
    {
        url: "2.jpeg",
        opis: "Hvala ti što si mi neobrojana puta pomogao osvojiti djevojku."
    },
    {
        url: "3.png",
        opis: "Hvala ti na svim lijepim riječima i podršci u teškim trenutcima."
    },
    {
        url: "4.jpeg",
        opis: "I neizmjerno ti hvala što si me upoznao sa mnoštvom divnih ljudi."
    }
]

const arrow = document.querySelector(".fa-arrow-right");
let slide = document.querySelector(".slide");
let pre_slide = document.querySelector(".pre_slide");
let br = -1;

arrow.addEventListener("click", () => {
    br++;
    if(br > 3)
    {
        br = 0;
        pre_slide.style.backgroundImage = `url("${niz_uspomena[3].url}")`
        pre_slide.childNodes[1].innerText = niz_uspomena[3].opis;
    }
    if(br >= 1)
    {
        pre_slide.style.backgroundImage = `url("${niz_uspomena[br-1].url}")`
        pre_slide.childNodes[1].innerText = niz_uspomena[br-1].opis;
    }
    if(slide.classList.contains("active")) slide.classList.remove("active");
    slide.style.backgroundImage = `url("${niz_uspomena[br].url}")`
    slide.childNodes[1].innerText = niz_uspomena[br].opis;
    void slide.offsetWidth;
    slide.classList.toggle("active");
})