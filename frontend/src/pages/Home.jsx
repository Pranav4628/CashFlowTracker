import { useEffect, useState } from 'react';
import apiClient from '../services/api';

export default function Home() {
    const [apiUrl, setApiUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Capture the API base URL for display
        setApiUrl(apiClient.defaults.baseURL);
    }, []);

    const testApiCall = async () => {
        setLoading(true);
        setError(null);
        try {
            // Test call to health endpoint (or any endpoint)
            const response = await apiClient.get('/health');
            console.log('API Response:', response.data);
            alert('API call successful! Check console.');
        } catch (err) {
            setError(err.message || 'API call failed');
            console.error('API Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ padding: '20px' }}>
            <h1>Home</h1>
            <p>API Base URL: <strong>{apiUrl}</strong></p>

            <button
                onClick={testApiCall}
                disabled={loading}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    backgroundColor: loading ? '#ccc' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '4px',
                }}
            >
                {loading ? 'Testing...' : 'Test API Call'}
            </button>

            {error && <p style={{ color: 'red', marginTop: '10px' }}>Error: {error}</p>}
        </div>
    );
}