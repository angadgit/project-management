
/** Controller */
import Users from '../model/funderSchema'

// get : http://localhost:3000/api/users
export async function getUsers(req, res) {
  try {
    const users = await Users.find({})

    if (!users) return res.status(404).json({ error: "Data not Found" })
    res.status(200).json(users)
  } catch (error) {
    res.status(404).json({ error: "Error While Fetching Data" })
  }
}

// get : http://localhost:3000/api/users/1
export async function getUser(req, res) {
  try {
    const userId = req.query;
    let id = userId.formId
    // console.log(id.formId)
    if (id) {
      const user = await Users.findById(id);
      res.status(200).json(user)
    }
    res.status(404).json({ error: "funder not Selected...!" });
  } catch (error) {
    res.status(404).json({ error: "Cannot get the User...!" })
  }
}

// post : http://localhost:3000/api/users
export async function postUser(req, res) {
  try {
    const formData = req.body;
    if (!formData) return res.status(404).json({ error: "Form Data Not Provided...!" });
    Users.create(formData, function (err, data) {
      return res.status(200).json(data)
    })
  } catch (error) {
    return res.status(404).json({ error })
  }
}

// put : http://localhost:3000/api/funderApi/1
export async function putUser(req, res) {
  try {
    const userId = req.query;
    let id = userId.formId
    const formData = req.body;

    if (id && formData) {
      const user = await Users.findByIdAndUpdate(id, formData);
      res.status(200).json(user)
    }
    res.status(404).json({ error: "Funder Not Selected...!" })
  } catch (error) {
    res.status(404).json({ error: "Error While Updating the Data...!" })
  }
}

// delete : http://localhost:3000/api/users/1
export async function deleteUser(req, res) {
  try {
    const userId = req.query;
    let id = userId.formId
    console.log(id)

    if (id) {
      const user = await Users.findByIdAndDelete(id)
      return res.status(200).json(user)
    }

    res.status(404).json({ error: "Funder Not Selected...!" })

  } catch (error) {
    res.status(404).json({ error: "Error While Deleting the User...!" })
  }
}