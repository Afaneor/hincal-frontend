import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ConfirmEmail = () => {
  const router = useRouter()
  useEffect(() => {
    router.push('/login')
  }, [])
}

export default ConfirmEmail
