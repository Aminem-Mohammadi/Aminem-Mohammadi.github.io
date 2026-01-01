import { MouseEvent } from 'react';
import { SanitizedThemeConfig } from '../../interfaces/sanitized-config';
import { LOCAL_STORAGE_KEY_NAME } from '../../constants';
import { skeleton } from '../../utils';
const ThemeChanger = ({
  theme,
  setTheme,
  loading,
  themeConfig,
}: {
  theme: string;
  setTheme: (theme: string) => void;
  loading: boolean;
  themeConfig: SanitizedThemeConfig;
}) => {
  const changeTheme = (e: MouseEvent<HTMLInputElement>) => {
    const selectedTheme = e.currentTarget.checked ? 'lemonade' : 'sunset';
    document.querySelector('html')?.setAttribute('data-theme', selectedTheme);
    typeof window !== 'undefined' &&
      localStorage.setItem(LOCAL_STORAGE_KEY_NAME, selectedTheme);
    setTheme(selectedTheme);
  };

  return (
    <div className="card overflow-visible shadow-lg compact bg-base-100">
      <div className="flex-row items-center justify-between flex px-6 py-4">
        <div className="flex-1">
          <h5 className="card-title">
            {loading ? (
              skeleton({ widthCls: 'w-20', heightCls: 'h-8', className: 'mb-1' })
            ) : (
              <span className="text-base-content opacity-70">Theme</span>
            )}
          </h5>
          <span className="text-base-content text-opacity-40 capitalize text-sm">
            {loading
              ? skeleton({ widthCls: 'w-16', heightCls: 'h-5' })
              : theme === 'lemonade' ? 'Light Mode' : 'Dark Mode'}
          </span>
        </div>
        <div className="flex-0">
          {loading ? (
            skeleton({ widthCls: 'w-14 md:w-28', heightCls: 'h-10', className: 'mr-6' })
          ) : (
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={changeTheme}
                checked={theme === 'lemonade'}
              />
              <div className="w-14 h-8 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-lemonade dark:bg-gray-700 rounded-full peer peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-[4px] after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-yellow-400">
              </div>
              <span className="ml-3 text-sm text-base-content">
                {theme === 'lemonade' ? '🌞' : '🌙'}
              </span>
            </label>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThemeChanger;
