import http from 'k6/http';
import { sleep } from 'k6';
import { check } from 'k6';
import { Rate, Trend } from 'k6/metrics';

export let galleryTrend = new Trend('GET /api/restaurants Response Time (ms)');
export let galleryErrorRate = new Rate('GET /api/restaurants Error Rate');

export let options = {
  stages: [
    { duration: '30s', target: 500 },
    { duration: '1m', target: 500 },
    { duration: '30s', target: 1000 },
    { duration: '1m', target: 1000 },
    { duration: '15s', target: 2000 },
    { duration: '1m', target: 2000 },
  ],
};

export default function () {
  const id = Math.ceil(Math.random() * 10000000);
  const getUrl = `http://localhost:3000/api/restaurants/${id}/photos`;

  const galleryRes = http.get(getUrl);

  check(galleryRes, {
    'status is 200': r => r.status === 200
  }) || galleryErrorRate.add(1);

  galleryTrend.add(galleryRes.timings.duration);

  sleep(1);
}