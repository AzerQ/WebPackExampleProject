const helloMessage: string = 'Hello from module!';
console.log(helloMessage);

import { BatchInterceptor } from '@mswjs/interceptors'
import { FetchInterceptor } from '@mswjs/interceptors/fetch'

const interceptor = new BatchInterceptor({
  name: 'my-interceptor',
  interceptors: [new FetchInterceptor()]
})

interceptor.apply()

interceptor.on('request', ({ request }) => {
  console.log('Перехвачен запрос:', request.method, request.url)
})

fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((res) => res.json())
  .then((data) => {
    console.log('Ответ:', data)
  })