import React, { useEffect, useState } from 'react'

function App() {
  const [text, setText] = useState('')
  const [target, setTarget] = useState('es')
  const [result, setResult] = useState('')
  const [loading, setLoading] = useState(false)

  const handleTranslate = async () => {
    if (!text) return
    
    setLoading(true)
    setResult('')
    
    try {
      const url = `https://api.mymemory.translated.net/get?q=${encodeURIComponent(text)}&langpair=en|${target}`
      const response = await fetch(url)
      const data = await response.json()
      
      if (data.responseStatus === 200) {
        setResult(data.responseData.translatedText)
      } else {
        setResult('Translation failed')
      }
    } catch (error) {
      setResult('Error: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-white text-center mb-8">🌍 Universal Translator</h1>
        
        <div className="bg-white rounded-lg shadow-xl p-6 mb-6">
          <textarea
            className="w-full h-32 p-4 border border-gray-300 rounded-lg mb-4"
            placeholder="Enter text to translate..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          
          <select
            className="w-full p-4 border border-gray-300 rounded-lg mb-4"
            value={target}
            onChange={(e) => setTarget(e.target.value)}
          >
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="de">German</option>
            <option value="hi">Hindi</option>
            <option value="ar">Arabic</option>
            <option value="ja">Japanese</option>
          </select>
          
          <button
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 disabled:opacity-50"
            onClick={handleTranslate}
            disabled={loading || !text}
          >
            {loading ? 'Translating...' : 'Translate'}
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-6">
          <h3 className="text-xl font-bold mb-4">Result:</h3>
          <p className="text-gray-800">{result || 'No translation yet'}</p>
        </div>
      </div>
    </div>
  )
}

export default App