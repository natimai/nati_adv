import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router-dom";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  errorMessage?: string;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      errorMessage: error.message
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("שגיאה לא צפויה:", error, errorInfo);

    // TODO: להוסיף logging לשירות חיצוני כמו Sentry או LogRocket
    // דוגמה: Sentry.captureException(error, { extra: errorInfo });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return this.props.fallback || (
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#f8f9fa',
          padding: '20px'
        }}>
          <div style={{
            maxWidth: '600px',
            width: '100%',
            textAlign: 'center',
            backgroundColor: 'white',
            padding: '40px',
            borderRadius: '20px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.1)'
          }}>
            <div style={{ fontSize: '80px', marginBottom: '20px' }}>😕</div>
            <h2 style={{
              fontSize: '28px',
              fontWeight: 'bold',
              marginBottom: '15px',
              color: '#333'
            }}>
              אופס! משהו השתבש
            </h2>
            <p style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '30px',
              lineHeight: '1.6'
            }}>
              נתקלנו בבעיה טכנית. אנחנו כבר עובדים על זה!
            </p>

            {import.meta.env.DEV && this.state.errorMessage && (
              <div style={{
                backgroundColor: '#fff3cd',
                padding: '15px',
                borderRadius: '10px',
                marginBottom: '30px',
                fontSize: '14px',
                color: '#856404',
                textAlign: 'left',
                direction: 'ltr',
                overflow: 'auto'
              }}>
                <strong>שגיאה:</strong> {this.state.errorMessage}
              </div>
            )}

            <div style={{
              display: 'flex',
              gap: '15px',
              justifyContent: 'center',
              flexWrap: 'wrap'
            }}>
              <Link
                to="/"
                style={{
                  padding: '15px 30px',
                  backgroundColor: '#007bff',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  display: 'inline-block',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
              >
                חזרה לדף הבית
              </Link>

              <button
                onClick={this.handleReload}
                style={{
                  padding: '15px 30px',
                  backgroundColor: '#6c757d',
                  color: 'white',
                  border: 'none',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  fontSize: '16px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#545b62'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6c757d'}
              >
                נסה שוב
              </button>
            </div>

            <p style={{
              marginTop: '30px',
              fontSize: '14px',
              color: '#999'
            }}>
              אם הבעיה נמשכת, אנא{' '}
              <Link to="/contact" style={{ color: '#007bff', textDecoration: 'underline' }}>
                צרו איתנו קשר
              </Link>
            </p>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
