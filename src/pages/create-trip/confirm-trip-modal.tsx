import { User } from 'lucide-react'
import { FormEvent } from 'react'
import { Button } from '../../components/button'
import { Modal } from '../../components/modal'

interface Props {
  closeConfirmTripModal: () => void
  setOwnerName: (name: string) => void
  setOwnerEmail: (email: string) => void
  createTrip: (event: FormEvent<HTMLFormElement>) => void
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  setOwnerEmail,
  setOwnerName,
  createTrip,
}: Props) {
  return (
    <Modal
      title="Confirmar criação de viagem"
      subtitle={
        <>
          Para concluir a criação da viagem para{' '}
          <span className="font-semibold text-zinc-100">
            Florianópolis, Brasil
          </span>{' '}
          nas datas de{' '}
          <span className="font-semibold text-zinc-100">
            16 a 27 de Agosto de 2024
          </span>{' '}
          preencha seus dados abaixo:
        </>
      }
      onClose={closeConfirmTripModal}
    >
      <form onSubmit={createTrip} className="space-y-3">
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <User className="size-5 text-zinc-400" />
          <input
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            placeholder="Seu nome completo"
            name="name"
            onChange={(event) => setOwnerName(event.target.value)}
          />
        </div>
        <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
          <User className="size-5 text-zinc-400" />
          <input
            className="bg-transparent text-lg placeholder-zinc-400 outline-none flex-1"
            placeholder="Seu e-mail pessoal"
            type="email"
            name="email"
            onChange={(event) => setOwnerEmail(event.target.value)}
          />
        </div>
        <Button type="submit" size="full">
          Confirmar criação da viagem
        </Button>
      </form>
    </Modal>
  )
}
