// src/api/fetchData.js
import axios from 'axios';

const BASE_URL = 'https://test.create.diagnal.com/';

export const fetchData = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}data/page${page}.json`);
    const data = response.data.page;
    return {
      totalContentItems: parseInt(data['total-content-items'], 10),
      contentItems: data['content-items']
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return { totalContentItems: 0, contentItems: { content: [] } };
  }
};
