export const firebaseConfig = {
  apiKey: "AIzaSyA28jc1OxMfc33m7rk8fCrfgmnw_uLzc50",
  authDomain: "trading-journal-914c4.firebaseapp.com",
  projectId: "trading-journal-914c4",
  storageBucket: "trading-journal-914c4.firebasestorage.app",
  messagingSenderId: "504948935584",
  appId: "1:504948935584:web:dbf3c74177c0794c9fb2c5",
  measurementId: "G-8V9K3WBRXN"
};

export const DERIV_APP_ID = 123621;
export const ADMIN_PASSCODE = '#journal_admin_2026#';
export const DERIV_TOKEN_PLACEHOLDER = '';

export function configureDeriv(token) {
  if (typeof token !== 'string' || !token) return;
  window.__deriv_token__ = token;
}
