import axios from "axios"
import { useState } from "react"
const Trace = () => {
    const [video,setVideo]=useState<null |string>()
    const getvideo=async()=>{
        const res=await axios.get("http://localhost:8000/api/v1/play",{
            responseType:'blob',
        })
        const videoUrl=URL.createObjectURL(res.data);
        setVideo(videoUrl);
    }
  return (
    <div>
      <button onClick={getvideo}>get</button>
      {
        video?(
            <video controls>
                <source src={video} type="video/mp4"/>
            </video>
        ):(
            <p>laoding ...</p>
        )
      }
    </div>
  )
}

export default Trace
