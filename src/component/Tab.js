/**
 * tab切换(函数&类)组件
 * @file Tab.js
 * @author cy
 * @copyright 
 * @createDate 2021-01-26
 */

import { useState } from 'react'
import "../pages/seed/seed.css"
import "../materialize.css"


function TabsControl(children){
  const[currentIndex, setIndex] = useState(0);

  function check_tittle_index(index) {
    return index === currentIndex ? "Tab_tittle active" : "Tab_tittle";
  }

  function check_item_display(index){
    return index===currentIndex ? "block" : "none";
  }

  return(
    <div >
      {/**动态生成Tab导航 */}
      {/* check_tittle_index(index) */}
      <div className="tabs">
        {
          children.map( (element, index) => {
            return(
              <button onClick={ () => { setIndex(index)} } className="tab col s2 taber" style={{color:"black"}}>
                {element.props.name}
              </button>
            );
          })
        }
      </div>
      {/*Tab内容区域*/}
      <div className="Tab_item_wrap">
        {
          children.map( (element, index) => {
            return(
              <div style={{display: check_item_display(index)}}>
                { element }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

function TabComponent() {
  return(
    // 使用对象的方法也可以
    // TabsControl([{
    //   name: "社会",
    //   content: "社会新闻内容sssssss"
    // }, {
    //   name: "体育",
    //   content: "体育新闻的内容"
    // }, {
    //   name: "娱乐",
    //   content: "娱乐圈新闻的内容"
    // }
    // ])
    TabsControl([
    <div name="社会新闻">
          社会新闻的内容
    </div>,
    <div name="体育世界">
        体育世界的内容
    </div>,
    <div name="娱乐圈">
        娱乐圈的内容
    </div>])
  )
}

export default TabsControl;


/*     下面是使用class组件时的用法      */

// class TabsControl extends React.Component{

//     constructor(){
//         super();
//         this.state={ 
//             currentIndex : 0
//         };
//     }

//     check_tittle_index(index){
//         return index===this.state.currentIndex ? "Tab_tittle active" : "Tab_tittle";
//     }

//     //由于这个.css没有，所以就不用className来实现内容的显示与否了
//     // check_item_index(index){
//     //     return index===this.state.currentIndex ? "Tab_item show" : "Tab_item";
//     // }

//     check_item_display(index){
//       return index===this.state.currentIndex ? "block" : "none";
//     }

//     render(){
//         let _this=this;
//         return(
//             <div>
//                 {/*动态生成Tab导航*/}
//                 <div className="Tab_tittle_wrap">
//                     { React.Children.map( this.props.children , (element,index) => {
//                         return(
//                             /*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
//                             <button onClick={ () => { this.setState({currentIndex : index}) } } className={ this.check_tittle_index(index) }>
//                               { element.props.name }
//                             </button>
//                             );
//                     }) }
//                 </div>
//                 {/*Tab内容区域*/}
//                 <div className="Tab_item_wrap">
//                     {React.Children.map(this.props.children,(element,index)=>{
//                         return(
//                             <div style={{display:this.check_item_display(index)}}>
//                               { element }
//                             </div>
//                             );
//                     })}
//                 </div>
//             </div>
//             );
//     }
// }

// class TabComponent extends React.Component{

//     render(){
//         return(
//             <div className="container">
//                 <TabsControl>
//                     <div name="社会新闻">
//                         社会新闻的内容
//                     </div>
//                     <div name="体育世界">
//                         体育世界的内容
//                     </div>
//                     <div name="娱乐圈">
//                         娱乐圈的内容
//                     </div>
//                 </TabsControl>
//             </div>
//             );
//     }
// }




/**首先我们定义了一个子组件叫TabsControl ，然后我们遍历它的子标签。子标签的内容从哪里来呢，是在该组件里面的name值那里获取。

　　this.props.children 是React内建的一个属性，用来获取组件的子元素。因为子元素有可能是Object或者Array，

所以React提供了一些处理children的辅助方法用来遍历：React.Children.map。

　　比如上面这段代码中，this.props.children获取了里面三个div的数组，但是假如你只要一个div呢，那么获取的就是对象。所以需要

React.Children.map（）来配合进行遍历。

　　通过上面的这段代码，我们就很方便的进行遍历了。比如一个页面需要有多个tab切换，那么我们只需要引入这个TabsControl 一次就可以了。
*/