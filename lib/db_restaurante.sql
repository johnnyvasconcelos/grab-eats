--
-- PostgreSQL database dump
--

-- Dumped from database version 17.4
-- Dumped by pg_dump version 17.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: dados; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.dados (
    nome_restaurante character varying(25),
    categoria character varying(15),
    abertura character varying(5),
    fechamento character varying(5),
    boas_vindas character varying(250)
);


ALTER TABLE public.dados OWNER TO postgres;

--
-- Name: login; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.login (
    usuario character varying(50),
    senha character varying(50)
);


ALTER TABLE public.login OWNER TO postgres;

--
-- Name: pedidos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.pedidos (
    id integer NOT NULL,
    nome character varying(80),
    em_preparo boolean,
    preco character varying(10),
    mesa integer,
    para_levar boolean,
    nome_cliente character varying(1000),
    cpf character varying(18)
);


ALTER TABLE public.pedidos OWNER TO postgres;

--
-- Name: pedidos_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.pedidos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.pedidos_id_seq OWNER TO postgres;

--
-- Name: pedidos_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.pedidos_id_seq OWNED BY public.pedidos.id;


--
-- Name: produtos; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.produtos (
    id integer NOT NULL,
    foto character varying(80),
    nome_produto character varying(80),
    ingredientes character varying(250),
    preco character varying(10),
    categoria_produto character varying(15),
    descricao character varying(250)
);


ALTER TABLE public.produtos OWNER TO postgres;

--
-- Name: produto_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.produto_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER SEQUENCE public.produto_id_seq OWNER TO postgres;

--
-- Name: produto_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.produto_id_seq OWNED BY public.produtos.id;


--
-- Name: pedidos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos ALTER COLUMN id SET DEFAULT nextval('public.pedidos_id_seq'::regclass);


--
-- Name: produtos id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produtos ALTER COLUMN id SET DEFAULT nextval('public.produto_id_seq'::regclass);


--
-- Data for Name: dados; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.dados (nome_restaurante, categoria, abertura, fechamento, boas_vindas) FROM stdin;
Restaurante Alvorada	Restaurante	18:30	23:00	Comida de qualidade, servida com rapidez e atenção aos detalhes em cada refeição.
\.


--
-- Data for Name: login; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.login (usuario, senha) FROM stdin;
usuario1	senha123
\.


--
-- Data for Name: pedidos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.pedidos (id, nome, em_preparo, preco, mesa, para_levar, nome_cliente, cpf) FROM stdin;
1	Pedido 1	t	15,00	5	\N	\N	\N
\.


--
-- Data for Name: produtos; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.produtos (id, foto, nome_produto, ingredientes, preco, categoria_produto, descricao) FROM stdin;
2	/images/magret-royale.jpg	Magret Royale	Peito de pato, laranja, conhaque, manteiga trufada, batata, creme de leite, aspargos, sal, pimenta	\N	lançamentos	Peito de pato grelhado ao molho de laranja e conhaque, servido com purê de batata trufado e aspargos crocantes.
3	/images/ravioli-nero-di-mare.jpg	Ravióli Nero di Mare	Farinha, ovos, tinta de lula, camarão, mascarpone, limão siciliano, azeite, alho, ervas frescas	\N	lançamentos	Massa artesanal negra recheada com camarão e mascarpone, ao molho de limão siciliano e azeite de ervas.
4	/images/file-wellington.jpg	Fil‚ Wellington Alvorada	Filé mignon, massa folhada, cogumelos, presunto de Parma, vinho do Porto, batata-baroa, manteiga, temperos	\N	principais	Clássico filé mignon envolto em massa folhada crocante, servido com molho de vinho do Porto e purê de batata-baroa.
5	/images/risoto-trufado.jpg	Risoto Trufado com MedalhÆo de Mignon	Arroz arbóreo, vinho branco, caldo de legumes, queijo Grana Padano, azeite trufado, filé mignon, molho roti	\N	principais	Risoto cremoso de queijo Grana Padano e azeite trufado, acompanhado de medalhÆo de filé grelhado ao molho roti.
6	/images/fritas-rusticas.jpg	Fritas Rústicas Trufadas	Batata, azeite trufado, queijo Grana Padano, sal, alecrim fresco	\N	fritas	Batatas rústicas crocantes, finalizadas com azeite trufado, queijo Grana Padano e toque de alecrim.
7	/images/spritz-alvorada.jpg	Clássico Spritz Alvorada	Espumante brut, Aperol, água com gás, laranja Bahia	\N	bebidas	Um refrescante coquetel … base de espumante brut, Aperol e toque de laranja Bahia.
8	/images/fondant-chocolate.jpg	Fondant de Chocolate Belga	Chocolate belga 70%, manteiga, ovos, farinha de amêndoas, sorvete de baunilha	\N	sobremesas	Pequeno bolo de chocolate belga com casca crocante e interior cremoso, servido com sorvete de baunilha artesanal.
\.


--
-- Name: pedidos_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.pedidos_id_seq', 1, true);


--
-- Name: produto_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.produto_id_seq', 8, true);


--
-- Name: pedidos pedidos_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.pedidos
    ADD CONSTRAINT pedidos_pkey PRIMARY KEY (id);


--
-- Name: produtos produto_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.produtos
    ADD CONSTRAINT produto_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

