import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";


const postQuery = async (data) => {
  const response = await axios.post(`${base_url}enquiry/new`, data);
  if (response.data) {
    return response.data;
  }
};

const contactService = {
  postQuery,
};

export default contactService;
