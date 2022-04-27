import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { restaurantStore } from './stores';

class RestaurantList extends Component {
  componentDidMount() {
    restaurantStore.loadAll();
  }

  render() {
    return (
      <div>
        <ul>
          {restaurantStore.all().map(restaurant => (
            <li key={restaurant.id}>
              {restaurant.attributes.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default observer(RestaurantList);
