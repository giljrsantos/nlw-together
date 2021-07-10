# NLW Together

Dessa #NLWTogether vamos desenvolver uma API que foi chamada de NLW Valoriza. 

NLW Valoriza, é uma aplicação que podemos elogiar um colega de trabalho, por algo que ele fez, por alguma ajuda que ele nos deu.

Conseguimos definir alguns elogios pelas as ajudas que ele nos deu. Dessa forma, conseguimos retribuir algo que essa pessoa fez pela gente.

# DEPENDÊNCIAS
    "bcryptjs": "^2.4.3",
    "class-transformer": "^0.4.0",
    "express": "^4.17.1",
    "express-async-errors": "^3.1.1",
    "jsonwebtoken": "^8.5.1",
    "reflect-metadata": "^0.1.13",
    "sqlite3": "^5.0.2",
    "typeorm": "^0.2.34",
    "uuid": "^8.3.2"

# DEPENDÊNCIAS DE DESENVOLVIMENTO
    "@types/bcryptjs": "^2.4.2",
    "@types/express": "^4.17.12",
    "@types/jsonwebtoken": "^8.5.3",
    "@types/uuid": "^8.3.0",
    "ts-node-dev": "^1.1.6",
    "typescript": "^4.3.4"   

# Regras de Negócios

- Cadastro do usuário
    
    [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

    [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG
    
    [ x ] Não é permitido cadastrar mais de uma tag com o mesmo nome.

    [ x ] Não é permitido cadastrar tag sem nome

    [ x ] Não é permitido o cadastro por usuário que não sejam administradoredes

- Cadastro de Elogios

    [ x ] Não é permitido um usuário cadastrar um elogio para si.

    [ x ] Não é permitido cadastrar elogios para usuários inválidos.

    [ x ] O usuário precisa estar autenticado na aplicação.