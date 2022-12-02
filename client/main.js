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

let createFortuneBtn = document.getElementById('new-fortune-button')

const addFortune = () => {
    let fortuneInput = document.getElementById('new-fortune-button')

    let body = {
        fortune: fortuneInput.value
    }
    axios.post("http://localhost:4000/api/fortunes/", body)
    .then(res => {
        alert(res.data)

        
    })

}
createFortuneBtn.addEventListener("click", addFortune)

const updateFortuneBtn = document.getElementById('update-fortune-button')

const updateFortune = () => {
    let fortuneIndex = document.getElementById('update-fortune-index')
    let updatedFortuneInput = document.getElementById('update-fortune-input')

    let body = {
        fortune: updatedFortuneInput
    }

    updateFortune.addEventListener("click", updateFortune)

axios.put(`http://localhost:4000/api/fortunes/${fortuneIndex}`, body)
.then(res => {
    alert(res.data)
    fortuneIndex.value = ""

})

}

const deleteFortuneBtn = document.getElementById('delete-fortune-button')

const deleteFortune = () => {
    let deleteFortuneInput = document.getElementById('delete-fortune-input')

    axios.delete(`http://localhost:4000/api/fortunes/${deleteFortuneInput.value}`)
    .then(res =>{
        alert(res.data)
        deleteFortune.value = ''
    })
}

deleteFortuneBtn.addEventListener('click', deleteFortune)