
// ----------------------- This is for smooth scroll effect-----------------------
const scroll = new LocomotiveScroll({
    el:document.querySelector('.main'),
    smooth:true
});


// ----------------------- This is for special effect -----------------------
var t1 = gsap.timeline()

t1.to(".main",{
    y:"100vh",
    duration:0,
    scale:0.6
})
t1.to(".main",{
    y:"30vh",
    duration:1,
    delay:1,
    scale:0.6,
})
t1.to(".main",{
    y:"0vh",
    rotate:360,
    scale:1,
    duration:0.8
})


// ----------------------- This is for typewriter Effect---------------------------------

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  const phrases = ["Web Developer", "UI/UX designer", "java coder",];
  const el = document.getElementById("typewriter");

  let sleepTime = 100;

  let curPhraseIndex = 0;

  const writeLoop = async () => {
    while (true) {
      let curWord = phrases[curPhraseIndex];

      for (let i = 0; i < curWord.length; i++) {
        el.innerText = curWord.substring(0, i + 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 10);

      for (let i = curWord.length; i > 0; i--) {
        el.innerText = curWord.substring(0, i - 1);
        await sleep(sleepTime);
      }

      await sleep(sleepTime * 5);

      if (curPhraseIndex === phrases.length - 1) {
        curPhraseIndex = 0;
      } else {
        curPhraseIndex++;
      }
    }
  };

  writeLoop();
