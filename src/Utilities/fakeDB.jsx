const  storedInLS = (bookTicket) => {
    let myDB = []
    let currentCartItem = JSON.parse(localStorage.getItem('show-ticket'))
    if(currentCartItem){
        myDB = [...currentCartItem, bookTicket]
         localStorage.setItem('show-ticket', JSON.stringify(myDB))
    } else{
        myDB.push(bookTicket)
         localStorage.setItem('show-ticket', JSON.stringify(myDB))
    }
 };

 const getFromLS =  () => {
    let storedShowTicket = JSON.parse(localStorage.getItem('show-ticket'))
    return storedShowTicket
}  

const clearLS = ()=>{
     localStorage.removeItem('show-ticket')
}

export {storedInLS, getFromLS, clearLS}