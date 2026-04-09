import { useEffect, useState } from 'react';
import apiClient from '../services/api';

export default function Home() {
    const [apiUrl, setApiUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        setApiUrl(apiClient.defaults.baseURL);
    }, []);

    const testApiCall = async () => {
        setLoading(true);
        setError(null);
        try {
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
        <div>
            <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
            <div className="bg-white rounded-lg shadow p-6">
                <p className="mb-4">API Base URL: <strong className="text-purple-600">{apiUrl}</strong></p>

                <button
                    onClick={testApiCall}
                    disabled={loading}
                    className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:bg-gray-400"
                >
                    {loading ? 'Testing...' : 'Test API Call'}
                </button>

                {error && <p className="text-red-600 mt-4">Error: {error}</p>}
            </div>
        </div>
    );
}