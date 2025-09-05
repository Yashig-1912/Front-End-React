import React, { useCallback, useMemo, useState } from 'react'

export default function App() {
  const [generatedString, setGeneratedString] = useState('')
  const [length, setLength] = useState(16)
  const [includeUppercase, setIncludeUppercase] = useState(true)
  const [includeLowercase, setIncludeLowercase] = useState(true)
  const [includeDigits, setIncludeDigits] = useState(true)
  const [includeSpecial, setIncludeSpecial] = useState(false)

  const characterSet = useMemo(() => {
    let chars = ''
    if (includeUppercase) chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    if (includeLowercase) chars += 'abcdefghijklmnopqrstuvwxyz'
    if (includeDigits) chars += '0123456789'
    if (includeSpecial) chars += '!@#$%^&*()_+-=[]{}|;:,.<>?'
    return chars
  }, [includeUppercase, includeLowercase, includeDigits, includeSpecial])

  const generateRandomString = useCallback(() => {
    const chars = characterSet
    const desiredLength = Math.max(1, Math.min(1024, Number(length) || 1))
    if (!chars || chars.length === 0) {
      setGeneratedString('')
      return
    }

    // Prefer crypto for better randomness, fallback to Math.random
    const resultChars = []
    const charsLength = chars.length

    if (window.crypto && window.crypto.getRandomValues) {
      const buffer = new Uint32Array(desiredLength)
      window.crypto.getRandomValues(buffer)
      for (let i = 0; i < desiredLength; i++) {
        const index = buffer[i] % charsLength
        resultChars.push(chars[index])
      }
    } else {
      for (let i = 0; i < desiredLength; i++) {
        const index = Math.floor(Math.random() * charsLength)
        resultChars.push(chars[index])
      }
    }

    setGeneratedString(resultChars.join(''))
  }, [characterSet, length])

  const hasAtLeastOneOption = includeUppercase || includeLowercase || includeDigits || includeSpecial

  return (
    <div style={{
      minHeight: '100vh',
      width: '100vw',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '2rem',
        color: 'white'
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          fontWeight: 'bold',
          marginBottom: '2rem',
          textAlign: 'center',
          textShadow: '0 2px 4px rgba(0,0,0,0.3)'
        }}>
          Random String Generator
        </h1>

        <div style={{
          background: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(10px)',
          borderRadius: '16px',
          padding: '2rem',
          border: '1px solid rgba(255,255,255,0.2)',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            display: 'grid',
            gap: '1.5rem',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            marginBottom: '2rem'
          }}>
            <div>
              <label style={{
                display: 'block',
                marginBottom: '0.5rem',
                fontSize: '0.9rem',
                opacity: 0.9
              }}>
                Length
              </label>
              <input
                type="number"
                min={1}
                max={1024}
                value={length}
                onChange={(e) => setLength(Number(e.target.value))}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  background: 'rgba(255,255,255,0.1)',
                  color: 'white',
                  fontSize: '1rem',
                  outline: 'none',
                  transition: 'all 0.2s ease'
                }}
                onFocus={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.6)'}
                onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}
              />
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem'
            }}>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem'
              }}>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}>
                  <input
                    type="checkbox"
                    checked={includeUppercase}
                    onChange={(e) => setIncludeUppercase(e.target.checked)}
                    style={{
                      width: '18px',
                      height: '18px',
                      accentColor: '#667eea'
                    }}
                  />
                  <span>A-Z</span>
                </label>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}>
                  <input
                    type="checkbox"
                    checked={includeLowercase}
                    onChange={(e) => setIncludeLowercase(e.target.checked)}
                    style={{
                      width: '18px',
                      height: '18px',
                      accentColor: '#667eea'
                    }}
                  />
                  <span>a-z</span>
                </label>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}>
                  <input
                    type="checkbox"
                    checked={includeDigits}
                    onChange={(e) => setIncludeDigits(e.target.checked)}
                    style={{
                      width: '18px',
                      height: '18px',
                      accentColor: '#667eea'
                    }}
                  />
                  <span>0-9</span>
                </label>
                <label style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem'
                }}>
                  <input
                    type="checkbox"
                    checked={includeSpecial}
                    onChange={(e) => setIncludeSpecial(e.target.checked)}
                    style={{
                      width: '18px',
                      height: '18px',
                      accentColor: '#667eea'
                    }}
                  />
                  <span>!@#$</span>
                </label>
              </div>
            </div>
          </div>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '1rem',
            marginBottom: '2rem'
          }}>
            <button
              onClick={generateRandomString}
              disabled={!hasAtLeastOneOption}
              style={{
                padding: '0.75rem 2rem',
                borderRadius: '8px',
                border: 'none',
                background: hasAtLeastOneOption 
                  ? 'linear-gradient(45deg, #667eea, #764ba2)' 
                  : 'rgba(255,255,255,0.2)',
                color: 'white',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: hasAtLeastOneOption ? 'pointer' : 'not-allowed',
                opacity: hasAtLeastOneOption ? 1 : 0.5,
                transition: 'all 0.2s ease',
                boxShadow: hasAtLeastOneOption ? '0 4px 15px rgba(102, 126, 234, 0.4)' : 'none'
              }}
              onMouseOver={(e) => {
                if (hasAtLeastOneOption) {
                  e.target.style.transform = 'translateY(-2px)'
                  e.target.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)'
                }
              }}
              onMouseOut={(e) => {
                if (hasAtLeastOneOption) {
                  e.target.style.transform = 'translateY(0)'
                  e.target.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)'
                }
              }}
            >
              Generate
            </button>
            {!hasAtLeastOneOption && (
              <span style={{
                fontSize: '0.9rem',
                opacity: 0.8,
                color: '#ffd700'
              }}>
                Select at least one character type
              </span>
            )}
          </div>

          <div>
            <span style={{
              display: 'block',
              marginBottom: '0.5rem',
              fontSize: '0.9rem',
              opacity: 0.9
            }}>
              Generated String
            </span>
            <div style={{
              background: 'rgba(0,0,0,0.2)',
              borderRadius: '8px',
              padding: '1.5rem',
              fontFamily: 'Monaco, Consolas, monospace',
              fontSize: '1.1rem',
              wordBreak: 'break-all',
              border: '1px solid rgba(255,255,255,0.1)',
              minHeight: '60px',
              display: 'flex',
              alignItems: 'center',
              color: generatedString ? 'white' : 'rgba(255,255,255,0.5)'
            }}>
              {generatedString || 'Click Generate to create a random string...'}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


