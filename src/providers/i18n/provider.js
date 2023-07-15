import React, {useContext} from "react";
import {AppContext} from  '../context'
import messages from './messages';
import { IntlProvider } from "react-intl";
import flatten from "flat";

import {LOCALES} from './constants';


 const IntApplProvider =({children})=> {
    const{state} = useContext(AppContext);
    return(
        <IntlProvider messages = {flatten(messages[state.locale])} locale={state.locale} defaultLocale={LOCALES.ENGLISH}>
            {children}
        </IntlProvider>
    )
}

export default IntApplProvider;