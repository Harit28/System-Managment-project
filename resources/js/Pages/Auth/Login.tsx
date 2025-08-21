import PasswordInput from '@/Components/PasswordInput';
import { Button } from '@/Components/ui/button';
import { Input } from '@/Components/ui/input';
import { Label } from '@/Components/ui/label';
import { Head, Link, useForm } from '@inertiajs/react';
import { FormEvent } from 'react';

export default function Login() {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <>
            <Head title="Log in" />
            <div className="min-h-screen grid grid-cols-2">
  {/* Kolom Kiri - Form Login */}
  <div className="flex items-center justify-center bg-white p-8">
    <div className="w-full max-w-sm mx-auto">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Welcome Back</h2>
        <p className="text-gray-500 mt-2">
          Enter your credentials to access your account.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            placeholder="email@example.com"
            required
            value={data.email}
            onChange={(e) => setData("email", e.target.value)}
            className="h-12 mt-1"
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
            onChange={(e) => setData("password", e.target.value)}
            error={errors.password}
            className="h-12 mt-1"
          />
        </div>
        <Button
          variant="default"
          type="submit"
          className="h-12 w-full text-base font-semibold"
          disabled={processing}
        >
          {processing ? "Processing..." : "Sign In"}
        </Button>
      </form>
      <div className="mt-6 text-center text-sm">
        <span className="text-gray-500">Don't have an account? </span>
        <Link
          href={route("register")}
          className="font-semibold text-indigo-600 hover:underline"
        >
          Sign Up
        </Link>
      </div>
    </div>
  </div>

  {/* Kolom Kanan - Background */}
  <div className="relative">
    <img
      src="/img/background.jpeg"
      alt="bg"
      className="absolute inset-0 h-full w-full object-cover"
    />
    <div className="absolute inset-0 bg-black/30" />
    <div className="relative z-10 flex flex-col justify-end h-full p-10 text-white">
      <h1 className="text-5xl font-bold">Project Report</h1>
      <p className="mt-3 text-lg text-gray-300">
        Find, Track, and Resolve. Efficiently.
      </p>
    </div>
  </div>
</div>

        </>
    );
}