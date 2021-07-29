import { createQuery } from '../../services/utils';
import { api } from '../api-client'

const url = 'https://www.googleapis.com';
const apiKey = 'AIzaSyByoszi6T05OECQM3LSejDj6XMrslJFqUw';
const cx_heureka = '80d6189620f9f4ec5';
const cx_google = 'a673cfa1ee369768b';
const hl = 'cs'; 
const gl = 'cz';
const lr = 'lang_cs';

// https://www.googleapis.com/customsearch/v1?key=AIzaSyByoszi6T05OECQM3LSejDj6XMrslJFqUw&cx=80d6189620f9f4ec5&hl=cs&lr=cz&gl=cs&hl=lang_cs&q=lenovo+ideapad+14ALC05

export const getUrls = async (q) => {
  const q_url = createQuery(q);
  const urls = api(`${url}/customsearch/v1?key=${apiKey}&cx=${cx_heureka}&hl=${hl}&lr=${lr}&gl=${gl}&q=${q_url}`)
  return urls
}