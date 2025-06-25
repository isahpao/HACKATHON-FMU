# 

### 

# ⚡ HACKATHON FMU - SÃO PAULO⚡


## 📌 Descrição

Este projeto foi desenvolvido durante o **Hackathon FMU 2025**, com o objetivo de criar uma solução simples e eficiente para o desafio proposto pela instituição: **desenvolver um sistema veterinário capaz de realizar diagnósticos e prever possíveis desfechos clínicos em cães** (alta, internação, óbito ou eutanásia), com base em dados reais.

> 🏅 **Classificação:** 7º lugar na categoria Calouros

## ✨ Funcionalidades

- 🔍 **Avaliação Clínica Rápida:** Interface interativa que permite aos profissionais veterinários realizarem uma triagem inicial baseada em parâmetros clínicos essenciais.
- 🧾 **Coleta de Dados Clínicos:** Captura variáveis como oximetria, temperatura, comportamento, locomoção, resposta neurológica e escalas de Glasgow.
- 🧠 **Análise Automatizada:** O sistema processa os dados por meio de lógica condicional para fornecer uma predição clínica objetiva.

## 🔍 Funcionamento Lógico do Sistema

1. **Interceptação do Formulário:** Evita recarregamento da página e permite processamento via JavaScript.
2. **Coleta e Conversão de Dados:** Função `getValor()` padroniza os dados do formulário.
3. **Critérios de Análise:**
   - **Alta:** Todos os sinais clínicos ideais.
   - **Óbito provável:** Dois ou mais sinais graves (oximetria baixa, febre/hipotermia, sangramentos, etc).
   - **Eutanásia:** Dor extrema (Glasgow ≥ 18) ou ausência de resposta neurológica.
   - **Internamento/Observação:** Casos intermediários.

A hierarquia de decisão segue a seguinte prioridade:
1. Provável óbito  
2. Indicação de eutanásia  
3. Alta  
4. Internamento ou observação  

## 🛠️ Tecnologias Utilizadas

- **HTML5 e CSS3:** Estruturação e estilização da interface.
- **JavaScript:** Lógica de decisão baseada em condições `if/else`.
- **GitHub Pages:** Hospedagem do projeto.

## 🧠 Decisões de Desenvolvimento

- **Simplicidade:** Interface objetiva para facilitar o uso em ambientes clínicos.
- **Critérios bem definidos:** Baseados em sinais clínicos observáveis.
- **Portabilidade:** Projeto funcional sem necessidade de back-end ou banco de dados.

## 🧪 Expansões Futuras

O sistema pode ser expandido para integrar exames laboratoriais (como glicemia) e, futuramente, até algoritmos de inteligência artificial. Um exemplo seria a triagem automatizada de diabetes canina com base em dados reais.

## ⚠️ Limitações

- Não substitui consulta veterinária presencial.
- Diagnósticos complexos requerem exames clínicos.
- Atualmente, não utiliza banco de dados nem integra registros clínicos reais — a base de dados foi usada apenas como referência para modelagem da lógica.

## 🔗 Demonstração Online

[Clique aqui para acessar a versão online](https://isahpao.github.io/HACKATHON-FMU/)

## 📷 Preview

![Preview do projeto](https://github.com/isahpao/HACKATHON-FMU/blob/master/HACKATHON-FMU-05-23-2025_01_33_PM.png?raw=true)

## 🚀 Como Rodar o Projeto Localmente

Este é um projeto **estático** (HTML, CSS e JavaScript puro), portanto **não requer instalação de dependências**.

Para testar localmente, siga os passos abaixo:

### **1️⃣ Clone o repositório**

```bash
git clone https://github.com/isahpao/HACKATHON-FMU

```

### **2️⃣ Acesse a pasta do projeto**

```bash

cd HACKATHON-FMU

```

### **3️⃣ Execute o projeto**

Abra o arquivo index.html diretamente no navegador
ou utilize uma extensão como o Live Server no VS Code para uma visualização mais dinâmica.
