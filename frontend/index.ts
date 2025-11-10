// Simple login page implementation
document.addEventListener('DOMContentLoaded', () => {
  const outlet = document.getElementById('outlet');
  if (!outlet) return;

  // Check if user is already logged in
  const isLoggedIn = localStorage.getItem('user') !== null;
  const currentPath = window.location.pathname;

  // Handle routing
  if (isLoggedIn && (currentPath === '/login' || currentPath === '/register')) {
    window.location.href = '/';
    return;
  }

  // Show appropriate page based on path
  if (currentPath === '/register') {
    showRegisterPage(outlet);
  } else if (currentPath === '/') {
    if (!isLoggedIn) {
      window.location.href = '/login';
    } else {
      showDashboardPage(outlet);
    }
  } else {
    showLoginPage(outlet);
  }

  // Handle navigation
  document.addEventListener('click', (e) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    
    if (anchor) {
      e.preventDefault();
      const href = anchor.getAttribute('href');
      if (href) {
        window.history.pushState({}, '', href);
        window.location.reload(); // Simple page reload for navigation
      }
    }
  });
});

function showLoginPage(container: HTMLElement) {
  container.innerHTML = `
    <div class="card">
      <div class="logo">
        <h1>CRM System</h1>
      </div>
      <h1>Login</h1>
      <form id="loginForm">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" required>
        </div>
        <button type="submit">Login</button>
      </form>
      <div class="text-center mt-3">
        Don't have an account? <a href="/register">Register here</a>
      </div>
    </div>
  `;

  const form = document.getElementById('loginForm') as HTMLFormElement;
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = (document.getElementById('username') as HTMLInputElement).value;
    const password = (document.getElementById('password') as HTMLInputElement).value;
    
    // Simple validation
    if (username && password) {
      // In a real app, you would make an API call here
      console.log('Login attempt with:', { username, password });
      
      // Simulate successful login
      localStorage.setItem('user', JSON.stringify({ username }));
      window.location.href = '/';
    } else {
      alert('Please enter both username and password');
    }
  });
}

function showRegisterPage(container: HTMLElement) {
  container.innerHTML = `
    <div class="card">
      <div class="logo">
        <h1>CRM System</h1>
      </div>
      <h1>Create Account</h1>
      <form id="registerForm">
        <div class="form-group">
          <label for="regUsername">Username</label>
          <input type="text" id="regUsername" required>
        </div>
        <div class="form-group">
          <label for="regEmail">Email</label>
          <input type="email" id="regEmail" required>
        </div>
        <div class="form-group">
          <label for="regPassword">Password</label>
          <input type="password" id="regPassword" required>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" required>
        </div>
        <button type="submit">Register</button>
      </form>
      <div class="text-center mt-3">
        Already have an account? <a href="/login">Login here</a>
      </div>
    </div>
  `;

  const form = document.getElementById('registerForm') as HTMLFormElement;
  form?.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = (document.getElementById('regUsername') as HTMLInputElement).value;
    const email = (document.getElementById('regEmail') as HTMLInputElement).value;
    const password = (document.getElementById('regPassword') as HTMLInputElement).value;
    const confirmPassword = (document.getElementById('confirmPassword') as HTMLInputElement).value;
    
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    // In a real app, you would make an API call here
    console.log('Registration attempt with:', { username, email, password });
    
    // Simulate successful registration
    alert('Registration successful! Please login.');
    window.location.href = '/login';
  });
}

function showDashboardPage(container: HTMLElement) {
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  container.innerHTML = `
    <div class="card">
      <div class="logo">
        <h1>CRM System</h1>
      </div>
      <h1>Welcome, ${user.username || 'User'}!</h1>
      <p>You are now logged in to the CRM system.</p>
      <button id="logoutBtn">Logout</button>
    </div>
  `;
  
  const logoutBtn = document.getElementById('logoutBtn');
  logoutBtn?.addEventListener('click', () => {
    localStorage.removeItem('user');
    window.location.href = '/login';
  });
}
