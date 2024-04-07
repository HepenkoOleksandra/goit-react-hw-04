import axios from "axios";

// ========= 1 variant ========================================
const ACCESS_KEY = 'vfj441z4cBNfYnSEM9lXC0hnAOt-HsGyPNOewAW596g';
const instance = axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
    params: {
    per_page: 15,
    orientation: "landscape",
  }
});

export const getImages = async (query, page) => {
  const {data} = await instance.get('search/photos', {
    params: {
      query,
      page,
    }
  })

  return data;
};

// ============= 2 variant ===========================================
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

// ================ 3 variant ===============================================================
// const ACCESS_KEY = 'vfj441z4cBNfYnSEM9lXC0hnAOt-HsGyPNOewAW596g';
// axios.defaults.baseURL = "https://api.unsplash.com/";

// export const getImages = async (query, page) => {
//   const { data } = await axios.get('search/photos', {
//     headers: {
//       Authorization: `Client-ID ${ACCESS_KEY}`,
//     },
//     params: {
//       query,
//       page,
//       per_page: 15,
//       orientation: "landscape",
//     }
//   });
    
//   return data;
// };
