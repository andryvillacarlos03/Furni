import { useForm, Link, Head } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    firstname: '',
    lastname: '',
    phone: '',
    region: '',
    province: '',
    city: '',
    barangay: '',
    age: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const [regions, setRegions] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cities, setCities] = useState([]);
  const [barangays, setBarangays] = useState([]);

  const [emailStatus, setEmailStatus] = useState('');
  const [passwordMatch, setPasswordMatch] = useState('');
  const [canSubmit, setCanSubmit] = useState(false);

  useEffect(() => {
    const fetchRegions = async () => {
      const response = await fetch('https://psgc.gitlab.io/api/regions/');
      const json = await response.json();
      setRegions(json);
    };
    fetchRegions();
  }, []);

  useEffect(() => {
    if (!data.region) {
      setProvinces([]);
      setCities([]);
      setBarangays([]);
      return;
    }
    const fetchProvinces = async () => {
      const response = await fetch(`https://psgc.gitlab.io/api/regions/${data.region}/provinces/`);
      const json = await response.json();
      setProvinces(json);
    };
    fetchProvinces();
  }, [data.region]);

  useEffect(() => {
    if (!data.province) {
      setCities([]);
      setBarangays([]);
      return;
    }
    const fetchCities = async () => {
      const response = await fetch(`https://psgc.gitlab.io/api/provinces/${data.province}/cities-municipalities/`);
      const json = await response.json();
      setCities(json);
    };
    fetchCities();
  }, [data.province]);

  useEffect(() => {
    if (!data.city) {
      setBarangays([]);
      return;
    }
    const fetchBarangays = async () => {
      const response = await fetch(`https://psgc.gitlab.io/api/cities-municipalities/${data.city}/barangays/`);
      const json = await response.json();
      setBarangays(json);
    };
    fetchBarangays();
  }, [data.city]);

  useEffect(() => {
    if (!data.email) {
      setEmailStatus('');
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const response = await fetch(`/register/email?email=${encodeURIComponent(data.email)}`);
        const json = await response.json();
        setEmailStatus(json.exists ? 'taken' : 'available');
      } catch {
        setEmailStatus('error');
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [data.email]);

  useEffect(() => {
    if (!data.password_confirmation) {
      setPasswordMatch('');
    } else if (data.password === data.password_confirmation) {
      setPasswordMatch('match');
    } else {
      setPasswordMatch('nomatch');
    }
  }, [data.password, data.password_confirmation]);

  useEffect(() => {
    setCanSubmit(emailStatus === 'available' && passwordMatch === 'match');
  }, [emailStatus, passwordMatch]);

  const togglePassword = (id) => {
    const input = document.getElementById(id);
    input.type = input.type === 'password' ? 'text' : 'password';
  };

  const submit = (e) => {
    e.preventDefault();
    post(route('register'), {
      onFinish: () => reset('password', 'password_confirmation'),
    });
  };

  return (
    <>
      <Head title="Register" />

      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
        <div className="w-full max-w-xl rounded-xl bg-white p-8 shadow-lg">
          <Link
            href={route('login')}
            className="mb-4 inline-block text-sm text-gray-600 hover:text-black hover:underline"
          >
            ← Back
          </Link>

          <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
            Create an Account
          </h1>

          {Object.keys(errors).length > 0 && (
            <div className="mb-4 rounded bg-red-100 p-4 text-red-700">
              <strong>There were some errors:</strong>
              <ul className="mt-2 list-disc pl-5">
                {Object.values(errors).map((err, i) => (
                  <li key={i}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          <form onSubmit={submit} className="space-y-4">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="First Name"
                value={data.firstname}
                onChange={(e) => setData('firstname', e.target.value)}
                className="w-1/2 rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-0"
              />
              <input
                type="text"
                placeholder="Last Name"
                value={data.lastname}
                onChange={(e) => setData('lastname', e.target.value)}
                className="w-1/2 rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-0"
              />
            </div>

            <input
              type="tel"
              inputMode="numeric"
              maxLength="11"
              pattern="09[0-9]{9}"
              placeholder="e.g., 09123456789"
              value={data.phone}
              onChange={(e) => setData('phone', e.target.value)}
              className="w-full rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-0"
            />

            <select
              value={data.region}
              onChange={(e) => setData('region', e.target.value)}
              className="w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:border-black focus:outline-none focus:ring-0"
            >
              <option value="">Select Region</option>
              {regions.map((r) => (
                <option key={r.code} value={r.code}>
                  {r.name}
                </option>
              ))}
            </select>

            <select
              value={data.province}
              onChange={(e) => setData('province', e.target.value)}
              disabled={!provinces.length}
              className="w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:border-black focus:outline-none focus:ring-0 disabled:bg-gray-200"
            >
              <option value="">Select Province</option>
              {provinces.map((p) => (
                <option key={p.code} value={p.code}>
                  {p.name}
                </option>
              ))}
            </select>

            <select
              value={data.city}
              onChange={(e) => setData('city', e.target.value)}
              disabled={!cities.length}
              className="w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:border-black focus:outline-none focus:ring-0 disabled:bg-gray-200"
            >
              <option value="">Select City/Municipality</option>
              {cities.map((c) => (
                <option key={c.code} value={c.code}>
                  {c.name}
                </option>
              ))}
            </select>

            <select
              value={data.barangay}
              onChange={(e) => setData('barangay', e.target.value)}
              disabled={!barangays.length}
              className="w-full rounded border border-gray-300 px-4 py-2 text-gray-700 focus:border-black focus:outline-none focus:ring-0 disabled:bg-gray-200"
            >
              <option value="">Select Barangay</option>
              {barangays.map((b) => (
                <option key={b.code} value={b.code}>
                  {b.name}
                </option>
              ))}
            </select>

            <input
              type="number"
              placeholder="Age"
              value={data.age}
              onChange={(e) => setData('age', e.target.value)}
              className="w-full rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-0"
            />

            <div>
              <input
                type="email"
                placeholder="Email Address"
                value={data.email}
                onChange={(e) => setData('email', e.target.value)}
                className="w-full rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-0"
              />
              {emailStatus === 'available' && (
                <p className="mt-1 text-sm text-green-600">Email is available.</p>
              )}
              {emailStatus === 'taken' && (
                <p className="mt-1 text-sm text-red-600">Email is already taken.</p>
              )}
              {emailStatus === 'error' && (
                <p className="mt-1 text-sm text-red-600">Error checking email.</p>
              )}
            </div>

            <div className="flex gap-4">
              <div className="relative w-1/2">
                <input
                  id="password"
                  type="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  className="w-full rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-0"
                />
                <i
                  className="fas fa-eye absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => togglePassword('password')}
                ></i>
              </div>
              <div className="relative w-1/2">
                <input
                  id="password_confirmation"
                  type="password"
                  placeholder="Repeat Password"
                  value={data.password_confirmation}
                  onChange={(e) => setData('password_confirmation', e.target.value)}
                  className="w-full rounded border border-gray-300 px-4 py-2 placeholder-gray-400 focus:border-black focus:outline-none focus:ring-0"
                />
                <i
                  className="fas fa-eye absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
                  onClick={() => togglePassword('password_confirmation')}
                ></i>
              </div>
            </div>

            {passwordMatch === 'match' && (
              <p className="text-green-600">Passwords match.</p>
            )}
            {passwordMatch === 'nomatch' && (
              <p className="text-red-600">Passwords do not match.</p>
            )}

            <button
              type="submit"
              disabled={!canSubmit || processing}
              className="w-full rounded bg-black px-6 py-2 text-white transition hover:brightness-110 disabled:opacity-50"
            >
              Register Account
            </button>
          </form>

          <p className="mt-6 text-center text-sm">
            Already have an account?{' '}
            <Link href={route('login')} className="text-blue-600 hover:underline">
              Login!
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
