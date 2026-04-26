export interface KeyData {
  code: string;
  label: string;
  width?: string;
  type?: 'modifier' | 'function' | 'normal' | 'spacer' | 'numpad' | 'nav' | 'macro';
}

// 60% Layout (Compact)
export const layout60: KeyData[][] = [
  // Number row
  [
    { code: 'Escape', label: 'Esc', type: 'normal' },
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
    { code: 'Backslash', label: '\\', width: 'flex-1', type: 'normal' },
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
    { code: 'ControlLeft', label: 'Ctrl', width: 'w-14', type: 'modifier' },
    { code: 'MetaLeft', label: 'Win', width: 'w-14', type: 'modifier' },
    { code: 'AltLeft', label: 'Alt', width: 'w-14', type: 'modifier' },
    { code: 'Space', label: 'Space', width: 'flex-1', type: 'normal' },
    { code: 'AltRight', label: 'Alt', width: 'w-14', type: 'modifier' },
    { code: 'MetaRight', label: 'Win', width: 'w-14', type: 'modifier' },
    { code: 'ContextMenu', label: 'Menu', width: 'w-14', type: 'modifier' },
    { code: 'ControlRight', label: 'Ctrl', width: 'w-14', type: 'modifier' },
  ],
];

// 75% Layout (TKL Compact)
export const layout75: KeyData[][] = [
  // F Row
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
    { code: 'Delete', label: 'Del', type: 'nav' },
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
    { code: 'Backspace', label: 'Backspace', width: 'flex-1', type: 'modifier' },
    { code: 'Home', label: 'Home', type: 'nav' },
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
    { code: 'Backslash', label: '\\', width: 'flex-1', type: 'normal' },
    { code: 'PageUp', label: 'PgUp', type: 'nav' },
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
    { code: 'PageDown', label: 'PgDn', type: 'nav' },
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
    { code: 'ShiftRight', label: 'Shift', width: 'w-16', type: 'modifier' },
    { code: 'ArrowUp', label: '↑', type: 'nav' },
    { code: 'End', label: 'End', type: 'nav' },
  ],
  // Bottom row
  [
    { code: 'ControlLeft', label: 'Ctrl', width: 'w-12', type: 'modifier' },
    { code: 'MetaLeft', label: 'Win', width: 'w-12', type: 'modifier' },
    { code: 'AltLeft', label: 'Alt', width: 'w-12', type: 'modifier' },
    { code: 'Space', label: 'Space', width: 'flex-1', type: 'normal' },
    { code: 'AltRight', label: 'Alt', width: 'w-12', type: 'modifier' },
    { code: 'MetaRight', label: 'Win', width: 'w-12', type: 'modifier' },
    { code: 'ControlRight', label: 'Ctrl', width: 'w-12', type: 'modifier' },
    { code: 'ArrowLeft', label: '←', type: 'nav' },
    { code: 'ArrowDown', label: '↓', type: 'nav' },
    { code: 'ArrowRight', label: '→', type: 'nav' },
  ],
];

// Helper definitions for blocks to easily build 100%, 110%, 120%
const mainBlock = layout75.map((row, i) => {
  if (i === 0) return [...row.slice(0, 13)];
  if (i === 1) return [...row.slice(0, 14)];
  if (i === 2) return [...row.slice(0, 14)];
  if (i === 3) return [...row.slice(0, 13)];
  if (i === 4) return [...row.slice(0, 12), { code: 'ShiftRight', label: 'Shift', width: 'flex-1', type: 'modifier' }];
  if (i === 5) return [...row.slice(0, 7)];
  return row;
}) as KeyData[][];

