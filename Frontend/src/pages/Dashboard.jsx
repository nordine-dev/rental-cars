import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import AddCar from '../components/AddCar'
import Settings from '../components/Settings'
import CarsAdmin from '../components/Cars'
import Bookings from '../components/Bookings'

export default function Dashboard() {

  const [activeTab, setActiveTab] = useState('orders');
 

  const renderTab = () => {
    switch (activeTab) {
      case 'orders':
        return <Bookings />
      case 'cars':
        return <CarsAdmin />
      case 'add':
        return <AddCar />
      case 'settings':
        return <Settings />
      default:
        return <Bookings />
    }
  }

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-1 p-4">{renderTab()}</main>
    </div>
  )
}
