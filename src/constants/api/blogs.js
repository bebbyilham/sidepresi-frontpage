import axios from "src/configs/axios";
export default {
  all: () => axios.get(`/blogs`).then((res) => res.data),
  details: (id) => axios.get(`/blogs/${id}`).then((res) => res.data),
};
