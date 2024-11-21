/////////modal time///
let countdownTime = 164; 

function startCountdown() {
    const timerElement = document.getElementById("timer");
    const resendElement = document.getElementById("resend");

    const interval = setInterval(() => {
        const minutes = Math.floor(countdownTime / 60);
        const seconds = countdownTime % 60;
        timerElement.textContent = `متاح خلال ${minutes}:${seconds < 10 ? '0' + seconds : seconds} دقيقة`;

        if (countdownTime <= 0) {
            clearInterval(interval);
            timerElement.textContent = "انتهى الوقت";
            resendElement.style.color = "blue";
            resendElement.style.cursor = "pointer";
            resendElement.addEventListener("click", resendCode); 
        }

        countdownTime--;
    }, 1000);
}

function resendCode() {
    alert("تم إرسال الرمز مرة أخرى!");
    countdownTime = 164; 
    startCountdown(); 
    this.style.color = "gray";
    this.style.cursor = "not-allowed";
    this.removeEventListener("click", resendCode); 
}

startCountdown();
/////////modal time///

//time in home screen/////
///days//
    function getArabicDayName(dayIndex) {
        const days = [
            "الأحد",
            "الإثنين",
            "الثلاثاء",
            "الأربعاء",
            "الخميس",
            "الجمعة",
            "السبت"
        ];
        return days[dayIndex];
    }
//months///
    function getArabicMonthName(monthIndex) {
        const months = [
            "يناير",
            "فبراير",
            "مارس",
            "أبريل",
            "مايو",
            "يونيو",
            "يوليو",
            "أغسطس",
            "سبتمبر",
            "أكتوبر",
            "نوفمبر",
            "ديسمبر"
        ];
        return months[monthIndex];
    }
///time settings///
    function setDynamicDate() {
        const today = new Date();
        const dayName = getArabicDayName(today.getDay());
        const day = today.getDate();
        const monthName = getArabicMonthName(today.getMonth());

        const formattedDate = `${dayName}، ${day} ${monthName}`;
        document.getElementById("dynamicDate").textContent = formattedDate;
    }

    document.addEventListener("DOMContentLoaded", setDynamicDate);
    //time in home screen/////
///account-page date style/////
const dateInput = document.getElementById('dateInput');
const popup = document.getElementById('popup');
const applyDate = document.getElementById('applyDate');
const startDate = document.getElementById('startDate');
const endDate = document.getElementById('endDate');
const selectedDate = document.getElementById('selectedDate');

// فتح النافذة عند النقر على العنصر
dateInput.addEventListener('click', () => {
  popup.style.display = 'block';
});

// تأكيد التاريخ وإغلاق النافذة
applyDate.addEventListener('click', () => {
  const start = startDate.value;
  const end = endDate.value;

  if (start && end) {
    selectedDate.textContent = `${start} - ${end}`;
    popup.style.display = 'none';
  } else {
    alert('يرجى اختيار نطاق تاريخ صحيح.');
  }
});

// إغلاق النافذة عند النقر خارجها
document.addEventListener('click', (event) => {
  if (!dateInput.contains(event.target) && !popup.contains(event.target)) {
    popup.style.display = 'none';
  }
});
///account-page date style/////