// 100% Full-Size Layout
export const layout100: KeyData[][] = [
  // F Row
  [
    { code: 'Escape', label: 'Esc', type: 'function' },
    { code: 'space1', label: '', type: 'spacer', width: 'w-4' },
    { code: 'F1', label: 'F1', type: 'function' },
    { code: 'F2', label: 'F2', type: 'function' },
    { code: 'F3', label: 'F3', type: 'function' },
    { code: 'F4', label: 'F4', type: 'function' },
    { code: 'space2', label: '', type: 'spacer', width: 'w-4' },
    { code: 'F5', label: 'F5', type: 'function' },
    { code: 'F6', label: 'F6', type: 'function' },
    { code: 'F7', label: 'F7', type: 'function' },
    { code: 'F8', label: 'F8', type: 'function' },
    { code: 'space3', label: '', type: 'spacer', width: 'w-4' },
    { code: 'F9', label: 'F9', type: 'function' },
    { code: 'F10', label: 'F10', type: 'function' },
    { code: 'F11', label: 'F11', type: 'function' },
    { code: 'F12', label: 'F12', type: 'function' },
    { code: 'space4', label: '', type: 'spacer', width: 'w-8' },
    { code: 'PrintScreen', label: 'PrtSc', type: 'nav' },
    { code: 'ScrollLock', label: 'ScrLk', type: 'nav' },
    { code: 'Pause', label: 'Pause', type: 'nav' },
    { code: 'space5', label: '', type: 'spacer', width: 'w-8' },
    // Numpad spacing
    { code: 'space6', label: '', type: 'spacer', width: 'w-10' },
    { code: 'space7', label: '', type: 'spacer', width: 'w-10' },
    { code: 'space8', label: '', type: 'spacer', width: 'w-10' },
    { code: 'space9', label: '', type: 'spacer', width: 'w-10' },
  ],
  // Number row
  [
    ...mainBlock[1],
    { code: 'space1', label: '', type: 'spacer', width: 'w-8' },
    { code: 'Insert', label: 'Ins', type: 'nav' },
    { code: 'Home', label: 'Home', type: 'nav' },
    { code: 'PageUp', label: 'PgUp', type: 'nav' },
    { code: 'space2', label: '', type: 'spacer', width: 'w-8' },
    { code: 'NumLock', label: 'Num', type: 'numpad' },
    { code: 'NumpadDivide', label: '/', type: 'numpad' },
    { code: 'NumpadMultiply', label: '*', type: 'numpad' },
    { code: 'NumpadSubtract', label: '-', type: 'numpad' },
  ],
  // QWERTY row
  [
    ...mainBlock[2],
    { code: 'space1', label: '', type: 'spacer', width: 'w-8' },
    { code: 'Delete', label: 'Del', type: 'nav' },
    { code: 'End', label: 'End', type: 'nav' },
    { code: 'PageDown', label: 'PgDn', type: 'nav' },
    { code: 'space2', label: '', type: 'spacer', width: 'w-8' },
    { code: 'Numpad7', label: '7', type: 'numpad' },
    { code: 'Numpad8', label: '8', type: 'numpad' },
    { code: 'Numpad9', label: '9', type: 'numpad' },
    { code: 'NumpadAdd', label: '+', type: 'numpad' }, // height 2 ideally, but keep simple
  ],
  // Home row
  [
    ...mainBlock[3],
    { code: 'space1', label: '', type: 'spacer', width: 'w-8' },
    { code: 'space2', label: '', type: 'spacer', width: 'w-10' },
    { code: 'space3', label: '', type: 'spacer', width: 'w-10' },
    { code: 'space4', label: '', type: 'spacer', width: 'w-10' },
    { code: 'space5', label: '', type: 'spacer', width: 'w-8' },
    { code: 'Numpad4', label: '4', type: 'numpad' },
    { code: 'Numpad5', label: '5', type: 'numpad' },
    { code: 'Numpad6', label: '6', type: 'numpad' },
    { code: 'space6', label: '', type: 'spacer', width: 'w-10' },
  ],
  // Shift row
  [
    ...mainBlock[4],
    { code: 'space1', label: '', type: 'spacer', width: 'w-8' },
    { code: 'space2', label: '', type: 'spacer', width: 'w-10' },
    { code: 'ArrowUp', label: '↑', type: 'nav' },
    { code: 'space3', label: '', type: 'spacer', width: 'w-10' },
    { code: 'space4', label: '', type: 'spacer', width: 'w-8' },
    { code: 'Numpad1', label: '1', type: 'numpad' },
    { code: 'Numpad2', label: '2', type: 'numpad' },
    { code: 'Numpad3', label: '3', type: 'numpad' },
    { code: 'NumpadEnter', label: 'Enter', type: 'numpad' }, // height 2
  ],
  // Bottom row
  [
    ...mainBlock[5],
    { code: 'space1', label: '', type: 'spacer', width: 'w-8' },
    { code: 'ArrowLeft', label: '←', type: 'nav' },
    { code: 'ArrowDown', label: '↓', type: 'nav' },
    { code: 'ArrowRight', label: '→', type: 'nav' },
    { code: 'space2', label: '', type: 'spacer', width: 'w-8' },
    { code: 'Numpad0', label: '0', width: 'w-24', type: 'numpad' }, // width 2
    { code: 'NumpadDecimal', label: '.', type: 'numpad' },
    { code: 'space3', label: '', type: 'spacer', width: 'w-10' },
  ],
];

// 110% Layout (100% + Macro column on the left)
export const layout110: KeyData[][] = layout100.map((row, i) => {
  const macros = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'];
  return [
    { code: `Macro${i+1}`, label: macros[i], type: 'macro' },
    { code: `space-m${i}`, label: '', type: 'spacer', width: 'w-4' },
    ...row
  ];
});

// 120% Layout (110% + Media keys/extra macros on top row)
export const layout120: KeyData[][] = [
  // Top Media/Macro Row
  [
    { code: 'MacroTop1', label: 'M-Top1', type: 'macro' },
    { code: 'MacroTop2', label: 'M-Top2', type: 'macro' },
    { code: 'MacroTop3', label: 'M-Top3', type: 'macro' },
    { code: 'MacroTop4', label: 'M-Top4', type: 'macro' },
    { code: 'spaceTop1', label: '', type: 'spacer', width: 'flex-1' },
    { code: 'MediaTrackPrevious', label: '⏮', type: 'macro' },
    { code: 'MediaPlayPause', label: '⏯', type: 'macro' },
    { code: 'MediaTrackNext', label: '⏭', type: 'macro' },
    { code: 'AudioVolumeMute', label: '🔇', type: 'macro' },
  ],
  ...layout110
];

export const layouts: Record<string, KeyData[][]> = {
  '60%': layout60,
  '75%': layout75,
  '100%': layout100,
  '110%': layout110,
  '120%': layout120,
};
