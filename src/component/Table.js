
/**
 * 创建一个 table 标签
 * @param {object[]} dataSource 数据
 * @param {object[]} columns    列项
 * @param {object} props        剩余属性项
 * @returns {HTMLTableElement}
 */
export function Table({dataSource, columns, props}) {
  {/* 有个问题是，caption会被当成props，但是显示出来是没影响的 */}
  {/* 这个{...props}太牛了 */}
  return(
    <table {...props}>
      <caption>{props.hasOwnProperty("caption") ? props.caption : ""}</caption>
      <thead >
        <tr>
        {
          columns.map( (value) => {return(
            <th>{value.name}</th>
          )})
        }
        </tr>
      </thead>

      <tbody>
        {
          dataSource.map( (value) => { return(
            <tr>{
              columns.map((element) => {
                return(
                <td>{value[element.dataIndex]}</td>
                )})
              }
            </tr>)
          })
        }
      </tbody>
    </table>
  )
}


export function Table2({dataSource, columns, props}) {
  return(
    <table {...props}>
      <caption>{props.hasOwnProperty("caption") ? props.caption : ""}</caption>
      <thead >
        <tr>
        {
          columns.map( (value) => {return(
            <th>{value.name}</th>
          )})
        }
        </tr>
      </thead>

      <tbody>
        {
          dataSource.map( (value) => { return(
            <tr>{
              columns.map((element) => {
                return(
                <td>{value[element.index]}</td>
                )})
              }
            </tr>)
          })
        }
      </tbody>
    </table>
  )
}

