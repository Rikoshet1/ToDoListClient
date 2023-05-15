import axios from 'axios';

//const apiUrl = "http://localhost:5017"
const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

apiClient.interceptors.response.use(
  response => response,
  error => {
    console.error(error);
    return Promise.reject(error);
  }
);
export default {
  getTasks: async () => {
    const result = await apiClient.get('/items')    
    return result.data;
  },

  addTask: async(name)=>{
    console.log('addTask', name)
    //TODO
    await apiClient.post(`/items`,{name:name,isComplete:false})
    return {};
  },

  setCompleted: async(id, isComplete)=>{
    console.log('setCompleted', {id, isComplete})
    //TODO
    await apiClient.put(`/items/${id}`,isComplete)
    return {};
  },

  deleteTask:async(id)=>{
    console.log('deleteTask')
    await apiClient.delete(`/items/${id}`)
  }
};
