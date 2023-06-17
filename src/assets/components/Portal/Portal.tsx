import { FC, PropsWithChildren } from 'react';

import type { PortalProps } from './Portal.props';

/**
 * Portal component. Render or not render child.
 *
 * @param children
 * @param {boolean} enabled       defines whether Portal is enabled.
 * @constructor
 */
const Portal: FC<PropsWithChildren<PortalProps>> = ({ children, enabled }) => {
	return enabled ? <>{children}</> : <></>;
};

export default Portal;
