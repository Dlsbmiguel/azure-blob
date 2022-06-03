import axios from "axios";
export default axios.create({
  baseURL: "https://azure-blob-api.azure-api.net/api/",
});
