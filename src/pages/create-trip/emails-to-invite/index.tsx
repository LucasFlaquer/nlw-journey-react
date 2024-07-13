import { EmailToInvite } from './email-to-invite'

interface Props {
  emailsToInvite: string[]
  removeEmailFromInvite: (email: string) => void
}

export function EmailsToInvite({
  emailsToInvite,
  removeEmailFromInvite,
}: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {emailsToInvite.map((email) => (
        <EmailToInvite
          key={email}
          email={email}
          removeEmailFromInvite={removeEmailFromInvite}
        />
      ))}
    </div>
  )
}
