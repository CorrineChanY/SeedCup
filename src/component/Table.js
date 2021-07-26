
/**
 * 创建一个 table 标签
 * @param {object[]} dataSource 数据
 * @param {object[]} columns    列项
 * @param {object} props        剩余属性项
 * @param {string} caption      标题
 * @returns {HTMLTableElement}
 */
export function Table({dataSource, columns, props, caption}) {
  return(
    <table {...props}>
      <caption>{caption}</caption>
      <thead >
        <tr>
        {
          columns.map( (value, index) => {return(
            <th key={index}>{value.name}</th>
          )})
        }
        </tr>
      </thead>

      <tbody>
        {
          dataSource.map( (value, index) => { return(
            <tr key={index}>{
              columns.map((element) => {
                return(
                <td key={element.index}>{value[element.index]}</td>
                )})
              }
            </tr>)
          })
        }
      </tbody>
    </table>
  )
}

