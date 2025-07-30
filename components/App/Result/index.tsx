import type { AppResultProps } from './types';
import StatusIcon from './components/StatusIcon';

function AppResult(props: AppResultProps) {
	return (
		<div>
			{props?.icon ? props.icon : <StatusIcon status={props.status} />}
			<div className='mt-4 text-3xl font-bold'>{props.title}</div>
			<div className='mt-1 text-sm'>{props.description}</div>
			<div className='mt-6'>{props?.default}</div>
			<div className='mt-6'>{props?.footer}</div>
		</div>
	);
}

export default AppResult;
