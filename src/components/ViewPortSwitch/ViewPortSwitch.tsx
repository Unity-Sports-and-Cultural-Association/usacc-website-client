import { ReactElement } from 'react';
import './ViewPortSwitch.scss';

type ViewPortSwitchProps = {
    Desktop: ReactElement;
    Mobile: ReactElement;
    isMobile: boolean;
}

function ViewPortSwitch({ Desktop, Mobile, isMobile }: ViewPortSwitchProps): ReactElement {

    return (
        isMobile ? Mobile : Desktop
    );
}

export default ViewPortSwitch;
