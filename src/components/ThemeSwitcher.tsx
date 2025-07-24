import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeSwitcher = () => {
  const [isDark, setIsDark] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('blue');

  const themes = [
    { name: 'blue', colors: 'bg-gradient-to-r from-blue-500 to-blue-600', label: 'Blue' },
    { name: 'teal', colors: 'bg-gradient-to-r from-teal-500 to-emerald-500', label: 'Teal' },
    { name: 'purple', colors: 'bg-gradient-to-r from-purple-500 to-pink-500', label: 'Purple' },
    { name: 'orange', colors: 'bg-gradient-to-r from-orange-500 to-red-500', label: 'Orange' },
  ];

  useEffect(() => {
    // Check for saved theme preference or default to 'blue'
    const savedTheme = localStorage.getItem('theme-color') || 'blue';
    const savedDarkMode = localStorage.getItem('dark-mode') === 'true';
    
    setCurrentTheme(savedTheme);
    setIsDark(savedDarkMode);
    
    // Apply dark mode
    if (savedDarkMode) {
      document.documentElement.classList.add('dark');
    }
    
    // Apply theme colors
    applyTheme(savedTheme);
  }, []);

  const applyTheme = (themeName: string) => {
    const root = document.documentElement;
    
    switch (themeName) {
      case 'blue':
        root.style.setProperty('--primary', '202 92% 55%');
        root.style.setProperty('--primary-glow', '185 84% 65%');
        root.style.setProperty('--secondary', '173 80% 50%');
        break;
      case 'teal':
        root.style.setProperty('--primary', '173 80% 50%');
        root.style.setProperty('--primary-glow', '160 84% 65%');
        root.style.setProperty('--secondary', '147 80% 50%');
        break;
      case 'purple':
        root.style.setProperty('--primary', '280 100% 70%');
        root.style.setProperty('--primary-glow', '290 84% 75%');
        root.style.setProperty('--secondary', '330 100% 70%');
        break;
      case 'orange':
        root.style.setProperty('--primary', '25 100% 65%');
        root.style.setProperty('--primary-glow', '35 84% 70%');
        root.style.setProperty('--secondary', '15 100% 60%');
        break;
    }
  };

  const handleThemeChange = (themeName: string) => {
    setCurrentTheme(themeName);
    localStorage.setItem('theme-color', themeName);
    applyTheme(themeName);
  };

  const toggleDarkMode = () => {
    const newDarkMode = !isDark;
    setIsDark(newDarkMode);
    localStorage.setItem('dark-mode', newDarkMode.toString());
    
    if (newDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <>
      {/* Theme Color Switcher */}
      <div className="theme-switcher">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => handleThemeChange(theme.name)}
            className={`theme-btn ${theme.colors} ${
              currentTheme === theme.name ? 'active' : ''
            }`}
            title={`Switch to ${theme.label} theme`}
            aria-label={`Switch to ${theme.label} theme`}
          />
        ))}
      </div>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className="dark-toggle group"
        title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      >
        {isDark ? (
          <Sun className="w-5 h-5 text-yellow-500 group-hover:rotate-90 transition-transform duration-300" />
        ) : (
          <Moon className="w-5 h-5 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
        )}
      </button>
    </>
  );
};

export default ThemeSwitcher;