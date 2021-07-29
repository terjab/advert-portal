import React, { useEffect, useState } from 'react';

import { classes } from '../services/utils';

import style from '../styles/pages/Homepage.module.scss';

import { Topbar } from '../components/Layout/Topbar/Topbar';
import { Box } from '../components/UI/Box/Box';
import { LaptopIcon } from '../components/UI/Icons/Icons';
import { Ad } from '../components/Ad/Ad';
import { GetAllAds } from '../api/ads/get-ads';

// const img = 'https://picsum.photos/260/200';

export const Homepage = () => {
  const [ads, setAds] = useState();

  useEffect(() => {
    const getApi = async () => {
      let res = await GetAllAds();
      res = await res.json();
      setAds(res);
    };
    getApi();
  }, []);

  const handleSearch = (searchValue) => {
    const data = ads.filter(ad => (ad.title.toLowerCase()).includes(searchValue.toLowerCase()) || (ad.description.toLowerCase()).includes(searchValue.toLowerCase()))
    setAds(data)
}

  return (
    <div>
      <Topbar handleSearch={handleSearch} />
      <div className="container justify-content-lg-center h-display-flex">
        <div className={classes([style['box-container'], 'me-4'])}>
          <Box width="4rem" icon={<LaptopIcon />}>
            Notebooky
          </Box>
        </div>
        <div className={style['box-container']}>
          <Box disabled>Mobily</Box>
        </div>
      </div>
      <div className="container-row h-mt-4">
        <h3 className="justify-content-lg-center h-display-flex h-mb-2">Nejnovější inzeráty</h3>
        {ads &&
          ads.map((ad, i) => (
            <div key={i} className="col-lg-3">
              <Ad data={ad} />
            </div>
          ))}
      </div>
    </div>
  );
};
