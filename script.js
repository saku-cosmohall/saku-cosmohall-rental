window.addEventListener("scroll", function () {
  const character = document.getElementById("floatingCharacter");
  const heroSection = document.querySelector(".hero");
  if (!heroSection) return;

  const heroRect = heroSection.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  // heroが少しでも画面内に見えているかどうか
  const isHeroVisible =
    heroRect.bottom > 100 && heroRect.top < windowHeight - 100;

  if (isHeroVisible) {
    character.classList.add("show");
  } else {
    character.classList.remove("show");
  }
});

// スライダーのクリックで停止/再開機能
document.addEventListener('DOMContentLoaded', function() {
    const sliderTrack = document.querySelector('.slider-track');
    let isPaused = false;
    
    if (sliderTrack) {
        sliderTrack.addEventListener('click', function() {
            if (isPaused) {
                // 再開
                sliderTrack.style.animationPlayState = 'running';
                sliderTrack.classList.remove('paused');
                isPaused = false;
            } else {
                // 停止
                sliderTrack.style.animationPlayState = 'paused';
                sliderTrack.classList.add('paused');
                isPaused = true;
            }
        });
    }
});

function toggleMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.classList.toggle("active");
  mobileMenu.classList.toggle("active");

  // メニューが開いている時はスクロールを無効化
  if (mobileMenu.classList.contains("active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
}

function closeMenu() {
  const hamburger = document.querySelector(".hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  hamburger.classList.remove("active");
  mobileMenu.classList.remove("active");
  document.body.style.overflow = "";
}

// 外側をクリックした時にメニューを閉じる
document.addEventListener("click", function (e) {
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.querySelector(".hamburger");

  if (
    mobileMenu.classList.contains("active") &&
    !mobileMenu.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    closeMenu();
  }
});

// リサイズ時の処理
window.addEventListener("resize", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  if (window.innerWidth > 959 && mobileMenu.classList.contains("active")) {
    closeMenu();
  }
});

const priceTable = {
  大ホール: {
    平日: {
      none: {
        "9-12": 14660,
        "13-17": 23040,
        "18-22": 29330,
        "9-17": 37700,
        "13-22": 52370,
        "9-22": 67030,
      },
      lt1000: {
        "9-12": 19900,
        "13-17": 31420,
        "18-22": 37710,
        "9-17": 51320,
        "13-22": 69130,
        "9-22": 89030,
      },
      lt3000: {
        "9-12": 26190,
        "13-17": 39800,
        "18-22": 49230,
        "9-17": 65990,
        "13-22": 89030,
        "9-22": 115220,
      },
      gt3000: {
        "9-12": 30380,
        "13-17": 47140,
        "18-22": 58660,
        "9-17": 77520,
        "13-22": 105800,
        "9-22": 136180,
      },
    },
    休日: {
      none: {
        "9-12": 17800,
        "13-17": 28280,
        "18-22": 33520,
        "9-17": 46080,
        "13-22": 61800,
        "9-22": 79600,
      },
      lt1000: {
        "9-12": 23040,
        "13-17": 36660,
        "18-22": 42950,
        "9-17": 59700,
        "13-22": 79610,
        "9-22": 102650,
      },
      lt3000: {
        "9-12": 29330,
        "13-17": 46090,
        "18-22": 54470,
        "9-17": 75420,
        "13-22": 100560,
        "9-22": 129890,
      },
      gt3000: {
        "9-12": 34570,
        "13-17": 55520,
        "18-22": 64950,
        "9-17": 90090,
        "13-22": 120470,
        "9-22": 155040,
      },
    },
  },
  小ホール: {
    平日: {
      none: {
        "9-12": 3140,
        "13-17": 4190,
        "18-22": 5230,
        "9-17": 7330,
        "13-22": 9420,
        "9-22": 12560,
      },
      lt1000: {
        "9-12": 4190,
        "13-17": 6280,
        "18-22": 8380,
        "9-17": 10470,
        "13-22": 14660,
        "9-22": 18850,
      },
      lt3000: {
        "9-12": 5230,
        "13-17": 7330,
        "18-22": 10470,
        "9-17": 12560,
        "13-22": 17800,
        "9-22": 23030,
      },
      gt3000: {
        "9-12": 6280,
        "13-17": 8380,
        "18-22": 11520,
        "9-17": 14660,
        "13-22": 19900,
        "9-22": 26180,
      },
    },
    休日: {
      none: {
        "9-12": 4190,
        "13-17": 6280,
        "18-22": 7330,
        "9-17": 10470,
        "13-22": 13610,
        "9-22": 17800,
      },
      lt1000: {
        "9-12": 5230,
        "13-17": 7330,
        "18-22": 9420,
        "9-17": 12560,
        "13-22": 16750,
        "9-22": 21980,
      },
      lt3000: {
        "9-12": 6280,
        "13-17": 8380,
        "18-22": 10470,
        "9-17": 14660,
        "13-22": 18850,
        "9-22": 25130,
      },
      gt3000: {
        "9-12": 7330,
        "13-17": 9420,
        "18-22": 12570,
        "9-17": 16750,
        "13-22": 21990,
        "9-22": 29320,
      },
    },
  },
  練習室: {
    all: {
      none: {
        "9-12": 1250,
        "13-17": 1360,
        "18-22": 1570,
        "9-17": 2610,
        "13-22": 2930,
        "9-22": 4180,
      },
    },
  },
  楽屋: {
    all: {
      none: {
        "9-12": 520,
        "13-17": 620,
        "18-22": 730,
        "9-17": 1140,
        "13-22": 1350,
        "9-22": 1870,
      },
    },
  },
  "1階会議室": {
    all: {
      none: {
        "9-12": 1040,
        "13-17": 1360,
        "18-22": 1570,
        "9-17": 2400,
        "13-22": 2930,
        "9-22": 3970,
      },
    },
  },
  会議室1: {
    all: {
      none: {
        "9-12": 200,
        "13-17": 310,
        "18-22": 410,
        "9-17": 510,
        "13-22": 720,
        "9-22": 920,
      },
    },
  },
  会議室2: {
    all: {
      none: {
        "9-12": 200,
        "13-17": 310,
        "18-22": 410,
        "9-17": 510,
        "13-22": 720,
        "9-22": 920,
      },
    },
  },
  学習室1: {
    all: {
      none: {
        "9-12": 310,
        "13-17": 410,
        "18-22": 620,
        "9-17": 720,
        "13-22": 1030,
        "9-22": 1340,
      },
    },
  },
  学習室2: {
    all: {
      none: {
        "9-12": 310,
        "13-17": 410,
        "18-22": 620,
        "9-17": 720,
        "13-22": 1030,
        "9-22": 1340,
      },
    },
  },
  茶室: {
    all: {
      none: {
        "9-12": 310,
        "13-17": 410,
        "18-22": 620,
        "9-17": 720,
        "13-22": 1030,
        "9-22": 1340,
      },
    },
  },
  調理室: {
    all: {
      none: {
        "9-12": 2090,
        "13-17": 2510,
        "18-22": 2930,
        "9-17": 4600,
        "13-22": 5440,
        "9-22": 7530,
      },
    },
  },
  研修室: {
    all: {
      none: {
        "9-12": 200,
        "13-17": 310,
        "18-22": 410,
        "9-17": 510,
        "13-22": 720,
        "9-22": 920,
      },
    },
  },
  ふるさと広場: {
    all: {
      none: {
        "9-12": 930,
        "13-17": 1240,
        "18-22": 1240,
        "9-17": 2480,
        "13-22": 2790,
        "9-22": 3410,
      },
    },
  },
};

// 利用日・入場料区分・利用目的を施設に応じて切り替え
function toggleOptions() {
  const facility = document.getElementById("facility").value;
  const dayType = document.getElementById("dayType");
  const admissionType = document.getElementById("admissionType");
  const purpose = document.getElementById("purpose");
  const practiceOption = purpose.querySelector('option[value="practice"]');

  if (["大ホール", "小ホール"].includes(facility)) {
    // 大ホール・小ホールの場合
    dayType.disabled = false;
    admissionType.disabled = false;
    practiceOption.disabled = false;
    practiceOption.style.color = "";
  } else {
    // その他の施設の場合
    dayType.disabled = true;
    admissionType.disabled = true;
    admissionType.value = "none"; // 自動で徴収なしに設定

    // 練習・準備利用をグレーアウト
    practiceOption.disabled = true;
    practiceOption.style.color = "#999";

    // もし現在練習・準備利用が選択されていたら通常利用に変更
    if (purpose.value === "practice") {
      purpose.value = "normal";
    }
  }
}

function calculateFee() {
  const facility = document.getElementById("facility").value;
  const dayType = document.getElementById("dayType").value;
  const admission = document.getElementById("admissionType").value;
  const timeSlot = document.getElementById("timeSlot").value;
  const purpose = document.getElementById("purpose").value;
  const airConditioning = document.querySelector(
    'input[name="airConditioning"]:checked'
  ).value;
  const powerSupply = document.querySelector(
    'input[name="powerSupply"]:checked'
  ).value;

  // 平日/休日の区別があるのは大ホール・小ホールだけ、それ以外は'all'
  const dayKey = ["大ホール", "小ホール"].includes(facility) ? dayType : "all";
  let baseFee = priceTable[facility]?.[dayKey]?.[admission]?.[timeSlot] || 0;

  // 利用目的加算
  if (purpose === "business") {
    if (facility === "大ホール" && admission === "none") {
      baseFee *= 1.6; // 大ホール・入場料徴収なしの場合のみ1.6倍
    } else if (facility !== "大ホール") {
      baseFee *= 3; // その他の施設は3倍
    }
    // 大ホール・入場料徴収ありの場合は倍率なし（元の料金のまま）
  } else if (purpose === "practice" && facility === "大ホール") {
    baseFee *= 0.6;
  }

  // 午後5時以降自動加算（大ホール・小ホール・ふるさと広場以外）
  const after5Slots = ["18-22", "13-22", "9-22"];
  if (
    !["大ホール", "小ホール", "ふるさと広場"].includes(facility) &&
    after5Slots.includes(timeSlot)
  ) {
    baseFee += 5230;
  }

  // 冷暖房費加算
  if (airConditioning === "use") {
    const hours = getHours(timeSlot);
    let airConditioningRate = 0;

    if (facility === "大ホール") {
      airConditioningRate = 5230;
    } else if (facility === "小ホール") {
      airConditioningRate = 1570;
    } else if (facility === "練習室") {
      airConditioningRate = 310;
    } else {
      // その他の会議室等
      airConditioningRate = 200;
    }

    baseFee += airConditioningRate * hours;
  }

  // 電源利用費加算
  if (powerSupply === "use") {
    let powerFee = 0;

    switch (timeSlot) {
      case "9-12":
      case "13-17":
      case "18-22":
        powerFee = 310;
        break;
      case "9-17":
      case "13-22":
        powerFee = 620;
        break;
      case "9-22":
        powerFee = 930;
        break;
    }

    baseFee += powerFee;
  }

  document.getElementById("result").innerHTML = `料金: ${Math.floor(
    baseFee
  )}円`;
}

// 時間帯から利用時間数を計算する関数
function getHours(timeSlot) {
  switch (timeSlot) {
    case "9-12":
      return 3;
    case "13-17":
      return 4;
    case "18-22":
      return 4;
    case "9-17":
      return 8;
    case "13-22":
      return 9;
    case "9-22":
      return 13;
    default:
      return 0;
  }
}

// 初期表示用に呼び出し
toggleOptions();

document.querySelectorAll(".step").forEach((step, index) => {
  step.addEventListener("click", () => {
    // クリック時のアニメーション
    step.style.transform = "scale(0.95)";
    setTimeout(() => {
      step.style.transform = "translateY(-10px)";
    }, 100);
  });
});

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

document.querySelectorAll(".step").forEach((step) => {
  step.style.opacity = "0";
  step.style.transform = "translateY(30px)";
  step.style.transition = "all 0.6s ease";
  observer.observe(step);
});

class Carousel {
  constructor() {
    this.container = document.getElementById("examplesContainer");
    this.cards = document.querySelectorAll(".example-card");
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.indicatorsContainer = document.getElementById("indicators");

    this.currentIndex = 0;
    this.totalCards = this.cards.length;

    this.init();
  }

  init() {
    this.createIndicators();
    this.updateCarousel();
    this.addEventListeners();
  }

  // 画面中央にアクティブカードを配置
  calculateOffset() {
    const containerWidth = this.container.parentElement.clientWidth;
    const cardWidth = this.getCardWidth();
    const gap = this.getGap();

    // 中央位置の計算
    const centerPosition = (containerWidth - cardWidth) / 2;
    const cardOffset = this.currentIndex * (cardWidth + gap);

    return centerPosition - cardOffset;
  }

  getCardWidth() {
    if (window.innerWidth <= 480) return 280;
    if (window.innerWidth <= 768) return 300;
    return 340;
  }

  getGap() {
    if (window.innerWidth <= 480) return 15;
    if (window.innerWidth <= 768) return 20;
    return 30;
  }

  createIndicators() {
    for (let i = 0; i < this.totalCards; i++) {
      const indicator = document.createElement("div");
      indicator.className = "indicator";
      indicator.addEventListener("click", () => this.goToSlide(i));
      this.indicatorsContainer.appendChild(indicator);
    }
  }

  updateCarousel() {
    const translateX = this.calculateOffset();
    this.container.style.transform = `translateX(${translateX}px)`;

    // アクティブ状態を更新
    this.cards.forEach((card, index) => {
      card.classList.toggle("active", index === this.currentIndex);
    });

    // インジケーター更新
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle("active", index === this.currentIndex);
    });
  }

  goToSlide(index) {
    this.currentIndex = index;
    this.updateCarousel();
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.totalCards;
    this.updateCarousel();
  }

  prevSlide() {
    this.currentIndex =
      (this.currentIndex - 1 + this.totalCards) % this.totalCards;
    this.updateCarousel();
  }

  addEventListeners() {
    this.nextBtn.addEventListener("click", () => this.nextSlide());
    this.prevBtn.addEventListener("click", () => this.prevSlide());

    // キーボード操作
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") this.prevSlide();
      if (e.key === "ArrowRight") this.nextSlide();
    });

    // タッチスワイプ
    let startX = 0;
    let isDragging = false;

    this.container.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
      isDragging = true;
    });

    this.container.addEventListener("touchend", (e) => {
      if (!isDragging) return;
      isDragging = false;

      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;

      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          this.nextSlide();
        } else {
          this.prevSlide();
        }
      }
    });

    // リサイズ対応
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.updateCarousel();
      }, 100);
    });
  }
}

