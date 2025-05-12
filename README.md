
# 🚗 Projeto Ford — Dashboard Interativo

Este é um sistema completo de visualização e controle de dados de veículos da Ford. Desenvolvido em Angular 19 com Bootstrap 5, o projeto traz funcionalidades de login, navegação por dashboard, menu lateral, busca por VIN e exibição de indicadores dinâmicos.

---

## 📸 Capturas de Tela

*(`pagina-login.png`, `pagina-home.png`, `pagina-dashboard.png` )*

---

## 🚀 Funcionalidades

- 🔐 Login com validação
- 📊 Dashboard com cards informativos (vendas, conectados, updates)
- 🚗 Seleção de veículos via `select`
- 🔍 Busca por VIN com retorno em tabela
- 📱 Interface responsiva com menu lateral
- 📤 Logout e controle de sessão
- 🎨 Tema estilizado com Bootstrap Icons e Material Icons

---

## 🛠️ Tecnologias Utilizadas

- **Angular 19 (Standalone Components)**
- **Bootstrap 5.3**
- **TypeScript**
- **Node.js (API interna)**
- **SCSS/CSS modularizado**
- **Angular Material (em partes)**

---

## ▶️ Como Rodar o Projeto

### 🔧 API (Mock interna)
1. Acesse a pasta do projeto
2. Inicie a API mock (caso ativada via script):
   ```bash
   npm run api
   ```

### 🖥️ Frontend
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Rode o servidor de desenvolvimento:
   ```bash
   ng serve
   ```
3. Acesse em: `http://localhost:4200`

---

## 🧠 Requisitos de Login

- **Usuário:** admin  
- **Senha:** 123456

---

## 📁 Estrutura de Pastas (resumo)

```
📦 projeto-angular
├── src
│   ├── app
│   │   ├── login/
│   │   ├── home/
│   │   ├── dashboard/
│   │   ├── utils/header-component/
│   │   ├── app.routes.ts
│   ├── assets/api/
│   ├── main.ts
├── angular.json
├── package.json
```

---

## 📌 Melhorias Futuras

- [ ] Armazenar sessão com criptografia (localStorage seguro)
- [ ] Adicionar gráficos dinâmicos com Chart.js ou ngx-charts
- [ ] Controle de permissões por usuário
- [ ] Internacionalização (i18n)

---

## 👨‍💻 Autor

**Maicon Douglas Alves De Oliveira**  
Estudante de engenharia da computação pela UFBA - Ciência e Tecnologia  
[GitHub - @MMDProgramado](https://github.com/MDProgramado/)
