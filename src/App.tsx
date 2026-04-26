import { useState, useEffect, useCallback } from 'react';
import { Moon, Sun, RotateCcw, Keyboard, Info } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { layouts, type KeyData } from '@/lib/layouts';

interface KeyState {
  pressed: boolean;
  count: number;
}



function App() {
  const [layoutSize, setLayoutSize] = useState('100%');
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
      font-semibold text-sm md:text-base
      transition-all duration-100 ease-out
      select-none cursor-default
      border shadow-sm
    `;
    
    if (darkMode) {
      if (isPressed) {
        baseClasses += ' key-pressed bg-slate-800 border-cyan-400 text-white';
      } else if (isModifier) {
        baseClasses += ' bg-slate-800/80 border-slate-700 text-slate-300 border-b-4 hover:border-slate-500 hover:bg-slate-700/80';
      } else if (isFunction) {
        baseClasses += ' bg-slate-800/60 border-slate-700 text-slate-400 border-b-4 hover:border-slate-500 hover:bg-slate-700/60';
      } else {
        baseClasses += ' bg-slate-900/80 border-slate-700 text-slate-200 border-b-4 hover:border-slate-500 hover:bg-slate-800/80';
      }
    } else {
      if (isPressed) {
        baseClasses += ' key-pressed bg-white border-cyan-500 text-cyan-600';
      } else if (isModifier) {
        baseClasses += ' bg-slate-200 border-slate-300 text-slate-700 border-b-4 hover:border-slate-400 hover:bg-slate-300';
      } else if (isFunction) {
        baseClasses += ' bg-slate-100 border-slate-300 text-slate-600 border-b-4 hover:border-slate-400 hover:bg-slate-200';
      } else {
        baseClasses += ' bg-white border-slate-300 text-slate-800 border-b-4 hover:border-slate-400 hover:bg-slate-50';
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
    <div className={`min-h-screen transition-colors duration-500 ${darkMode ? 'bg-mesh-dark text-slate-50' : 'bg-mesh-light text-slate-900'}`}>
      {/* Header */}
      <header className={`py-6 px-4 border-b ${darkMode ? 'border-white/10 glass-panel-dark' : 'border-black/5 glass-panel-light'} sticky top-0 z-50`}>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-xl ${darkMode ? 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30' : 'bg-gradient-to-br from-cyan-500 to-blue-600 shadow-md'}`}>
              <Keyboard className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-extrabold tracking-tight rgb-text drop-shadow-sm">
                Keyboard Tester
              </h1>
              <p className={`text-sm font-medium mt-0.5 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
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
            
            <Select value={layoutSize} onValueChange={setLayoutSize}>
              <SelectTrigger className={`w-24 h-9 ${darkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-white border-slate-300 text-slate-700'}`}>
                <SelectValue placeholder="Layout" />
              </SelectTrigger>
              <SelectContent className={darkMode ? 'bg-slate-900 border-slate-700 text-slate-200' : 'bg-white border-slate-300 text-slate-700'}>
                <SelectItem value="60%">60%</SelectItem>
                <SelectItem value="75%">75%</SelectItem>
                <SelectItem value="100%">100%</SelectItem>
                <SelectItem value="110%">110%</SelectItem>
                <SelectItem value="120%">120%</SelectItem>
              </SelectContent>
            </Select>
            <Button
              variant="outline"
              size="sm"
              onClick={resetTest}
              className={`gap-2 ${darkMode ? 'bg-transparent border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-slate-100' : 'bg-white border-slate-300 text-slate-700 hover:bg-slate-100'}`}
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        {/* Instructions */}
        <div className={`mb-8 p-4 rounded-xl ${darkMode ? 'glass-panel-dark border-transparent' : 'glass-panel-light border-transparent'} flex items-start gap-3 shadow-md`}>
          <Info className={`w-5 h-5 mt-0.5 flex-shrink-0 ${darkMode ? 'text-cyan-400' : 'text-cyan-600'}`} />
          <p className={`text-sm font-medium ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
            Press any key on your keyboard to test it. Pressed keys will glow and highlight in real-time. 
            The key code and press count will be displayed below.
          </p>
        </div>

        {/* Keyboard */}
        <Card className={`mb-8 ${darkMode ? 'glass-panel-dark border-transparent' : 'glass-panel-light border-transparent'} overflow-hidden shadow-xl`}>
          <CardContent className="p-4 md:p-6">
            <div className="space-y-2">
              {layouts[layoutSize].map((row, rowIndex) => (
                <div key={rowIndex} className="flex gap-1 md:gap-1.5 justify-center">
                  {row.map((key) => {
                    if (key.type === 'spacer') {
                      return <div key={key.code} className={`${key.width} flex-shrink-0`} />
                    }
                    return (
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
                    )
                  })}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Info Panel */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Last Key Pressed */}
          <Card className={`${darkMode ? 'glass-panel-dark border-transparent' : 'glass-panel-light border-transparent'} shadow-lg`}>
            <CardContent className="p-6">
              <p className={`text-sm font-medium mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Last Key Pressed
              </p>
              <div className="flex items-center gap-4">
                <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} drop-shadow-sm`}>
                  {lastKey?.key || '-'}
                </div>
                <div className={`text-sm ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                  {lastKey?.code || 'No key pressed'}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Code */}
          <Card className={`${darkMode ? 'glass-panel-dark border-transparent' : 'glass-panel-light border-transparent'} shadow-lg`}>
            <CardContent className="p-6">
              <p className={`text-sm font-medium mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Key Code
              </p>
              <div className={`text-2xl font-mono font-bold ${darkMode ? 'text-cyan-400' : 'text-cyan-600'} drop-shadow-sm`}>
                {lastKey?.code || '---'}
              </div>
            </CardContent>
          </Card>

          {/* Total Presses */}
          <Card className={`${darkMode ? 'glass-panel-dark border-transparent' : 'glass-panel-light border-transparent'} shadow-lg`}>
            <CardContent className="p-6">
              <p className={`text-sm font-medium mb-2 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Total Key Presses
              </p>
              <div className={`text-4xl font-bold ${darkMode ? 'text-white' : 'text-slate-900'} drop-shadow-sm`}>
                {totalPresses.toLocaleString()}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Active Keys */}
        {Object.entries(keyStates).filter(([, state]) => state.count > 0).length > 0 && (
          <Card className={`mt-4 ${darkMode ? 'glass-panel-dark border-transparent' : 'glass-panel-light border-transparent'} shadow-lg`}>
            <CardContent className="p-6">
              <p className={`text-sm font-medium mb-4 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                Keys Tested
              </p>
              <div className="flex flex-wrap gap-2">
                {Object.entries(keyStates)
                  .filter(([, state]) => state.count > 0)
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