// 初期化
document.addEventListener("DOMContentLoaded", () => {
  new Carousel();
});
// アコーディオン機能
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const faqItem = question.parentElement;
    faqItem.classList.toggle("active");
  });
});

// JavaScript部分
document.addEventListener("DOMContentLoaded", function () {
  // 部屋リスト
  const rooms = [
    "大ホール",
    "小ホール",
    "会議室",
    "和室",
    "茶室",
    "展示コーナー",
    "練習室",
    "調理室",
  ];

  // やりたいことリスト
  const activities = [
    "🎵コンサート開催",
    "🎭演劇発表会",
    "💃ダンスパフォーマンス",
    "🎤カラオケ大会",
    "🎨アート展示会",
    "🎪マジックショー",
    "🎬映画上映会",
    "🏆表彰式",
    "💡アイデアワークショップ",
    "📊プレゼン練習",
    "👥交流会",
    "📖読書会",
    "☕カフェタイム",
    "🧘ヨガ・瞑想",
    "🍵茶道体験",
    "🎋書道教室",
    "👘着付け体験",
    "📜俳句・短歌会",
    "🎮ゲーム大会",
    "🍡和菓子作り",
    "🎎季節のイベント",
    "💻勉強会",
    "🌿癒しの時間",
    "📸撮影会",
    "🎤おじさんバンド再結成ライブ",
    "🎬幻の自主映画まつり",
    "💃モヒカン館長と踊る夜",
    "🎭一人芝居で世界を救う日",
    "🎨中年の本気・写経アート展",
    "🎮ゆるゲーマー頂上決戦",
    "🍡お団子片手に推し語り会",
    "📸館長を探せ！写真コンテスト",
    "☕コスモなぽりたんと語る朝活カフェ",
    "🎋願いごとを叫ぶ短冊朗読会",
    "🧘心を無にするおじさんヨガ",
    "📖推しの一文朗読ナイト",
    "💡無駄アイデア選手権",
    "👘着物で走る耐久マラソン",
    "🎮64時代を取り戻す会",
    "🍵館長にお茶を点ててみた体験",
    "🪩地味ハロウィン事前練習会",
    "🎤マイクを離さないカラオケ地獄",
    "🏆なんでも表彰式（おじさん自作）",
    "📊スライド芸人選手権",
    "📸#映えない写真展",
    "💻人生プレゼン大会",
    "🪄こっそりマジック修行会",
    "🌿深呼吸だけする会",
    "🚀未来の自分にメッセージ残す会",
  ];

  const fortuneBtn = document.getElementById("fortuneBtn");
  const fortuneResult = document.getElementById("fortuneResult");
  const fortuneText = document.getElementById("fortuneText");

  if (fortuneBtn) {
    fortuneBtn.addEventListener("click", function () {
      // 部屋をランダムに選択
      const randomRoomIndex = Math.floor(Math.random() * rooms.length);
      const selectedRoom = rooms[randomRoomIndex];

      // やりたいことをランダムに選択
      const randomActivityIndex = Math.floor(Math.random() * activities.length);
      const selectedActivity = activities[randomActivityIndex];

      // 結果表示
      fortuneText.innerHTML = `
                <div style="font-size: 20px; margin-top: 10px;">
                    ${selectedRoom}で<br>${selectedActivity}をする
                </div>
            `;

      fortuneResult.style.display = "block";

      // ボタンテキスト変更
      fortuneBtn.textContent = "もう一度占う";
    });
  }
});
