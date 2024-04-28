'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CalendarDateRangePicker } from '../components/DatePicker';
import { MainNav } from '../components/MainNav';

import { Search } from '../components/Search';
import TeamSwitcher from '../components/TeamSwitcher';
import { UserNav } from '../components/UserNav';
import { Button } from '@/components/ui/button';
import { CardContent as CardContent, CardProps } from '../components/Card';
import Card from '../components/Card';
import BarChart from '../components/BarChart';
import { DollarSign, Users, CreditCard, Activity } from 'lucide-react';
import SalesCard, { SalesCardProps } from '../components/SalesCard';

const cardData: CardProps[] = [
  {
    label: 'Total Revenue',
    amount: '$45,231.89',
    description: '+20.1% from last month',
    icon: DollarSign,
  },
  {
    label: 'Subscriptions',
    amount: '+2350',
    description: '+180.1% from last month',
    icon: Users,
  },
  {
    label: 'Sales',
    amount: '+12,234',
    description: '+19% from last month',
    icon: CreditCard,
  },
  {
    label: 'Active Now',
    amount: '+573',
    description: '+201 since last hour',
    icon: Activity,
  },
];

const userSalesData: SalesCardProps[] = [
  {
    name: 'Jack Martin',
    email: 'jack.martin@email.com',
    saleAmount: '+$1,999.00',
  },
  {
    name: 'Charlie Lee',
    email: 'charlie.nguyen@email.com',
    saleAmount: '+$1,999.00',
  },
  {
    name: 'Abby Nguyen',
    email: 'abby.nguyen@email.com',
    saleAmount: '+$39.00',
  },
  {
    name: 'Lily Kim',
    email: 'lily@email.com',
    saleAmount: '+$299.00',
  },
  {
    name: 'George Davis',
    email: 'george.davis@email.com',
    saleAmount: '+$39.00',
  },
];

export default function DashboardPage() {
  return (
    <>
      <div className="sm:flex sm:flex-col sm:h-screen flex-col md:flex">
        <div className="md:border-b">
          <div className="flex flex-col md:flex-row h-16 items-center px-4 ">
            <div className="flex xs:flex-col items-center">
              <TeamSwitcher />
              <div>
                <MainNav className="mx-6 xs:mx-1" />
              </div>
            </div>
            <div className="md:ml-auto md:flex md:items-center md:space-x-4">
              <div className="flex items-center xs:flex-row xs:items-center xs:space-x-4 xs:py-2 sm:py-2">
                <Search />
                <UserNav />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6 xs:mt-11">
          <div className="flex items-center justify-between space-y-2 xl:flex-row lg:flex-row md:flex-row sm:flex-col">
            <h2 className="text-3xl font-bold tracking-tight xs:hidden">
              Dashboard
            </h2>
            <div className="flex items-center space-x-2 xs:flex-col">
              <CalendarDateRangePicker />
              <Button className="bg-black  text-white hover:bg-black text-sm xs:text-xs px-2 xs:px-1 py-1 xs:py-0">
                Download
              </Button>
            </div>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList className="bg-gray-100">
              <div className="bg-white rounded-md">
                <TabsTrigger
                  className="text-sm xs:text-xs px-2 xs:px-1 py-1 xs:py-0"
                  value="overview"
                >
                  Overview
                </TabsTrigger>
              </div>
              <TabsTrigger
                className="text-sm xs:text-xs px-2 xs:px-1 py-1 xs:py-0"
                value="analytics"
                disabled
              >
                Analytics
              </TabsTrigger>
              <TabsTrigger
                className="text-sm xs:text-xs px-2 xs:px-1 py-1 xs:py-0"
                value="reports"
                disabled
              >
                Reports
              </TabsTrigger>
              <TabsTrigger
                className="text-sm xs:text-xs px-2 xs:px-1 py-1 xs:py-0"
                value="notifications"
                disabled
              >
                Notifications
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-4">
              <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
                {cardData.map(({ label, amount, description, icon }) => (
                  <Card
                    key={label}
                    label={label}
                    amount={amount}
                    description={description}
                    icon={icon}
                  />
                ))}
              </section>
              <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
                <CardContent>
                  <p className="p-4 font-semibold">Overview</p>
                  <BarChart />
                </CardContent>
                <CardContent className="flex justify-between gap-4">
                  <section>
                    <p>Recent sales</p>
                    <p className="text-sm text-gray-400">
                      You made 265 sales this month.
                    </p>
                  </section>
                  {userSalesData.map(({ name, email, saleAmount }) => (
                    <SalesCard
                      key={name}
                      name={name}
                      email={email}
                      saleAmount={saleAmount}
                    />
                  ))}
                </CardContent>
              </section>
              {/* <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Total Revenue
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">$45,231.89</div>
                    <p className="text-xs text-muted-foreground">
                      +20.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Subscriptions
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+2350</div>
                    <p className="text-xs text-muted-foreground">
                      +180.1% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Sales</CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2" />
                      <path d="M2 10h20" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+12,234</div>
                    <p className="text-xs text-muted-foreground">
                      +19% from last month
                    </p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      Active Now
                    </CardTitle>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">+573</div>
                    <p className="text-xs text-muted-foreground">
                      +201 since last hour
                    </p>
                  </CardContent>
                </Card>
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
                <Card className="col-span-3">
                  <CardHeader>
                    <CardTitle>Recent Sales</CardTitle>
                    <CardDescription>
                      You made 265 sales this month.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RecentSales />
                  </CardContent>
                </Card> */}
              {/* </div> */}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}
