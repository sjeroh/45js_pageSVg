let pathH = document.querySelector('.header .path1');

let content1=document.querySelector('.content1')
let content2=document.querySelector('.content2')
let content3=document.querySelector('.content3')
let content4=document.querySelector('.content4')

let path1=document.querySelector('.path2')
let path2=document.querySelector('.path3')
let path3=document.querySelector('.path4')
let path4=document.querySelector('.path5')


let pathHLength=pathH.getTotalLength();
// console.log(pathHLength)
let path1Length=path1.getTotalLength();
let path2Length=path2.getTotalLength();
let path3Length=path3.getTotalLength();
let path4Length=path4.getTotalLength();
// console.log(path3Length, path4Length)

// 길이만큼 당겨놓기.
path1.style.strokeDasharray=path1Length;
path1.style.strokeDashoffset=path1Length;
path2.style.strokeDasharray=path2Length;
path2.style.strokeDashoffset=path2Length;
path3.style.strokeDasharray=path3Length;
path3.style.strokeDashoffset=path3Length;
path4.style.strokeDasharray=path4Length;
path4.style.strokeDashoffset=path4Length;

window.addEventListener('scroll',scrollHandler);

function scrollHandler(){
  let scrollY = pageYOffset + (window.innerHeight*.7);
  path1.style.strokeDashoffset=calDashoffset(scrollY, content1, path1Length);
  path2.style.strokeDashoffset=calDashoffset(scrollY, content2, path2Length);
  path3.style.strokeDashoffset=calDashoffset(scrollY, content3, path3Length);
  path4.style.strokeDashoffset=calDashoffset(scrollY, content4, path4Length);
};

function calDashoffset(yscroll,element,length){
  let ratio = (yscroll - element.offsetTop)/element.offsetHeight;
  // y스크롤값 페이지 내린값에서 위에 옵셋탑값을 빼주면 그 컨텐츠에서 얼마나 내려왔는지 값으로 나오는데 거기서 컨텐츠 전체 값으로 나누면 퍼센트로 얼마나 내려온것인지 나오게 된다. 이걸 사용 가능.
  console.log(ratio)
  let value = length-(length*ratio);
  // path1.style.strokeDashoffset=value;
  return value<0?0:value>length?length:value
  // 밸류가 영보다 작으면 그냥 0을가져 그게 아니라면 밸류가 길이보다 커? 그러면 그냥 길이를 가지고있어, 그게아니면 그냥 밸류 값을 가지고 있어.
  //
};


// 화면을 부드럽게 이동하기

const scroll = new Scrooth({
  element: window,
  strength: 10,
  acceleration: 1.5,
  deceleration: 0.975,
});