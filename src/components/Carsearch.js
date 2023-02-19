import { useDispatch ,useSelector} from "react-redux"
import { changesearch } from "../store"
function Carsearch() {
  const dispatch=useDispatch()
  const changehandler=(e)=>{
    dispatch(changesearch(e.target.value))
  }
  const response=useSelector((state)=>{
      return state.cars.search
  })
  
  return (
    <div>
    <input type="type" value={response} onChange={changehandler}/>    
 
    </div>
  )
}

export default Carsearch
// const[time,setitme]=useState(null)
// useEffect(()=>{
//  setInterval(()=>{
//     setitme(new Date().toLocaleTimeString())
//  },1000)

//    console.log("hi0");
// },[])