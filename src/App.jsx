import { useEffect, useState } from 'react'
import { LoginComp } from './LoginComp'
import { SystComp } from './SystComp'


function App() {
  const [islogged, setIsLogged] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const logToggle = () => setIsLogged(!islogged)



  return (

    <>
      {
        !islogged ?
          <LoginComp
            loguear={logToggle}
            setIsAdmin={setIsAdmin}
          /> :
          <SystComp
            loguear={logToggle}
            isAdmin={isAdmin}
          />
      }
    </>


  )
}

export default App
