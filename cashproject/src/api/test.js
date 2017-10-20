import axios from 'axios'

export function test () {
  return axios
    .post(
      '/api/user/binding/card?token=7MCZFPMR76YYCRZHF21JLL7DAYLE112P&bankId=1&bankCard=623061571017627712'
    )
    .then(res => {
      return Promise.resolve(res.data.result)
    })
}
