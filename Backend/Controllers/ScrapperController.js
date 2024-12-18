import axios from 'axios'


const Scrape=async()=>{
    const url='https://subsplease.org/shows/dandadan/'
    const {data}=await axios.get(url)



    console.log(test)
}

export default Scrape;