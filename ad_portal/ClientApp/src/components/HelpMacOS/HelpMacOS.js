import React from 'react';
import ImageGallery from 'react-image-gallery';
import style from './HelpMacOS.module.scss';
import { Button } from '../UI/Button/Button';

const imagesMac = [
  {
    original: '/images/macOS/macos.png',
    thumbnail: '/images/macOS/macos.png',
  },
  {
    original: '/images/macOS/macos2.png',
    thumbnail: '/images/macOS/macos2.png',
  },
  {
    original: '/images/macOS/macos3.png',
    thumbnail: '/images/macOS/macos3.png',
  },
];

export const HelpMacOS = ({ handleGoBack }) => {
  const goBack = () => handleGoBack();

  return (
    <div className={style.container}>
      <Button theme="blue-outline" onClick={() => goBack()}>Zpět</Button>
      <h3 className="h-text-center">MacOS</h3>
      <div>Kliknutím na jablíčko vlevo nahoře se zobrazí nabídka, kde vybereme možnost O tomto Macu. Pro informaci o disku zvolíme záložku Úložiště. Pro zbytek parametrů klikneme na Systémový profil.</div>
      <div className="container-row h-mt-1">
        <h5>Obrázková nápověda</h5>
        <div className="col-lg-4">
          <ImageGallery showPlayButton={false} items={imagesMac} />
        </div>
      </div>
    </div>
  )
}