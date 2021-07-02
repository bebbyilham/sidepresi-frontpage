import axios from "src/configs/axios";
export default {
  all: (options = { params: { status: "publish" } }) =>
    axios.get(`/blogs`, options).then((res) => res.data),
  details: (id) => axios.get(`/blogs/${id}`).then((res) => res.data),
};
