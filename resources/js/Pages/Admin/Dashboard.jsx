import { Link } from "@inertiajs/react";
import {useForm} from "@inertiajs/react";

export default function AdminDashboard(){
    const {post,processing} = useForm();

    const handleLogout = (e) => {
      e.preventDefault();
      post(route('logout'));
    }
    return(
        <>
          <h1>Admin Dashboard</h1>
          <Link href={route('logout')} onClick={handleLogout} disabled={processing}>Logout</Link>
        </>
    )
}