// 読み札、絵札、解答のオブジェクト作成
const card = [
  {
    question: '変更分をステージングするコマンドは',
    answers: [ 'git add', 'git commit', 'git amend', 'git rebase'],
    correct: 'git add'
  },{
    question: '問題その2',
    answers: [ 'git commit', 'git add', 'git amend', 'git rebase'],
    correct: 'git add'
  },{
    question: '問題その3',
    answers: [ 'git commit', 'git rebase', 'git add', 'git amend'],
    correct: 'git add'
  }
];
const cardLength = card.length;
let karutaIndex = 0;
const $btn = document.getElementsByTagName("button");

// 読み札、絵札の配置
const setUpKaruta = () => {
  // 読み札の設定
  document.getElementById("question").textContent = card[karutaIndex].question;
  // シャッフルして各絵札にデータを配置
  // まずはそのまま配置
  for(let btnIndex = 0; btnIndex < $btn.length; btnIndex++){
    $btn[btnIndex].textContent = card[karutaIndex].answers[btnIndex];
  }
}
// 呼び出し
setUpKaruta();

// クリックしたらとりあえずポップアップ
const clickHandler = (e) => {
  if(card[karutaIndex].correct === e.target.textContent){
    alert("正解！")
  }else{
    alert("不正解！")
  }

  karutaIndex++;

  if(karutaIndex < cardLength){
    // 続く
    setUpKaruta();
  } else {
    //終わり
    alert("終了！");
  }
}

for(let handlerIndex = 0; handlerIndex < cardLength; handlerIndex++){
  $btn[handlerIndex].addEventListener("click", (e) =>{
    clickHandler(e);
  });
}
