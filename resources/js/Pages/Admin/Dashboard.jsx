
import '../../../../public/Auth_Assets/css/sb-admin-2.min.css';
import '../../../../public/Auth_Assets/vendor/fontawesome-free/css/all.min.css';
import { Link } from "@inertiajs/react";
import {useForm} from "@inertiajs/react";
import MainAdminLayout from "@/Layouts/AdminLayout";
import useDynamicLink from '@/Utils/Utils';

function AdminDashboard(){
    const {post,processing} = useForm();

    const handleLogout = (e) => {
      e.preventDefault();
      post(route('logout'));
    }
    useDynamicLink("https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i");
    return(
        <>
          <h1>Admin Dashboard</h1>
          <Link href={route('logout')} onClick={handleLogout} disabled={processing}>Logout</Link>
        </>
    )
}

AdminDashboard.layout = (pages) => <MainAdminLayout pageName="Dashboard">{pages}</MainAdminLayout>

export default AdminDashboard;