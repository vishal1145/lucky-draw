// const axios = require('axios');
// export default {
//   install(Vue) {
//     let app = new Vue({
//       data() {
//         return {
//           apiUrl: 'https://lucky-draw.algofolks.com/api/'



//         };
//       },
//       methods: {
//         getAppendedUrl(url) {
//           return `${this.apiUrl + url}`;
//         },
//         getRazorpayKey() {
//           return '';
//           // return 'rzp_test_BYpIyxYW1x6yWX' ;

//         },
//         async getCall(url) {
//           try {
//             const apidata = await axios.get(`${this.apiUrl + url}`, {
//               headers: {
//                 accesstoken: localStorage.accesstoken,
//               }
//             });
//             return { isError: false, apidata: apidata.data }
//           } catch (error) {
//             return { isError: true, error }
//           }
//         },
//         async putCall(url, data) {
//           try {
//             const apidata = await axios.put(`${this.apiUrl + url}`, data, {
//               headers: {
//                 accesstoken: localStorage.accesstoken,
//               }
//             });
//             return { isError: false, apidata: apidata.data }
//           } catch (error) {
//             return { isError: true, error }
//           }
//         },

//         async deleteCall(url, data) {
//           try {
//             const apidata = await axios.delete(`${this.apiUrl + url}`, {
//               headers: {
//                 accesstoken: localStorage.accesstoken,
//               },
//               data: data // Pass data here
//             });
//             return { isError: false, apidata: apidata.data };
//           } catch (error) {
//             return { isError: true, error };
//           }
//         },

//         async postCall(url, data) {
//           try {
//             const apidata = await axios.post(`${this.apiUrl + url}`, data, {
//               headers: {
//                 accesstoken: localStorage.accesstoken,
//               }
//             });
//             return { isError: false, apidata: apidata.data }
//           } catch (error) {
//             return { isError: true, error }
//           }
//         },
//         async postFileCall(url, formData) {
//           try {
//             const apidata = await axios.post(`${this.apiUrl + url}`, formData, {
//               headers: {
//                 accesstoken: localStorage.accesstoken,
//                 "Content-Type": "multipart/form-data",
//               }
//             });
//             return { isError: false, apidata: apidata.data }
//           } catch (error) {
//             return { isError: true, error }
//           }
//         }
//       }
//     });
//     Vue.prototype.$apiService = app;
//   }
// };

import axios from 'axios';

const BASE_URL = 'https://lucky-draw.algofolks.com/api/';

class ApiService {
  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  async postCall(endpoint, data) {
    try {
      const response = await this.axios.post(endpoint, data);
      return response.data;
    }  catch (error) {
            return { isError: true, error }
          }
  }

  async getCall(endpoint) {
    try {
      const response = await this.axios.get(endpoint);
      return response.data;
    } catch (error) {
      return { isError: true, error };
    }
  }

    async postFileCall(endpoint, data) {
    try {
      // Convert data to FormData
      const formData = new FormData();
      
      // Append each field to FormData
      Object.keys(data).forEach(key => {
        // Handle file objects specially
        if (data[key] instanceof File) {
          formData.append(key, data[key], data[key].name);
        } else {
          formData.append(key, data[key]);
        }
      });

      const response = await this.axios.post(endpoint, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      
      return response.data;
    } catch (error) {
      return { isError: true, error };
    }
  }
}

export default new ApiService();