import React, { useEffect, useState } from 'react';
import ImageGallery from 'react-image-gallery';

import { classes } from '../services/utils';
import { useHistory } from 'react-router-dom';

import style from '../styles/pages/Detail.module.scss';
import 'react-image-gallery/styles/scss/image-gallery.scss';

import { Topbar } from '../components/Layout/Topbar/Topbar';
import { HeartIcon } from '../components/UI/Icons/Icons';
import { Button } from '../components/UI/Button/Button';
import { GetAdById } from '../api/ads/get-ad';

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

export const Detail = () => {
    const history = useHistory();
    const [ad, setAd] = useState();

    useEffect(() => {
        const getApi = async () => {
            let res = await GetAdById(history.location.pathname.split("/")[2]);
            res = await res.json();
            setAd(res);
        };
        getApi();
    }, []);

    return (
        <div>
            <Topbar />
            <Button onClick={() => history.goBack()} className="h-ml-3" theme="blue-outline">{`< Zpět`}</Button>
            {ad && (
                <div className="container-row">
                    <div className={classes([style.container, 'col-lg-8 center-lg h-margin-auto middle-lg'])}>
                        <div className={style.gallery}>
                            <img src={ad.photos.path} alt="Ad" className={style.img} />
                        </div>
                        <div className="h-display-flex h-vertical-center h-mt-2">
                            <h3 className="h-mr-05 h-margin-0">{ad.title}</h3>
                            <HeartIcon className={style.favourite} />
                        </div>
                        <div className={style.row}>
                            <span className={style['row-item']}>Dnes: 12</span>
                            <span className={style['row-item']}>Včera: 12</span>
                            <span className={style['row-item']}>Týdně: 12</span>
                            <span className={style['row-item']}>Měsíčně: 12</span>
                        </div>
                        <div className={style['info-row']}>
                            <div>
                                <div className={style.price}>{ad.price} Kč</div>
                                <div className="h-display-flex">
                                    <span className={style['info-item']}>{ad.city}</span>
                                    <span className={style['info-item']}>16.6.2021</span>
                                </div>
                            </div>
                            <div className="h-display-flex h-vertical-center">
                                <div className={classes(['h-mr-1', style['info-item']])}> Autor</div>
                                <Button theme="blue-outline">Hodnocení</Button>
                                <Button theme="primary">Mám zájem!</Button>
                            </div>
                        </div>
                        <div className={style['info-row']}>
                            {ad.description}
                        </div>
                        <div className={classes([style['info-row'], style.specifications])}>
                            <div className="h-mb-05">
                                <div className={style.param}>Značka</div>
                                <div>{ad.category.brand}</div>
                            </div>
                            <div className="h-mb-05">
                                <div className={style.param}>Model</div>
                                <div>{ad.category.model}</div>
                            </div>
                            <div className="h-mb-05">
                                <div className={style.param}>Barva</div>
                                <div>{ad.category.color}</div>
                            </div>
                            <div className="h-mb-05">
                                <div className={style.param}>Paměť RAM</div>
                                <div>{ad.category.ramCapacity}</div>
                            </div>
                            <div className="h-mb-05">
                                <div className={style.param}>Procesor</div>
                                <div>{ad.category.cpu}</div>
                            </div>
                            <div className="h-mb-05">
                                <div className={style.param}>Počet jader</div>
                                <div>{ad.category.cpuCores}</div>
                            </div>
                            {ad.category.spuFrequency && <div className="h-mb-05">
                                <div className={style.param}>Taktovací frekvence</div>
                                <div>{ad.category.spuFrequency}</div>
                            </div>}
                            <div className="h-mb-05">
                                <div className={style.param}>Úhlopříčka</div>
                                <div>{ad.category.diagonal}</div>
                            </div>
                            <div className="h-mb-05">
                                <div className={style.param}>Značka grafické karty</div>
                                <div>{ad.category.gpuBrand}</div>
                            </div>
                            {ad.category.gpuChip && <div className="h-mb-05">
                                <div className={style.param}>Čip grafické karty</div>
                                <div>{ad.category.gpuChip}</div>
                            </div>}
                            {ad.category.gpuMemory && <div className="h-mb-05">
                                <div className={style.param}>Paměť grafické karty</div>
                                <div>{ad.category.gpuMemory}</div>
                            </div>}
                            {ad.category.gpuType && <div className="h-mb-05">
                                <div className={style.param}>Typ grafické karty</div>
                                <div>{ad.category.gpuType}</div>
                            </div>}
                            {ad.category.memoryCapacity && <div className="h-mb-05">
                                <div className={style.param}>Typ paměti</div>
                                <div>{ad.category.memoryCapacity}</div>
                            </div>}
                            <div className="h-mb-05">
                                <div className={style.param}>Velikost paměti</div>
                                <div>{ad.category.memoryType}</div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};
