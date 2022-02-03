const { musicCollection } = require('../../config/dbConnect')

module.exports = {
    Query: {
        getMusic: async () => {
            const data = await musicCollection.find({}).toArray();
            console.log(data);
            return data
        }
    },

    Mutation: {
        addMusic: async (_,{input}) => {
            console.log(input, "--------------------------------");
            const data = await musicCollection.insertOne(input)
            console.log(input, data, "--------------------------------");
            return "input";
        }
    }

};



