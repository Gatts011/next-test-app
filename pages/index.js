import Link from "next/link";
import Axios from "axios";

import Layout from "../components/layout";
import Prices from "../components/prices";

const Index = (props) => (
  <div>
    <Layout title="home" />
    <div className="container">
      <h1>HOME</h1>
    <Prices bpi={props.bpi}/>
    {/* {props.bpi.time.updated} */}
    </div>
  </div>
);

Index.getInitialProps = 
  
  async function() {
    // fetch('https://api.tvmaze.com/search/shows?q=batman')
    // const data = await res.json()
  const res = await Axios.get('http://api.coindesk.com/v1/bpi/currentprice.json')
  const data = await res.data

  console.log(data)

  return {
    bpi: data
  }
}


export default Index;


// http://api.coindesk.com/v1/bpi/currentprice.json