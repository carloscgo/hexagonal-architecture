import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from '../../app/locales/en.json';
import esJSON from '../../app/locales/es.json';
import { getItemStorage } from '../../app/hooks/useLocalStorage';
import config, { languages, key, fallbackLanguage, formatAmount } from '../../app/utils/i18n';
import { describe, test, expect, afterEach, vi } from 'vitest';

vi.mock('../../app/hooks/useLocalStorage');
vi.mock('Intl');
vi.mock('i18next');

describe('i18n', () => {
    describe('Localization Setup', () => {
        afterEach(() => {
            vi.resetAllMocks();

            i18n.hasInitialized = false;
        });

        test('initializes i18n with fallback language on error', () => {
            getItemStorage.mockReturnValueOnce(key, fallbackLanguage);

            i18n.use.mockReturnValueOnce({ init: (v: any) => v });

            config();

            expect(getItemStorage).toHaveBeenCalledWith(key, fallbackLanguage);
            expect(i18n.use).toHaveBeenCalledWith(initReactI18next);
        });

        test('initializes i18n with stored language', () => {
            const storedLanguage = languages[1];

            getItemStorage.mockReturnValueOnce(key, storedLanguage);

            i18n.use.mockReturnValueOnce({ init: (v: any) => v });

            config();

            expect(getItemStorage).toHaveBeenCalledWith(key, fallbackLanguage);
            expect(i18n.use).toHaveBeenCalledWith(initReactI18next);
        });
    });

    describe('formatAmount', () => {
        test('formats integer amount', () => {
            const amount = 1000;
            const expected = '$1,000.00';

            const result = formatAmount(amount);

            expect(result).toEqual(expected);
        });

        test('formats decimal amount', () => {
            const amount = 999.99;
            const expected = '$999.99';

            const result = formatAmount(amount);

            expect(result).toEqual(expected);
        });

        test('formats string amount', () => {
            const amount = '1234.56';
            const expected = '$1,234.56';

            const result = formatAmount(amount);

            expect(result).toEqual(expected);
        });
    });
});
