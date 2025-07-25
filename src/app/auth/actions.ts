'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers' // Import cookies

// Define a type for the action's return state
type AuthState = {
  success: boolean;
  message: string;
} | null;

// Simulate a user database
const users = new Map<string, { password: string; name: string }>();

export async function login(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Basic validation
  if (!email || !password) {
    return { success: false, message: 'Email and password are required.' };
  }

  // Simulate user lookup
  const user = users.get(email);

  if (user && user.password === password) {
    // Set a simple auth cookie
    (await
          // Set a simple auth cookie
          cookies()).set('auth_token', 'true', {
      httpOnly: true, // Make it inaccessible to client-side JS (except for AuthContext reading it)
      secure: process.env.NODE_ENV === 'production', // Only send over HTTPS in production
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: '/',
    });
    console.log(`User ${email} logged in successfully.`);
    redirect('/account/dashboard'); // Redirect to user dashboard
  } else {
    return { success: false, message: 'Invalid email or password.' };
  }
}

export async function register(prevState: AuthState, formData: FormData): Promise<AuthState> {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  // Basic validation
  if (!name || !email || !password) {
    return { success: false, message: 'All fields are required.' };
  }

  // Simulate checking if user already exists
  if (users.has(email)) {
    return { success: false, message: 'User with this email already exists.' };
  }

  // Simulate user creation
  users.set(email, { password, name });
  console.log(`User ${name} (${email}) registered successfully.`);

  // In a real app, you might automatically log them in or redirect to login
  redirect('/login?registered=true'); // Redirect to login with a success message
}

export async function logout() {
  // Clear the auth cookie
  const cookieStore = await cookies();
  cookieStore.delete('auth_token');
  console.log('User logged out.');
  redirect('/'); // Redirect to homepage
}