import React from 'react';
import Map from '../map/Map';
import Player from '../player/Player';

import { tiles } from '../data/maps/1';
import store from '../../../../services/store';

export default function World() {
    store.dispatch({
        type: 'ADD_TILES',
        payload: {
            tiles,
        }
    });

    return (
        <div
            style={{
                position: 'relative',
                width: '1650px',
                height: '650px',
                margin: '20px auto'
            }}>
            <Map />
            <Player />
        </div>
    );
}