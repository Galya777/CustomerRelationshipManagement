import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('not-found-view')
export class NotFoundView extends LitElement {
  render() {
    return html`
      <div class="container">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <a href="/dashboard" class="button">Go to Dashboard</a>
      </div>
      
      <style>
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
          text-align: center;
          padding: 2rem;
        }
        
        h1 {
          font-size: 2.5rem;
          color: #dc3545;
          margin-bottom: 1rem;
        }
        
        p {
          font-size: 1.25rem;
          color: #6c757d;
          margin-bottom: 2rem;
        }
        
        .button {
          display: inline-block;
          padding: 0.75rem 1.5rem;
          background-color: #0d6efd;
          color: white;
          text-decoration: none;
          border-radius: 0.375rem;
          transition: background-color 0.2s;
        }
        
        .button:hover {
          background-color: #0b5ed7;
        }
      </style>
    `;
  }
}
