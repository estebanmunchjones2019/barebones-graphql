// The root provides a resolver function for each API endpoint
const posts = []; // let's store posts in memory


module.exports = {
    hello: () => {
      return 'Hello world!';
    },
    news: () => {
        return {
            title: 'title here',
            body: null
        }
    },
    addPost: ({post}, req) => {
        post.id = (Math.random()*10000).toFixed(0);
        posts.push(post);
        return post;
    }
  };
