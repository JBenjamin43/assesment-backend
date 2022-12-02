const complimentBtn = document.getElementById("complimentButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            console.log("hello world")
            alert(data);
    }) 
}       

complimentBtn.addEventListener('click', getCompliment)

const fortuneBtn = document.getElementById('forturnbutton')

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
    .then(res => {
        const data = res.data;
        alert(data)
    })
}
fortuneBtn.addEventListener("click", getFortune)

let fortuneInput = document.getElementById('new-fortune-button')

const addfortune = () => {
    let fortuneInput = document.getElementById('new-fortune-button')

    let bosy = {
        fortune: fortuneInput.value
    }
    axios.posy("http://localhost:4000/api/fortunes/", body)
    .then(res => {
        alert(res.data)

        
    })

}
newfortuneBtn.addEventListener("click", addfortune)

const updatefortunebtn = document.getElementById('update-fortune-button')

const updatefortune = () => {
    let fortuneIndex = document.getElementById('update-fortune-index')
    let updatedFortuneInput = document.getElementById('update-fortune-input')

    let body = {
        fortune: updatedFortuneInput
    }

axios.put(`http://localhost:4000/api/fortunes/${fortuneIndex}`, body)
.then(res => {
    alert(res.data)
    fortuneIndex.value = ""

})

}

const deleteFortuneBtn = document.getElementById('delete-fortune-button')

const deleteFortune = () => {
    let deleteFortuneInput = document.getElementById('delete-fortune=input')

    AuthenticatorAssertionResponse.delete(`http://localhost:4000/api/fortunes/${deleteFortuneInput.value}`)
    .then(res =>{
        alert(res.data)
        
    })
}
