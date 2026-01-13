export default function SkeletonLoader() {
  return (
    <div className="container" style={{ padding: '100px 0', textAlign: 'center' }}>
      <div className="skeleton-loader" style={{
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '20px'
      }}>
        <div style={{
          height: '40px',
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'loading 1.5s infinite',
          marginBottom: '20px',
          borderRadius: '4px'
        }}></div>
        <div style={{
          height: '20px',
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'loading 1.5s infinite',
          marginBottom: '20px',
          borderRadius: '4px',
          width: '60%'
        }}></div>
        <style>{`
          @keyframes loading {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}</style>
      </div>
    </div>
  );
}
