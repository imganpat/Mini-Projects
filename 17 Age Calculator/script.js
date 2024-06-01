const currentDate = new Date();
const currentDay = currentDate.getDate();
const currentMonth = currentDate.getMonth() + 1;
const currentYear = currentDate.getFullYear();

document.getElementById("calculate-btn").addEventListener("click", function () {
    const birthDay = parseInt(document.getElementById("date").value);
    const birthMonth = parseInt(document.getElementById("month").value);
    const birthYear = parseInt(document.getElementById("year").value);

    if ((birthDay > 0 && birthDay < 31 || birthMonth > 0 && birthMonth <= 12 || birthYear > 0 && birthYear <= currentYear)) {

        let ageYears = currentYear - birthYear;
        let ageMonths = currentMonth - birthMonth;
        let ageDays = currentDay - birthDay;

        if (ageDays < 0) {
            ageMonths -= 1;
            ageDays += new Date(currentYear, currentMonth - 1, 0).getDate();
        }

        if (ageMonths < 0) {
            ageYears -= 1;
            ageMonths += 12;
        }

        document.getElementById("years").innerText = ageYears;
        document.getElementById("months").innerText = ageMonths;
        document.getElementById("days").innerText = ageDays;
    }

    else
        alert("Enter appropriate values");
});
