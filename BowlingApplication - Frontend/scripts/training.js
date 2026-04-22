const bsStreak = document.getElementById("bsStreak");
const strStreak = document.getElementById("strStreak");
const strTotal = document.getElementById("strTotal");
const shTotal = document.getElementById("shTotal");

const bsStreakBtn = document.getElementById("bsStreakBtn");
const strStreakBtn = document.getElementById("strStreakBtn");
const strBadBtn = document.getElementById("strBadBtn");
const resetBtn = document.getElementById("resetBtn");
const fullReset = document.getElementById("fullReset");


//HIGHSCORES
//-------------------------------------------------------------------------------------
const dayBSPB = document.getElementById("dayBSPB");
const daySSPB = document.getElementById("daySSPB");

const timeBSPB = document.getElementById("timeBSPB");
const timeSSPB = document.getElementById("timeSSPB");



let dayBSPBVal = 0;
let daySSPBVal = 0;

let bsStreakVal = 0;
let strStreakVal = 0;
let strTotalVal = 0;
let shTotalVal = 0;

//PERFECT FORM INCREASE
//-------------------------------------------------------------------------------------
bsStreakBtn.addEventListener("click", () => {
    bsStreakVal++;
    shTotalVal++;

    strStreakVal = 0;

    bsStreak.textContent = bsStreakVal;
    shTotal.textContent = shTotalVal;
    strStreak.textContent = strStreakVal;


    //STREAK BUILDER
    if (bsStreakVal > dayBSPBVal) {
        dayBSPBVal++;
        dayBSPB.textContent = dayBSPBVal;
    }
});


//PERFECT FORM WITH STRIKE INCREASE
//-------------------------------------------------------------------------------------
strStreakBtn.addEventListener("click", () => {
        bsStreakVal++;
        strStreakVal++;
        strTotalVal++;
        shTotalVal++;

    bsStreak.textContent = bsStreakVal;
    strStreak.textContent = strStreakVal;
    strTotal.textContent = strTotalVal;
    shTotal.textContent = shTotalVal;

        //STREAK BUILDER
    if (bsStreakVal > dayBSPBVal) {
        dayBSPBVal++;
        dayBSPB.textContent = dayBSPBVal;
    }
        //STRIKE STREAK BUILDER
    if (strStreakVal > daySSPBVal) {
        daySSPBVal++;
        daySSPB.textContent = daySSPBVal;
    }
});

//IMPERFECT FORM WITH STRIKE INCREASE
//-------------------------------------------------------------------------------------
strBadBtn.addEventListener("click", () => {
    bsStreakVal = 0;

    strStreakVal++;
    strTotalVal++;
    shTotalVal++;

    strStreak.textContent = strStreakVal;
    strTotal.textContent = strTotalVal;
    shTotal.textContent = shTotalVal;

    bsStreak.textContent = bsStreakVal;


            //STRIKE STREAK BUILDER
    if (strStreakVal > daySSPBVal) {
        daySSPBVal++;
        daySSPB.textContent = daySSPBVal;
    }
});

//A BAD SHOT
//-------------------------------------------------------------------------------------
resetBtn.addEventListener("click", () => {
bsStreakVal = 0;
strStreakVal = 0;

    shTotalVal++;


    bsStreak.textContent = bsStreakVal;
    strStreak.textContent = strStreakVal;
    shTotal.textContent = shTotalVal;

});


//RESET EVERYTHING
//-------------------------------------------------------------------------------------
fullReset.addEventListener("click", () => {
    bsStreakVal = 0;
    strStreakVal = 0;
    strTotalVal = 0;
    shTotalVal = 0;


    bsStreak.textContent = bsStreakVal;
    strStreak.textContent = strStreakVal;
    strTotal.textContent = strTotalVal;
    shTotal.textContent = shTotalVal;
});

