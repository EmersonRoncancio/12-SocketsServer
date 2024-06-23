const desk = document.getElementById('lbl-new-ticket')
const button = document.getElementById('button')

const GetLastTicket = () => {
    fetch('http://localhost:3000/api/tickets/last')
        .then(response => response.json())
        .then(mesa => {
            desk.innerHTML = mesa
        })
}

GetLastTicket()

button.addEventListener('click', () => {
    fetch('http://localhost:3000/api/tickets/', {
        method: 'POST'
    })

    GetLastTicket()
})
// async function peticion(){
//     const mesa = await fetch('http://localhost:3000/api/tickets/last')
//     const dataFinal = await mesa.json()
//     console.log(dataFinal)
// }

// peticion()

console.log('Nuevo Ticket HTML');


