import { X } from 'lucide-react'

interface Props {
  email: string
  removeEmailFromInvite: (email: string) => void
}
export function EmailToInvite({ email, removeEmailFromInvite }: Props) {
  function handleRemoveClick() {
    removeEmailFromInvite(email)
  }
  return (
    <div className="py-1.5 px-2.5 rounded-md bg-zinc-800 flex items-center gap-2">
      <span className="text-zinc-300">{email}</span>
      <button type="button" onClick={handleRemoveClick}>
        <X className="size-4 text-zinc-400" />
      </button>
    </div>
  )
}
