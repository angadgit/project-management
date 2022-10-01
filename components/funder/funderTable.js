import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { getFunder, getFunders } from "../../lib/helper";
import { useQuery } from 'react-query';
import { useSession } from "next-auth/react"
import { useSelector, useDispatch } from 'react-redux'
import { toggleChangeAction, updateAction } from "../../redux/reducer";

export default function FunderTable() {
  const { data: session } = useSession()

  const { isLoading, isError, data, error } = useQuery('funder', getFunders)
  if (isLoading) return <div>Funder is Loading...</div>;
  if (isError) return <div>Got Error {error}</div>
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Funder</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Contact Person</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Email</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Contact Number</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Pan Id</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        {
          data.filter(item => item.user === session.user.email).map((obj, i) => <Tr {...obj} key={i} />)
        }
      </tbody>
    </table>
  )
}

function Tr({_id, funderName, contactPerson, contactNumber, email, pan, funderType, funderCategory, addressLine1, addressLine2, country, state, pinCode, nationality, website }) {

  const visible = useSelector((state) => state.app.client.toggleForm)
  const dispatch = useDispatch()

  const onUpdate = () => {
    dispatch(toggleChangeAction())
    if(visible){
      dispatch(updateAction(_id))
  }
  }

  return (
    <tr className="bg-gray-50 text-center">
      <td className="px-16 py-2 flex flex-row items-center">
        {/* <img src="#" alt="" /> */}
        <span className="text-center ml-2 font-semibold">{funderName || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{contactPerson || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{email || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{contactNumber || "Unknown"}</span>
      </td>
      <td className="px-16 py-2">
        <span>{pan || "Unknown"}</span>
      </td>
      <td className="px-16 py-2 flex justify-around gap-5">
        <button className="cursor" onClick={onUpdate} ><BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit></button>
        <button className="cursor"><BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt></button>
      </td>
    </tr>
  )
}