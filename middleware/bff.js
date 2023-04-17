export default function ({ $axios, store }) {
    const MAX_API_ACCESS_PER_USER = 3; // ユーザごとのAPIアクセス回数の上限

    $axios.onRequest(config => {
        console.log('Making request to ', config.url);
        // ユーザごとのAPIアクセス回数をカウントする
        if (!store.state.user.apiAccessCount) {
            store.commit('resetApiAccessCount')
        }
        store.commit('incrementUserCount')
        // ユーザのAPIアクセス回数が上限に達した場合はエラーを返す
        if (store.state.user.apiAccessCount > MAX_API_ACCESS_PER_USER) {
            console.log('アクセス制限を超えました');
            return Promise.reject(new Error('APIへのアクセス制限回数を超えました'));
        }
    });
    
    $axios.onResponse(response => {
      console.log('Response received from ', response.config.url)
    })
  
    $axios.onError(error => {
      return Promise.reject(error)
    })
}