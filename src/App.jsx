import { useState } from "react"
import { Header } from "./components/Header"
import { List } from "./components/List"
import { Table } from "./components/Table"
import "./global.css"

export function App() {
  const [comment, setComment] = useState(["OI"]);

  return (
    <div className="App">
      <Header />
        <Table />
        <List comment={comment} />
    </div>
  )
}


