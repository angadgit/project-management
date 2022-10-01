import { useReducer } from "react"
import { BiBrush } from 'react-icons/bi'
import Success from "../success"
import Bug from "../bug"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getUser, getUsers, updateUser } from "../../lib/helper"

export default function FunderUpdateForm({ formId, formData, setFormData }) {

  const queryClient = useQueryClient()
  const { isLoading, isError, data, error } = useQuery(['users', formId], () => getUser(formId))
  const UpdateMutation = useMutation((newData) => updateUser(formId, newData), {
    onSuccess: async (data) => {
      queryClient.prefetchQuery('users', getUsers)
    }
  })

  if (isLoading) return <div>Loading...!</div>
  if (isError) return <div>Error</div>

  const { funderName, contactPerson, contactNumber, email, pan, funderType, funderCategory, addressLine1, addressLine2, country, state, pinCode, nationality, website, } = data;
  const [firstname, lastname] = funderName ? funderName.split(' ') : formData

  const handleSubmit = async (e) => {
    e.preventDefault();
    let userName = `${formData.firstname ?? firstname} ${formData.lastname ?? lastname}`;
    let updated = Object.assign({}, data, formData, { funderName: userName })
    UpdateMutation.mutate(updated)    
  }

  if (UpdateMutation.isLoading) return <div>Loading!</div>
  if (UpdateMutation.isError) return <Bug message={addMutation.error.message}></Bug>
  if (UpdateMutation.isSuccess) return <Success message={"Updated Successfully"}></Success>


  return (
    <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 w-4/6 gap-4">
      <div className="input-type">
        <input type="text" name="firstname" onChange={setFormData} defaultValue={firstname} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="FirstName" />
      </div>
      <div className="input-type">
        <input type="text" name="lastname" onChange={setFormData} defaultValue={lastname} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="LastName" />
      </div>
      <div className="input-type">
        <input type="text" name="contactPerson" onChange={setFormData} defaultValue={contactPerson} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Contact Person" />
      </div>
      <div className="input-type">
        <input type="number" name="contactNumber" onChange={setFormData} defaultValue={contactNumber} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Contact No." />
      </div>
      <div className="input-type">
        <input type="email" name="email" onChange={setFormData} defaultValue={email} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email" />
      </div>
      <div className="input-type">
        <input type="text" name="pan" onChange={setFormData} defaultValue={pan} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="PAN" />
      </div>

      <div className="flex gap-2 items-center">
        <div className="input-type w-full">
          <select id="funderType" name="funderType" onChange={setFormData} defaultValue={funderType} className="border w-full px-5 py-3 focus:outline-none rounded-md">
            <option value="DEFAULT" disabled>Choose a Funter Type</option>
            <option value="CSR">CSR</option>
            <option value="Foundation">Foundation</option>
            <option value="Individual">Individual</option>
            <option value="Corporate Donation">Corporate Donation</option>
          </select>
        </div>
        <div className="input-type w-full">
          <select id="funderCategory" name="funderCategory" onChange={setFormData} defaultValue={funderCategory} className="border w-full px-5 py-3 focus:outline-none rounded-md">
            <option value="DEFAULT" disabled>Choose a Funter Category</option>
            <option value="Domestic">Domestic</option>
            <option value="FCRA">FCRA</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div className="input-type w-full">
          <input type="text" name="addressLine1" onChange={setFormData} defaultValue={addressLine1} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Address Line 1" />
        </div>
        <div className="input-type w-full">
          <input type="text" name="addressLine2" onChange={setFormData} defaultValue={addressLine2} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Address Line 2" />
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div className="input-type w-full">
          <input type="text" name="country" onChange={setFormData} defaultValue={country} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Country" />
        </div>
        <div className="input-type w-full">
          <input type="text" name="state" onChange={setFormData} defaultValue={state} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="State" />
        </div>
        <div className="input-type w-full">
          <input type="number" name="pinCode" onChange={setFormData} defaultValue={pinCode} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Zip Code" />
        </div>
      </div>


      <div className="flex gap-2 items-center">
        <div className="input-type">
          <input type="text" name="nationality" onChange={setFormData} defaultValue={nationality} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Nationality" />
        </div>
        <div className="input-type">
          <input type="text" name="website" onChange={setFormData} defaultValue={website} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Website" />
        </div>
      </div>

      <button className="flex justify-center text-md w-2/6 bg-yellow-500 text-white px-4 py-3 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Update <span className="px-1"><BiBrush size={24}></BiBrush></span></button>

    </form>
  )
}