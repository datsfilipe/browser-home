import toast from 'react-hot-toast'
import { Toast } from '../components/Toast'
export function useToast() {
  const notify = (text: string, emoji: string) => toast(text, {
    style: {
      textAlign: 'center',
      font: 'Poppins',
      border: '1px' || 'solid' || '#141414',
    },
    icon: emoji,
  })

  const value = {notify, Toast}
  return value
}
