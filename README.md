# Reto de Automatización QA - FrontEnd | Playwright + Cucumber
Web de pruebas: https://www.saucedemo.com/

Instrucciones de configuraciones
1. Instalar Node.js 18+
2. Visual Studio Code
3. Extensiones en el IDE: Cucumber, Playwright Test for VSCode
4. Instalar en el cmd npm i -D multiple-cucumber-html-reporter
5. Clonar el repositorio
6. Ejecutar en el CLI: npm install

Instrucciones de ejecución
1. Todos los features:
- Configurar src\test\cucumber.json (paths configurados a "src/test/features").
- Ejecutar en el CLI: npm run test:report

2. Por feature específico:
- Ajusta el path del runner a "src/test/features/login.feature" y ejecútalo.
- Ejecutar en el CLI: npm run test:report

Reporte:
El reporte se genera después de la ejecución en la ruta reports\html\index.html
