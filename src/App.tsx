import { useState, useEffect, useCallback } from 'react';
import { Moon, Sun, RotateCcw, Keyboard, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';

interface KeyData {
  code: string;
  label: string;
  width?: string;
  type?: 'modifier' | 'function' | 'normal';
}

interface KeyState {
  pressed: boolean;
  count: number;
}

const keyboardLayout: KeyData[][] = [
  // Function keys row
  [
    { code: 'Escape', label: 'Esc', type: 'function' },
    { code: 'F1', label: 'F1', type: 'function' },
    { code: 'F2', label: 'F2', type: 'function' },
    { code: 'F3', label: 'F3', type: 'function' },
    { code: 'F4', label: 'F4', type: 'function' },
    { code: 'F5', label: 'F5', type: 'function' },
    { code: 'F6', label: 'F6', type: 'function' },
    { code: 'F7', label: 'F7', type: 'function' },
    { code: 'F8', label: 'F8', type: 'function' },
    { code: 'F9', label: 'F9', type: 'function' },
    { code: 'F10', label: 'F10', type: 'function' },
    { code: 'F11', label: 'F11', type: 'function' },
    { code: 'F12', label: 'F12', type: 'function' },
  ],
  // Number row
  [
    { code: 'Backquote', label: '`', type: 'normal' },
    { code: 'Digit1', label: '1', type: 'normal' },
    { code: 'Digit2', label: '2', type: 'normal' },
    { code: 'Digit3', label: '3', type: 'normal' },
    { code: 'Digit4', label: '4', type: 'normal' },
    { code: 'Digit5', label: '5', type: 'normal' },
    { code: 'Digit6', label: '6', type: 'normal' },
    { code: 'Digit7', label: '7', type: 'normal' },
    { code: 'Digit8', label: '8', type: 'normal' },
    { code: 'Digit9', label: '9', type: 'normal' },
    { code: 'Digit0', label: '0', type: 'normal' },
    { code: 'Minus', label: '-', type: 'normal' },
    { code: 'Equal', label: '=', type: 'normal' },
    { code: 'Backspace', label: '← Backspace', width: 'w-24', type: 'modifier' },
  ],
  // QWERTY row
  [
    { code: 'Tab', label: 'Tab', width: 'w-16', type: 'modifier' },
    { code: 'KeyQ', label: 'Q', type: 'normal' },
    { code: 'KeyW', label: 'W', type: 'normal' },
    { code: 'KeyE', label: 'E', type: 'normal' },
    { code: 'KeyR', label: 'R', type: 'normal' },
    { code: 'KeyT', label: 'T', type: 'normal' },
    { code: 'KeyY', label: 'Y', type: 'normal' },
    { code: 'KeyU', label: 'U', type: 'normal' },
    { code: 'KeyI', label: 'I', type: 'normal' },
    { code: 'KeyO', label: 'O', type: 'normal' },
    { code: 'KeyP', label: 'P', type: 'normal' },
    { code: 'BracketLeft', label: '[', type: 'normal' },
    { code: 'BracketRight', label: ']', type: 'normal' },
    { code: 'Backslash', label: '\\', width: 'w-16', type: 'normal' },
  ],
  // Home row
  [
    { code: 'CapsLock', label: 'Caps Lock', width: 'w-20', type: 'modifier' },
    { code: 'KeyA', label: 'A', type: 'normal' },
    { code: 'KeyS', label: 'S', type: 'normal' },
    { code: 'KeyD', label: 'D', type: 'normal' },
    { code: 'KeyF', label: 'F', type: 'normal' },
    { code: 'KeyG', label: 'G', type: 'normal' },
    { code: 'KeyH', label: 'H', type: 'normal' },
    { code: 'KeyJ', label: 'J', type: 'normal' },
    { code: 'KeyK', label: 'K', type: 'normal' },
    { code: 'KeyL', label: 'L', type: 'normal' },
    { code: 'Semicolon', label: ';', type: 'normal' },
    { code: 'Quote', label: "'", type: 'normal' },
    { code: 'Enter', label: 'Enter', width: 'flex-1', type: 'modifier' },
  ],
  // Shift row
  [
    { code: 'ShiftLeft', label: 'Shift', width: 'w-24', type: 'modifier' },
    { code: 'KeyZ', label: 'Z', type: 'normal' },
    { code: 'KeyX', label: 'X', type: 'normal' },
    { code: 'KeyC', label: 'C', type: 'normal' },
    { code: 'KeyV', label: 'V', type: 'normal' },
    { code: 'KeyB', label: 'B', type: 'normal' },
    { code: 'KeyN', label: 'N', type: 'normal' },
    { code: 'KeyM', label: 'M', type: 'normal' },
    { code: 'Comma', label: ',', type: 'normal' },
    { code: 'Period', label: '.', type: 'normal' },
    { code: 'Slash', label: '/', type: 'normal' },
    { code: 'ShiftRight', label: 'Shift', width: 'flex-1', type: 'modifier' },
  ],
  // Bottom row
  [
    { code: 'ControlLeft', label: 'Ctrl', width: 'w-16', type: 'modifier' },
    { code: 'MetaLeft', label: 'Win', width: 'w-14', type: 'modifier' },
    { code: 'AltLeft', label: 'Alt', width: 'w-14', type: 'modifier' },
    { code: 'Space', label: 'Space', width: 'flex-1', type: 'normal' },
    { code: 'AltRight', label: 'Alt', width: 'w-14', type: 'modifier' },
    { code: 'MetaRight', label: 'Win', width: 'w-14', type: 'modifier' },
    { code: 'ControlRight', label: 'Ctrl', width: 'w-16', type: 'modifier' },
  ],
];

function App() {
  const [keyStates, setKeyStates] = useState<Record<string, KeyState>>({});
  const [lastKey, setLastKey] = useState<{ code: string; key: string } | null>(null);
  const [totalPresses, setTotalPresses] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [capsLockOn, setCapsLockOn] = useState(false);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    e.preventDefault();
    
    setKeyStates((prev) => ({
      ...prev,
      [e.code]: {
        pressed: true,
        count: (prev[e.code]?.count || 0) + 1,
      },
    }));
    
    setLastKey({ code: e.code, key: e.key });
    setTotalPresses((prev) => prev + 1);
    
    if (e.code === 'CapsLock') {
      setCapsLockOn((prev) => !prev);
    }
  }, []);

  const handleKeyUp = useCallback((e: KeyboardEvent) => {
    setKeyStates((prev) => ({
      ...prev,
      [e.code]: {
        ...prev[e.code],
        pressed: false,
      },
    }));
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [handleKeyDown, handleKeyUp]);

  const resetTest = () => {
    setKeyStates({});
    setLastKey(null);
    setTotalPresses(0);
    setCapsLockOn(false);
  };

  const getKeyStyle = (keyData: KeyData) => {
    const state = keyStates[keyData.code];
    const isPressed = state?.pressed;
    const isModifier = keyData.type === 'modifier';
    const isFunction = keyData.type === 'function';
    
    let baseClasses = `
      relative flex items-center justify-center
      h-12 md:h-14 rounded-lg
      font-medium text-sm md:text-base
      transition-all duration-75 ease-out
      select-none cursor-default
      border-2
    `;
    
    if (darkMode) {
      if (isPressed) {
        baseClasses += ' bg-gradient-to-br from-cyan-500 to-blue-600 border-cyan-400 text-white shadow-lg shadow-cyan-500/50 scale-95';
      } else if (isModifier) {
        baseClasses += ' bg-slate-800 border-slate-600 text-slate-300 hover:border-slate-500';
      } else if (isFunction) {
        baseClasses += ' bg-slate-800 border-slate-600 text-slate-400 hover:border-slate-500';
      } else {
        baseClasses += ' bg-slate-900 border-slate-700 text-slate-300 hover:border-slate-500';
      }
    } else {
      if (isPressed) {
        baseClasses += ' bg-gradient-to-br from-cyan-500 to-blue-600 border-cyan-400 text-white shadow-lg shadow-cyan-500/50 scale-95';
      } else if (isModifier) {
        baseClasses += ' bg-slate-200 border-slate-400 text-slate-700 hover:border-slate-500';
      } else if (isFunction) {
        baseClasses += ' bg-slate-100 border-slate-300 text-slate-600 hover:border-slate-400';
      } else {
        baseClasses += ' bg-white border-slate-300 text-slate-700 hover:border-slate-400';
      }
    }
    
    // Special styling for Caps Lock when on
    if (keyData.code === 'CapsLock' && capsLockOn && !isPressed) {
      baseClasses += darkMode 
        ? ' border-amber-500 text-amber-400 shadow-sm shadow-amber-500/30' 
        : ' border-amber-500 text-amber-600 shadow-sm shadow-amber-500/30';
    }
    
    return baseClasses;
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-slate-950' : 'bg-slate-50'}`}>
      {/* Header */}
      <header className={`py-6 px-4 border-b ${darkMode ? 'border-slate-800 bg-slate-900/50' : 'border-slate-200 bg-white/50'} backdrop-blur-sm`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${darkMode ? 'bg-gradient-to-br from-cyan-500 to-blue-600' : 'bg-gradient-to-br from-cyan-500 to-blue-600'}`}>
              <Keyboard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                Keyboard Tester
              </h1>
              <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Test every key on your keyboard
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Sun className={`w-4 h-4 ${darkMode ? 'text-slate-500' : 'text-amber-500'}`} />
              <Switch
                checked={darkMode}
                onCheckedChange={setDarkMode}
                className="data-[state=checked]:bg-slate-700"
              />
              <Moon className={`w-4 h-4 ${darkMode ? 'text-cyan-400' : 'text-slate-400'}`} />
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={resetTest}
              className={`gap-2 ${darkMode ? 'border-slate-600 text-slate-300 hover:bg-slate-800' : 'border-slate-300 text-slate-700 hover:bg-slate-100'}`}
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Instructions */}
        <div className={`mb-8 p-4 rounded-xl ${darkMode ? 'bg-slate-900/50 border border-slate-800' : 'bg-white border border-slate-200'} flex items-start gap-3`}>
          <Info className={`w-5 h-5 mt-0.5 flex-shrink-0 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
          <p className={`text-sm ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
            Press any key on your keyboard to test it. Pressed keys will glow and highlight in real-time. 
            The key code and press count will be displayed below.
          </p>
        </div>

        {/* Keyboard */}
        <Card className={`mb-8 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'} overflow-hidden`}>
          <CardContent className="p-4 md:p-6">
            <div className="space-y-2">
              {keyboardLayout.map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-1 md:gap-1.5 justify-center">
                  {row.map((key) => (
                    <div
                      key={key.code}
                      className={`${key.width || 'w-8 md:w-12'} ${getKeyStyle(key)}`}
                    >
                      <span className="truncate px-1">{key.label}</span>
                      {keyStates[key.code]?.count > 0 && (
                        <span className={`absolute -top-1 -right-1 w-4 h-4 rounded-full text-[10px] flex items-center justify-center ${darkMode ? 'bg-cyan-500 text-white' : 'bg-cyan-500 text-white'}`}>
                          {keyStates[key.code].count > 9 ? '9+' : keyStates[key.code].count}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Info Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Last Key Pressed */}
          <Card className={`${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <CardContent className="p-6">
              <p className={`text-sm font-medium mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Last Key Pressed
              </p>
              <div className="flex items-center gap-4">
                <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                  {lastKey?.key || '-'}
                </div>
                <div className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  {lastKey?.code || 'No key pressed'}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Code */}
          <Card className={`${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <CardContent className="p-6">
              <p className={`text-sm font-medium mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Key Code
              </p>
              <div className={`text-2xl font-mono font-bold ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`}>
                {lastKey?.code || '---'}
              </div>
            </CardContent>
          </Card>

          {/* Total Presses */}
          <Card className={`${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <CardContent className="p-6">
              <p className={`text-sm font-medium mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Total Key Presses
              </p>
              <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                {totalPresses.toLocaleString()}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Keys */}
        {Object.entries(keyStates).filter(([_, state]) => state.count > 0).length > 0 && (
          <Card className={`mt-4 ${darkMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-slate-200'}`}>
            <CardContent className="p-6">
              <p className={`text-sm font-medium mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Keys Tested
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(keyStates)
                  .filter(([_, state]) => state.count > 0)
                  .sort((a, b) => b[1].count - a[1].count)
                  .map(([code, state]) => (
                    <span
                      key={code}
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        darkMode
                          ? 'bg-slate-800 text-slate-300 border border-slate-700'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}
                    >
                      {code} ({state.count})
                    </span>
                  ))}
              </div>
            </CardContent>
          </Card>
        )}
      </main>

      {/* Footer */}
      <footer className={`py-6 px-4 border-t ${darkMode ? 'border-slate-800' : 'border-slate-200'}`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
            Press any key to test your keyboard • Caps Lock indicator is shown
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
