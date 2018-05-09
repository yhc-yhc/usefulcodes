
docker rm -f gitbook || echo gitbook not exists;
docker run -itd \
--privileged=true \
-v /etc/localtime:/etc/localtime \
-v `pwd`:/src \
-p 8080:8080 \
-w /src \
--name gitbook \
node:8.9.4 \
/bin/bash -c "npm i -g gitbook-cli &&  node index.js && gitbook serve book --port 8080"
