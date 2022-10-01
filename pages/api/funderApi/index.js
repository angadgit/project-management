import connectMongo from "../../../database/conn"
import { deleteFunder, getFunder, postFunder, putFunder } from "../../../database/controller";


export default async function handler(req, res) {
  connectMongo().catch(()=>res.status(405).json({error: 'Error in the Connection'}))

  // type of request 
  const { method } = req

  switch (method) {
    case 'GET':
      getFunder(req, res);
      break;
    case 'POST':
      postFunder(req, res);
      break;
    case 'PUT':
      putFunder(req, res);
      break;
    case 'DELETE':
      deleteFunder(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`Method ${method} Not Allowd`)
      break;
  }
}