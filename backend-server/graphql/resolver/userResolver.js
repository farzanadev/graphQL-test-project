const { userCollection } = require('../../config/dbConnect')

module.exports = {
    // add user 

    Mutation: {
        addUser: async (_, { input }) => {
            console.log(input);
            const data = await userCollection.insertOne(input)
            console.log(input, data);
            return "input";
        }
    },

    // get user 

    Query: {
        getUser: async () => {
            const data = await userCollection.find({}).toArray();
            console.log(data);
            return data
        }
    },

}