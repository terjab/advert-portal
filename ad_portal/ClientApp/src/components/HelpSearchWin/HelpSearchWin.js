import React from 'react';
import ImageGallery from 'react-image-gallery';

import style from './HelpSearchWin.module.scss';

import { Button } from '../UI/Button/Button';

const imagesSpeecy = [
  {
    original: '/images/speecy/language.png',
    thumbnail: '/images/speecy/language.png',
  },
  {
    original: '/images/speecy/language2.png',
    thumbnail: '/images/speecy/language2.png',
  },
  {
    original: '/images/speecy/speecy1.png',
    thumbnail: '/images/speecy/speecy1.png',
  },
  {
    original: '/images/speecy/speecy2.png',
    thumbnail: '/images/speecy/speecy2.png',
  },
];

const imagesSysInfo = [
  {
    original: '/images/sys_info/sys_info1.png',
    thumbnail: '/images/sys_info/sys_info1.png',
  },
  {
    original: '/images/sys_info/sys_info2.png',
    thumbnail: '/images/sys_info/sys_info2.png',
  },
];

export const HelpSearchWin = ({ handleGoBack }) => {
  const goBack = () => handleGoBack();

  return (
    <div className={style.container}>
      <Button theme="blue-outline" onClick={() => goBack()}>Zpět</Button>
      <h3 className="h-text-center">Windows</h3>
      <h5 className="h-mt-2">Varianta 1.</h5>
      <div>Stáhni si do počítače <a href="/zip/spsetup132.exe">tento</a> diagnostický program. Na obrázcích níže jsou na obrázcích podtrženy potřebné specifikace. Zároveň si můžete nastavit jazyk do slovenského jazyka. Jen kombinací obou variant zjistíte všechny paramentry.</div>
      <div className="container-row h-mt-1">
        <h5>Obrázková nápověda</h5>
        <div className="col-lg-4">
          <ImageGallery showPlayButton={false} items={imagesSpeecy} />
        </div>
      </div>
      <h5 className="h-mt-2">Varianta 2.</h5>
      <div>Na svém počítači zvol možnost start - v seznamu programů zvol Nástroje pro správu Windows - Systémové informace</div>
      <div className="container-row h-mt-1">
        <h5>Obrázková nápověda</h5>
        <div className="col-lg-4">
          <ImageGallery showPlayButton={false} items={imagesSysInfo} />
        </div>
      </div>
    </div>
  )
}