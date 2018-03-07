export default class DataService {
  static fetchData() {
    return fetch('/data/v1/ncaa')
      .then(resp =>  resp.json())
      .catch(error => {
        console.error(error);
        return {};
      });
  }
}