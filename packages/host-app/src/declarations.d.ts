// Esto le dice a TypeScript que confíe en que el módulo 'mfeAuth/Login' existe
// y que es un componente de React.

declare module 'mfeAuth/Login' {
  const Login: React.ComponentType<{
    onLoginSuccess: (token: string) => void;
  }>;
  export default Login;
}
