import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import style from './Ad.module.scss';

export const Ad = (data) => {
  const [click, setClick] = useState(0);
  const [ad, setAd] = useState();

  const history = useHistory();

  useEffect(() => {
    data && setAd(data.data);
  }, [data]);

  const adClicked = () => {
    setClick(click + 1);
     ad && history.push(`notebooky/${ad.adId}`);
    };

  return (
    <>
      {ad && ad.photos && (
        <button className={style.ad} onClick={() => adClicked()}>
          <div className={style.container}>
            <img src={ad.photos.path} alt="Ad" className={style.img} />
          </div>
          <div className={style.title}>{ad.title}</div>
          <div className={style.text}>{ad.description}</div>
          <div className={style.price}>{ad.price} Kč</div>
        </button>
      )}
    </>
  );
};
