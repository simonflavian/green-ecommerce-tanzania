export default function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <p style={{
        marginTop: '16px',
        color: 'var(--gray-600)',
        fontSize: '16px'
      }}>
        Loading products...
      </p>
    </div>
  );
}