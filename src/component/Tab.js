/**
 * tab切换(函数&类)组件
 * @file Tab.js
 * @author cy
 * @copyright 
 * @createDate 2021-01-26
 */

import React, { useState } from 'react'
import "../pages/seed/seed.css"
import "../materialize.css"


function TabsControl(props){
  const[currentIndex, setIndex] = useState(0);

  function check_item_display(index){
    return index===currentIndex ? "block" : "none";
  }

  return(
    <div >
      {/**动态生成Tab导航 */}
      <div style={{display: 'flex'}}>
        {
          React.Children.map(props.children, (element, index) => {
            return(
              <button onClick={ () => {setIndex(index)} } className="btn-large" style={{color:"black", flex: 4}}>
                {element.props.name}
              </button>
            )
          })
        }
      </div>
      {/*Tab内容区域*/}
      <div className="Tab_item_wrap">
        {
          React.Children.map(props.children, (element, index) => {
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


export default TabsControl;