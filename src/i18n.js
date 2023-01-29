import { createI18n } from 'vue-i18n'
import sections from "@/sections.json"

/**
 * Load locale messages
 *
 * The loaded `JSON` locale messages is pre-compiled by `@intlify/vue-i18n-loader`, which is integrated into `vue-cli-plugin-i18n`.
 */
function loadLocaleMessages() {
  const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i)
  const messages = {}
  locales.keys().forEach(key => {
    const matched = key.match(/([A-Za-z0-9-_]+)\./i)
    if (matched && matched.length > 1) {
      const locale = matched[1]
      messages[locale] = locales(key).default
      
      //add sections locales
      if(sections.data && sections.data.length)
        sections.data.forEach(section => {
          messages[locale][`sections.${section.key}`] = section.locale[locale]
          if(section.subsections && section.subsections.length){
            section.subsections.forEach(subSection => {
              messages[locale][`subsection.${subSection.key}`] = subSection.locale[locale]
            })
          }
        })
    }
  })
  
  return messages
}
export default createI18n({
  legacy: false,
  globalInjection: true,
  locale: process.env.VUE_APP_I18N_LOCALE || "en",
  fallbackLocale: process.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
  messages: loadLocaleMessages(),
});
