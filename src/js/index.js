import avatar from '../images/timg.jpg'
import style from '../styles/index.scss'
function createAvatar() {
  let element = document.createElement('div');

  let img = new Image()

  img.src = avatar
  img.classList.add(style.avatar)

  let layout = document.getElementById('root')
  layout.appendChild(img)
}

export default createAvatar