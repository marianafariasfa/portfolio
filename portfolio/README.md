# 🌐 Portfólio Pessoal

Site de portfólio pessoal moderno e responsivo, com design inspirado em glassmorphism, colagem editorial e tipografia luxuosa.

## ✨ Características

- **Design Glassmorphism** — efeito de vidro, profundidade e blur
- **Silhueta de montanha animada** com parallax no scroll
- **Ribbon animado** de skills com scroll infinito
- **Cursor customizado** com efeito de seguir suave
- **Animações on-scroll** (fade, slide esquerda/direita)
- **Barras de habilidades** animadas ao entrar na viewport
- **Formulário de contato** com validação JavaScript
- **Transições entre páginas** suaves
- **100% responsivo** — mobile, tablet e desktop

## 📁 Estrutura

```
portfolio/
├── index.html          # Página inicial
├── sobre.html          # Sobre mim + Skills
├── projetos.html       # Projetos (layout masonry)
├── contato.html        # Contato + Formulário
├── css/
│   └── style.css       # Estilos completos
├── js/
│   └── main.js         # JavaScript (cursor, scroll, form)
└── README.md           # Este arquivo
```

## 🛠️ Como usar localmente

1. Clone ou baixe o repositório
2. Abra qualquer arquivo `.html` diretamente no navegador — ou use um servidor local:

```bash
# Opção 1: Python
python -m http.server 8000

# Opção 2: Node.js (npx)
npx serve .

# Opção 3: VS Code Live Server
# Instale a extensão Live Server e clique em "Go Live"
```

3. Acesse `http://localhost:8000`

## 🔧 Personalização

### Dados pessoais
Substitua em todos os arquivos HTML:
- `Seu Nome` → seu nome real
- `seuemail@email.com` → seu e-mail
- `seunome` (em URLs do GitHub/LinkedIn) → seu username
- `+55 11 90000-0000` → seu telefone

### Projetos
Em `projetos.html`, edite cada bloco `.project-masonry-card`:
- Título do projeto
- Descrição
- Tags de tecnologias
- Link do GitHub (atributo `href`)
- Cor do background do thumbnail

### Cores (CSS Variables)
Em `css/style.css`, edite as variáveis na seção `:root`:
```css
--lavender: #b8a4e8;   /* Cor de destaque principal */
--rose: #e8a4c4;       /* Cor de destaque secundária */
--purple-mid: #4a2f8a; /* Fundo dos cards */
```

## 🚀 Deploy no Render

### Pré-requisitos
- Conta gratuita em [render.com](https://render.com)
- Código no GitHub

### Passo a passo

1. **Suba o código no GitHub:**
```bash
git init
git add .
git commit -m "feat: portfólio inicial"
git remote add origin https://github.com/seunome/portfolio.git
git push -u origin main
```

2. **No Render:**
   - Acesse [dashboard.render.com](https://dashboard.render.com)
   - Clique em **"New +"** → **"Static Site"**
   - Conecte sua conta do GitHub
   - Selecione o repositório do portfólio

3. **Configurações do Static Site:**
   | Campo | Valor |
   |-------|-------|
   | Name | `meu-portfolio` (ou qualquer nome) |
   | Branch | `main` |
   | Build Command | *(deixe vazio)* |
   | Publish Directory | `.` |

4. Clique em **"Create Static Site"**
5. Aguarde o deploy (30~60 segundos)
6. Acesse via URL `https://meu-portfolio.onrender.com`

### Domínio personalizado (opcional)
No Render → seu site → **"Custom Domains"** → adicione seu domínio e configure os DNS conforme instruções.

## 🌍 Outras opções de deploy gratuito

| Plataforma | Comando/Passos |
|-----------|----------------|
| **GitHub Pages** | Settings → Pages → Source: main branch |
| **Netlify** | Arraste a pasta no [netlify.com/drop](https://app.netlify.com/drop) |
| **Vercel** | `npx vercel` na pasta do projeto |

## 📝 Formulário de contato

O formulário atual usa JavaScript puro para validação e simula o envio. Para envio real:

### Opção 1: Formspree (gratuito)
```html
<!-- Substitua o id="contact-form" pelo action do Formspree -->
<form action="https://formspree.io/f/SEU_ID" method="POST">
```

### Opção 2: EmailJS
Adicione no `main.js`:
```javascript
emailjs.sendForm('SERVICE_ID', 'TEMPLATE_ID', form);
```

### Opção 3: Netlify Forms
Adicione `data-netlify="true"` na tag `<form>`.

## 🎨 Créditos de Design

Inspirado no estilo do hotel AKINA — glassmorphism sobre montanhas nevadas, tipografia editorial Playfair Display + DM Sans, paleta púrpura e lavanda.

---

Feito com ❤️ e muito CSS
