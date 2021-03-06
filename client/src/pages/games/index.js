import PageMainLayout from '../../layouts/PageMain';
import { forestRunner } from '../../router/paths.json';
import { buttonClass } from '../../utils/class-names.json';
import { factoryButtons } from '../../utils/factory';

export default function GamesContainer() {
    return (
        <PageMainLayout>
            {/* TODO adding carousel for the many games */}
            <p>In progress... Quick prevue of first game here: {factoryButtons({ buttonStyles: buttonClass.Games })(forestRunner, 'Forest Runner')}</p>
        </PageMainLayout>
    );
}
