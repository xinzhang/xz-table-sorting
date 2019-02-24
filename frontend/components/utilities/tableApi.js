import { getJSON } from 'CommonUtil/CommonUtil.js';
const peopleUrl = require('data/people.json')

export function getPeople(mode) {

  if (mode == 'production') {
    return fetch(peopleUrl).then(res => res.json())

  } else if (mode == 'development') {
    return getJSON('data/people.json');  
  }
} 

