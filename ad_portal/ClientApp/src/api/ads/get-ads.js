import { URL } from '../../config';

export const GetAllAds = async () => {
  const data = await fetch(`${URL}/ad`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return data;
};
