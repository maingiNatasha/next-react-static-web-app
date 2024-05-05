import React from 'react';
import { GoOrganization } from "react-icons/go";

const Footer = () => {
	const year = new Date().getFullYear();

	return (
		<div className='py-4'>
			<div className='flex justify-between items-center text-gray-500 font-bold'>
				<div className='flex items-center'>
					<GoOrganization className='mr-2' size={30} />
					<span>Alipet</span>
				</div>
				<div>
					All rights reserved &copy; {year}
				</div>
			</div>
		</div>
	)
}

export default Footer
