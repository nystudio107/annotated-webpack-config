ARG TAG=12
FROM nystudio107/node-dev-base:$TAG

WORKDIR /app/buildchain/

CMD ["build"]

ENTRYPOINT ["npm", "run"]
