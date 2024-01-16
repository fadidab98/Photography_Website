import '@/styles/globals.css'


const App=(props)=>{
  
  const Component = props.Component;
  return ( 
      <AppWrapper Component={Component} pageProps={props.pageProps}/>
  )    
}
export default App
export function AppWrapper({ Component, pageProps }) {
  return (
    <Component {...pageProps}  />
);
}