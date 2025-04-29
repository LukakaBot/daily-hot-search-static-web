import React from 'react';

function Content({ children }: React.PropsWithChildren) {
	return <main className='lg:w-[1800px] m-4'>{children}</main>;
}

export default Content;
