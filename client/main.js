

const complimentBtn = document.getElementById("complimentButton")
const forturnBtn = document.getElementById('fortuneButton')
const newFortuneBtn = document.getElementById('new-fortune-button')
const updateFortuneBtn = document.getElementById('update-fortune-button')
const deleteFortuneBtn = document.getElementById('delete-fortune-button')

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then((res) => {
            const data = res.data;
            alert(data);
    }) 
}       


const getFortune = () => {
    axios.get("http://localhost:4000/api/fortunes/")
    .then((res) => {
        const data = res.data;
        alert(data)
    })
}

const addFortune = () => {
    let fortuneInput = document.getElementById('new-fortune-input')

    let body = {
        fortune: fortuneInput.value
    }
    axios.post("http://localhost:4000/api/fortunes/", body)
    .then(res => {
        alert(res.data)
        fortuneInput.value = ''
        
    })

}


const updateFortune = () => {
    let fortuneIndex = document.getElementById('update-fortune-index')
    let updatedFortuneInput = document.getElementById('update-fortune-input')

    let body = {
        fortune: updatedFortuneInput.value
    }


axios.put(`http://localhost:4000/api/fortunes/${fortuneIndex.value}`, body)
.then(res => {
    alert(res.data)
    fortuneIndex.value = ''
    updatedFortuneInput = ''

})

}


const deleteFortune = () => {
    let deleteFortuneInput = document.getElementById('delete-fortune-input')

    axios.delete(`http://localhost:4000/api/fortunes/${deleteFortuneInput.value}`)
    .then(res =>{
        alert(res.data)
        deleteFortune.value = ''
    })
}


complimentBtn.addEventListener('click', getCompliment)
forturnBtn.addEventListener("click", getFortune)
newFortuneBtn.addEventListener("click", addFortune)
updateFortuneBtn.addEventListener("click", updateFortune)
deleteFortuneBtn.addEventListener('click', deleteFortune)