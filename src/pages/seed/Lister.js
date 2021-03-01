/**
 * 排行榜
 * @file Lister.js
 * @author 
 * @copyright 
 * @createDate
 */


import {Table} from "../../../src/component/Table"
import { useState, useEffect } from 'react'
import { API } from '../../misc/interface'


//我想在前面一列加上排名，可是好像无法修改，不知道怎么办
function Lister(){
  const [data1, setData1] = useState({ sheetData:[], sheetInfo:[] });
  const [data2, setData2] = useState({ sheetData:[], sheetInfo:[] });
  const [data3, setData3] = useState({ sheetData:[], sheetInfo:[] });
  // const [data, setData] = useState([]);
  // const [info, setInfo] = useState([]);
  
  useEffect(() => {
      ;(async function(){
        const res1 = await API.getRank({gameStatus: 1});
        setData1(res1.data.data);
        const res2 = await API.getRank({gameStatus: 2});
        setData2(res2.data.data);
        const res3 = await API.getRank({gameStatus: 3});
        setData3(res3.data.data);
        // res.data.data.sheetData.unshift({"name": "Ranking", "index":"rank", "type":"Integer"});
        // setData(res.data.data.sheetData);
        // setInfo(res.data.data.sheetInfo.map( (item, index) => {
        //   item.rank=index+1;
        // }));
      })();
  }, []);

  return (
    <>
      <Table
            dataSource={data1.sheetData}//data.sheetData
            columns={data1.sheetInfo}
            props={{className: "striped", style: {color:"black", marginTop: "50px", marginLeft:"5%", marginBottom:"5%", width:"90%"} }}
            caption="初赛"
        />
      <Table
            dataSource={data2.sheetData}//data.sheetData
            columns={data2.sheetInfo}
            props={{className: "striped", style: {color:"black", marginTop: "50px", marginLeft:"5%", marginBottom:"5%", width:"90%"} }}
            caption="复赛"
      />
      <Table
            dataSource={data3.sheetData}//data.sheetData
            columns={data3.sheetInfo}
            props={{className: "striped", style: {color:"black", marginTop: "50px", marginLeft:"5%", marginBottom:"5%", width:"90%"} }}
            caption="决赛"
      />
    </>
  );
}

export default Lister;