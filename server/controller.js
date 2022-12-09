const { getCompliment } = require('./index.js')
const { getFortune, deleteFortune, createFortune, updateFortune } = require('./index.js')
let fortunes = ["Believe it can be done", "A pleasant surprise is waiting for you", "A small donation is call for. It is the right thing to do.", "Any day above ground is a good day."]

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        
        res.status(200).send(randomCompliment);

    },

    getFortune: (req, res) => {
        
        let randomIndex = Math.floor(Math.random() * fortune.length)
        let randomFortune = fortune[randomIndex];
        res.status(200).send(randomFortune);

    },

    addFortune: (req,res) => {
        let {fortune} = req.body

        fortunes.push(fortune)

    res.status(200).send('Your fortune was added!')
    },

    updateFortune: (req, res) => {
        let{index} = req.params
        let {fortune} = req.body

        fortune.splice(index, 1,fortune)

        res.status(200).send('the fortune was updated!')
    },

    deleteFortune: (req, res) => {
        let {index} = req.perams

        fortune.splice(index, 1)
        res.status(200).send("fortune was deleted")
    }




}