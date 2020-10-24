// import http from 'k6/http';
// import { check } from 'k6';
// import { Rate } from 'k6/metrics';

// export let errorRate = new Rate('errors');

// export default function() {
//   var url = 'http://api.dev.loadimpact.com/v3/users';
//   var params = {
//     headers: {
//       Authorization: 'Token ffc62b27db68502eebc6e90b7c1476d29c581f4d',
//       'Content-Type': 'application/json'
//     }
//   };
//   check(http.get(url, params), {
//     'status is 200': r => r.status == 200
//   }) || errorRate.add(1);
// }

import http from 'k6/http';
import { sleep } from 'k6';
export let options = {
  stages: [
    { duration: '2m', target: 100 }, // below normal load
    { duration: '5m', target: 100 },
    { duration: '2m', target: 200 }, // normal load
    { duration: '5m', target: 200 },
    { duration: '2m', target: 300 }, // around the breaking point
    { duration: '5m', target: 300 },
    { duration: '2m', target: 400 }, // beyond the breaking point
    { duration: '5m', target: 400 },
    { duration: '10m', target: 0 }, // scale down. Recovery stage.
  ],
};
export default function () {
  const BASE_URL = 'http://localhost:3000'; // make sure this is not production
  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/api/restaurants/8999999/photos`,
      null,
      { tags: { name: 'PublicCrocs' } },
    ],
  ]);
  sleep(1);
}