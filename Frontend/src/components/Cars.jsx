import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCars } from "../redux/actions/adminActions"
import CarList from "./CartList"

export default function CarsAdmin() {
  const state  = useSelector( (state) => state.admin)
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(getCars())
  },[dispatch])


  return (
    <div className="text-gray-700 text-lg font-semibold">
      <CarList cars={state.cars} />
    </div>
  )
}
