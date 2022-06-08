import { useState } from 'react';

// compose a hook that only sets up a boolean state value - should toggle dark mode on (true) or off (false)



export function useDarkMode(){
  const [darkMode, setDarkMode] = useState(false);

  return [darkMode, setDarkMode]
}