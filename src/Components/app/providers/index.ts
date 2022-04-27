import compose from 'compose-function'

import { withTranslation } from './with-translation';
import { withChakra } from './with-chakra';

export const withProviders = compose(withChakra, withTranslation);