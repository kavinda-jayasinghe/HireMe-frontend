import axios from "axios"

//search





//get after click view
export const getServiceDetails = async (idx) => {
  try {
    const res = await axios.get(

      `http://localhost:8080/api/v1/add/service?id=`+idx
    );
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};