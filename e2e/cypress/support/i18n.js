import i18next, { init } from 'i18next';

(async () => {
  await init({
    resources: {
      en: {
        translation: require('../../../webapps/landlord/locales/en/common.json')
      },
      'vi-VN': {
        translation: require('../../../webapps/landlord/locales/vi-VN/common.json')
      }
    },
  });
})();

export default i18next;
