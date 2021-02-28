
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

