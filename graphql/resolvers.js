const validator = require('validator');

// The root provides a resolver function for each API endpoint
const posts = []; // let's store posts in memory

const getTokenAndID = async (email, password) => {
    return new Promise((resolve, reject) => {
        resolve({
            token: 'ragergergiuahegiuaehg',
            id: '345239857'
        })
    });
}


module.exports = {
    hello: () => {
        const  name = 'tebi';
      console.log(name);  
      return 'Hello world!';
    },
    news: () => {
        return {
            title: 'title here',
            body: null
        }
    },
    addPost: ({post}, req) => {
        // all logged in users can add posts to the array in memory
        if (!req.isAuth){
            const error = new Error('Oops, you are not authenticated');
            error.code = 401;
            throw error;
        }
        const errors = [];
        if (!validator.isLength(post.title, {min: 4})){
            errors.push({message: 'title too short'})
        }
        if (!validator.isLength(post.body, {max: 10})){
            errors.push({message: 'body too long'});
        }
        if (errors.length > 0){
            const error = new Error('Oops, invalid input');
            error.code = 422;
            // error.data = errors.join(', ');
            error.data = errors;
            throw error;

        }
        post.id = (Math.random()*10000).toFixed(0);
        posts.push(post);
        return post;
    },
    login: async({loginData}) => {
        const data = await getTokenAndID(loginData.email, loginData.password);
        return data;
    }
  };
