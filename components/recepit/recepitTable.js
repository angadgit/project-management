import { BiEdit, BiTrashAlt, BiShow } from "react-icons/bi";
export default function RecepitTable() {
  return (
    <table className="min-w-full table-auto">
      <thead>
        <tr className="bg-gray-800">
          <th className="px-16 py-2">
            <span className="text-gray-200">Funder</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Name</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Pan Id</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Address</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">ReceiptAmount</span>
          </th>
          <th className="px-16 py-2">
            <span className="text-gray-200">Actions</span>
          </th>
        </tr>
      </thead>
      <tbody className="bg-gray-200">
        <tr className="bg-gray-50 text-center">
          <td className="px-16 py-2 flex flex-row items-center">
            {/* <img src="#" alt="" /> */}
            <span className="text-center ml-2 font-semibold">ABC</span>
          </td>
          <td className="px-16 py-2">
            <span>angad gupta</span>
          </td>
          <td className="px-16 py-2">
            <span>ABCPD1235Y</span>
          </td>
          <td className="px-16 py-2">
            <span>XYZ new delhi - 110080</span>
          </td>
          <td className="px-16 py-2">
            <span>5000</span>
          </td>
          <td className="px-16 py-2 flex justify-around gap-5">
            <button className="cursor"><BiShow size={25} color={"rgb(0,0,255)"}></BiShow></button>
            <button className="cursor"><BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit></button>
            <button className="cursor"><BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt></button>
          </td>
        </tr>
      </tbody>
    </table>
  )
}