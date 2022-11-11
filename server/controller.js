const { getCompliment } = require('./index.js')
const { getFortune, deleteFortune, createFortune, updatefortune } = require('./controller.js')

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        console.log(req.params)
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        
        res.status(200).send(randomCompliment);

    },

    getFortune: (req, res) => {
        const fortune = ["Believe it can be done", "A pleasant surprise is waiting for you", "A small donation is call for. It is the right thing to do.", "Any day above ground is a good day."]

        let randomIndex = Math.floor(Math.random() * fortune.length);
        let randomFortune = fortune[randomIndex];
        res.status(200).send(randomFortune);
    },


}