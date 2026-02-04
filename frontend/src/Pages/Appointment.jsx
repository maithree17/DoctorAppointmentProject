import React, { useContext ,useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../Context/AppContext'
import { assets } from '../assets/assets'

function Appointment() {

  const {docId} =useParams()
  const {doctors} =useContext(AppContext)

  const [Doctorinformation,setDoctorinformation]=useState(null)

  const Fetchdocinfo = () =>{
    const docinfo=doctors.find((doc)=>doc._id===docId)
    setDoctorinformation(docinfo)
    console.log(docinfo)
  }

  useEffect(()=>{
    Fetchdocinfo()
  },[doctors,docId])

  return Doctorinformation && (
    <div>
      {/*-----Doctor Details-----*/}
      <div>
        <div>
          <img src={Doctorinformation.image} alt="doc image" />
        </div>

        <div>
          {/*----Doc info----*/}
          <p>{Doctorinformation.name}
            <img src={assets.verified_icon} alt="verified" />
          </p>
          <div>
            <p>{Doctorinformation.degree}-{Doctorinformation.speciality}</p>
            <button>{Doctorinformation.experience}</button>
          </div>

          {/*----About doc----*/}
          <div>
            <p>About
              <img src={assets.info_icon} alt="info" />
              <p>{Doctorinformation.about}</p>
            </p>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Appointment