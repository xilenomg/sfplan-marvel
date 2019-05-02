import axios from 'axios';
import md5 from 'md5';
import { generateTS } from '../util/Date'

const privateKey = '53e37fb1c0fd01e2e8c09bfdbf16e6dfb1a36c01';
const publicKey = 'ae9bf541df4bc5d26cb937a8ec8c51cc';

export const loadCharacters = (page = 0, searchTerm) => {
  const ts = generateTS();
  const resultsPerPage = 20;
  const hash = md5(`${ts}${privateKey}${publicKey}`);
  const attributes = [
    `apikey=${publicKey}`,
    `ts=${ts}`,
    `hash=${hash}`,
    'orderBy=name',
    `limit=${resultsPerPage}`
  ];
  if (searchTerm) {
    attributes.push(`nameStartsWith=${searchTerm}`);
  }

  const offSet = page * resultsPerPage;
  if (offSet > 0) {
    attributes.push(`offset=${offSet}`);
  }

  const url = `https://gateway.marvel.com:443/v1/public/characters${`?${attributes.join(
    '&'
  )}`}`;

  return axios.get(url);
};

export const loadCharacter = id => {
  const ts = generateTS();
  const hash = md5(`${ts}${privateKey}${publicKey}`);
  const attributes = [`apikey=${publicKey}`, `ts=${ts}`, `hash=${hash}`];

  const url = `https://gateway.marvel.com:443/v1/public/characters/${id}${`?${attributes.join(
    '&'
  )}`}`;

  return axios.get(url);
};
