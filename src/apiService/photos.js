import axios from "axios";

// const instance = axios.create({
//   baseURL: "https://api.unsplash.com/",
// });

// const ACCESS_KEY = 'vfj441z4cBNfYnSEM9lXC0hnAOt-HsGyPNOewAW596g';
// export const getImages = async (query, page) => {
//   const { data } = await instance.get(`search/photos/?client_id=${ACCESS_KEY}&per_page=12&query=${query}&page=${page}`)
//   return data;
// };


// const ACCESS_KEY = 'vfj441z4cBNfYnSEM9lXC0hnAOt-HsGyPNOewAW596g';
// axios.defaults.baseURL = "https://api.unsplash.com/";
// axios.defaults.headers.common['Authorization'] = `Client-ID ${ACCESS_KEY}`;

// export const getImages = async (query, page) => {
//   const { data } = await axios.get('search/photos', {
//     params: {
//       query,
//       page
//     }
//   });
    
//   return data;
// };


const ACCESS_KEY = 'vfj441z4cBNfYnSEM9lXC0hnAOt-HsGyPNOewAW596g';
axios.defaults.baseURL = "https://api.unsplash.com/";

export const getImages = async (query, page) => {
  const { data } = await axios.get('search/photos', {
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
    },
    params: {
      query,
      page,
      per_page: 15,
      orientation: "landscape",
    }
  });
    
  return data;
};
