// Vaiables
const target = { engineer: '工程師', designer: '設計師', entrepreneur: '創業家' }
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code', '修Bug', '修電腦'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計', '加個圖片', '改個排版'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢', '設定kpi', '發個年終']

}
const phrase = ['很簡單吧!', '很容易吧!', '很快吧!', '很正常吧!', '很輕鬆吧!', '沒有難度吧!']



function generateTalk(option) {
  // 假資料
  // const option = { career: 'entrepreneur' }
  // 宣告變數 rubbishTalk
  let rubbishTalk = '身為一個'
  // 宣告變數 career
  const career = option.career
  if (!career) return '請選擇職業!'
  // rubbishTalk 加上'職位'
  rubbishTalk += target[career]
  // 隨機選取 task 陣列中屬於指定 target 的任意項目
  const taskIndex = Math.floor(Math.random() * task[career].length)
  // rubbishTalk 加上'任務'
  rubbishTalk += task[career][taskIndex]
  // 隨機選取 phrase 陣列中的任意項目
  const phraseIndex = Math.floor(Math.random() * phrase.length)
  // rubbishTalk 加上'片語'
  rubbishTalk += phrase[phraseIndex]
  // 回傳 rubbishTalk
  return rubbishTalk
}

// 將函式匯出，讓其他 js 檔案也可以使用
module.exports = generateTalk