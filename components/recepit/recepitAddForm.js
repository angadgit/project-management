export default function ReceiptAddForm() {
  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4">
      <div className="input-type">
        <select id="funder" name="funder" class="border w-full px-5 py-3 focus:outline-none rounded-md">
          <option selected>Choose a Funter</option>
          <option value="">Add More</option>
        </select>
      </div>
      <div className="input-type">
        <input type="text" name="fullName" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Full Name" />
      </div>
      <div className="input-type">
        <input type="text" name="contactPerson" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Contact Person" />
      </div>
      <div className="input-type">
        <input type="number" name="contactNumber" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Contact No." />
      </div>
      <div className="input-type">
        <input type="email" name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email" />
      </div>
      <div className="input-type">
        <input type="text" name="pan" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="PAN" />
      </div>

      <div className="flex gap-2 items-center">
        <div className="input-type w-full">
          <input type="text" name="addressLine1" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Address Line 1" />
        </div>
        <div className="input-type w-full">
          <input type="text" name="addressLine2" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Address Line 2" />
        </div>
      </div>

      <div className="flex gap-2 items-center">
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


      <div className="flex gap-2 items-center">
        <div className="input-type w-full">
          <select id="funderType" name="funderType" class="border w-full px-5 py-3 focus:outline-none rounded-md">
            <option selected>Choose a Funter Type</option>
            <option value="Cash">Cash</option>
            <option value="Bank">Bank</option>
            <option value="Cheque">Cheque</option>
            <option value="UPI">UPI</option>
          </select>
        </div>
        <div className="input-type w-full">
          <input type="number" name="receiptAmount" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Receipt Amount" />
        </div>
      </div>

      <div className="flex gap-4 items-center">
        <div className="input-type w-full">
          <select id="typeFund" name="typeFund" class="border w-full px-5 py-3 focus:outline-none rounded-md">
            <option selected>Choose Type of Fund</option>
            <option value="">Add More</option>
          </select>
        </div>
        <div className="input-type w-full">
          <input type="text" name="depression" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Depression" />
        </div>
      </div>

      <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-3 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Add</button>

    </form>
  )
}