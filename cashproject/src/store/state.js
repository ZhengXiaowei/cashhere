import storage from 'good-storage'
const state = {
  token:
    storage.get('token') === undefined || storage.get('token') === null
      ? ''
      : storage.get('token')
}

export default state
