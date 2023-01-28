import { useState } from "react";
import ReactModal from "react-modal";
import { Dashboard } from "./components/Dashboard";
import {Header} from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global"

ReactModal.setAppElement("#root")


export const App = () => {
  const [isNewTransactionModalVisible,setIsNewTransactionModalVisible] = useState<boolean>(false);

    function handleNewTransactionModal() {
      setIsNewTransactionModalVisible(!isNewTransactionModalVisible)        
    }

  return (
    <>
      <Header onRequestOpen={handleNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal isOpen={isNewTransactionModalVisible} onRequestClose={handleNewTransactionModal}/>
      <GlobalStyle/>
    </>
  );
}
