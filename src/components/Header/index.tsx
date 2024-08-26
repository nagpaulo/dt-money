import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import logoImg from '../../assets/img/logo.png'
import * as Dialog from '@radix-ui/react-dialog'
import { NewTransctionModal } from '../NewTransctionModal'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="" />
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransctionModal />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
