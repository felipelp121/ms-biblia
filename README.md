Download apenas a estrutura do banco postgres do Atos6

Formato sql:

`heroku run pg_dump $(heroku config:get DATABASE_URL --app atos6-production) --schema-only --app a6-api-mobile-dev > pg_dump-schema.sql`

Formato para pg_restore: (https://mazeez.dev/posts/backup-and-restore-in-postgres)

`heroku run pg_dump $(heroku config:get DATABASE_URL --app atos6-production) --schema-only --app a6-api-mobile-dev -F c > pg_dump-schema.dump`

https://devcenter.heroku.com/articles/heroku-postgres-import-export (não funcionou)

`heroku pg:backups:restore https://s3.wasabisys.com/dow/pg_dump-schema.dump DATABASE_URL --app a6-api-mobile-dev --confirm a6-api-mobile-dev`

Ambiente de teste

http://a6-api-mobile-dev.herokuapp.com/
