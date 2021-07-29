import React, { useState } from 'react';

import { Topbar } from '../components/Layout/Topbar/Topbar';
import { HelpSelection } from '../components/Forms/HelpSelection/HelpSelection';
import { HelpSelfSearch } from '../components/HelpSelfSearch/HelpSelfSearch';
import { HelpSearchWin } from '../components/HelpSearchWin/HelpSearchWin';
import { HelpMacOS } from '../components/HelpMacOS/HelpMacOS'

export const Help = () => {
  const [values, setValues] = useState();
  const [goBack, setGoBack] = useState(false);

  const handleSelection = (values) => {
    setValues(values);
  }

  const handleGoBack = () => {
    setGoBack(true);
    setValues();
    setGoBack(false)
  }
  console.log(values)
  return (
    <React.Fragment>
      <Topbar />
      <div className="container-row">
        {!values ? <h3 className="h-text-center h-mb-3">Vyber si verzi nápovědy</h3> : values.model.value === "ano" ? <h3 className="h-text-center h-mb-3">Znám model svého notebooku</h3> : <h3 className="h-text-center h-mb-3">Neznám model svého notebooku</h3>}
        {(!values || goBack) && <HelpSelection handleSelection={handleSelection} />}
        {values && values.model.value === "ano" && !goBack && <HelpSelfSearch handleGoBack={handleGoBack} />}
        {values && values.model.value === "ne" && values.os.value === "windows_10" && !goBack && <HelpSearchWin handleGoBack={handleGoBack} />}
        {values && values.model.value === "ne" && values.os.value === "macos" && !goBack && <HelpMacOS handleGoBack={handleGoBack} />}
      </div>
    </React.Fragment>
  )
}