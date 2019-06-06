import { define, WeElement } from 'omi'
import logo from './logo.svg'
import '../app-intro'

define('my-app', class extends WeElement {
  data = {
    seconds: 0
  }

  static css = require('./_index.less')

  static defaultProps = {
    name: 'haha',
    age: 21
  }

  static propTypes = {
    name: String,
    age: Number
  }

  onClick = (evt) => {
    alert('hello')
  }

  onFire = (evt) => {
    this.props.age = 10000
    this.update()
  }
  
  // onH1 = () => {
  //   console.log(this.h1)
  // }

  onH1 = () => {
    console.log(this.myRef.current)  //h1
  }

  // 提前赋值
  // myRef = e => {
  //   this.h1 = e
  // }

  // 使用 createRef 来得到更高的性能
  myRef = createRef()

  tick() {
    this.data.seconds++
    this.update()
  }

  install() {
    this.interval = setInterval(() => this.tick(), 1000)
  }

  uninstall() {
    clearInterval(this.interval)
  }

  render(props) {
    return (
      <div>
        <app-intro />
        <h1 ref={this.myRef} onClick={this.onH1}>hello world</h1>
        <h3>Seconds:{this.data.seconds}</h3>
        <h1 onClick={this.onClick}>我的名字是{props.name}</h1>
        <h2 onClick={this.onFire}>我的年龄是{props.age}</h2>
        <img src={logo} class="app-logo"/>
        {props.numbers.map((a, indexA) =>
          <div>
            {
              props.numbers.map((b, indexB) => {
                return indexA <= indexB && <span>{a}*{b}={a * b} </span>
              })
            }
          </div>
        )}
      </div>
    )
  }
})

