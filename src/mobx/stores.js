import { ResourceStore } from '@reststate/mobx';
import api from './api';

const restaurantStore = new ResourceStore({
  name: 'first_name',
  httpClient: api,
});

const dishStore = new ResourceStore({
  name: 'last_name',
  httpClient: api,
});

export {
  restaurantStore,
  dishStore
};
