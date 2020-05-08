// task & phrase samples
const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']

}

const phrase = ['很簡單', '很容易', '很快', '很正常']

// generate the trash talk
function generateTrash(target) {
  const taskWord = task[target][randomNumber(task[target].length)]
  const phraseWord = phrase[randomNumber(phrase.length)]
  return `${taskWord} ${phraseWord}`
}

function randomNumber(limit) {
  return Math.floor(Math.random() * limit)
}

// export the module
module.exports = generateTrash
