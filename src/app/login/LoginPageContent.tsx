// app/login/LoginPageContent.tsx
'use client'

import { useActionState, useEffect, useState } from 'react'
import { login } from '@/app/auth/actions'
import Link from 'next/link'
import Header from '@/components/header'
import Footer from '@/components/footer'
import ToastNotification from '@/components/toast-notification'
import { useSearchParams } from 'next/navigation'
import { useAuth } from '@/context/auth-context'

export default function LoginPageContent() {
  const [state, formAction, isPending] = useActionState(login, null);
  const searchParams = useSearchParams();
  const registered = searchParams.get('registered');
  const { login: authLogin } = useAuth();

  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'info' | 'warning' | 'error'>('success');

  useEffect(() => {
    if (registered) {
      setToastMessage('Registration successful! Please log in.');
      setToastType('success');
      setShowToast(true);
    }
  }, [registered]);

  useEffect(() => {
    if (state) {
      if (!state.success) {
        setToastMessage(state.message);
        setToastType('error');
        setShowToast(true);
      } else {
        // If login was successful (though redirect handles this, for completeness)
        authLogin(); // Update AuthContext state
      }
    }
  }, [state, authLogin]);

  return (
    <>
      <Header />
      <main style={{
        minHeight: 'calc(100vh - 128px)', // Adjust based on header/footer height
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        backgroundColor: 'var(--gray-50)'
      }}>
        <div style={{
          backgroundColor: 'var(--white)',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          padding: '40px',
          maxWidth: '450px',
          width: '100%',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '28px',
            fontWeight: '600',
            color: 'var(--primary-700)',
            marginBottom: '24px'
          }}>
            Welcome Back!
          </h1>
          <p style={{
            fontSize: '16px',
            color: 'var(--gray-600)',
            marginBottom: '32px'
          }}>
            Log in to access your account and manage your orders.
          </p>

          <form action={formAction} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
            <div>
              <label htmlFor="email" style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: 'var(--gray-700)',
                marginBottom: '8px',
                textAlign: 'left'
              }}>
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid var(--gray-300)',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: 'var(--gray-800)',
                  transition: 'border-color 0.3s, box-shadow 0.3s'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-500)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(34, 139, 34, 0.2)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gray-300)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
            <div>
              <label htmlFor="password" style={{
                display: 'block',
                fontSize: '14px',
                fontWeight: '500',
                color: 'var(--gray-700)',
                marginBottom: '8px',
                textAlign: 'left'
              }}>
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  border: '1px solid var(--gray-300)',
                  borderRadius: '8px',
                  fontSize: '16px',
                  color: 'var(--gray-800)',
                  transition: 'border-color 0.3s, box-shadow 0.3s'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = 'var(--primary-500)';
                  e.currentTarget.style.boxShadow = '0 0 0 3px rgba(34, 139, 34, 0.2)';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'var(--gray-300)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              />
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="btn btn-primary"
              style={{
                width: '100%',
                padding: '14px 20px',
                fontSize: '18px',
                fontWeight: '600',
                marginTop: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px'
              }}
            >
              {isPending ? (
                <>
                  <div className="loading-spinner" style={{width: '20px', height: '20px'}}></div>
                  Logging In...
                </>
              ) : (
                'Log In'
              )}
            </button>
          </form>

          <p style={{
            fontSize: '15px',
            color: 'var(--gray-600)',
            marginTop: '30px'
          }}>
            Don't have an account?{' '}
            <Link href="/register" style={{
              color: 'var(--primary-700)',
              fontWeight: '600',
              textDecoration: 'none'
            }}>
              Sign Up
            </Link>
          </p>
        </div>
      </main>
      <Footer />
      <ToastNotification
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </>
  )
}