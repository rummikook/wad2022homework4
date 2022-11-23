import { createStore } from 'vuex'

export default createStore({
  state: {
    postList: [
      {
        "id":"1",
        "authorName":"Sven Spen",
        "createTime":"2022-09-01T12:33:51.112Z",
        "body":"This is my second post!! Yay",
        "picture":"",
        "likes": 0,
      },
      {
        "id":"2",
        "authorName":"Sven Spen",
        "createTime":"2022-09-02T15:39:12.248Z",
        "body":"My view when I was walking home today :)",
        "picture":"nature.jpg",
        "likes": 0,
      },
      {
        "id":"3",
        "authorName":"Kaido Kreek",
        "createTime":"2022-10-11T12:21:50.109Z",
        "body":"Scared for tomorrow's test :( wish me luck!",
        "picture":"",
        "likes": 0,
      },
      {
        "id":"4",
        "authorName":"Kaido Kreek",
        "createTime":"2022-10-12T12:33:51.112Z",
        "body":"I thought today's test would be worse",
        "picture":"",
        "likes": 0,
      },
      {
        "id":"5",
        "authorName":"Kaido Kreek",
        "createTime":"2022-10-16T18:19:27.128Z",
        "body":"Does anyone want to play lol today",
        "picture":"",
        "likes": 0,
      },
      {
        "id":"6",
        "authorName":"Kreete Linna",
        "createTime":"2022-10-01T08:31:32.124Z",
        "body":"Just woke up, dont want to go to school... #sleep",
        "picture":"",
        "likes": 0,
      },
      {
        "id":"7",
        "authorName":"Kreete Linna",
        "createTime":"2022-10-01T15:49:53.531Z",
        "body":"Met up with friends, BOWLING TIME!",
        "picture":"bowling.jpg",
        "likes": 0,
      },
      {
        "id":"8",
        "authorName":"Kreete Linna",
        "createTime":"2022-11-12T21:57:31.742Z",
        "body":"I can't wait for xmas, look at how cute he would look!",
        "picture":"dog.jpg",
        "likes": 0,
      },
      {
        "id":"9",
        "authorName":"Priit Priit",
        "createTime":"2022-09-13T23:52:13.135Z",
        "body":"Tread carefully my friend, for night is dark and full of terrors :)",
        "picture":"funny.png",
        "likes": 0,
      },
      {
        "id":"10",
        "authorName":"Priit Priit",
        "createTime":"2022-10-01T00:14:32.136Z",
        "body":"BOOYAH",
        "picture":"",
        "likes": 0,
      }
    ]
  },
  
  getters: {},
  mutations: {
    addLike: (state, id) => {
      const selectedPost = state.postList.find(post => post.id == id)
      selectedPost.likes += 1;
    },
    resetLikes: state => {
        state.postList.forEach(post => post.likes = 0)
    },
  },
  actions: {
  },
  modules: {
  }
})
