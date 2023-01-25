import axios from 'axios';

axios.defaults.baseURL = 'https://63a5bdb7318b23efa79c4cd8.mockapi.io';

export const addMaterial = async values => {
  const response = await axios.post('/materials', values);
  return response.data;
};

export const getMaterials = async values => {
  const response = await axios.get('/materials', values);
  return response.data;
};

export const deleteMaterials = async id => {
  const response = await axios.delete(`/materials/${id}`);
  return response.data;
};

export const updateMaterials = async fields => {
  const response = await axios.put(`/materials/${fields.id}`, fields);
  return response.data;
};

// export const deleteMaterials = async values => {
//   const response = await axios.delete('/materials', values);
//   return response.data;
// };
