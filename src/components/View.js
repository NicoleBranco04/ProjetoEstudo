export default function View(props){
    return(
        <div className = "view">
            <h2>Lista de Clientes</h2>
            <hr/>
           {
               props.data.map((itens,ix)=>(
                   <div key={ix}>
                     <li>{itens.nome}</li>
                     <li>{itens.email}</li>
                     <li>{itens.cpf}</li>
                     <li>{itens.telefone}</li>
                     <li>{itens.usuario}</li>
                     <hr/>
                   </div>
               ))
           }

        </div>
    )
}