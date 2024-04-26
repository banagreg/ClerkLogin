import Image from 'next/image';
import React from 'react'

export interface SalesCardProps {
	name: string;
	email: string;
	saleAmount: string;
};

const SalesCard = (props: SalesCardProps) => {
	console.log(props.name.split(" ")[1])
	return (
		<div className='flex flex-wrap justify-between gap-3'>
			<section className='flex justify-between gap-3'>
				<div className='h-12 w-12 rounded-full bg-gray-100 p-1'>
					<img width={200} height={200} src={`https://api.dicebear.com/7.x/lorelei/svg?seed=${(props.name).split(" ")[0]}`} alt="avatar" />
				</div>
				<div className='text-sm'>
					<p>{props.name}</p>
					<div className='text-ellipsis overflow-hidden whitespace-nowrap w-[120px] sm:w-auto text-gray-400'>
						{props.email}
					</div>
				</div>
			</section>
			<p>{props.saleAmount}</p>
		</div>
	);
};

export default SalesCard