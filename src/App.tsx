import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { Transaction } from './pages/Transactions'
import { TransactionProvider } from './context/TranscationContext'

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionProvider>
        <Transaction />
      </TransactionProvider>
    </ThemeProvider>
  )
}
