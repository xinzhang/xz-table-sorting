import { getJSON } from 'CommonUtil/CommonUtil.js';

export function getPeople(mode) {

  if (mode == 'production') {
    return fetch('/data/people.json').then(res => res.json())

  } else if (mode == 'development') {
    return getJSON('data/people.json');  
  }
} 

