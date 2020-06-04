import axios from "axios";
import { ENPDPOINTS } from "./FormModal";
export const createDocHandler = async (values) => {
  try {
      const config = {
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*", // Required for CORS support to work
            "Access-Control-Allow-Credentials": false,
        }
    }
    const result = await axios.post(`${ENPDPOINTS.createDocFile}`, values, config);
    console.log("result", result);
    if (result) return result.data;
  } catch (error) {
      console.log("sadasdas",error)
    const { response = {} } = error
      if (response && response.data) {
        return { success: false, msg: 'Server error.', errors: response.data }
      }
      return { success: false, msg: 'Server error.' }
  }
};
