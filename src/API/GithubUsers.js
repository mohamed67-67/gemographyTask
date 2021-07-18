import axios from 'axios'


const URL = 'https://api.github.com/search/repositories?q=created:%3E2017-10-22&sort=stars&order=desc&page=';

export const fetchingUsers = (PageNumber) => axios.get(`${URL}${PageNumber}`);