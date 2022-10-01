import { useReducer, useState } from "react"
import { useSession } from "next-auth/react"
import { useQueryClient, useMutation } from "react-query"
import { addFunder, getFunders } from "../../lib/helper"
import Bug from "../bug"
import Success from "../success"

const funderAddFormReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value
  }
}

export default function FunderAddForm() {
  const { data: session } = useSession()
  const [formData, setFormData] = useReducer(funderAddFormReducer, {})
  // const [user, setUser] = useState(session.user.email)

  const queryClient = useQueryClient()

  const addMutation = useMutation(addFunder, {
    onSuccess: () => {
      queryClient.prefetchQuery('funders', getFunders)
    }
  })

  // const user = session.user.email;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    if (Object.keys(formData).length == 0) return console.log("Don't have Form Data");
    let { firstname, lastname, contactPerson, contactNumber, email, pan, funderType, funderCategory, addressLine1, addressLine2, country, state, pinCode, nationality, website } = formData;

    const model = {
      user: `${session.user.email}`,
      funderName: `${firstname} ${lastname}`,
      contactPerson, contactNumber, email, pan, funderType, funderCategory, addressLine1, addressLine2, country, state, pinCode, nationality, website
    }
    console.log(model)
    addMutation.mutate(model)
  }
  if (addMutation.isLoading) return <div>Loading!</div>
  if (addMutation.isError) return <Bug message={addMutation.error.message}></Bug>
  if (addMutation.isSuccess) return <Success message={"Added Successfully"}></Success>

  return (
    <form onSubmit={handleSubmit} className="grid lg:grid-cols-2 w-4/6 gap-4">
      <div className="input-type">
        <input type="text" name="firstname" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="FirstName" />
      </div>
      <div className="input-type">
        <input type="text" name="lastname" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="LastName" />
      </div>
      <div className="input-type">
        <input type="text" name="contactPerson" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Contact Person" />
      </div>
      <div className="input-type">
        <input type="number" name="contactNumber" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Contact No." />
      </div>
      <div className="input-type">
        <input type="email" name="email" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email" />
      </div>
      <div className="input-type">
        <input type="text" name="pan" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="PAN" />
      </div>

      <div className="flex gap-2 items-center">
        <div className="input-type w-full">
          <select id="funderType" name="funderType" onChange={setFormData} defaultValue={'DEFAULT'} className="border w-full px-5 py-3 focus:outline-none rounded-md">
            <option value="DEFAULT" disabled>Choose a Funter Type</option>
            <option value="CSR">CSR</option>
            <option value="Foundation">Foundation</option>
            <option value="Individual">Individual</option>
            <option value="Corporate Donation">Corporate Donation</option>
          </select>
        </div>
        <div className="input-type w-full">
          <select id="funderCategory" name="funderCategory" onChange={setFormData} defaultValue={'DEFAULT'} className="border w-full px-5 py-3 focus:outline-none rounded-md">
            <option value="DEFAULT" disabled>Choose a Funter Category</option>
            <option value="Domestic">Domestic</option>
            <option value="FCRA">FCRA</option>
          </select>
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div className="input-type w-full">
          <input type="text" name="addressLine1" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Address Line 1" />
        </div>
        <div className="input-type w-full">
          <input type="text" name="addressLine2" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Address Line 2" />
        </div>
      </div>

      <div className="flex gap-2 items-center">
        <div className="input-type w-full">
          <input type="text" name="country" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Country" />
        </div>
        <div className="input-type w-full">
          <input type="text" name="state" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="State" />
        </div>
        <div className="input-type w-full">
          <input type="number" name="pinCode" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Zip Code" />
        </div>
      </div>


      <div className="flex gap-2 items-center">
        <div className="input-type">
          <input type="text" name="nationality" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Nationality" />
        </div>
        <div className="input-type">
          <input type="text" name="website" onChange={setFormData} className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Website" />
        </div>
      </div>

      <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-3 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Add</button>

    </form>
  )
}