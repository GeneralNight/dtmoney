import { useState } from "react";
import ReactModal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import {Header} from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global"
import { TransactionsProvider } from "./hooks/useTransactions";

ReactModal.setAppElement("#root")


export const App = () => {
  const [isNewTransactionModalVisible,setIsNewTransactionModalVisible] = useState<boolean>(false);
   

    function handleNewTransactionModal() {
      setIsNewTransactionModalVisible(!isNewTransactionModalVisible)
    }

  return (
    <TransactionsProvider>
      <Header onRequestOpen={handleNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={isNewTransactionModalVisible} onRequestClose={handleNewTransactionModal}/>
      <GlobalStyle/>
    </TransactionsProvider>
  );
}
