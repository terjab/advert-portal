import React from 'react';
import { URL } from '../../config';

export const CreateAd = async (ad) => {
  const res = await fetch(`${URL}/ad`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ad),
  });

  return res;
};
