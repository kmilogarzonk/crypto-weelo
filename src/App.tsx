import React, {useEffect, useState} from 'react';
import RouterConfig from './navigation/routerNavigation';
import './App.scss';
import { LoaderBigScreen } from './components/loaders';
import UtilService from './services/utils';

function App(): JSX.Element {

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    UtilService.callbackFinishLoad().then(() => setIsLoading(false));
  }, [])

  return (
    <>
      <LoaderBigScreen loading={isLoading} />
      <RouterConfig />
    </>
  );
}

export default App;
