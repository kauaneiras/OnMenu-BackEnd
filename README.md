## Como inicializar o projeto

### Configurando a conexão com o banco de dados
1 - Crie um arquivo na pasta raíz nomeado '.env'
2 - Cole no '.env' e modifique as informações
```
POSTGRES_USERNAME=postgres
POSTGRES_PASSWORD=password
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DATABASE=nome do banco

DATABASE_URL=postgresql://${POSTGRES_USERNAME}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DATABASE}?schema=public
```