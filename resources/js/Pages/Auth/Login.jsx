import { useForm, Link } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md rounded-xl bg-white p-10 shadow-lg">
                
                {/* Back link */}
                <div className="mb-4">
                    <Link
                        href={route('page.welcome')}
                        className="text-sm text-gray-600 hover:text-black hover:underline"
                    >
                        ← Back
                    </Link>
                </div>

                <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
                    Login
                </h1>

                {status && (
                    <div className="mb-4 rounded bg-green-100 px-4 py-3 text-sm text-green-700">
                        {status}
                    </div>
                )}

                <form onSubmit={submit} className="space-y-6">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={data.email}
                            onChange={(e) => setData('email', e.target.value)}
                            required
                            autoFocus
                            className="mt-1 w-full rounded border border-black px-4 py-2 text-gray-800 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        {errors.email && (
                            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={data.password}
                            onChange={(e) => setData('password', e.target.value)}
                            required
                            className="mt-1 w-full rounded border border-black px-4 py-2 text-gray-800 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-2 focus:ring-black"
                        />
                        {errors.password && (
                            <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                        )}
                    </div>

                    <div className="flex items-center">
                        <input
                            id="remember"
                            type="checkbox"
                            checked={data.remember}
                            onChange={(e) => setData('remember', e.target.checked)}
                            className="h-4 w-4 rounded border-black text-black focus:ring-black"
                        />
                        <label htmlFor="remember" className="ml-2 text-sm text-gray-700">
                            Remember me
                        </label>
                    </div>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-sm text-blue-600 hover:underline"
                            >
                                Forgot your password?
                            </Link>
                        )}

                        <button
                            type="submit"
                            disabled={processing}
                            className="w-full rounded bg-black px-6 py-2 text-white transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-black disabled:opacity-50 sm:w-auto"
                        >
                            Log in
                        </button>
                    </div>
                </form>

                {/* Register link */}
                <div className="mt-6 text-center">
                    <span className="text-sm text-gray-700">
                        Don&apos;t have an account?{' '}
                        <Link
                            href={route('register')}
                            className="text-blue-600 hover:underline"
                        >
                            Register
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}
