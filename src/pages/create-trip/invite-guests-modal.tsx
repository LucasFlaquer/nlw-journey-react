import { AtSign, Plus } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../../components/button'
import { Modal } from '../../components/modal'
import { EmailsToInvite } from './emails-to-invite'

interface Props {
  closeGuestsModal: () => void
  emailsToInvite: string[]
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void
  removeEmailFromInvite: (email: string) => void
}

export function InviteGuestsModal({
  closeGuestsModal,
  emailsToInvite,
  removeEmailFromInvite,
  addNewEmailToInvite,
}: Props) {
  return (
    <Modal
      title="Selecionar convidados"
      subtitle="Os convidados irão receber e-mails para confirmar a participação na viagem."
      onClose={closeGuestsModal}
    >
      <>
        <EmailsToInvite
          emailsToInvite={emailsToInvite}
          removeEmailFromInvite={removeEmailFromInvite}
        />
        <div className="w-full h-px bg-zinc-800" />
        <form
          onSubmit={addNewEmailToInvite}
          className="p-2.5 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2"
        >
          <div className="px-2 flex items-center gap-2 flex-1">
            <AtSign className="size-5 text-zinc-400" />
            <input
              className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
              placeholder="Digite o e-mail do convidado"
              type="email"
              name="email"
            />
          </div>
          <Button>
            Convidar
            <Plus className="size-5" />
          </Button>
        </form>
      </>
    </Modal>
  )
}
