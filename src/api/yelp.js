import axios from "axios";
export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer YAZSR4uRh9MY7OYHvs8z3yeiMLAW6MFzecQaemmfrSmkKfXa5zTzcegK_zIZ8gqmcW1KathAyaQTYOvVno8NibsZzulHrQHbNwrourmQ5UqZCYPfFRe3Ixf26oxVYHYx",
  },
});
