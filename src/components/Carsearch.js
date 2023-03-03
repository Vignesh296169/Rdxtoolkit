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
    <div className="p-2 flex justify-end space-x-2"  >
      <h3 className="text-xl text-indigo-500">Search Name</h3>
    <input className="border " placeholder="Search Car" type="type" value={response} onChange={changehandler}/>    
 
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