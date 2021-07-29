import React, { useState } from 'react';
import ImageGallery from 'react-image-gallery';

import style from './HelpSelfSearch.module.scss';

import { Input } from '../UI/Inputs/Input/Input';
import { getUrls } from '../../api/urls/get_urls';
import { Button } from '../UI/Button/Button';
import { classes } from '../../services/utils';

const images = [
  {
    original: '/images/help_self/1.jpg',
    thumbnail: '/images/help_self/1.jpg',
  },
  {
    original: '/images/help_self/2.jpg',
    thumbnail: '/images/help_self/2.jpg',
  },
  {
    original: '/images/help_self/3.jpg',
    thumbnail: '/images/help_self/3.jpg',
  },
  {
    original: '/images/help_self/4.jpg',
    thumbnail: '/images/help_self/4.jpg',
  },
];

export const HelpSelfSearch = ({ handleGoBack }) => {
  const [model, setModel] = useState('');
  const [searchedData, setSearchedData] = useState();

  const search = () => {
    model && getUrls(model).then((data) => setSearchedData(data))
  }

  const onChange = (e) => {
    setModel(e)
  }

  const transformTitle = (title = ' Vyhledávání „amd ryzen 5 2500“ – Heureka.cz') => {
    const splitLeft = title.split('„')
    const splitRight = splitLeft[1].split('“');

    return splitRight[0].charAt(0).toUpperCase() + splitRight[0].slice(1);
  }

  const goBack = () => handleGoBack();

  return (
    <div className={style.container}>
      <Button theme="blue-outline" onClick={() => goBack()}>Zpět</Button>
      <div className="h-mt-2">Zde ti pomůžeme vyhledat specifikace online. Pro vyhledání buď zadej model svého notebooku a vyber si z vygenerovaných odkazů, který tě navedou na stránku heureka.cz a nebo zadej značku a model svého notebooku do googlu a vyhledávej sám/a.</div>
      <div className="h-mt-2 h-display-flex h-mb-05">
        <div className={classes([style.width, 'h-display-flex'])}>
          <Input label="Zadej model" placeholder="Macbook Pro 2015" value={model} onChange={onChange} />
          <Button theme="primary" onClick={() => search()}>Hledej</Button>
        </div>
      </div>

      <div className="container-row h-display-flex">
        {searchedData &&
          <React.Fragment>
            <h5 className="h-mt-2 h-mb-1">Výsledky vyhledávání na Heureka.cz</h5>
            {searchedData.items.map((item) =>
              <div className={classes([style.result, 'col-lg-3'])}>
                <a href={item.link} className={style.link}><img src={item.pagemap.cse_image[0].src} alt="Result" /></a>
                <a href={item.link} className={style.link}>{transformTitle(item.title)}</a>
              </div>)}
          </React.Fragment>
        }
      </div>
      <div className="container-row h-mt-3">
        <h5>Obrázková nápověda</h5>
        <div className="col-lg-4">
          <ImageGallery showPlayButton={false} items={images} />
        </div>
      </div>
    </div>
  )
}