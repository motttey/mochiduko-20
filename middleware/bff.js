export default ({ $axios, isDev, store }) => {
    const MAX_API_ACCESS_PER_USER = 3; // ユーザごとのAPIアクセス回数の上限
    // 10秒待機
    const WAIT_TIME_RETRIES = 10000;
    
    $axios.onRequest((config) => {
        console.log('Making request to ', config.url);
        
        // dev環境の時はそのまま
        if (isDev) return;
        // ユーザのAPIアクセス回数が上限に達した場合はエラーを返す
        if (
            store.state.accessCountMap[store.state.user.userId] 
            > MAX_API_ACCESS_PER_USER
        ) {
            setInterval(() => {
                store.commit('resetApiAccessCount', store.state.user.userId)
            }, WAIT_TIME_RETRIES);

            return Promise.reject(new Error('APIへのアクセス制限回数を超えました'));
        } else {
            // ユーザごとのAPIアクセス回数をカウントする
            if (store.state.user.userId) {
                store.commit('incrementUserCount', store.state.user.userId)
            }
        }
    });
    
    $axios.onResponse((_) => {
    })
  
    $axios.onError((error) => {
      return Promise.reject(error)
    })
}