/** Controller */
import Funder from '../model/funderSchema'

// get : http://localhost:3000/api/funderApi
export async function getFunder(req, res) {
  try {
    const funder = await Funder.find({})

    if (!funder) return res.status(404).json({ error: "Data not Found" })
    res.status(200).json(funder)
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" })
  }
}

// get : http://localhost:3000/api/funderApi/1
export async function getFunders(req, res) {
  try {
    const { formId } = req.query;

    if (formId) {
      const funder = await Funder.findById(formId);
      res.status(200).json(funder)
    }
    res.status(404).json({ error: "Funder not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the User...!" })
  }
}

// post : http://localhost:3000/api/funderApi
export async function postFunder(req, res) {
  try {
    // if (!formData) return res.status(404).json({ error: "Form Data Not Provided...!" });
    const b = new Funder(req.body)
    await b.save()
    console.log(b)
    res.status(200).json({ status: 201 })
  } catch (error) {
    return res.status(404).json({ error })
  }
}

// put : http://localhost:3000/api/funderApi/1
export async function putFunder(req, res) {
  try {
    const { funderId } = req.query;
    const formData = req.body;

    if (funderId && formData) {
      const funder = await Funder.findByIdAndUpdate(funderId, formData);
      res.status(200).json(funder)
    }
    res.status(404).json({ error: "Funder Not Selected...!" })
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data...!" })
  }
}

// delete : http://localhost:3000/api/funderApi/1
export async function deleteFunder(req, res) {
  try {
    const { funderId } = req.query;

    if (funderId) {
      const funder = await Funder.findByIdAndDelete(funderId)
      return res.status(200).json(funder)
    }

    res.status(404).json({ error: "Funder Not Selected...!" })

  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the Funder...!" })
  }
}