// import _ from 'lodash'
import avatar from './images/timg.jpg'
import SearchIcon from './images/log.png'
// import CreateAvatar from './js/index.js'
// import style from './styles/index.scss'
import './styles/index.scss'
import './styles/font.scss'
import './styles/index.css'
import counter from './js/counter'
import number from './js/number'

function component() {
  let element = document.createElement('div');

  let img = new Image()

  img.src = avatar
  img.classList.add('avatar')

  return img;
}

function CreatSearch () {
  let ele = new Image()
  ele.src = SearchIcon
  return ele
}


let layout = document.getElementById('root')
layout.innerHTML = '<div class="iconfont iconphone"></div>'

let btn = document.createElement('button')
layout.appendChild(btn)
btn.innerHTML = '新增'
btn.onclick = function () {
  let div = document.createElement('div')
  div.innerHTML = 'item'
  layout.appendChild(div)
}

if(module.hot) {
  module.hot.accept('./js/number', ()=> {
    document.body.removeChild(document.getElementById('number'))
    number()
  })
}

counter()
number()

// CreateAvatar()
console.log('Hello word! TOM')

layout.appendChild(component())
layout.appendChild(CreatSearch())
