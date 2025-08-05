import React from 'react';

// Corregido: mfeAuth en lugar de mfe_auth
const RemoteLogin = React.lazy(() => import('mfeAuth/Login'));

export default RemoteLogin;
