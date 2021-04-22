// this loads Klaro with the default translations

export * from './lib'
import {setup, defaultTranslations} from './lib'
import translations from './translations/index'
import {convertToMap, update} from './utils/maps'
import testConfig from './testConfig'

const convertedTranslations = convertToMap(translations)
// we add the default translations
update(defaultTranslations, convertedTranslations)

// Loading test config parameters
testConfig();

// we set up Klaro
setup()
