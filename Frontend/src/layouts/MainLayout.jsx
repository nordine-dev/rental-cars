import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <div>
      <Header/>
      <main className="p-4">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
