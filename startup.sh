#!/bin/sh
set -eu
cd /workspace

if curl -sf -o /dev/null http://127.0.0.1:8080/; then
  exit 0
fi

nohup npm run dev >/tmp/jal-rekha-dev.log 2>&1 &
pid=$!

i=0
while [ "$i" -lt 40 ]; do
  if curl -sf -o /dev/null http://127.0.0.1:8080/; then
    exit 0
  fi
  if ! kill -0 "$pid" 2>/dev/null; then
    echo "dev server exited early" >&2
    tail -n 40 /tmp/jal-rekha-dev.log >&2 || true
    exit 1
  fi
  i=$((i + 1))
  sleep 0.5
done

echo "dev server did not become healthy" >&2
tail -n 40 /tmp/jal-rekha-dev.log >&2 || true
exit 1
