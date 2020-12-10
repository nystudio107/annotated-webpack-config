ARG TAG=12
FROM nystudio107/node-dev-base:$TAG

WORKDIR /app/buildchain/

CMD ["run build"]

ENTRYPOINT ["npm"]
