import { URL } from '../../config';

export const GetAdById = async (id) => {
  const data = await fetch(`${URL}/ad/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
};
