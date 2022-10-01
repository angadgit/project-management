export default function CompanyProfileAddForm() {
  return (
    <form className="grid lg:grid-cols-2 w-4/5 gap-4">
      <div className="input-type">
        <input type="text" name="name" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Name" />
      </div>
      <div className="input-type">
        <input type="email" name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email" />
      </div>
      <div className="input-type">
        <input type="text" name="pan" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="PAN" />
      </div>
      
      <div className="flex gap-4 items-center">
        <div className="input-type w-full">
          <input type="number" name="officeNo" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Landline No." />
        </div>
        <div className="input-type w-full">
          <input type="number" name="mobileNo" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Mobile No." />
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="input-type w-full">
          <input type="text" name="addressLine1" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Address Line 1" />
        </div>
        <div className="input-type w-full">
          <input type="text" name="addressLine2" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Address Line 2" />
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="input-type w-full">
          <input type="text" name="country" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Country" />
        </div>
        <div className="input-type w-full">
          <input type="text" name="state" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="State" />
        </div>
        <div className="input-type w-full">
          <input type="number" name="pinCode" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Zip Code" />
        </div>
      </div>
      <div className="input-type">
        <input type="text" name="twelveA" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="12A" />
      </div>
      <div className="input-type">
        <input type="text" name="eightyG" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="80G" />
      </div>
      <div className="input-type">
        <select id="organizationType" name="organizationType" class="border w-full px-5 py-3 focus:outline-none rounded-md">
          <option selected>Choose Organization Type</option>
          <option value="Company">Company</option>
          <option value="Trust">Trust</option>
          <option value="Association">Association</option>
        </select>
      </div>
      <div className="input-type">
        <input type="text" name="organizationRegistrationNo" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Organization Registration No" />
      </div>

      <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-3 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Add</button>

    </form>
  )
}