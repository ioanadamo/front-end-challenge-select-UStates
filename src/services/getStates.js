const url = 'http://www.mocky.io/v2/5d09830a3400001229d82ed1';

const fetchStatesData = () => fetch(url).then(res => res.json());

export default fetchStatesData;
