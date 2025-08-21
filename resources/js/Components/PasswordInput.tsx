import { EyeClosed, Eye } from 'lucide-react';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Input } from '@/Components/ui/input';

interface PasswordInputProps {
    id?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    className?: string;
    error?: string;
}

export default function PasswordInput({
    id = 'password',
    value,
    onChange,
    required = false,
    className = '',
    error,
}: PasswordInputProps) {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className="relative">
                <Input
                    id={id}
                    type={showPassword ? 'text' : 'password'}
                    value={value}
                    onChange={onChange}
                    required={required}
                    className={cn(className, error && "border-red-500 focus:ring-red-500 focus:border-red-500")}
                />
                <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                    aria-label={showPassword ? "Sembunyikan password" : "Tampilkan password"}
                >
                    {showPassword ? (
                        <Eye className="w-5 h-5" />
                    ) : (
                        <EyeClosed className="w-5 h-5" />
                    )}
                </button>
            </div>
            {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
        </div>
    );
}
