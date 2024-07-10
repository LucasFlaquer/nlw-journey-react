import { ArrowRight, Calendar, MapPin, Settings2 } from 'lucide-react'
import { Button } from '../../../components/button'

interface Props {
  isGuestsInputOpen: boolean
  closeGuestsInput: () => void
  openGuestsInput: () => void
}

export function DestinationAndDateStep({ isGuestsInputOpen, closeGuestsInput, openGuestsInput }: Props) {
  return (
    <div className='h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3'>
      <div className='flex items-center gap-2 flex-1'>
        <MapPin className='size-5 text-zinc-400' />
        <input disabled={isGuestsInputOpen} className='bg-transparent text-lg placeholder-zinc-400 outline-none' type="text" placeholder='Para onde você vai?' />
      </div>
      <div className="flex items-center gap-2">
        <Calendar className='size-5 text-zinc-400' />
        <input disabled={isGuestsInputOpen} className='bg-transparent text-lg placeholder-zinc-400 outline-none w-40' type="text" placeholder='Quando ?' />
      </div>
      <div className='w-px h-6 bg-zinc-800'/>
      {isGuestsInputOpen ? (
        <Button variant='secondary' onClick={closeGuestsInput}>
          Alterar local/data
          <Settings2 className='size-5' />
        </Button>
      ) : (
        <Button onClick={openGuestsInput}>
          Continuar
        <ArrowRight className='size-5' />
      </Button>
      )}      
    </div>
  )
}