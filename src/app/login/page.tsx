// app/login/page.tsx
import { Suspense } from 'react'
import LoginPageContent from './LoginPageContent'

// Loading component for suspense fallback
function LoginLoading() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
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
        <div style={{
          display: 'inline-block',
          width: '40px',
          height: '40px',
          border: '4px solid var(--gray-200)',
          borderTop: '4px solid var(--primary-500)',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite'
        }}></div>
        <p style={{
          marginTop: '20px',
          color: 'var(--gray-600)',
          fontSize: '16px'
        }}>
          Loading login page...
        </p>
      </div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={<LoginLoading />}>
      <LoginPageContent />
    </Suspense>
  )
}