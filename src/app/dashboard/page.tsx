import React from 'react';
import PageTitle from '../components/PageTitle';
import Card, { CardContent, CardProps } from '../components/Card';
import { DollarSign, Users, CreditCard, Activity } from "lucide-react";
import BarChart from '../components/BarChart';
import SalesCard, { SalesCardProps } from '../components/SalesCard';

const cardData: CardProps[] = [
	{
		label: "Total Revenue",
		amount: "$45,231.89",
		description: "+20.1% from last month",
		icon: DollarSign
	},
	{
		label: "Subscriptions",
		amount: "+2350",
		description: "+180.1% from last month",
		icon: Users
	},
	{
		label: "Sales",
		amount: "+12,234",
		description: "+19% from last month",
		icon: CreditCard
	},
	{
		label: "Active Now",
		amount: "+573",
		description: "+201 since last hour",
		icon: Activity
	}
];

const userSalesData: SalesCardProps[] = [
	{
		name: "Jack Martin",
		email: "jack.martin@email.com",
		saleAmount: "+$1,999.00"
	},
	{
		name: "Charlie Lee",
		email: "charlie.nguyen@email.com",
		saleAmount: "+$1,999.00"
	},
	{
		name: "Abby Nguyen",
		email: "abby.nguyen@email.com",
		saleAmount: "+$39.00"
	},
	{
		name: "Lily Kim",
		email: "lily@email.com",
		saleAmount: "+$299.00"
	},
	{
		name: "George Davis",
		email: "george.davis@email.com",
		saleAmount: "+$39.00"
	}
];

const Dashboard = async () => {
	return (
		<div className='flex flex-col gap-5 w-full'>
			<PageTitle title="Dashboard" />
			<section className='grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4'>
				{cardData.map(({ label, amount, description, icon }) => (
					<Card key={label} label={label} amount={amount} description={description} icon={icon} />
				))}
			</section>
			<section className='grid grid-cols-1 gap-4 transition-all lg:grid-cols-2'>
				<CardContent>
					<p className='p-4 font-semibold'>Overview</p>
					<BarChart />
				</CardContent>
				<CardContent className='flex justify-between gap-4'>
					<section>
						<p>Recent sales</p>
						<p className='text-sm text-gray-400'>
							You made 265 sales this month.
						</p>
					</section>
					{userSalesData.map(({ name, email, saleAmount }) => (<SalesCard key={name} name={name} email={email} saleAmount={saleAmount} />)
					)}
				</CardContent>
			</section>
		</div>
	);
};

export default Dashboard