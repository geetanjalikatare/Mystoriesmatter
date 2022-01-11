import axios from "axios";

export const LoginApi = (data) => {
  const headers = {
    "Content-Type": "application/json",
  };
   axios
    .post("https://mystoriesmatter.com/api/alumni/login", data, {
      headers: headers,
    })
    .then((res) => {
      localStorage.setItem("token",res.data.Response.UserAuthToken); 
    });
};

export const RecentPublishedApi = async (data) => {
  const headers = {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": localStorage.getItem("token"),  };
  return axios
    .post("https://mystoriesmatter.com/api/timeline/list", data, {
      headers: headers,
    })
    .then((res) => {
      return res.data.Details.data;
    })
    .catch((err) => {
      //throw an application exception
    });
};

export const GetComments = async (obj) => {
  const headers = {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": localStorage.getItem("token"),
  };
  return axios
    .post("https://mystoriesmatter.com/api/get/comments", obj, {
      headers: headers,
    })
    .then((res) => {
      return res.data.commentList.comments;
    })
    .catch((err) => {
      //throw an application exception
    });
};
export const handleLike = (data) => {
  const headers = {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": localStorage.getItem("token"),
  };
  return axios
    .post("https://mystoriesmatter.com/api/actions/like", data, {
      headers: headers,
    })
    .then((res) => {})
    .catch((err) => {});
};
export const handleUnLike = (data) => {
  const headers = {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": localStorage.getItem("token"),
  };
  return axios
    .post("https://mystoriesmatter.com/api/actions/unlike", data, {
      headers: headers,
    })
    .then((res) => {})
    .catch((err) => {});
};

export const AddComment = (obj) => {
  const headers = {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": localStorage.getItem("token"),
  };
  return axios
    .post("https://mystoriesmatter.com/api/actions/comment", obj, {
      headers: headers,
    })
    .then((res) => {})
    .catch((err) => {});
};
