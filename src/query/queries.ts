import axios from "axios";

export const request = async (locale: any, direction: any) => {
  const query = await axios({
    method: 'get',
    url: `https://quanto-servicing.herokuapp.com/${locale}/api/${direction}`,
  });
  return query.data;
};


export const postRequest = async (locale: any, direction: any, data: any) => {
  const query = await axios({
    method: 'post',
    url: `https://quanto-servicing.herokuapp.com/${locale}/api/${direction}`,
    data,
  });
  return query;
}