import React from "react";

/**
 * 创建一个 table 标签
 * @param {object[]} dataSource 数据
 * @param {object[]} columns    列项
 * @param {object} props        剩余属性项
 * @returns {HTMLTableElement}
 */
export function Table(dataSource, columns, props) {
    var table = React.createElement("table");
    
    if(props.hasOwnProperty("caption")){
        let cap = React.createElement("caption");
        cap.innerHTML = props["caption"];
        table.appendChild(cap);
    }

    let thd = React.createElement("thead");
    let row = React.createElement("tr");
    for (let j=0; j < columns.length; j++) { // 表头列项
        let thead = React.createElement("th");
        thead.innerHTML = columns[j].name;
        row.appendChild(thead);
    }
    thd.appendChild(row);
    table.appendChild(thd);

    let tb = React.createElement("tbody");
    for (let i = 0; i < dataSource.length; i++) { // TBODY数据项
        let tr = React.createElement("tr");
        for (let j = 0; j < columns.length; j++) {
            let cell = React.createElement("td");
            cell.innerHTML = dataSource[i][columns[j].dataIndex]; // 第i行的第j列
            tr.appendChild(cell);
        }
        tb.appendChild(tr);
    }
    table.appendChild(tb);
    
    for (var key in props) {
        if(key != "caption"){
            table.setAttribute(key, props[key]);
        }
    }
    return table;
}
