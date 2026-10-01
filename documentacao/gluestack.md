# Como baixar o Gluestack UI

## O que precisa ter antes

- Node.js instalado
- Um projeto Expo criado

Se ainda não tem o projeto:

```bash
npx create-expo-app@latest meu-app
cd meu-app
```

## 1. Criar o .npmrc

Na raiz do projeto, cria um arquivo chamado `.npmrc` com isso dentro:

```
legacy-peer-deps=true
```

Isso evita erro de dependência na instalação.

## 2. Instalar o Gluestack

Dentro da pasta do projeto, roda:

```bash
npx gluestack-ui@latest init
```

Ele vai fazer algumas perguntas no terminal. Pode ir aceitando as opções padrão.

Quando terminar, vai aparecer a pasta `components/ui` no projeto e o arquivo `tailwind.config.js`.

## 3. Adicionar os componentes

O Gluestack não instala tudo de uma vez. Você escolhe os componentes que quer e eles são copiados pra dentro do projeto:

```bash
npx gluestack-ui@latest add button
```

Dá pra adicionar vários de uma vez:

```bash
npx gluestack-ui@latest add button input form-control icon
```

Cada um vira uma pasta em `components/ui`. Por exemplo, o botão fica em `components/ui/button/index.tsx`.

Depois é só importar onde for usar:

```tsx
import { Button, ButtonText } from '@/components/ui/button';
```

## 4. Se der erro de pacote faltando

Instala na mão:

```bash
npm install nativewind tailwind-variants
npm install -D tailwindcss@^3.4.17
```

O Tailwind precisa ser o 3, o 4 não funciona com o NativeWind.

## 5. Rodar o projeto

```bash
npm install
npx expo start -c
```

---

✨ **Feito por: Bruna de Mello**