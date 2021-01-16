import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { toggleInGame } from '../../services/redux/ducks/ForestRunner/game';
import { toggleTimer } from '../../services/redux/ducks/timer';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';

function GamePopup({ inGame, toggleStateOn, startTimerProps }) {
    const initializedOverlayBtn = factoryButtons({ buttonStyles: buttonClass.Overlay });

    const handleSubmit = () => {
        toggleStateOn();
        startTimerProps();
    };

    return (
        <div className={`overlay-container-wrapper  ${!inGame ? 'dimmer' : ''}`}>
            <section className={`overlay-container`}>
                <header>
                    <h2>Start the Game</h2>
                </header>

                <p>You are not prepend!? After you press the Ready! button, your game starts</p>

                <div className={`overlay-buttons-wrapper`}>
                    {initializedOverlayBtn(null, 'Ready!', 'ready', handleSubmit)}
                    {initializedOverlayBtn('home', null, 'home')}
                </div>
            </section>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        inGame: state.game.inGame,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        toggleStateOn: () => dispatch(toggleInGame().on()),
        startTimerProps: () => dispatch(toggleTimer().start()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(GamePopup);

GamePopup.propTypes = {
    inGame: PropTypes.bool.isRequired,
    toggleStateOn: PropTypes.func.isRequired,
    startTimerProps: PropTypes.func.isRequired,
};
