import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { setSellItem, setEquipItem } from './actions';
import { httpGame } from '../../../services/http';
import { setNotification } from '../../../components/Notification/actions';
import ItemsList from '../../../components/ItemsList';

function Inventory(props) {
    const newProps = props;
    const [items, setItems] = useState([]);

    useEffect(() => {
        httpGame
            .inventory()
            .then((i) => {
                if (!i) {
                    return;
                }

                setItems(i);

                if (newProps.inventorySellItem || newProps.inventoryEquipItem) {
                    newProps.setSellItem();
                    newProps.setEquipItem();
                }
            })
            .catch((err) => {
                props.setNotificationError(err);
            });
    }, [newProps]);

    return (
        <div>
            <h1>Inventory</h1>

            <ItemsList items={items} />
        </div>
    );
}

function mapStateToProps(state) {
    return {
        inventorySellItem: state.game.inventorySellItem,
        inventoryEquipItem: state.game.inventoryEquipItem,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        setSellItem: () => dispatch(setSellItem(false)),
        setEquipItem: () => dispatch(setEquipItem(false)),
        setNotificationError: (data) => dispatch(setNotification().error(data)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Inventory);
