import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID 86ccojJlngo9OEKNajtKegeU1xYAaL_VybP_eDAU-vk",
  },
});
