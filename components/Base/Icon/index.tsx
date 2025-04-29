import { Icon } from '@iconify/react';
import { CSSProperties, useMemo } from 'react';

interface Props extends React.HTMLAttributes<HTMLElement> {
	name: string;
	size?: number;
	color?: string;
}

function BaseIcon(props: Props) {
	const { className, name, size = 16, color } = props;

	const iconStyle = useMemo(
		(): CSSProperties => ({
			width: `${size}px`,
			height: `${size}px`,
			color: color ? color : undefined,
		}),
		[]
	);

	const isCSSIcon = useMemo(() => {
		return name.startsWith('icon-');
	}, [name]);

	return isCSSIcon ? (
		<span className={`${name} ${className}`} style={iconStyle} />
	) : (
		<Icon
			className={className}
			icon={name}
			width={size}
			height={size}
			color={color ? color : undefined}
		/>
	);
}

export default BaseIcon;
