ARG TAG=14-alpine
FROM nystudio107/node-dev-base:$TAG

WORKDIR /app/buildchain/

CMD ["run build"]

ENTRYPOINT ["npm"]
