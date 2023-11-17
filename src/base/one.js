import React, { Component } from 'react'
import '../css/one.css'
// class Test{
//   constructor(){
//     this.a = 1
//   }
//   testa(data) {
//     console.log(data)
//   }
// }
// /**继承 */
// class ChildTest extends Test{
//   testb() {
//     console.log('9999')
//   }
// }

// var obj = new ChildTest()
// obj.testa('ooo--55')
// obj.testb()
// console.log(obj.a)

class Child extends Component{
  render() {
    return <p>这是Navbar 的子组件</p>
  }
}

class Navbar extends React.Component{
  render() {
    return (
      <div class="navbar">
        <h1>Navbar</h1>
        <Child/>

      </div>
    )
  }
}
// /** 16.8版本之前 简称无状态组件 之后的版本上了hooks 后就好了 */

// /**函数式组件 */
function Swiper() {
  let str = '测试{} 可以直接计算'
  let a = 10
  let style = {
    color: 'pink',
    fontSize: '18px'
  }
  return (
    <div className="Swiper">
     <p class='setNum'>num: {30+40}-{str}</p>
     <p style = {style}>{a>10 ? 'aaa' : 'bbb'}</p>
    </div>  
  )
}

const Tabbar =() =>{
  return (
    <div>Tabbar </div>  
  )
}

export default class one extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div>
          2564
        </div>
        <Swiper></Swiper>
        <Tabbar></Tabbar>
      </div>
    )
  }
}

// export default one