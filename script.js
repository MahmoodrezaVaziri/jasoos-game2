
const objects = [
  "میز", "صندلی", "تخت", "کمد", "فرش", "پرده", "لامپ", "پنکه", "بخاری", "کولر",
  "تلویزیون", "کنترل", "ساعت دیواری", "آینه", "جاروبرقی", "جارو", "سطل زباله", "جاکفشی", "پادری", "چراغ‌قوه",
  "کتاب", "دفتر", "خودکار", "مداد", "پاک‌کن", "تراش", "ماژیک", "مداد رنگی", "پرگار", "خط‌کش",
  "کوله", "کیف", "چمدان", "کیف پول", "کمربند", "عینک", "کلاه", "شال", "دستکش", "چتر",
  "بطری", "لیوان", "فنجان", "قاشق", "چنگال", "چاقو", "بشقاب", "کاسه", "ماهیتابه", "قابلمه",
  "قوری", "کتری", "چای‌ساز", "مایکروویو", "اجاق گاز", "فر", "یخچال", "فریزر", "ماشین لباسشویی", "ظرف‌شویی",
  "سشوار", "اتو", "آب‌میوه‌گیری", "مخلوط‌کن", "همزن", "چرخ گوشت", "کولر گازی", "بخاری برقی", "پنکه ایستاده", "آبگرمکن",
  "دوچرخه", "موتور", "ماشین", "اتوبوس", "کامیون", "قطار", "هواپیما", "کشتی", "قایق", "تاکسی",
  "چسب", "نخ", "سوزن", "قیچی", "منگنه", "سنجاق", "گیره کاغذ", "چسب نواری", "چسب مایع", "مداد تراش",
  "میز ناهارخوری", "صندلی راحتی", "مبل", "کاناپه", "تلویزیون LCD", "کنسول بازی", "دوربین", "موبایل", "تبلت", "لپ‌تاپ",
  "کامپیوتر", "کیبورد", "موس", "مانیتور", "پرینتر", "اسکنر", "مودم", "روتر", "فلش", "هارد اکسترنال",
  "کلید", "قفل", "دستگیره", "پنجره", "درب", "قاب عکس", "نقاشی", "تابلو", "لوستر", "آباژور",
  "شمع", "فندک", "کبریت", "فیلتر هوا", "پمپ", "شلنگ", "قیف", "سطل", "بیل", "جاروب",
  "زنگ در", "دوربین مدار بسته", "هواکش", "فیلتر آب", "کفش", "دمپایی", "کفش ورزشی", "بوت", "کفش مجلسی", "صندل",
  "لباس", "تی‌شرت", "شلوار", "پیراهن", "کت", "پالتو", "ژاکت", "هودی", "شلوارک", "لباس زیر",
  "جوراب", "کلاه ایمنی", "دستکش ایمنی", "ماسک", "عینک آفتابی", "عینک طبی", "دستبند", "گردنبند", "گوشواره", "انگشتر",
  "ساعت مچی", "ساعت رومیزی", "ساعت دیواری", "تقویم", "دفترچه", "کارت پستال", "پاکت نامه", "تمبر", "مداد شمعی", "رنگ روغن",
  "بوم نقاشی", "قلمو", "جعبه ابزار", "چکش", "پیچ‌گوشتی", "آچار", "آچار فرانسه", "انبردست", "اره", "متر",
  "پیچ", "میخ", "مهره", "رولپلاک", "پایه", "قفسه", "کمد دیواری", "جاکلیدی", "رومیزی", "زیرلیوانی",
  "پتو", "لحاف", "بالش", "تشک", "روتختی", "روبالشی", "پادری حمام", "کف‌پوش", "موکت", "کفپوش چوبی",
  "پنکه سقفی", "رادیاتور", "کولر آبی", "یونیت داخلی", "پرده کرکره‌ای", "پرده توری", "پرده ضخیم", "ریل پرده", "قلاب", "میله پرده",
  "وسایل آشپزی", "توری", "آبکش", "رنده", "سیر له‌کن", "شکرپاش", "نمکدان", "فلفل‌پاش", "جعبه دستمال", "زیرقابلمه‌ای",
  "ترازو", "سینی", "جارو خاک‌انداز", "کیسه زباله", "توری پنجره", "جعبه کمک‌های اولیه", "قرص", "شربت", "قطره", "کرم",
  "پماد", "بانداژ", "باند کشی", "چسب زخم", "دماسنج", "فشارسنج", "چراغ قوه", "شارژر", "کابل", "پاوربانک",
  "هدفون", "اسپیکر", "میکروفون", "دوربین عکاسی", "لنز", "سه‌پایه", "پاور", "رم", "مادربرد", "کارت گرافیک",
  "سی‌پی‌یو", "فن", "کیس", "دیسک سخت", "مانیتور گیمینگ", "پد موس", "هندزفری", "قفل در", "ریموت کنترل", "دزدگیر",
  "چراغ مطالعه", "چراغ خواب", "سطل آشغال", "دستمال", "مایع ظرفشویی", "مایع دستشویی", "صابون", "شامپو", "حوله", "کرم ضدآفتاب",
  "کرم مرطوب‌کننده", "عطر", "ادکلن", "اسپری", "دئودورانت", "شانه", "برس", "موچین", "قیچی ناخن", "ناخن‌گیر",
  "آینه جیبی", "کرم اصلاح", "ریش‌تراش", "ماشین اصلاح", "سشوار حرفه‌ای", "خط چشم", "رژلب", "لاک ناخن", "براش", "پاک‌کننده آرایش",
  "سبد لباس", "سبد میوه", "سبد پیک‌نیک", "کیسه نایلونی", "کیسه پارچه‌ای", "کیسه فریزر", "ظرف پلاستیکی", "ظرف شیشه‌ای", "بطری شیشه‌ای", "بطری پلاستیکی",
  "طناب", "چوب", "سنگ", "آجر", "سیم", "لوله", "مهر", "گلدان", "گل مصنوعی", "گل طبیعی",
  "کوزه", "کاسه سفالی", "قاب سفال", "مهره بازی", "تاس", "شطرنج", "مهره شطرنج", "تخته نرد", "کارت بازی", "اسباب بازی",
  "عروسک", "ماشین اسباب بازی", "لگو", "پازل", "توپ", "راکت", "دوچرخه کوچک", "طناب بازی", "کاغذ رنگی", "بادکنک"
];

function getRandomWord() {
  const index = Math.floor(Math.random() * objects.length);
  return objects[index];
}

function startGame() {
  const count = parseInt(document.getElementById("playerCount").value);
  const spyIndex = Math.floor(Math.random() * count);
  const word = getRandomWord();

  const container = document.getElementById("rolesContainer");
  container.innerHTML = "";

  for (let i = 0; i < count; i++) {
    const btn = document.createElement("button");
    btn.textContent = `بازیکن ${i + 1} - کلیک کن`;
    btn.dataset.index = i;
    btn.onclick = function () {
      btn.disabled = true;
      
    const isSpy = parseInt(btn.dataset.index) === spyIndex;
    const roleText = isSpy ? "تو جاسوسی!" : `کلمه: ${word}`;
    btn.textContent = roleText;
    setTimeout(() => {
      btn.disabled = true;
      btn.textContent = `بازیکن ${i + 1} - نمایش داده شد`;
    }, 5000);
    
    };
    container.appendChild(btn);
  }
}
