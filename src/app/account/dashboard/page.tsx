'use client'

import Header from '@/components/header'
import Footer from '@/components/footer'
import { logout } from '@/app/auth/actions'
import { useAuth } from '@/context/auth-context' // Import useAuth
import { useEffect } from 'react'
import { useRouter } from 'next/navigation' // Import useRouter

export default function DashboardPage() {
  const { isLoggedIn, logout: authLogout } = useAuth(); // Get isLoggedIn and logout from AuthContext
  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push('/login'); // Redirect to login if not logged in
    }
  }, [isLoggedIn, router]);

  const handleLogout = async (formData: FormData) => {
    await logout(); // Call the server action
    authLogout(); // Update client-side AuthContext
  };

  if (!isLoggedIn) {
    return null; // Or a loading spinner while redirecting
  }

  return (
    <>
      <Header />
      <main style={{
        minHeight: 'calc(100vh - 128px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px',
        backgroundColor: 'var(--gray-50)',
        textAlign: 'center'
      }}>
        <div style={{
          backgroundColor: 'var(--white)',
          borderRadius: '12px',
          boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
          padding: '40px',
          maxWidth: '600px',
          width: '100%'
        }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: '600',
            color: 'var(--primary-700)',
            marginBottom: '20px'
          }}>
            Welcome to Your Dashboard!
          </h1>
          <p style={{
            fontSize: '18px',
            color: 'var(--gray-700)',
            marginBottom: '30px',
            lineHeight: '1.6'
          }}>
            This is your personal space to manage your orders, update your profile, and track your sustainable journey with GreenStore.
          </p>
          <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
            <a href="#" className="btn btn-primary" style={{textDecoration: 'none', padding: '12px 24px', fontSize: '16px'}}>
              View Order History
            </a>
            <a href="#" className="btn btn-secondary" style={{textDecoration: 'none', padding: '12px 24px', fontSize: '16px'}}>
              Edit Profile
            </a>
            <form action={handleLogout}> {/* Use the new handleLogout function */}
              <button type="submit" className="btn btn-outline" style={{width: '100%', padding: '12px 24px', fontSize: '16px', marginTop: '20px'}}>
                Log Out
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}