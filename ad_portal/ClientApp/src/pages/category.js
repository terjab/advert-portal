import React, { useEffect, useState } from 'react';

import style from '../styles/pages/Category.module.scss';

import { Topbar } from '../components/Layout/Topbar/Topbar';
import { Sidebar } from '../components/Layout/Sidebar/Sidebar';
import { Ad } from '../components/Ad/Ad';
import { GetAllAds } from '../api/ads/get-ads';
// import { Badge } from '../components/UI/Badge/Badge';

export const Category = (searchValue) => {
    const [ads, setAds] = useState();
    const [adsFilter, setAdsFilter] = useState();
    const [priceSort, setPriceSort] = useState();

    useEffect(() => {
        const getApi = async () => {
            let res = await GetAllAds();
            res = await res.json();
            res = res.reverse();
            setAds(res);
            setAdsFilter(res)
        };
        getApi();
    }, []);

    const handlePrice = (from,to) => {
      const filtered = [];
      setAdsFilter(ads);

      adsFilter.map(ad => {
        let price = parseInt(ad.price.replaceAll(/\s/g,''));
        const fromFilter = parseInt(from);
        const toFilter = parseInt(to);

        if (fromFilter && toFilter) {
          if (price <= toFilter && price >= from) {
            filtered.push(ad);
          }
        } else if (!toFilter) {
          if (price >= fromFilter) {
            filtered.push(ad);
          }
        } else {
          if (price <= toFilter) {
            filtered.push(ad);
          }
        }
      })
      filtered.length > 0 ? setAdsFilter(filtered) : setAdsFilter(ads);
    }

    const setLowestPrice = () => {
      const sorted = adsFilter;
      setAdsFilter(ads);
      setPriceSort("lowest")
      sorted.sort((a, b) => {
        return  parseInt(a.price.replaceAll(/\s/g,'')) -  parseInt(b.price.replaceAll(/\s/g,''));
      })

      setAdsFilter(sorted);
    }

    const setHighestPrice = () => {
      const sorted = adsFilter;
      setAdsFilter(ads);
      setPriceSort("highest");

      sorted.sort((a, b) => {
        return  parseInt(b.price.replaceAll(/\s/g,''))  -   parseInt(a.price.replaceAll(/\s/g,''));
      })

      setAdsFilter(sorted);
    }

    const handleSearch = (searchValue) => {
        const data = adsFilter.filter(ad => (ad.title.toLowerCase()).includes(searchValue.toLowerCase()) || (ad.description.toLowerCase()).includes(searchValue.toLowerCase()))
        setAdsFilter(data)
    }

    const handleFilter = (filterValues) => {
      let filtered = [];

      setAdsFilter(ads);

     ads.filter((ad) => {
       let match = true;
        Object.keys(filterValues).forEach(function(key) {
          // {from: '', to: ''}
          if (key === "cpu_frequency" || key === "diagonal") {
            switch(key) {
              case "cpu_frequency":
                let filterFrom = filterValues[key].from ? parseFloat(filterValues[key].from) : null;
                let filterTo = filterValues[key].to ? parseFloat(filterValues[key].to) : null;
                let frequency = ad.category.cpuFrequency;

                if (frequency && (filterFrom || filterTo)) {
                  frequency = parseFloat(frequency)

                  if (filterFrom && filterTo) {
                     if (frequency < filterFrom || frequency > filterTo) {
                        match = false;
                     } 
                  } else if (!filterFrom) {
                    if (frequency > filterTo) {
                      match = false;
                    }
                    return;
                  } else if (!filterTo) {
                    if (frequency < filterFrom) {
                      match = false;
                    }
                  }
                }
                break;
              case "diagonal":
                const diagonalFilterFrom = filterValues[key].from ? parseFloat(filterValues[key].from) : null;
                const  diagonalFilterTo = filterValues[key].to ? parseFloat(filterValues[key].to) : null;
                let diagonal = ad.category.diagonal;
                
                if (diagonal && (diagonalFilterFrom || diagonalFilterTo)) {
                  diagonal = parseFloat(diagonal)

                  if (diagonalFilterFrom && diagonalFilterTo) {
                     if (diagonal < diagonalFilterFrom || diagonal > diagonalFilterTo) {
                      console.log('2')

                        match = false;
                     } 
                  } else if (!diagonalFilterFrom) {
                    if (diagonal > diagonalFilterTo) {
                      console.log('2')

                      match = false;
                    }
                    return;
                  } else if (!diagonalFilterTo) {
                    if (diagonal < diagonalFilterFrom) {
                      console.log('2')

                      match = false;
                    }
                  }
                } 
                break;
            }
          } else {
            // [{label: string, value: string}] || []
            switch(key) {
              case "brand":
                const brandFilter = filterValues[key];
                const brandAd = ad.category.brand;

                if (brandFilter.length !== 0) {
                  const filtersBrandLabel = brandFilter.map(brandItem => brandItem.label)
                  if (!filtersBrandLabel.includes(brandAd)) {
                    match = false
                  } 
                }
                break;
              case "model":
                const modelFilter = filterValues[key];
                const modelAd = ad.category.model;

                if (modelFilter.length !== 0) {
                  const filtersModelLabel = modelFilter.map(modelItem => modelItem.label)
                  if (!filtersModelLabel.includes(modelAd)) {
                    match = false
                  } 
                }
                break;
              case "color":
                const colorFiler = filterValues[key];
                const colorAd = ad.category.color;

                if (colorFiler.length !== 0) {
                  const filtersColorLabel = colorFiler.map(modelItem => modelItem.label)
                  if (!filtersColorLabel.includes(colorAd)) {
                    match = false
                  }
                }
                break;
              case "operating_system":
                const osFilter = filterValues[key];
                const osAd = ad.category.operatingSystem;

                if (osFilter.length !== 0) {
                  const filtersOsLabel = osFilter.map(modelItem => modelItem.label)
                  if (!filtersOsLabel.includes(osAd)) {
                    match = false
                  }
                }
                break;
              case "ram_capacity":
                const ramFilter = filterValues[key];
                const ramAd = ad.category.ramCapacity;

                if (ramFilter.length !== 0) {
                  const filtersRamLabel = ramFilter.map(modelItem => modelItem.label)
                  if (!filtersRamLabel.includes(ramAd)) {
                    match = false
                  }
                }
                break;
              case "memory_type":
                const memTypeFilter = filterValues[key];
                const memTypeAd = ad.category.memoryType;

                if (memTypeFilter.length !== 0) {
                  const filtersMemTypeLabel = memTypeFilter.map(modelItem => modelItem.label)
                  if (!filtersMemTypeLabel.includes(memTypeAd)) {
                    match = false
                  }
                }
                break;
              case "memory_capacity":
                const memCapacityFilter = filterValues[key];
                const memCapacityAd = ad.category.memoryCapacity;

                if (memCapacityFilter.length !== 0) {
                  const filtersMemCapacity = memCapacityFilter.map(modelItem => modelItem.label)
                  if (!filtersMemCapacity.includes(memCapacityAd)) {
                    match = false
                  }
                }
                break;
              case "cpu":
                const cpuFilter = filterValues[key];
                const cpuAd = ad.category.cpu;

                if (cpuFilter.length !== 0) {
                  const filterCpuLabels = cpuFilter.map(modelItem => modelItem.label)
                  if (!filterCpuLabels.includes(cpuAd)) {
                    match = false
                  }
                }
                break;
              case "cpu_cores":
                const cpuCoresFilter = filterValues[key];
                const cpuCoresAd = ad.category.cpuCores;

                if (cpuCoresFilter.length !== 0) {
                  const filterCpuCoresLabels = cpuCoresFilter.map(modelItem => modelItem.label)
                  if (!filterCpuCoresLabels.includes(cpuCoresAd)) {
                    match = false
                  }
                }
                break;
              case "gpu_brand":
                const gpuFilter = filterValues[key];
                const gpuAd = ad.category.gpuBrand;

                if (gpuFilter.length !== 0) {
                  const filterGpuLabels = gpuFilter.map(modelItem => modelItem.label)
                  if (!filterGpuLabels.includes(gpuAd)) {
                    match = false
                  }
                }
                break;
              case "gpu_type":
                const gpuTypeFilter = filterValues[key];
                const gpuTypeAd = ad.category.gpuType;

                if (gpuTypeFilter.length !== 0) {
                  const filterGpuTypeLabels = gpuTypeFilter.map(modelItem => modelItem.label)
                  if (!filterGpuTypeLabels.includes(gpuTypeAd)) {
                    match = false
                  }
                }
                break;
              case "gpu_chip":
                const gpuChipFilter = filterValues[key];
                const gpuChipAd = ad.category.gpuChip;

                if (gpuChipFilter.length !== 0) {
                  const filterGpuChipLabels = gpuChipFilter.map(modelItem => modelItem.label)
                  if (!filterGpuChipLabels.includes(gpuChipAd)) {
                    match = false
                  }
                }
                break;
              case "gpu_memory":
                const gpuMemoryFilter = filterValues[key];
                const gpuMemoryAd = ad.category.gpuMemory;

                if (gpuMemoryFilter.length !== 0) {
                  const filterGpuMemLabels = gpuMemoryFilter.map(modelItem => modelItem.label)
                  if (!filterGpuMemLabels.includes(gpuMemoryAd)) {
                    match = false
                  }
                }
                break;
            }
          }
        });
        match && filtered.push(ad);
      })
      filtered.length !== 0 ? setAdsFilter(filtered) : setAdsFilter(ads);
    }

  return (
    <div>
      <Topbar handleSearch={handleSearch} />
      <div className="h-display-flex">
        <Sidebar handlePrice={handlePrice} handleFilter={handleFilter} setLowestPrice={setLowestPrice} setHighestPrice={setHighestPrice} />
        <div className={style.main}>
          <h3 className="h-mb-2">Notebooky</h3>
          {/* <Badge>Filer</Badge> */}
          <div className="container-row">
            {adsFilter &&
              adsFilter.map((ad, i) => (
                <div key={i} className="col-lg-3 h-pl-0 h-mb-05">
                  <Ad data={ad} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
