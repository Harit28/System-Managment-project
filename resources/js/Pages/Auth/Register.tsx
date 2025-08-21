import PasswordInput from '@/Components/PasswordInput';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

export default function Register() {
  const { data, setData, post, processing, errors } = useForm({
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    post(route('register'));
  };

  return (
    <>
      <Head title="Register" />
      <div className="min-h-screen flex flex-col lg:flex-row">
        {/* Kolom Kiri - Background Image */}
        <div className="hidden lg:block relative flex-1">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("/img/background.jpeg")' }}
          ></div>
          {/* PERBAIKAN: Mengubah overlay dari putih menjadi hitam */}
          <div className="absolute inset-0 bg-black bg-opacity-40" />
          {/* PERBAIKAN: Mengubah warna teks menjadi putih */}
          <div className="relative z-10 flex flex-col justify-end h-full p-8 text-white">
            <h1 className="text-4xl font-bold mb-2">Join Project Report</h1>
            <p className="text-lg text-gray-300">Find, Track, and Resolve. Efficiently.</p>
          </div>
        </div>

        {/* Kolom Kanan - Register Form */}
        {/* PERBAIKAN: Mengubah latar belakang form menjadi gelap */}
        <div className="flex-1 flex items-center justify-center p-8 bg-white-800 dark:bg-whiite-800">
          <div className="w-full max-w-sm">
            {/* Title & Description */}
            <div className="text-left mb-8">
              {/* PERBAIKAN: Mengubah warna teks menjadi putih */}
              <h1 className="text-3xl font-bold text-gray-900">Create an Account</h1>
              <p className="text-gray-400 dark:text-gray-400">
                Enter your information to get started
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  required
                  value={data.name}
                  onChange={(e) => setData('name', e.target.value)}
                  className="mt-1 block w-full"
                />
                {errors.name && (
                  <p className="text-red-500 mt-2 text-sm">{errors.name}</p>
                )}
              </div>
              
              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="email@example.com"
                  required
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  className="mt-1 block w-full"
                />
                {errors.email && (
                  <p className="text-red-500 mt-2 text-sm">{errors.email}</p>
                )}
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <PasswordInput
                  id="password"
                  required
                  value={data.password}
                  onChange={(e) => setData('password', e.target.value)}
                  className="mt-1 block w-full"
                />
                {errors.password && (
                  <p className="text-red-500 mt-2 text-sm">{errors.password}</p>
                )}
              </div>

              <div>
                <Label htmlFor="password_confirmation">Confirm Password</Label>
                <PasswordInput
                  id="password_confirmation"
                  required
                  value={data.password_confirmation}
                  onChange={(e) => setData('password_confirmation', e.target.value)}
                  className="mt-1 block w-full"
                />
                {errors.password_confirmation && (
                  <p className="text-red-500 mt-2 text-sm">{errors.password_confirmation}</p>
                )}
              </div>

              <Button
                type="submit"
                className="w-full flex justify-center py-2 px-4"
                disabled={processing}
              >
                {processing ? 'Processing...' : 'Sign Up'}
              </Button>
            </form>

            {/* Footer Link */}
            <div className="mt-6 text-center text-sm">
              <span className="text-gray-400 dark:text-gray-400">Already have an account? </span>
              {/* PERBAIKAN: Mengubah warna tautan untuk mode gelap */}
              <Link
                href={route('login')}
                className="font-medium text-indigo-500 hover:text-indigo-400"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}