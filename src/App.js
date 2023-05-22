import React , {useState} from "react";
import data from "./data";
import Form from "./components/Form";
import List from "./components/List";

function App() {

  const [paragraph, SetParagraph] = useState([]);

  const generate=(count)=>
  {
    let amonut=parseInt(count);
    if(amonut <= 0)
    {
      amonut = 1;
    }
    if(amonut > 8)
    {
      amonut = 8;
    }
      SetParagraph(data.slice(0,amonut));
  }

  return (
    <section>
      <h2>TIRED OF BORING LOREM IPSUM?</h2>
      <Form generate={generate}/>
      <article>
        {paragraph.map((item,index)=>{
          return <List key={index} item={item} />
        })}
      </article>
    </section>
  );
}

export default App;
