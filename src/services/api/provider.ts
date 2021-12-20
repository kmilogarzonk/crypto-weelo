import axios from 'axios';

const axiosClient: any = axios.create();
axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json'
};
axiosClient.defaults.timeout = 2000;

/**
 * Objeto: Objeto para realizar peticiones usando axios
 * 
 * @remark
 * Este objeto hace uso de {axios}
 * 
 */
export const apiProvider = {

  /**
   * Funciónn: Realizar peticiones usando axios y devuelve una promesa
   * 
   * @param URL: Requerido | Define la url para petición
   * 
   * @returns Promesa de la petición
   */
  getRequest : async (URL: string): Promise<any> => {
    let responseRequest;
    let errorRequest;

    await axiosClient.get(`${URL}`)
      .then(response => responseRequest = response)
      .catch(error => errorRequest = error)

    return new Promise((resolve, reject) => {
      if (responseRequest !== null) {
        resolve(responseRequest);
      } else {
        reject(errorRequest);
      }
    });
  }
  
};