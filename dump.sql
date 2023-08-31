CREATE TABLE IF NOT EXISTS users (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) UNIQUE NOT NULL,
    "type" VARCHAR(255) NOT NULL DEFAULT 'client',
    "password" VARCHAR(255) NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS sessions (
    "id" SERIAL PRIMARY KEY,
    "token" VARCHAR(255) UNIQUE NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL, 
    FOREIGN KEY ("user_id") REFERENCES users ("id") ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS products (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR(255) NOT NULL,
    "category" VARCHAR(255) NOT NULL,
    "image" VARCHAR(255) NOT NULL,
    "ingredients" VARCHAR(255) NOT NULL,
    "price" INTEGER NOT NULL,
    "quantity" INTEGER NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS resetpassword (
    "id" SERIAL PRIMARY KEY,
    "token" VARCHAR(255) UNIQUE NOT NULL,
    "created_at" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" INTEGER NOT NULL, 
    FOREIGN KEY ("user_id") REFERENCES users ("id") ON DELETE CASCADE
);

INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Coca-Cola', 'https://images.tcdn.com.br/img/img_prod/858764/refrigerante_coca_cola_lata_350ml_c_12_359_1_20201021152315.jpg', 'agua, acucar, gas carbonico, corante caramelo, acidulante acido fosforico, aroma natural de cola, cafeina e estabilizante E-150d', 5, 100, 'bebidas');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Fanta Laranja', 'https://cdn.awsli.com.br/600x700/1330/1330028/produto/51587134/5e54346f8c.jpg', 'agua, acucar, gas carbonico, acidulante acido citrico, aroma natural de laranja, conservador benzoato de sodio, corante artificial amarelo crepusculo e estabilizante E-445', 5, 100, 'bebidas');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Fanta Uva', 'https://media.soujusto.com.br/products/Refrigerante_Fanta_Uva_350Ml.jpg', 'agua, acucar, gas carbonico, acidulante acido citrico, aroma natural de uva, conservador benzoato de sodio, corante artificial vermelho 40 e estabilizante E-445', 5, 100, 'bebidas');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Fanta Guaraná', 'https://drogariasp.vteximg.com.br/arquivos/ids/296732-500-500/fanta-guarana-220ml-spal-Drogaria-SP-648086.jpg?v=636638969334030000', 'agua, acucar, gas carbonico, acidulante acido citrico, aroma natural de guarana, conservador benzoato de sodio, corante artificial caramelo IV e estabilizante E-445', 5, 100, 'bebidas');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Suco de Laranja', 'https://naturalone.vteximg.com.br/arquivos/ids/157649-1000-1000/SUCO_DE_LARANJA_INTEGRAL_300ML_AMBIENTE_-_NATURAL_ONE-01.jpg?v=638210537258230000', 'agua, suco concentrado de laranja, acucar, acidulante acido citrico, aroma natural de laranja, conservador benzoato de sodio, corante artificial amarelo crepusculo e estabilizante E-445', 5, 100, 'bebidas');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Suco de Uva', 'https://naturalone.vteximg.com.br/arquivos/ids/157688-1000-1000/SUCO_DE_UVA_900ML_AMBIENTE_-_NATURAL_ONE-01.jpg?v=638210633449530000', 'agua, suco concentrado de uva, acucar, acidulante acido citrico, aroma natural de uva, conservador benzoato de sodio, corante artificial vermelho 40 e estabilizante E-445', 5, 100, 'bebidas');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Bife a Parmegiana', 'https://www.estadao.com.br/resizer/fOA6pWPuQg9h0Ep7WtiXgDr6PFE=/720x503/filters:format(jpg):quality(80):focal(775x1125:785x1135)/cloudfront-us-east-1.images.arcpublishing.com/estadao/WSWGR3VNIVEMZEDCZ3DPAQD3BQ.jpg', 'Bife de carne bovina, molho de tomate, queijo mussarela, farinha de rosca, ovo, farinha de trigo, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'pratos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Bife a Cavalo', 'https://www.comidaereceitas.com.br/wp-content/uploads/2011/03/bife_cavalo.jpg', 'Bife de carne bovina, ovo, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'pratos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Bife Acebolado', 'https://static.ifood-static.com.br/image/upload/t_high/pratos/86df409a-fcdf-4af5-bd9b-8100248acf81/202303310909_27O2_i.jpg', 'Bife de carne bovina, cebola, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'pratos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Frango a Passarinho', 'https://cooknenjoy.com/wp-content/uploads/2023/01/frango-a-passarinho-1200x901.jpg', 'Frango, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'pratos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Frango a Milanesa', 'https://media-cdn.tripadvisor.com/media/photo-s/0b/9d/21/89/r3-express-food.jpg', 'Frango, farinha de rosca, ovo, farinha de trigo, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'pratos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Macarrão a Bolonhesa', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO9pm8C1soyf827AL98hKCxZnT14vOCZy50XlRwaEE2viSHdQ9szmpdTJM9s4WRXp4nqU&usqp=CAU', 'Macarrão, molho de tomate, carne moida, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'pratos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Macarrão a Carbonara', 'https://www.sabornamesa.com.br/media/k2/items/cache/c117827dcb434d781be62e3d9512c6d2_XL.jpg', 'Macarrão, bacon, creme de leite, queijo parmesão, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'pratos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Porção de Fritas', 'https://taysushi.chefware.com.br/53/0/0/batata-frita-porcao.jpg', 'Batata, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'petiscos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Porção de Calabresa', 'https://www.receitasnestle.com.br/images/default-source/recipes/porcao-de-calabresa.jpg?sfvrsn=2', 'Calabresa, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'petiscos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Porção de Mandioca', 'https://www.receitasnestle.com.br/images/default-source/recipes/porcao-de-mandioca.jpg?sfvrsn=2', 'Mandioca, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'petiscos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Porção de Polenta', 'https://www.receitasnestle.com.br/images/default-source/recipes/porcao-de-polenta.jpg?sfvrsn=2', 'Polenta, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'petiscos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Porção de Bolinho de Bacalhau', 'https://www.receitasnestle.com.br/images/default-source/recipes/porcao-de-bolinho-de-bacalhau.jpg?sfvrsn=2', 'Bacalhau, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'petiscos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Porção de Bolinho de Carne', 'https://www.receitasnestle.com.br/images/default-source/recipes/porcao-de-bolinho-de-carne.jpg?sfvrsn=2', 'Carne, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'petiscos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Porção de Bolinho de Queijo', 'https://www.receitasnestle.com.br/images/default-source/recipes/porcao-de-bolinho-de-queijo.jpg?sfvrsn=2', 'Queijo, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'petiscos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Porção de Bolinho de Aipim', 'https://www.receitasnestle.com.br/images/default-source/recipes/porcao-de-bolinho-de-aipim.jpg?sfvrsn=2', 'Aipim, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'petiscos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Porção de Bolinho de Feijoada', 'https://www.receitasnestle.com.br/images/default-source/recipes/porcao-de-bolinho-de-feijoada.jpg?sfvrsn=2', 'Feijoada, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'petiscos');
INSERT INTO products (name, image, ingredients, price, quantity, category) VALUES ('Porção de Bolinho de Bacalhau', 'https://www.receitasnestle.com.br/images/default-source/recipes/porcao-de-bolinho-de-bacalhau.jpg?sfvrsn=2', 'Bacalhau, sal, pimenta do reino, oleo de soja e alho', 20, 100, 'petiscos');


